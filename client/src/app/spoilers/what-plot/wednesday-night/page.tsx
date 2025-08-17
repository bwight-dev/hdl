import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function WednesdayNightPage() {
  return (
    <NightPageLayout
      title="Wednesday Night"
      subtitle="Ready and Not"
      currentNight={3}
    >
      <div className="space-y-8">
        <NightSection type="intro" title="The Aufklärung">
          <p>
            The Disinspirited wake Emily and Julian—after slipping Julian sleeping medication—from a nap and tell them to go 
            to the &ldquo;Armory&rdquo; to receive their &ldquo;Aufklärung,&rdquo; which Emily and Julian assume is a special weapon for their 
            &ldquo;mission.&rdquo; They ride to the Armory and are shown a massive host of spirits engaged in Thoughts and Prayers. 
            They marvel at the incredible effort involved compared to the small numbers willing to serve &ldquo;missions.&rdquo;
          </p>
        </NightSection>

        <NightSection type="narrative">
          <p>
            On their way back to camp, Emily and Julian debate whether Thoughts and Prayers are intended to be the Aufklärung. 
            They decide to make the best of their potentially last day together alive and run wild with the horses. They arrive 
            at camp to discover Manna and new armor.
          </p>
        </NightSection>

        <NightSection type="spiritual" title="Questions of Faith">
          <p>
            Emily and Julian eat a feast of Manna and discuss what would happen if they refused to go on their &ldquo;mission&rdquo; 
            and how spirits choose to become Wicked Angels. They question the wisdom of God&apos;s Plan and whether there is 
            life after birth.
          </p>
        </NightSection>

        <NightSection type="spiritual" title="Sacred Covenant">
          <p>
            After a massive thunderstorm, Emily and Julian duet in song. They embrace and weep and promise to always 
            remember each other. H.D. Logic observes that this is a sacred covenant between the two of them that they 
            will do everything to keep. Emily and Julian pack for their &ldquo;mission&rdquo; and hold each other fast to sleep.
          </p>
        </NightSection>

        <NightSection type="quote">
          <div className="text-center">
            <p className="text-xl italic text-amber-400">
              &ldquo;Whenever reason without language or math<br />
              and be sensational&rdquo;
            </p>
          </div>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}