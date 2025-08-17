import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function SundayPage() {
  return (
    <DayPageLayout
      title="Sunday"
      subtitle="Chapters 49-56: Church and Return"
      currentDay={7}
    >
      <div className="space-y-8">
        <DaySection type="chapter" title="Sunday Best" chapterNumber={49}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke wakes up ready for church</li>
            <li>Dresses up in suit and tie</li>
            <li>Excited to show outfit to parents</li>
            <li>Feels proud of his Sunday best</li>
          </ul>
        </DaySection>

        <DaySection type="chapter" title="Church Service" chapterNumber={50}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Family attends church service</li>
            <li>Sit in their usual pew</li>
            <li>Juke excited to be at church</li>
            <li>Notices many familiar faces are absent</li>
          </ul>
        </DaySection>

        <DaySection type="theological" title="Worship and Routine" chapterNumber={51}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke follows familiar church routine</li>
            <li>Sings hymns enthusiastically</li>
            <li>Takes sacrament with family</li>
            <li>Feels connected to the congregation</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="Sunday School" chapterNumber={52}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attends Sunday School class</li>
            <li>Teacher discusses spiritual topics</li>
            <li>Juke participates in his own way</li>
            <li>Other members are kind and patient</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="After Church" chapterNumber={53}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Family returns home from church</li>
            <li>Has Sunday dinner together</li>
            <li>Quiet afternoon at home</li>
            <li>Juke enjoys family time</li>
          </ul>
        </DaySection>

        <DaySection type="challenge" title="Sunday Evening" chapterNumber={54}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke becomes anxious about returning to Planter</li>
            <li>Parents comfort and reassure him</li>
            <li>Packing items for the week</li>
            <li>Emotional goodbye preparations</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="Return to Planter" chapterNumber={55}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Drive back to group home</li>
            <li>Juke quiet during the journey</li>
            <li>Parents stay to help him settle</li>
            <li>Staff welcomes Juke back</li>
          </ul>
        </DaySection>

        <DaySection type="resolution" title="Sunday Night" chapterNumber={56}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke settles into his room at Planter</li>
            <li>Staff helps with bedtime routine</li>
            <li>Juke reflects on weekend with family</li>
            <li>Adjusts to his new home reality</li>
          </ul>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}