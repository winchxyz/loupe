; Loupe — custom NSIS content. Auto-included by electron-builder as build/installer.nsh.
;
; The assisted installer has NO welcome page by default (see app-builder-lib assistedInstaller.nsh) —
; customWelcomePage adds our branded one. The finish-page LINK defines live here too, on purpose:
; customWelcomePage is inserted BEFORE MUI_PAGE_FINISH, and NSIS !defines are global, so the DEFAULT
; finish page (which keeps electron-builder's "Run Loupe" checkbox) picks up the link. customHeader would
; be too late — electron-builder inserts it after the pages are already built.

!macro customWelcomePage
  !define MUI_WELCOMEPAGE_TITLE "Welcome to Loupe Setup"
  !define MUI_WELCOMEPAGE_TEXT "This will install Loupe ${VERSION}.$\r$\n$\r$\nA desktop AI studio for designing and building real websites."
  !insertmacro MUI_PAGE_WELCOME

  !define MUI_FINISHPAGE_LINK "View Loupe on GitHub"
  !define MUI_FINISHPAGE_LINK_LOCATION "https://github.com/winchxyz/loupe"
!macroend
