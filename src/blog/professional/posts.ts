import monolithVsMicroservicesMd from './monolith-vs-microservices.md?raw'
import reusableComponentsMd from './reusable-components.md?raw'

export type BlogPost = {
  slug: string
  title: string
  summary: string
  date: string
  raw: string
}

export const posts: BlogPost[] = [
  {
    slug: 'reusable-components-trap',
    title: 'The Reusable Component Trap in React Architecture',
    summary: 'Why writing duplicate code is sometimes better than creating highly abstracted, prop-heavy React components.',
    date: '2025-02-15',
    raw: reusableComponentsMd,
  },
  {
    slug: 'monolith-vs-microservices',
    title: 'The Monolith vs. Microservices Debate',
    summary: 'A deep dive into why architectural boundaries matter, and why the monolith is often unfairly dismissed.',
    date: '2025-12-20',
    raw: monolithVsMicroservicesMd,
  },
]

export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug)
