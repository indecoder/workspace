# Active Context - 4/5/2025

**Current Focus:** Implementing core UI components.

**Recent Activities:**
*   Initialized the Memory Bank (4/5/2025).
*   Configured `ReactiveFormsModule`, `FormsModule`, `provideAnimations()`, and `provideHttpClient()` in `app.config.ts`.
*   Installed Tailwind CSS (`tailwindcss`, `postcss`, `autoprefixer`).
*   Installed `@tailwindcss/postcss` and updated `postcss.config.js` to fix build error.
*   Configured Tailwind (`tailwind.config.js`, `src/styles.scss`).
*   Removed `@angular/flex-layout` package and configuration.
*   Refactored `NavbarComponent`, `FooterComponent`, and `AppComponent` templates/styles to use Tailwind CSS utility classes instead of Flex Layout directives.
*   Created `HomeComponent` and configured it as the default route in `app.routes.ts`.
*   Replaced deprecated Sass `@import` with `@use` for Bootstrap in `src/styles.scss` to resolve build warning (4/5/2025).
*   Created `ApiService` (`src/app/core/services/api.service.ts`) with generic `get`/`post` methods using `HttpClient` and `firstValueFrom` (4/5/2025).

**Next Steps:**
*   Further refine Navbar/Footer styling and responsive behavior using Tailwind CSS.
*   Begin scaffolding core e-commerce feature modules (e.g., `products`, `cart`, `auth`) and their initial components.
*   Connect Navbar actions (e.g., Login, Cart) to respective routes/services (once available).
