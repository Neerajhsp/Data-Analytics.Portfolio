import type { BlogPost } from '../types';

export const blogs: BlogPost[] = [
  {
    id: 'b1',
    title: '5 DAX Patterns I Use in Every Power BI Dashboard',
    excerpt: 'A breakdown of the time-intelligence and ranking measures that show up in almost every report I build.',
    date: '2025-03',
    readTime: '6 min read',
    tags: ['Power BI', 'DAX'],
  },
  {
    id: 'b2',
    title: 'Cleaning Messy Datasets with Pandas: A Practical Checklist',
    excerpt: 'The repeatable steps I run through before any exploratory analysis begins.',
    date: '2025-01',
    readTime: '5 min read',
    tags: ['Python', 'Pandas'],
  },
  {
    id: 'b3',
    title: 'Writing SQL That Scales: Lessons from Joining Million-Row Tables',
    excerpt: 'Indexing and query-structure choices that kept reporting queries fast as data grew.',
    date: '2024-11',
    readTime: '7 min read',
    tags: ['SQL', 'Performance'],
  },
];
