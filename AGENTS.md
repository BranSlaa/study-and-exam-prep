<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Use Tabs (4 space width) instead of spaces for indentation
- Keep all shared TypeScript types in `src/types`.
- Keep utility functions in `src/utils`.
- Prefer files under 100 lines; split by responsibility when practical.
- Keep page data to one exported object per file.
- Keep components focused and avoid unrelated helpers or data in component files.
- Use Tailwind CSS first and `src/app/globals.css` for shared tokens or styles.
- Express project colours as HSL values.
- Use `lucide-react` icons when available; use a custom SVG only as a fallback.
- Preserve the site as one scrolling infographic page.
