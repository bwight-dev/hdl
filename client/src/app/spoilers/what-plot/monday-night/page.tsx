import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function MondayNightPage() {
  return (
    <NightPageLayout
      title="Monday Night"
      subtitle="Life Or Birth"
      currentNight={0}
    >
      <div className="space-y-8">
        <NightSection type="intro" title="Introduction">
          <p>
            Juke dreams of a pre-mortal heavenly world of spirits where two Righteous leaders, Regular Bill and Wild Bill, 
            have sent a young adult (&ldquo;not too far advanced&rdquo;) spirit, Julian, alone into the wilderness to make his 
            choice whether to follow God or Satan. To seek Righteousness, Julian must hunt the Dragon and not succumb to 
            Satan&apos;s Wicked Angels.
          </p>
        </NightSection>

        <NightSection type="narrative">
          <p>
            Julian lies in wait hunting the Dragon when he spies Emily—the first spirit he has seen in the wilderness. 
            He must choose whether to &ldquo;nate&rdquo; (&ldquo;kill&rdquo;) her but cannot decide whether she is Righteous or Wicked. 
            Emily sees him and throws her axe, striking his head with her axe handle. Julian declares he seeks after 
            Righteousness so he can go to Earth and be worthy to live forever with Zeëdzekiah (God). Emily and Julian 
            bond as they discuss how pre-mortal spirits fear being born since no one knows if there is life after birth. 
            Emily treats Julian and gives him an apple, and H.D. Logic states that this is the &ldquo;Genesis.&rdquo;
          </p>
        </NightSection>

        <NightSection type="spiritual" title="Of the Noble and Great Ones">
          <p>
            Emily and Julian discuss the Bills&apos; contradictory instructions for seeking after Righteousness. Emily reveals 
            the Dragons are real and other spiritual secrets. H.D. Logic discloses that Emily has proven to be 
            &ldquo;Of the Noble and Great Ones,&rdquo; honoring her as a preeminent Righteous spirit. Emily leaves to report to the 
            Bills on Julian&apos;s progress. Julian resumes his hunt for the Dragons. H.D. Logic cites precedent for Emily and 
            Julian to immediately be in love as &ldquo;parents and their infant love each other in the instant.&rdquo;
          </p>
        </NightSection>

        <NightSection type="battle" title="Confrontation with Gene and Lorraine">
          <p>
            As Julian hunts the Dragons, twin spirits Gene and Lorraine—who appear Wicked—entrap Julian. They accuse Julian 
            of Wickedness and set off to the Bills with Julian captive. Julian is confused about his failure and the correct 
            path to Righteousness. H.D. Logic states that all religion is confusing and that mortals cannot remember the 
            pre-Existence. When Gene and Lorraine are distracted, Julian slashes Lorraine with her sword. Gene throws a 
            hatchet at Julian but hits Lorraine. After a stalemate, Gene and Lorraine decide to let Julian go.
          </p>
        </NightSection>

        <NightSection type="resolution">
          <p>
            Julian encounters a camp where spirits are engaged in various activities, setting the stage for further adventures 
            in this pre-mortal realm where spirits must choose their eternal destiny.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}