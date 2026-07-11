// source: baseline/sites/02b-cube-B2-slipstream/scene.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
// JS wiring for the ocean: the refraction + planar-reflection render targets,
// the reflection-camera mirror trick, and the multi-pass render order. This is
// the host code the gerstner-water-ssr.glsl shader plugs into.
// ============================================================================
// Q(lo, md, hi) = quality-tier picker (low/med/high). S = 6 (demo units -> world units).

// --- Render targets -------------------------------------------------------
// HalfFloat on WebGL2 so the HDR sun/sky survive into bloom; UnsignedByte fallback.
const RT_TYPE = renderer.capabilities.isWebGL2 ? THREE.HalfFloatType : THREE.UnsignedByteType;
const rtOpts = {
  minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
  format: THREE.RGBAFormat, type: RT_TYPE, depthBuffer: true
};
const RT_REF = Q(512, 768, 1024);                                   // refl/refr resolution per tier
const refrRT = new THREE.WebGLRenderTarget(RT_REF, RT_REF, rtOpts); // scene-below-water (refraction)
const reflRT = new THREE.WebGLRenderTarget(RT_REF, RT_REF, rtOpts); // mirrored scene (reflection)

// --- Reflection camera + matrix ------------------------------------------
const reflCam = camera.clone();
const reflMatrix = new THREE.Matrix4();
// remaps clip-space [-1,1] -> texture [0,1] for texture2DProj sampling in the shader
const biasMatrix = new THREE.Matrix4().set(
  0.5, 0, 0, 0.5,  0, 0.5, 0, 0.5,  0, 0, 0.5, 0.5,  0, 0, 0, 1
);

// Water material binds the two RTs + the reflection matrix:
//   uReflTex: reflRT.texture, uRefrTex: refrRT.texture, uReflMatrix: reflMatrix
//   uReflOn: 1, uReflDim: night 0.55 / golden 0.75 / else 1.0  (per Sun-journey mode)

// --- Per-frame multi-pass (owner's order) --------------------------------
function renderFrame(waterOn) {
  if (waterOn) {
    // 1) REFRACTION: render the scene WITHOUT the water surface, cube not clipped
    //    at the waterline, into refrRT. The water shader samples this for what
    //    is "seen through" the surface (then Beer-Lambert absorbs it).
    water.visible = false; oceanOuter.visible = false; floor.visible = true;
    points.visible = true;
    aeroUniforms.uClipWater.value = 0.0;
    renderer.setRenderTarget(refrRT);
    renderer.clear();
    renderer.render(scene, camera);
    aeroUniforms.uClipWater.value = 1.0;

    // 2) PLANAR REFLECTION: mirror the camera through the y=0 water plane by
    //    negating its Y position and look-target Y, render the scene into reflRT.
    //    reflMatrix = bias * proj * viewInverse of the mirrored camera -> the
    //    vertex shader projects each surface point into this RT (texture2DProj).
    if (waterUniforms.uReflOn.value > 0.5) {
      floor.visible = false;                                         // don't mirror the seabed
      reflCam.position.set(camera.position.x, -camera.position.y, camera.position.z);
      const lt = _lookTarget;
      reflCam.lookAt(lt.x, -lt.y, lt.z);
      reflCam.updateMatrixWorld();
      reflMatrix.copy(biasMatrix)
        .multiply(reflCam.projectionMatrix)
        .multiply(reflCam.matrixWorldInverse);
      renderer.setRenderTarget(reflRT);
      renderer.clear();
      renderer.render(scene, reflCam);
      floor.visible = true;
    }
    water.visible = true; oceanOuter.visible = true;
  } else {
    water.visible = false; oceanOuter.visible = false; floor.visible = false;
    aeroUniforms.uClipWater.value = 0.0;
  }

  // 3) main scene in HDR (water shader now samples refrRT + reflRT), then bloom etc.
  // ... liquid splash pass, bright pass, bloom, grade — omitted here.
}

// --- JS mirror of the GPU Gerstner chop (so gameplay objects ride the visible crest) ---
// Under Gerstner the wave that LANDS at (x,z) came from an earlier parameter,
// so invert the horizontal chop (2 fixed-point steps) before sampling height.
function gerstnerChopJS(x, z, t) {
  const c1 = Math.cos( x * 0.09831 + z * 0.02458 - t * 0.4983);
  const c2 = Math.cos( x * 0.14032 - z * 0.12027 - t * 0.6729);
  const c3 = Math.cos(-x * 0.13380 + z * 0.26761 - t * 0.8562);
  const c4 = Math.cos(-x * 0.45254 - z * 0.16970 - t * 1.0882);
  return {
    x: 0.97008 * 1.342 * c1 + 0.75925 * 0.866 * c2 - 0.44721 * 0.421 * c3 - 0.93631 * 0.186 * c4,
    z: 0.24255 * 1.342 * c1 - 0.65078 * 0.866 * c2 + 0.89445 * 0.421 * c3 - 0.35112 * 0.186 * c4
  };
}
function swellJS(x, z, t) {
  if (waterUniforms.uGerstner.value > 0.5) {
    let c = gerstnerChopJS(x, z, t);
    let px = x - c.x, pz = z - c.z;
    c = gerstnerChopJS(px, pz, t);
    px = x - c.x; pz = z - c.z;
    return swellHeightRaw(px, pz, t);
  }
  return swellHeightRaw(x, z, t);
}
