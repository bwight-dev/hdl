import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function TuesdayPage() {
  return (
    <DayPageLayout
      title="Tuesday"
      subtitle="Chapters 9-16: Crisis and Intervention"
      currentDay={1}
    >
      <div className="space-y-8">
        <DaySection type="chapter" title="My Will Be Won" chapterNumber={9}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke wakes up to find Dad is not home</li>
            <li>Ms. Edna has returned but Aminata is gone</li>
            <li>Juke refuses to take the school bus</li>
            <li>Mom is left alone with Juke and becomes distressed</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="She Aims to Swoop" chapterNumber={10}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mom tries to take Juke to school but he refuses</li>
            <li>Juke sweeps items off tables</li>
            <li>Mom calls Janet, a caretaker Juke dislikes</li>
            <li>An extra medication dose further disrupts Juke&apos;s thinking</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="The Internal Questions" chapterNumber={11}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke remains on the floor, ignoring Janet</li>
            <li>Mom tries songs and foods to improve his mood</li>
            <li>Aminata briefly checks on Juke</li>
            <li>Juke lunges at Janet, crashes into stairs</li>
            <li>Has a bowel movement that Mom cleans up</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="I Do Not Yet as I Ought to Do" chapterNumber={12}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mr. Gabe from Juke&apos;s school arrives</li>
            <li>Juke attacks Mr. Gabe, grabbing his hair and ripping his jacket</li>
            <li>Juke then attacks Mom, pulling her hair and forcing her to the floor</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="Fire, Police to the Rescue" chapterNumber={13}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Juke holds Mom on the floor</li>
            <li>Fire and police arrive</li>
            <li>A firewoman tries to release Juke&apos;s grip</li>
            <li>Policeman and firewoman argue about handling the situation</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Terms of Disengagement" chapterNumber={14}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dad returns home</li>
            <li>Authorities discuss whether Juke is dangerous</li>
            <li>Dad convinces them Juke will be fine</li>
            <li>Authorities leave with a warning</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Jacobsen Indictment" chapterNumber={15}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mr. Jacobsen discusses a potential state-funded waiver for Juke</li>
            <li>Explains Juke has been on a 13-year waitlist</li>
            <li>Warns that receiving the waiver is unlikely</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="He Got Waived" chapterNumber={16}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ms. Joyce arrives and grants Juke the waiver</li>
            <li>Mom puts Juke to bed</li>
            <li>A moment of hope after a day of crisis</li>
          </ul>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}