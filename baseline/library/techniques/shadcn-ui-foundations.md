---
technique: shadcn/ui foundations (copy-in primitives — Radix + Tailwind + CVA + data-slot)
section: ui-ux-principles
source: shadcn/ui registry (ui.shadcn.com/r, new-york-v4 style)
tags: [design-system, components, radix, tailwind, theming, css-variables]
apply-when: building any React/Tailwind UI that needs accessible base primitives (button, dialog, menu, form, command) you fully own and restyle
---

# shadcn/ui foundations — applied rules

What shadcn is, in one line: **not an npm dependency, not a component library you import** — it is a *registry of source files you copy into your own repo* (`components/ui/*.tsx`) and then own outright. There is no `@shadcn/ui` package to upgrade; the code becomes yours the moment the CLI writes it. That is the whole point and it dictates how you use it: treat it as a *starting skeleton you edit freely*, never as a black box. Every primitive is **Radix UI** (behavior + a11y + keyboard + focus management) styled with **Tailwind utility classes**, multi-variant ones using **CVA** (class-variance-authority) for variant→class maps, merged via a `cn()` helper (clsx + tailwind-merge).

## The model (each = a build decision)

1. **Install by copying source, not by adding a dependency.** `npx shadcn@latest add button dialog form` writes real `.tsx` files into your project and installs only the *runtime* deps they need (e.g. `radix-ui`, `cmdk`, `react-hook-form`). After that you edit the files directly — there is no version of the component "upstream" to diff against. So: add ONLY the primitives you'll actually touch, then restyle them in place. Don't treat shadcn files as read-only.
2. **The registry-item shape is the contract.** Each component is one JSON at `https://ui.shadcn.com/r/styles/new-york-v4/<name>.json` with: `name`, `type: "registry:ui"`, `dependencies` (npm), `registryDependencies` (other registry items to pull in — e.g. `form` pulls `button` + `label`, `command` pulls `dialog`), and `files[]` each with `path` + full source `content`. To fetch a component's real code, read `files[0].content` from that JSON — that is exactly what the CLI writes.
3. **Theme through CSS variables, never by editing component classes.** Components reference semantic tokens — `bg-primary`, `text-muted-foreground`, `bg-popover`, `border-input`, `bg-accent`, `ring-ring`, `bg-destructive`. These resolve to CSS custom properties (`--primary`, `--muted-foreground`, …) defined once in `globals.css` under `:root` and `.dark`. **To restyle the whole system, change the variables — do not touch the `.tsx`.** Dark mode = the same token names re-pointed under `.dark`; the components never branch on theme.
4. **Style and target via `data-slot`, not by reaching into internals.** The current generation tags every rendered element with `data-slot="<component>-<part>"` (e.g. `data-slot="dialog-content"`, `data-slot="dropdown-menu-item"`). Use these as stable hooks for global overrides (`[data-slot=button]{…}`) and for tooling that needs to identify rendered parts. Variant state is mirrored to `data-variant` / `data-size` / `data-inset` attributes, so you can also target `data-[variant=destructive]` from CSS. (This maps directly to our generation-skill `data-asset` convention — same idea: every layer self-identifies.)
5. **Multi-variant primitives use CVA + exported `*Variants`.** `button` exports `buttonVariants` (a CVA fn) alongside `Button`. Reuse the *variant function* to style non-button elements as buttons (e.g. a link styled as a button: `className={cn(buttonVariants({ variant: "outline" }))}`) instead of duplicating the class string. Single-style primitives (dialog parts, menu items) just hardcode classes — no CVA needed.
6. **`asChild` (Radix Slot) is how you change the rendered element without losing styling/behavior.** `<Button asChild><Link href>…</Link></Button>` renders an `<a>` that still carries button classes and data attributes. Prefer this over wrapping. It's wired in by passing `Comp = asChild ? Slot.Root : "button"`.
7. **Composition over monolith props.** A dialog isn't one `<Dialog title=… >`; it's `Dialog > DialogTrigger + DialogContent > DialogHeader > DialogTitle/DialogDescription`. You assemble parts. Same for dropdown-menu (Trigger/Content/Item/CheckboxItem/RadioItem/Sub*) and command (Command/CommandInput/CommandList/CommandItem). Build your app UI from these parts; don't fight the shape.
8. **Form = react-hook-form + zod, wired through context.** `Form` is RHF's `FormProvider`; `FormField` wraps a `Controller`; `FormItem` generates ids via `useId`; `FormControl` (a Slot) auto-wires `id`, `aria-describedby`, `aria-invalid` to the input; `FormMessage` renders the zod/RHF error. Don't hand-wire label↔input↔error association — the components already do the a11y plumbing. You supply a zod schema + `useForm({ resolver: zodResolver(schema) })`.
9. **Animation via Radix `data-[state]` + `tw-animate-css`, not JS.** Open/close transitions are pure utility classes keyed off `data-[state=open]`/`data-[state=closed]` (`fade-in-0`, `zoom-in-95`, `slide-in-from-top-2`). Positioning origins read Radix CSS vars (`origin-(--radix-dropdown-menu-content-transform-origin)`). Keep this CSS-driven path; reach for JS motion only for things Radix state can't express.

## What's in the registry (this snapshot)

56 components total, all `registry:ui`. Categorized:
- **Actions / triggers:** button, button-group, toggle, toggle-group, kbd
- **Overlays / popovers:** dialog, alert-dialog, sheet, drawer, popover, hover-card, tooltip, dropdown-menu, context-menu, menubar, command, combobox
- **Forms / inputs:** form, input, input-group, input-otp, textarea, label, field, checkbox, radio-group, switch, slider, select, native-select, calendar
- **Layout / containers:** card, separator, aspect-ratio, scroll-area, resizable, collapsible, accordion, tabs, sidebar, item
- **Navigation:** navigation-menu, breadcrumb, pagination, menubar
- **Data display / feedback:** table, badge, avatar, chart, carousel, progress, skeleton, spinner, sonner (toast), alert, empty, calendar
- **Utility / state:** direction, kbd, separator

We pulled 5 representative primitives into `snippets/shadcn/` (button, dialog, dropdown-menu, form, command) — see below. The remaining 51 are intentionally NOT vendored; fetch on demand from the registry JSON when actually needed.

## Build checklist
- [ ] Pulling shadcn primitives by COPYING source (CLI or registry JSON) and editing them in place — not importing a package or treating them as read-only?
- [ ] All restyling done through CSS-variable tokens (`--primary`, `--muted-foreground`, …) in one place — component `.tsx` left structural?
- [ ] Dark mode = same token names re-pointed under `.dark`, no per-theme component branches?
- [ ] Using `data-slot` / `data-variant` attributes as the override + tooling hooks (consistent with our `data-asset` convention)?
- [ ] Reusing exported `buttonVariants`/CVA fns instead of copy-pasting class strings; using `asChild` to swap rendered elements?
- [ ] Composing UI from the exported parts (Dialog*, DropdownMenu*, Command*) rather than re-deriving accessible behavior?
- [ ] Forms built on the `Form*` + react-hook-form + zod plumbing so label/aria/error wiring is automatic?

> Ties to our experience: the `data-slot` self-identification on every rendered part is the same mechanism as our composite-asset `data-asset` convention and is exactly what the element-picker / hit-test manifest wants — stable per-part selectors with defining file. And theming-via-CSS-vars (change the variable, not the component) is the same "modes swap a constant name" discipline our perf-tier and matte-glass token setup already relies on.
