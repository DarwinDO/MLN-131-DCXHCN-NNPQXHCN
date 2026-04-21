# Task: Slide Knowledge Expansion

Date: 2026-04-21

## Goal

Bring more theory from `Governing_the_National_Rise_Slide.pdf` into the website while keeping the Ong Binh case-study flow clear for a 10-20 minute presentation.

## Changes

- Added `#theory-bridge` section after socialist democracy:
  - Core compass visual for "of the people, by the people, for the people".
  - Eight characteristics of the socialist rule-of-law state.
  - Democracy and rule-of-law loop summary.
- Replaced the nav item for `#breakthroughs` with `#theory-bridge` to surface the new knowledge section without increasing top-level nav count.
- Expanded `#tender-flow` with a Procurement Law 2023 guard block:
  - Online bidding.
  - Contractor capability database.
  - Transparent multi-dimensional information.
  - Direct link to the Ong Binh conflict-of-interest case.
- Added a legal classification strip that distinguishes administrative violation signs from corruption or group-interest signs.
- Wrapped scroll handlers with `requestAnimationFrame` throttling.
- Fixed the `#theory-bridge` compass visual by separating decorative rings from explanatory labels.
- Reworded the `#theory-bridge` explanatory copy so it reads as presentation content rather than implementation notes.
- Removed the oversized `#theory-bridge` explanatory card because it created a large empty white block beside the compass visual.
- Reworked the eight characteristics into a blueprint-style pillar visual, with "Kiểm soát quyền lực" emphasized as the highlighted pillar.
- Reworked the democracy-law relationship into an infinity-loop visual that connects socialist democracy and the rule-of-law state.
- Reworked the Procurement Law 2023 visual into a three-branch e-bidding pipeline: prevention, enabling transparency, and innovation.
- Refined the infinity-loop and procurement pipeline visuals to remove cramped labels and arrow overlap on desktop and mobile.
- Added an animation fallback for elements already in the viewport during hash or programmatic navigation.
- Added the `Audience-Facing Content Style` rule to `AGENTS.md` so website, slide, document, and UI copy is written for general readers.

## Verification Plan

- Run JS syntax check.
- Run repo lint/check commands where available.
- Open local site in browser and check console, section existence, nav behavior, and responsive layout.
