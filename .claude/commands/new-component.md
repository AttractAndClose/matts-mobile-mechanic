# Create New Astro Component

Create a new Astro component at `src/components/$ARGUMENTS.astro`.

Follow these conventions:
- Use TypeScript in the frontmatter (between `---` fences)
- Define a Props interface if the component accepts props
- Use Tailwind CSS classes with brand colors: `brand-orange`, `brand-black`, `brand-grey`, `brand-white`
- Import Lucide icons from `@lucide/astro` as needed
- Keep components focused and single-purpose
- Use semantic HTML elements

Example structure:
```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<section class="py-16 bg-brand-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-brand-black">{title}</h2>
  </div>
</section>
```
