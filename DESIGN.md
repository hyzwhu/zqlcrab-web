---
name: HarborWorkbench
description: Public portal for zqlcrab — night-harbor stage, electric-ocean interaction, steel crab mark, real client captures.
colors:
  primary: "oklch(0.50 0.12 230)"
  primary-hover: "oklch(0.44 0.11 230)"
  primary-active: "oklch(0.38 0.10 230)"
  on-primary: "oklch(0.99 0.00 0)"
  secondary: "oklch(0.72 0.04 230)"
  tertiary: "oklch(0.78 0.11 195)"
  on-tertiary: "oklch(0.14 0.02 230)"
  neutral: "oklch(0.09 0.00 0)"
  surface: "oklch(0.16 0.00 0)"
  surface-app: "oklch(0.22 0.03 250)"
  on-surface: "oklch(0.96 0.01 230)"
  on-surface-muted: "oklch(0.74 0.02 230)"
  border: "oklch(0.32 0.02 240)"
  border-focus: "oklch(0.78 0.12 220)"
  success: "oklch(0.48 0.10 160)"
  on-success: "oklch(0.99 0.00 0)"
  error: "oklch(0.48 0.16 25)"
  on-error: "oklch(0.99 0.00 0)"
typography:
  headline-display:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.25
  headline-md:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Bricolage Grotesque, Noto Sans SC, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: JetBrains Mono, Menlo, monospace
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 12px
  panel:
    backgroundColor: "{colors.surface-app}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
  status-badge:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    rounded: "{rounded.full}"
  sql-chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
---

# Harbor Workbench

## Overview
The portal is a night harbor: a pure-black stage, a steel crab on a database barrel, and one electric-ocean beacon. A complete, real GPUI client window sits on the waterline — not a card grid or a browser-built imitation. Identity is inherited from CrabStudio (obsidian + `#0369A1` ocean) but the marketing surface is committed, not a desktop-theme dump.

## Colors
- **Neutral (`oklch(0.09 0 0)`):** Pure near-black stage. Mood lives in ocean and the crab, not in a tinted page wash.
- **Primary (`oklch(0.50 0.12 230)`):** Electric ocean. Download, focus ring, active tab, waterline.
- **Tertiary (`oklch(0.78 0.11 195)`):** Tide cyan for SQL keywords and secondary emphasis — lighter and greener than primary.
- **Secondary (`oklch(0.72 0.04 230)`):** Crab-steel, matching the logo claws.
- **Surface-app (`oklch(0.22 0.03 250)`):** The fake GPUI window only. The page itself stays black.

## Typography
- **Bricolage Grotesque** for display and UI — slightly clawed terminals, not Inter.
- **Noto Sans SC** stacked for Chinese.
- **JetBrains Mono** for SQL, matching the desktop client.

## Layout
Left-aligned harbor: mark and headline dock on the left; the real client capture occupies the right. A 1px ocean waterline runs full bleed under the hero. Body measure ≤ 68ch. The workbench tour uses one large capture plus supporting copy, with tabs for Data, SQL, and Schema. Download rows are a compact table, not equal cards.

## Elevation & Depth
No drop-shadow kit. Depth comes from the black stage versus the slate app capture, plus a hairline border `oklch(0.32 0.02 240)` and a restrained modal backdrop for full-size viewing.

## Shapes
8–12px radii on the window and buttons — GPUI-adjacent, not pills except status dots.

## Components
Primary button is ocean with white label. Ghost button is a hairline on black. The product tour is one tabbed capture stage (Data, SQL, Schema), not feature cards. Clicking a capture opens the original in an accessible native dialog.

## Do's and Don'ts
- Do keep the crab logo intact on black.
- Do show the complete client window so navigation, connection context, and the active work surface remain understandable.
- Do send Downloads and Source to GitHub.
- Don't use Inter, cream paper, gradient text, or numbered 01/02/03 section eyebrows.
- Don't recreate the client in HTML when a real, readable capture is available.
