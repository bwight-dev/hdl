import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function FridayPage() {
  return (
    <DayPageLayout
      title="Friday"
      subtitle="Chapters 33-40: First Day at Planter School"
      currentDay={5}
    >
          
      <div className="space-y-8">
        <DaySection type="challenge" title="More Consequences of Barely Being Able to Talk" chapterNumber={33}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Kev opens Juke&apos;s door</li>
                <li>Mr. Donnie changes Juke after he wets himself</li>
                <li>Pep interrupts an inappropriate interaction</li>
                <li>Juke slams Mr. Donnie to the floor by his hair</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="The Plot Is Murder" chapterNumber={34}>
          <ul className="list-disc pl-6 space-y-2">
                <li>No food available for Juke</li>
                <li>Juke goes to school on a van</li>
                <li>Miguel slaps Juke</li>
                <li>Juke tries to grab Miguel and spit at Kip</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Star-Spangled Basher" chapterNumber={35}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke arrives at school</li>
                <li>National Anthem played</li>
                <li>Brian throws a book at Juke</li>
                <li>Juke is called to take medication</li>
                <li>Juke falls into a flag stand</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="Scrum, Skulk, Scrimmage, Skirmish & Squall" chapterNumber={36}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Playground altercation</li>
                <li>Greg demands a cracker from Juke</li>
                <li>Juke headbutts Greg</li>
                <li>Multiple students fight</li>
                <li>Charlie is removed by staff</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Unexpected and Missing It" chapterNumber={37}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke attends Life Skills</li>
                <li>Lunch with Pep and Kev</li>
                <li>Pep saves Juke from feces being thrown</li>
                <li>Greg attacks Juke and Pep</li>
                <li>Pep is removed by staff</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Take that Baller to the Bank" chapterNumber={38}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke goes to gym</li>
                <li>Juke bounces basketball into Greg&apos;s face</li>
                <li>Kev throws basketball at Greg</li>
                <li>Kev is removed by staff</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="There Is No Floor" chapterNumber={39}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Occupational Therapy session</li>
                <li>Todd pours juice on Juke</li>
                <li>Juke attacks Todd</li>
                <li>Juke creates chaos in the classroom</li>
                <li>Staff removes Juke</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="The Whole Concatenation of Diabolical Rascality" chapterNumber={40}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke in isolation</li>
                <li>Tre, a friendly aide, helps Juke</li>
                <li>Tre takes Juke around school</li>
                <li>They listen to Elvis and dance</li>
                <li>Juke returns to group home</li>
          </ul>
        </DaySection>
          </div>
    </DayPageLayout>
  );
}