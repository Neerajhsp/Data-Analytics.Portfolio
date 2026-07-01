import { experience } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Timeline, TimelineItem } from '../ui/Timeline';

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Learning Journey" title="No corporate role yet — but a real one in the making" subtitle="Self-driven projects, academic work and continuous practice in place of formal experience." />
        <Timeline>
          {experience.map((item, i) => (
            <TimelineItem key={item.id} index={i} title={item.title} subtitle={item.organization} period={item.period}>
              <p className="mb-2">{item.description}</p>
              <ul className="space-y-1">
                {item.points.map((point) => (
                  <li key={point} className="text-xs text-white/50">• {point}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
