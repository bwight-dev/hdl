import DayPageLayout from '@/app/components/plot/DayPageLayout';
import DaySection from '@/app/components/plot/DaySection';

export default function WednesdayAfternoonPage() {
  return (
    <DayPageLayout
      title="Wednesday Afternoon"
      subtitle="Chapters 21-24"
      currentDay={3}
    >
          
      <div className="space-y-8">
        <DaySection type="narrative" title="Diver Down" chapterNumber={21}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Dad wakes Juke from a nap to run errands</li>
                <li>Juke gets an extra medication dose</li>
                <li>Family listens to Van Halen while driving to Target</li>
                <li>At Target, Juke thinks he needs a bathroom visit but it&apos;s a false alarm</li>
                <li>He falls into a Pepsi promotional display</li>
                <li>They buy supplies for Juke&apos;s upcoming group home move</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="Secrets of M" chapterNumber={22}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke&apos;s thinking becomes erratic due to increased medication</li>
                <li>Dad and Juke stop at McDonald&apos;s for French fries</li>
                <li>Juke is curious about the &ldquo;M&rdquo; on the drive-through attendant&apos;s shirt</li>
                <li>Mom receives news that Planter found a residence for Juke</li>
                <li>The residence is for the most severe cases</li>
                <li>Family goes for a walk with Juke in a wheelchair</li>
          </ul>
        </DaySection>
            
        <DaySection type="narrative" title="The Eggs Have It" chapterNumber={23}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke eats eggs for dinner (a dietary staple)</li>
                <li>He contemplates different egg preparation methods</li>
                <li>Mom and Dad discuss Juke&apos;s placement at Planter</li>
          </ul>
        </DaySection>
            
        <DaySection type="resolution" title="The Cold Hard Facts of Science" chapterNumber={24}>
          <ul className="list-disc pl-6 space-y-2">
                <li>Juke takes evening medication</li>
                <li>Increased dose continues to affect his thinking</li>
                <li>Family watches music videos while Juke dances</li>
                <li>Mom and Dad discuss Juke&apos;s challenges and life&apos;s fairness</li>
                <li>Mom packs Juke&apos;s things</li>
                <li>Mom puts Juke to bed, lies next to him, and cries</li>
          </ul>
        </DaySection>
      </div>
    </DayPageLayout>
  );
}