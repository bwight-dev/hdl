import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function MondayDawningPage() {
  return (
    <DayPageLayout
      title="Monday Dawning"
      subtitle="Chapter 57: The Final Morning"
      currentDay={8}
    >
      <div className="space-y-8">
        <DaySection type="resolution" title="Monday Dawning" chapterNumber={57}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke wakes up on Monday morning at Planter</li>
            <li>New week begins in his new home</li>
            <li>Staff prepare him for another school day</li>
            <li>Juke has adjusted to the routine</li>
            <li>Life continues in its new pattern</li>
            <li>The cycle of days and nights goes on</li>
            <li>Hope remains despite the challenges</li>
          </ul>
        </DaySection>
        
        <DaySection type="summary">
          <p className="text-lg italic text-center">
            The story comes full circle as another Monday begins, 
            with Juke settled into his new life at Planter, 
            forever cycling through days and nights, reality and dreams.
          </p>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}