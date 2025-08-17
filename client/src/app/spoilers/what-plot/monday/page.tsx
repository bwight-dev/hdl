import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function MondayPage() {
  return (
    <DayPageLayout
      title="Monday"
      subtitle="Chapters 1-8: A Day in Juke's Life"
      currentDay={0}
    >
      <div className="space-y-8">
        <DaySection type="chapter" title="The Eternal Questions" chapterNumber={1}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke, a 19-year-old with profound intellectual disability and autism</li>
            <li>Struggles with bathroom needs</li>
            <li>Has an accident</li>
            <li>Beginning of a typical challenging day</li>
          </ul>
        </DaySection>
            
        <DaySection type="theological" title="The Nose Knows" chapterNumber={2}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Discussion of Mormon doctrine about pre-existence</li>
            <li>Exploration of spirits and the afterlife</li>
            <li>Theological questions about disability</li>
            <li>Questioning divine purpose and God&apos;s plan</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="The Bus Waits for No One" chapterNumber={3}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Difficult morning bus ride to school</li>
            <li>Behavioral challenges on the bus</li>
            <li>Juke struggles with the daily routine</li>
            <li>Tension with bus driver and aide</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="There but for the Grace of God Go I" chapterNumber={4}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke becomes frustrated at school</li>
            <li>Moment of confusion and agitation</li>
            <li>Injures his school attendant, Ms. Grace</li>
            <li>Staff struggle to manage the situation</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="A" chapterNumber={5}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke placed in isolation at school</li>
            <li>Learns about the letter &ldquo;A&rdquo;</li>
            <li>Explores simple concepts in his unique way</li>
            <li>Time alone to calm down</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="Music and the Spoken Word" chapterNumber={6}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Music therapy session while in isolation</li>
            <li>Juke finds comfort in familiar songs</li>
            <li>Connection through sounds and rhythms</li>
            <li>Calming effect of music on his mood</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="Tactical Stalemate" chapterNumber={7}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Challenging bus ride home</li>
            <li>Juke refuses to get off the bus</li>
            <li>Tense standoff with driver and aide</li>
            <li>Eventually coaxed off the bus</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="The Allure Is Gone" chapterNumber={8}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evening at home with family</li>
            <li>Watches &ldquo;Blue&apos;s Clues&rdquo; on TV</li>
            <li>Familiar bedtime routine</li>
            <li>Finding peace at the end of the day</li>
          </ul>
        </DaySection>
          
        <DaySection type="summary">
          <p className="text-lg italic text-center">
            This narrative provides an intimate, raw portrayal of life with severe autism, 
            highlighting the daily challenges faced by Juke and his family.
          </p>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}