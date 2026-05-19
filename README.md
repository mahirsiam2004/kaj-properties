# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Reusable Prompts and Effects

### Full-Page Scroll Animation (Mouse Wheel Snap)
**Effect Name:** Full-Page Scroll / CSS Scroll Snapping / Vertical Page Slider

**Description:**
This effect creates a smooth presentation-style scrolling experience. When the user scrolls the mouse wheel, the page automatically snaps to the exact start of the next or previous full-screen section, rather than scrolling continuously and stopping halfway.

**Prompt to generate this effect in another AI chat:**

**For a modern CSS-only approach:**
> "I want to implement a 'Full-Page Scroll' or 'Scroll Snapping' effect for my website. The layout should consist of multiple full-screen sections (100vh). When the user scrolls the mouse wheel, it should automatically and smoothly snap to the next or previous section without stopping halfway. Please provide a solution using modern CSS Scroll Snap (`scroll-snap-type: y mandatory` on the main scroll container and `scroll-snap-align: start` on each section) combined with a smooth scrolling behavior. Ensure the sections take up exactly the full viewport height, and optionally show how to hide the scrollbar for a cleaner look."

**For a Javascript Library approach (better for complex animations):**
> "Please implement a full-page vertical slider effect for my website using **Swiper.js** (or a similar modern animation library). I want it to be configured with `mousewheel: true` and `direction: 'vertical'`. The layout should consist of multiple full-screen slides (100vh). I want it to behave like a presentation where scrolling the mouse wheel smoothly snaps the viewport to the next or previous full-screen section. Please include the necessary CSS to remove default margins and ensure it covers the entire screen."
