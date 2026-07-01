import type { SQLQueryShowcase } from '../types';

export const sqlShowcase: SQLQueryShowcase[] = [
  {
    id: 'top-customers',
    title: 'Top 10 Customers by Lifetime Revenue',
    objective: 'Identify the highest-value customers to prioritize for retention outreach.',
    query: `SELECT
  c.customer_id,
  c.customer_name,
  SUM(o.total_amount) AS lifetime_revenue
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY lifetime_revenue DESC
LIMIT 10;`,
    explanation: 'Joins customers to their orders, aggregates total revenue per customer, then ranks the top results.',
    result: 'Returned the top 10 customers, revealing that the top 3 contribute over 18% of total revenue.',
    optimizationNotes: 'Added a composite index on orders(customer_id, total_amount) to speed up the aggregation on large tables.',
  },
  {
    id: 'monthly-cohort-retention',
    title: 'Monthly Cohort Retention Rate',
    objective: 'Measure how well each signup cohort is retained over subsequent months.',
    query: `WITH cohorts AS (
  SELECT
    customer_id,
    DATE_TRUNC('month', MIN(order_date)) AS cohort_month
  FROM orders
  GROUP BY customer_id
)
SELECT
  c.cohort_month,
  DATE_TRUNC('month', o.order_date) AS order_month,
  COUNT(DISTINCT o.customer_id) AS active_customers
FROM cohorts c
JOIN orders o ON o.customer_id = c.customer_id
GROUP BY 1, 2
ORDER BY 1, 2;`,
    explanation: 'Builds a cohort table from each customer\u2019s first order month, then counts active customers per month relative to that cohort.',
    result: 'Showed retention dropping sharply after month 2, flagging an onboarding gap.',
    optimizationNotes: 'Materialized the cohorts CTE as a temp table when reused across multiple downstream reports.',
  },
  {
    id: 'inventory-reorder',
    title: 'Products Below Reorder Threshold',
    objective: 'Surface products that need restocking before they go out of stock.',
    query: `SELECT
  p.product_name,
  i.warehouse_id,
  i.quantity_on_hand,
  i.reorder_threshold
FROM inventory i
JOIN products p ON p.product_id = i.product_id
WHERE i.quantity_on_hand < i.reorder_threshold
ORDER BY (i.reorder_threshold - i.quantity_on_hand) DESC;`,
    explanation: 'Filters inventory rows where stock has fallen below the configured reorder threshold, ranked by severity.',
    result: 'Flagged 34 SKUs across 3 warehouses needing immediate reorder.',
    optimizationNotes: 'Indexed inventory(quantity_on_hand, reorder_threshold) to keep the filter fast as inventory rows grow.',
  },
];
