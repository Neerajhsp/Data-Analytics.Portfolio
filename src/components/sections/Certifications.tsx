import { certifications } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { CertificateCard } from '../ui/CertificateCard';

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certifications" title="Verified learning, applied directly" subtitle="New certificates appear automatically from src/data/certifications.ts." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
