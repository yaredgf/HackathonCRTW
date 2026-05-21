---
name: Taskii Brand Identity
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3f4a3c'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6f7a6a'
  outline-variant: '#becab8'
  surface-tint: '#006e16'
  primary: '#006e16'
  on-primary: '#ffffff'
  primary-container: '#43a743'
  on-primary-container: '#003506'
  inverse-primary: '#77dd71'
  secondary: '#0060ab'
  on-secondary: '#ffffff'
  secondary-container: '#68abfe'
  on-secondary-container: '#003e73'
  tertiary: '#a83541'
  on-tertiary: '#ffffff'
  tertiary-container: '#ed6972'
  on-tertiary-container: '#600014'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#93fa8a'
  primary-fixed-dim: '#77dd71'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#d3e3ff'
  secondary-fixed-dim: '#a3c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004882'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b4'
  on-tertiary-fixed: '#40000b'
  on-tertiary-fixed-variant: '#871d2b'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 32px
  gutter: 24px
  section-gap: 64px
---

## Brand & Style

The design system is anchored in the concept of "Growth Through Encouragement." It balances the structured needs of a professional productivity tool with the warmth and playfulness required for an educational rewards platform. The visual language is **Friendly Minimalism**—clean, uncluttered layouts that prioritize ease of use for both children and adults, while using vibrant color accents to celebrate achievement.

The emotional response should be one of optimism and clarity. By utilizing generous whitespace and a "soft-touch" aesthetic, the interface reduces cognitive load and turns task management into a rewarding experience. It avoids the coldness of traditional enterprise software in favor of a tactile, approachable atmosphere that feels like a supportive mentor.

## Colors

The palette for the design system is designed to be high-contrast and accessible.
- **Primary Green (#43A743):** Used for "Success" states, primary actions, and progress indicators. It symbolizes growth and completion.
- **Trust Blue (#4B91E2):** A calming secondary color used for navigation, information callouts, and administrative tasks to provide a professional grounding.
- **Achievement Red (#BE4650):** A sophisticated, energetic tertiary accent reserved for high-value rewards, streaks, and "delight" moments.
- **Neutral Palette:** Utilizes a range of Slates and Off-whites (Background: #F9F9FF) to ensure the vibrant brand colors remain the focal point without overwhelming the user.

All color pairings must meet WCAG AA standards for legibility, particularly when used for text on colored backgrounds.

## Typography

This design system utilizes **Plus Jakarta Sans** for its modern, geometric construction and friendly apertures. The typeface strikes the perfect balance between professional geometric sans-serifs and softer, more approachable fonts.

- **Headlines:** Use Bold or ExtraBold weights to create a strong visual hierarchy. Tighten letter spacing slightly for large displays to maintain impact.
- **Body Text:** Use Regular weight for optimal legibility. The line height is set generously (1.6x) to assist younger readers and improve scanning for busy professionals.
- **Labels:** Use SemiBold for small UI elements like badges or buttons to ensure they remain distinct even at reduced sizes.

## Layout & Spacing

The design system employs a **Fluid Grid** model based on an 8px spacing unit. This ensures consistency across all components and rhythmic vertical flow.

- **Desktop (1440px+):** A 12-column grid with 24px gutters. Max-width for content is 1280px.
- **Tablet (768px - 1024px):** An 8-column grid with 16px gutters.
- **Mobile (<768px):** A 4-column grid with 16px gutters and 16px side margins.

Layouts should prioritize "Single-Column Flow" for complex tasks to keep users focused. Use generous vertical padding between sections (64px+) to prevent the UI from feeling cramped or stressful.

## Elevation & Depth

Visual hierarchy in the design system is achieved through **Ambient Shadows** and **Tonal Layering**. We avoid harsh black shadows in favor of soft, diffused blurs that incorporate a hint of the brand colors.

- **Level 0 (Background):** #F9F9FF. The foundation layer.
- **Level 1 (Cards/Surface):** White (#FFFFFF) with a very soft shadow (0px 4px 20px rgba(30, 41, 59, 0.05)).
- **Level 2 (Interactive/Hover):** Raised state with a slightly more pronounced shadow (0px 8px 30px rgba(67, 167, 67, 0.12)) using a primary green tint.
- **Level 3 (Modals/Popovers):** Highest elevation with a deep, diffused shadow to pull focus.

Surface edges should use a subtle 1px border (#E2E8F0) to maintain definition on white backgrounds without adding visual weight.

## Shapes

The shape language is defined by **pronounced roundness**, echoing the friendly brand personality. 

- **Standard Components:** Buttons, inputs, and small widgets use a `0.5rem` (8px) radius.
- **Large Containers:** Task cards, modular sections, and main navigation panels use a `1.5rem` (24px) radius to create a "bubble" or "card-like" feel that is tactile and safe.
- **Pills:** Progress bars, tags, and status chips use fully rounded (pill-shaped) corners to contrast against rectangular content blocks.

Avoid sharp corners entirely; even nested elements should maintain a proportional corner radius to ensure a cohesive, soft aesthetic.

## Components

### Buttons
Primary buttons should be vibrant Green with white text, using a SemiBold weight. Secondary buttons use a light Blue tint with Blue text. All buttons have a minimum height of 48px to ensure they are "finger-friendly" for mobile and younger users.

### Cards
Cards are the primary content vessel. They must feature the 24px (2xl) corner radius and a soft ambient shadow. For task cards, include a thick 4px left-border accent using the status color (Green for done, Blue for in-progress, Red for overdue/priority).

### Input Fields
Inputs should have a light grey background (#F1F5F9) and a 1px border that turns Green on focus. Labels must always be visible (never placeholder-only) to aid accessibility.

### Progress Bars
Progress indicators should be thick (12px+) with fully rounded ends. Use a "Track and Fill" style where the track is a pale version of the primary color, and the fill is the vibrant primary Green.

### Chips & Badges
Used for categories or reward points. These should be pill-shaped with a low-opacity background tint of the category color and high-contrast text.

### Interactive Rewards
Special components like "Reward Badges" or "Point Totals" should utilize the Achievement Red and a subtle "bounce" animation on hover to provide immediate positive feedback.