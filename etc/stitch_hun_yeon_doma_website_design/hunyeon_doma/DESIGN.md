---
name: Hunyeon Doma
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#57423b'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#8a726a'
  outline-variant: '#ddc0b7'
  surface-tint: '#a04017'
  primary: '#7b2700'
  on-primary: '#ffffff'
  primary-container: '#9c3d14'
  on-primary-container: '#ffc7b3'
  inverse-primary: '#ffb59a'
  secondary: '#845328'
  on-secondary: '#ffffff'
  secondary-container: '#fdbc87'
  on-secondary-container: '#78491f'
  tertiary: '#47433e'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f5a55'
  on-tertiary-container: '#dad2cb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#802900'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#f9b985'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#683c12'
  tertiary-fixed: '#e9e1db'
  tertiary-fixed-dim: '#cdc5bf'
  on-tertiary-fixed: '#1e1b17'
  on-tertiary-fixed-variant: '#4b4641'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-42:
    fontFamily: beVietnamPro
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: beVietnamPro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: beVietnamPro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: beVietnamPro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: notoSans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-md:
    fontFamily: notoSans
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-edge: 40px
  section-padding: 120px
---

## Brand & Style
The design system embodies the concept of "Time as an Ingredient," focusing on the 42-hour smoking process of Hunyeon Doma. The brand personality is disciplined, architectural, and premium, mirroring the precision of a high-end meat omakase.

The visual style is **Minimalist-Brutalist**. It rejects the traditional "grill" aesthetic in favor of a clean, gallery-like presentation. Key characteristics include:
- **Architectural Integrity:** Inspired by concrete textures and wood grains.
- **Precision:** Zero-radius corners and thin-line dividers create a sense of surgical precision.
- **Generous Whitespace:** Information is given room to breathe, elevating the perceived value of the content.
- **Materiality:** Layers are defined by color shifts (Concrete to Charcoal) rather than depth effects like shadows.

## Colors
The palette is rooted in the physical materials of the restaurant: concrete, wood, and ember.

- **Background (#EDEAE5):** A warm, light gray concrete tone that serves as the canvas.
- **Accent (#9C3D14):** The color of glowing embers; used sparingly for primary actions and key highlights.
- **Secondary (#B0794A):** A refined wood-grain brown for secondary elements and natural warmth.
- **Dark Sections (#2E2A26):** Deep charcoal for high-contrast moments, footers, or immersive hero backgrounds.
- **Text (#201E1B):** An off-black that maintains high legibility without the harshness of pure black.
- **Dividers (#D6D1C9):** Used for structural hairlines to separate content without adding visual bulk.

## Typography
The typography strategy creates a stark contrast between bold, heavy headlines and light, ethereal body text.

- **Key Visual Element (42):** Use the `display-42` style for the signature 42-hour process marking. It should feel like a monumental stamp.
- **Headlines:** Use **Be Vietnam Pro** for its contemporary and strong geometric presence. Weights should remain heavy (700+).
- **Body:** Use **Noto Sans** (Korean supported) at a light weight (300). Increase letter spacing to 0.01em–0.02em to reinforce the premium, "airy" feel.
- **Labels/Technical Info:** Use **JetBrains Mono** for technical details (e.g., temperatures, time stamps) to evoke a sense of workshop-like precision.

## Layout & Spacing
The layout follows a strict **12-column fixed grid** with an emphasis on asymmetric balance.

- **Vertical Rhythm:** Use a 120px padding between major sections to emphasize the minimalist aesthetic.
- **The "Doma" (Board) Layout:** Content should often be framed within thin 1px borders, mimicking the edges of a wood cutting board or concrete slab.
- **Mobile Adaptation:** At the 768px breakpoint, collapse the 12-column grid into a 4-column grid. Reduce section padding to 64px.
- **Alignment:** Headlines should be left-aligned or centered with significant horizontal margins to create a "gallery label" effect.

## Elevation & Depth
This design system intentionally avoids shadows and blurs. Depth is achieved through:
- **Tonal Stepping:** Overlapping containers of different colors (e.g., a Wood #B0794A card sitting on a Concrete #EDEAE5 background).
- **Flat Overlays:** High-contrast text overlays on photography.
- **Structural Outlines:** Using 1px solid borders (`#D6D1C9` or `#201E1B`) to define boundaries. 
- **Z-Index Layering:** Images may overlap divider lines to create a subtle sense of physical stacking without using drop shadows.

## Shapes
All UI elements—including buttons, cards, images, and input fields—must have **0px border radius**. 

Sharp corners reinforce the architectural, "concrete" nature of the brand. Vertical and horizontal lines should be perfectly straight to maintain a sense of order and high-end craftsmanship.

## Components

### Buttons
- **Primary:** Solid `#9C3D14` background, white text, sharp corners, no shadow. 
- **Secondary:** Transparent background, 1px `#201E1B` border, sharp corners.
- **Interaction:** On hover, primary buttons shift to a darker shade of ember; secondary buttons fill with the text color.

### Navigation
- A slim, top-aligned bar with a 1px bottom border. 
- The logo is centered or left-aligned. 
- Includes a minimalist toggle for Dark Mode (switching the background to `#2E2A26`).

### Process Timeline (42 Hours)
- A vertical or horizontal 1px line connecting key milestones.
- Milestones are marked by small, solid squares (not circles).
- The number "42" is used as a large, low-opacity background element behind the timeline.

### Menu & Space Cards
- **Menu:** Large-scale food photography followed by a simple 1px divider, then the title and price in a clean, tabular format.
- **Space Info:** Uses thin-line icons (0.5pt to 1pt stroke weight) to represent layout or amenities.

### Quote Sections
- Centered text using `body-lg` font.
- Flanked by vertical 1px lines rather than standard quotation marks.

### Input Fields
- Underline-only style or 1px bordered boxes with no rounding. 
- Labels use `label-sm` (JetBrains Mono).