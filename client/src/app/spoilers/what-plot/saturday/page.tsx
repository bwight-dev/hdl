import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function SaturdayPage() {
  return (
    <DayPageLayout
      title="Saturday"
      subtitle="Chapters 41-48: Weekend at Home"
      currentDay={6}
    >
          
      <div className="space-y-8">
        <DaySection type="resolution" title="Weekenders" chapterNumber={41}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke wakes up at the group home</li>
                <li>Staff tell him Dad is coming for weekend visit</li>
                <li>Dad arrives to pick up Juke</li>
                <li>They plan mall visit and fun activities</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Jubilee" chapterNumber={42}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family meets at the mall</li>
                <li>Dad and Juke ride escalators for fun</li>
                <li>Mom shops while they play</li>
                <li>Teenage boys mock Juke during walk</li>
                <li>More escalator rides before heading home</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Know Your Cats" chapterNumber={43}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family arrives home</li>
                <li>Mom and family friend Noelle join them</li>
                <li>Juke happily greets his cats</li>
                <li>Family and Noelle share lunch</li>
                <li>Everyone enjoys cake together</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Aura of a Snort" chapterNumber={44}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family prepares for swimming</li>
                <li>Juke puts on swimsuit, life jacket, and pool shoes</li>
                <li>Dad and Noelle discuss the group home situation</li>
                <li>Dad expresses doubts about God&apos;s plan</li>
                <li>Philosophical conversation about disability and faith</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="I (E?) P in the Pool" chapterNumber={45}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke plays ball in the pool</li>
                <li>Adults discuss his IEP (education plan) at Planter</li>
                <li>Dad criticizes plan as unrealistic</li>
                <li>Discussion of recent events</li>
                <li>Criticism of Mr. Jacobsen&apos;s handling</li>
          </ul>
        </DaySection>
            
        <DaySection type="challenge" title="Burp Up the Works" chapterNumber={46}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke exits pool after swallowing water</li>
                <li>Noelle says goodbye and leaves</li>
                <li>Mormon church leaders visit the family</li>
                <li>Leaders offer prayers and blessings</li>
                <li>After they leave, Dad expresses doubts about faith healing</li>
                <li>Juke and Dad listen to music together</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Original Exclamation" chapterNumber={47}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke eats dinner with family</li>
                <li>Parents debate what happiness means</li>
                <li>Juke makes &ldquo;dancing dolphin&rdquo; sign for ice cream</li>
                <li>Cup falls when Mom opens fridge</li>
                <li>Juke swears with his &ldquo;All day!&rdquo; expression</li>
                <li>Everyone laughs at the moment of levity</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="Less Talk, More Life" chapterNumber={48}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Family watches movies together</li>
                <li>Quiet enjoyment of each other&apos;s company</li>
                <li>Precious time before Juke returns to group home</li>
                <li>Focus on being present in the moment</li>
          </ul>
        </DaySection>
          </div>
    </DayPageLayout>
  );
}