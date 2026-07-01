import type { NotebookShowcase } from '../types';

export const notebooks: NotebookShowcase[] = [
  {
    id: 'netflix-notebook',
    title: 'Netflix Content Trends.ipynb',
    thumbnail: '/assets/images/dashboard/netflix-thumb.svg',
    libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    chartsGenerated: ['Genre bar chart', 'Country contribution chart', 'Release year trend line'],
    businessQuestions: ['Which genres dominate the catalog?', 'How has content addition velocity changed over time?'],
    insights: ['Drama and International titles lead the catalog', 'Additions accelerated sharply between 2017 and 2020'],
    githubLink: 'https://github.com/Neerajhsp',
  },
  {
    id: 'ipl-notebook',
    title: 'IPL Performance Analysis.ipynb',
    thumbnail: '/assets/images/dashboard/ipl-thumb.svg',
    libraries: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
    chartsGenerated: ['Orange/Purple Cap leaderboard', 'Venue win-rate heatmap', 'Season run-rate trend'],
    businessQuestions: ['Does winning the toss affect match outcome?', 'Which venues favor chasing teams?'],
    insights: ['Toss winners hold a modest but consistent edge', 'High-altitude venues favor chasing teams'],
    githubLink: 'https://github.com/Neerajhsp',
  },
];
