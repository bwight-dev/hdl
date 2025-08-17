import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function WednesdayNapPage() {
  return (
    <NightPageLayout
      title="Wednesday Nap"
      subtitle="Brief Interlude"
      currentNight={2}
    >
      <div className="space-y-8">
        <NightSection type="intro" title="A Moment of Rest">
          <p>
            Juke dreams briefly during his afternoon nap. The medication has made his thoughts cloudy and fragmented. 
            Images of Emily and Julian flash through his mind, but they are disjointed and unclear.
          </p>
        </NightSection>

        <NightSection type="spiritual">
          <p>
            The dream world remains distant and hazy, a brief respite before the challenges of the afternoon continue. 
            Juke&apos;s spirit hovers between the waking world and the pre-mortal realm, unable to fully enter either.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}