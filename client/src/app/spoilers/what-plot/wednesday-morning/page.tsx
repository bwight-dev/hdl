import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function WednesdayMorningPage() {
  return (
    <DayPageLayout
      title="Wednesday Morning"
      subtitle="Chapters 17-20"
      currentDay={2}
    >
          
      <div className="space-y-8">
        <DaySection type="chapter" title="Routine Procedures" chapterNumber={17}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke wakes up with Mom sleeping in the recliner next to his bed</li>
                <li>Dad is in the next room</li>
                <li>Dad teases Juke about his hygiene</li>
                <li>Mom carefully prepares Juke for the day</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="Waffling" chapterNumber={18}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke sits in Dad&apos;s office wanting to listen to songs</li>
                <li>Dad is working and initially won&apos;t play songs</li>
                <li>Dad eventually makes waffles, plays songs, and feeds Juke</li>
                <li>Mom is upset about potential group home placement for Juke</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="To Leave Office" chapterNumber={19}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke is in Dad&apos;s office listening to unfamiliar songs</li>
                <li>Mom discusses potential placements with Dad</li>
                <li>No placements seem likely to have openings</li>
                <li>Juke is thirsty and bored</li>
                <li>Juke has a bowel movement, and Dad helps clean him up</li>
          </ul>
        </DaySection>

        <DaySection type="challenge" title="Admission Impossible" chapterNumber={20}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Mom feeds Juke lunch and talks on the phone</li>
                <li>Juke drops a bagel bite on the floor</li>
                <li>Mom trips while trying to stop Juke from eating it</li>
                <li>Ms. Joyce calls about a potential placement at &ldquo;Planter&rdquo;</li>
                <li>Mr. Jacobsen arrives with paperwork</li>
                <li>Juke falls asleep in Dad&apos;s office</li>
          </ul>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}