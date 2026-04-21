# Project Status

Updated: 2026-04-22

## Current Scope

Static one-page academic website for the MLN-131 presentation on socialist democracy, the socialist rule-of-law state in Vietnam, anti-corruption, citizen responsibility, and the Ong Binh case.

## Website State

- Main files: `website/index.html`, `website/styles.css`, `website/script.js`.
- Current concept: "Case File: Ong Binh" with blueprint-style academic visuals.
- The opening video intro now preloads the first frame, avoids a plain black initial overlay, and keeps audio playback behind an explicit user click so browser autoplay policies do not block it.
- The `#theory-bridge` section now uses a centered compass visual plus a blueprint-style 8-pillar visual for the core characteristics of the socialist rule-of-law state.
- The democracy-law relationship is shown as a simplified infinity-loop visual, and the procurement section uses a three-branch e-bidding pipeline inspired by the slide visuals; both were refined to avoid cramped labels and connector overlap.
- Recent content expansion adds slide-aligned theory blocks:
  - Eight characteristics of the socialist rule-of-law state.
  - Socialist democracy and rule-of-law relationship.
  - Party leadership within the constitutional and legal framework.
  - Procurement Law 2023 as an anti-corruption control layer.
  - Legal classification note for administrative violation and corruption-risk signs.
- `AGENTS.md` now requires public-facing content to be written for end users and presentation audiences, not as implementation status text.

## Known Risks

- Some external illustration URLs may fail in browser contexts; local or code-native assets are safer for final presentation.
- The site is static and has no formal unit test suite.
- Video intro autoplay with sound is intentionally not used because modern browsers require a user gesture before unmuted playback.
