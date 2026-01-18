# Create New Page

Create a new Astro page at `src/pages/$ARGUMENTS.astro`.

Follow these conventions:
- Import and use the Layout component from `../layouts/Layout.astro`
- Pass a descriptive `title` prop to Layout (format: "Page Name | Matt's Mobile Mechanic")
- Optionally pass a `description` prop for SEO
- Include Navbar at the top and Footer at the bottom
- Wrap main content in a `<main>` element
- Consider adding MobileCTA for mobile users

Example structure:
```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import MobileCTA from '../components/MobileCTA.astro';
---

<Layout title="Page Title | Matt's Mobile Mechanic">
  <Navbar />
  <main>
    <!-- Page content here -->
  </main>
  <Footer />
  <MobileCTA />
</Layout>
```
