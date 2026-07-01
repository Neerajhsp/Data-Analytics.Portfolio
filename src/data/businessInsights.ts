import type { BusinessInsight } from '../types';

export const businessInsights: BusinessInsight[] = [
  { id: 'retention', title: 'Customer Retention', metric: '+14%', description: 'Cohort analysis identified onboarding gaps driving early churn.', trend: 'up', icon: 'TbUsers' },
  { id: 'revenue', title: 'Revenue Growth', metric: '+12%', description: 'Forecast model projected next-quarter regional revenue growth.', trend: 'up', icon: 'TbTrendingUp' },
  { id: 'profit', title: 'Profit Analysis', metric: '44%', description: 'Technology category share of total profit despite lower volume.', trend: 'up', icon: 'TbCoin' },
  { id: 'market-trends', title: 'Market Trends', metric: '120+', description: 'Countries analyzed to map global content and demand trends.', trend: 'neutral', icon: 'TbWorld' },
  { id: 'regional', title: 'Regional Performance', metric: 'West +18%', description: 'Top-performing region identified against forecast target.', trend: 'up', icon: 'TbMapPin' },
  { id: 'sales', title: 'Sales Performance', metric: '50K+', description: 'Transactions modelled across four regions and three categories.', trend: 'up', icon: 'TbShoppingCart' },
  { id: 'forecast-accuracy', title: 'Forecast Accuracy', metric: '92%', description: 'Validated accuracy of the Holt-Winters forecast against hold-out data.', trend: 'up', icon: 'TbTarget' },
  { id: 'efficiency', title: 'Operational Efficiency', metric: '-22%', description: 'Reduction in manual reporting time after dashboard automation.', trend: 'down', icon: 'TbBolt' },
];
