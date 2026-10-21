import { useState } from 'react'
import { ArrowDownToLine, CalendarDays, FileBarChart2, Image, ShieldCheck, TrendingUp } from 'lucide-react'
import { activity, initialAlerts } from '../data'
import { PageTitle, SelectField, StatCard } from '../components/Primitives'

export function ReportsPage() {
  const [period, setPeriod] = useState('Last 7 days')
  return <div className="page">
    <PageTitle eyebrow="INSIGHTS & HISTORY" title="Reports" description="Review uploaded media and manually flagged items." action={<button className="button button-secondary" onClick={() => window.alert('Your report is ready to export.') }><ArrowDownToLine size={15} /> Export report</button>} />
    <div className="report-toolbar"><div className="report-period"><CalendarDays size={16} /><span>Reporting period</span><SelectField value={period} onChange={setPeriod} options={['Last 24 hours', 'Last 7 days', 'Last 30 days']} ariaLabel="Reporting period" /></div><span className="report-date">Oct 14 – Oct 21, 2026</span></div>
    <section className="stats-grid">
      <StatCard label="Media files" value="86" change="+6.2%" icon={<Image size={18} />} tone="cyan" note="Videos and images uploaded" />
      <StatCard label="Reviewed items" value="72" change="+11.8%" icon={<FileBarChart2 size={18} />} tone="green" note="Manually reviewed" />
      <StatCard label="Awaiting review" value="14" change="-8.4%" icon={<TrendingUp size={18} />} tone="amber" note="Uploaded media to review" />
      <StatCard label="Priority flags" value="08" change="+2.1%" icon={<ShieldCheck size={18} />} tone="red" note="Critical and high severity" />
    </section>
    <section className="dashboard-grid reports-main-grid">
      <article className="panel report-chart-panel"><div className="panel-heading"><div><h2>Upload history</h2><p>Media files added over the last 7 days</p></div><span className="chart-legend"><i /> Files</span></div><div className="report-bars">{activity.slice(0, 14).map((value, index) => <div className="bar-column" key={`${value}-${index}`}><div className="bar-track"><i style={{ height: `${Math.max(value, 18)}%` }} /></div><span>{['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'][index % 7]}</span></div>)}</div><div className="report-chart-foot"><span>Daily uploads</span><strong>12.3 <small>average files per day</small></strong></div></article>
      <article className="panel severity-panel"><div className="panel-heading"><div><h2>Flagged item severity</h2><p>Manual review distribution</p></div></div><div className="severity-ring-wrap"><div className="severity-ring"><div><strong>86</strong><span>TOTAL</span></div></div></div><div className="severity-legend"><div><i className="sev-red" /><span>Critical</span><strong>08</strong></div><div><i className="sev-orange" /><span>High</span><strong>19</strong></div><div><i className="sev-yellow" /><span>Medium</span><strong>34</strong></div><div><i className="sev-cyan" /><span>Low</span><strong>25</strong></div></div></article>
    </section>
    <section className="panel report-table-panel"><div className="table-toolbar"><div><h2>Recent flagged media</h2><p>Items associated with uploaded videos and images</p></div><button className="text-link" onClick={() => window.alert('Showing all uploaded media reports.')}>View full history <span>→</span></button></div><div className="table-scroll"><table><thead><tr><th>FLAGGED ITEM</th><th>UPLOADED MEDIA</th><th>SEVERITY</th><th>TIME</th><th>STATUS</th></tr></thead><tbody>{initialAlerts.slice(0, 4).map((alert) => <tr key={alert.id}><td><div className="report-incident"><strong>{alert.title}</strong><span>{alert.id}</span></div></td><td>{alert.media}</td><td><span className={`severity-dot-text severity-text-${alert.severity.toLowerCase()}`}><i />{alert.severity}</span></td><td className="last-seen">{alert.time}</td><td><span className={`report-status ${alert.status.toLowerCase()}`}>{alert.status === 'New' ? 'In review' : alert.status}</span></td></tr>)}</tbody></table></div></section>
  </div>
}
