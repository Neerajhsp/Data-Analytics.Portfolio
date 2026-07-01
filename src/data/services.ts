import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  { id: 'bi', title: 'Business Intelligence', description: 'Turning scattered business data into a single source of truth for decision-makers.', icon: 'TbChartInfographic' },
  { id: 'dashboard-dev', title: 'Dashboard Development', description: 'Designing interactive Power BI and Excel dashboards that executives actually use.', icon: 'TbLayoutDashboard' },
  { id: 'data-cleaning', title: 'Data Cleaning', description: 'Handling missing values, duplicates and inconsistent formats before analysis begins.', icon: 'TbWashMachine' },
  { id: 'eda', title: 'Exploratory Data Analysis', description: 'Uncovering patterns, outliers and relationships hidden inside raw datasets.', icon: 'TbSearch' },
  { id: 'data-viz', title: 'Data Visualization', description: 'Communicating complex findings through clear, well-designed charts and stories.', icon: 'TbChartAreaLine' },
  { id: 'sql-analytics', title: 'SQL Analytics', description: 'Writing efficient queries to extract, join and aggregate data at scale.', icon: 'TbDatabaseCog' },
  { id: 'business-reporting', title: 'Business Reporting', description: 'Building recurring reports that track KPIs and flag emerging risks early.', icon: 'TbReportAnalytics' },
  { id: 'interactive-dashboard', title: 'Interactive Dashboard Design', description: 'Adding filters, drill-downs and tooltips that make exploration intuitive.', icon: 'TbAdjustmentsHorizontal' },
  { id: 'forecasting', title: 'Forecasting', description: 'Projecting sales, demand and trends using statistical and ML techniques.', icon: 'TbTrendingUp' },
  { id: 'machine-learning', title: 'Machine Learning', description: 'Applying classification and regression models to support predictive decisions.', icon: 'TbRobot' },
];
