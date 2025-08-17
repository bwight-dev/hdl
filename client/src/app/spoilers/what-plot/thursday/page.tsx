import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function ThursdayPage() {
  return (
    <DayPageLayout
      title="Thursday"
      subtitle="Chapters 25-32: Transition to Planter"
      currentDay={4}
    >
          
      <div className="space-y-8">
        <DaySection type="chapter" title="Future Expeditions" chapterNumber={25}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke wakes up in a good mood</li>
                <li>Gets ready for the day with Mom&apos;s help</li>
                <li>Has breakfast</li>
                <li>Prepares for travel to his new home at Planter</li>
          </ul>
        </DaySection>

        <DaySection type="narrative" title="Did Traffic in All Manner of Traffic" chapterNumber={26}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family drives to Planter facility</li>
                <li>Dad discusses disability terminology during the drive</li>
                <li>Conversation about the journey ahead</li>
                <li>Juke watches the scenery pass by</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Planting" chapterNumber={27}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family arrives at Planter administration building</li>
                <li>Tours the facility with staff</li>
                <li>Meets the caregivers and administrators</li>
                <li>Sees Juke&apos;s new room and living spaces</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Reg, Larry, Pep, Charlie, and Kev" chapterNumber={28}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family meets Reg - prone to stripping and wandering</li>
                <li>Meets Larry - quiet and withdrawn</li>
                <li>Meets Pep - energetic and unpredictable</li>
                <li>Meets Charlie - aggressive tendencies</li>
                <li>Meets Kev - opens doors compulsively</li>
          </ul>
        </DaySection>
            
        <DaySection type="theological" title="Unspoken Volumes" chapterNumber={29}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Parents discuss Juke&apos;s dietary needs with staff</li>
                <li>Review his medications and care routine</li>
                <li>Emotional goodbye between parents and Juke</li>
                <li>Parents leave Juke at his new home</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="White Worm Corpses With Bubbling Red Crude" chapterNumber={30}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke has bathroom accidents in new environment</li>
                <li>Staff clean and change him</li>
                <li>Staff feed him cake as comfort food</li>
                <li>Juke struggles to adjust to new surroundings</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="Tarry Ye Here, and Watch With Me" chapterNumber={31}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Chaotic scene in the TV room with all residents</li>
                <li>Reg strips naked and tries to leave</li>
                <li>Alarms go off as doors are breached</li>
                <li>Staff scramble to manage multiple residents</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="Buenas Noches Guapo" chapterNumber={32}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Staff prepare Juke for bedtime</li>
                <li>Spanish-speaking aide says &ldquo;Buenas noches guapo&rdquo; (goodnight handsome)</li>
                <li>Juke lies in unfamiliar bed</li>
                <li>Feels sad about separation from family</li>
                <li>Eventually falls asleep in his new home</li>
          </ul>
        </DaySection>
          </div>
    </DayPageLayout>
  );
}