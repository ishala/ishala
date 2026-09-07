import { Section } from '@/components/layout/Section';
import { CertificationGrid } from '@/components/sections/resume/CertificationGrid';
import { EducationList } from '@/components/sections/resume/EducationList';
import { ExperienceList } from '@/components/sections/resume/ExperienceList';
import { ProjectGrid } from '@/components/sections/resume/ProjectGrid';
import { ResumeGroup } from '@/components/sections/resume/ResumeGroup';
import { sections } from '@/data/profile';
import { resumeGroupTitles } from '@/data/resume';

export function Resume() {
  return (
    // Tanpa headingId: keempat kelompok punya h2 sendiri, jadi nama section datang dari aria-label
    <Section id={sections.resume.id} label={sections.resume.label}>
      <div className="flex flex-col gap-80">
        <ResumeGroup title={resumeGroupTitles.experiences}>
          <ExperienceList />
        </ResumeGroup>

        <ResumeGroup title={resumeGroupTitles.education}>
          <EducationList />
        </ResumeGroup>

        <ResumeGroup title={resumeGroupTitles.certifications}>
          <CertificationGrid />
        </ResumeGroup>

        <ResumeGroup title={resumeGroupTitles.projects}>
          <ProjectGrid />
        </ResumeGroup>
      </div>
    </Section>
  );
}
