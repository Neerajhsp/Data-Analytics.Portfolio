import type { ToolItem } from '../types';

export const tools: ToolItem[] = [
  { id: 'power-bi', name: 'Power BI', icon: 'TbBrandPowershell', description: 'Interactive dashboards, DAX measures and enterprise reporting.' },
  { id: 'excel', name: 'Excel', icon: 'TbFileSpreadsheet', description: 'Pivot tables, Power Query and advanced formula modelling.' },
  { id: 'mysql', name: 'MySQL', icon: 'SiMysql', description: 'Relational schema design and query optimization.' },
  { id: 'postgresql', name: 'PostgreSQL', icon: 'SiPostgresql', description: 'Advanced SQL, window functions and CTEs.' },
  { id: 'jupyter', name: 'Jupyter Notebook', icon: 'SiJupyter', description: 'Exploratory analysis and reproducible reporting.' },
  { id: 'vscode', name: 'VS Code', icon: 'TbBrandVscode', description: 'Primary editor for scripts, notebooks and web apps.' },
  { id: 'git', name: 'Git', icon: 'SiGit', description: 'Version control across every analytics project.' },
  { id: 'github', name: 'GitHub', icon: 'SiGithub', description: 'Project hosting, portfolio and collaboration.' },
  { id: 'python', name: 'Python', icon: 'SiPython', description: 'Data wrangling, automation and machine learning.' },
  { id: 'react', name: 'React', icon: 'SiReact', description: 'Building interactive, data-driven web experiences.' },
];
