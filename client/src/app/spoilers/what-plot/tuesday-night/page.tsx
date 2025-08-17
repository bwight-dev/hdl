import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function TuesdayNightPage() {
  return (
    <NightPageLayout
      title="Tuesday Night"
      subtitle="Chosen"
      currentNight={1}
    >
      <div className="space-y-8">
        <NightSection type="narrative">
          <p>
            Julian awakes and checks on Emily, who remains in serious condition. The Walküren are gone, but Edith returns 
            with food and flattery. Julian spies Gene sneaking toward them and gives chase but Gene escapes by horseback. 
            Julian fears for Emily and rushes back to her. Emily is safe but Edith is gone.
          </p>
        </NightSection>

        <NightSection type="spiritual" title="The Twelve Spirits">
          <p>
            Emily briefly awakes. Julian prays for her again. A group of Twelve carefree spirits arrive in the wildflowers 
            and join Emily and Julian. Julian cautions them, but they are weary of seeking after Righteousness and disregard 
            the risk of Angels or Dragons, instead loudly bantering and singing an annoying round.
          </p>
          <p>
            Julian sings a prayer to Emily. The Twelve continue their boisterous behavior and singing their obnoxious round. 
            Ortlinde visits to check on Emily.
          </p>
        </NightSection>

        <NightSection type="battle" title="The Battle with Big Luke">
          <p>
            Big Luke emerges in a surprise attack on Julian. After initially dominating Julian, Luke charges at Emily. 
            Julian chops Luke&apos;s arm off with an axe. Luke transforms into a serpent, and Julian suspects Luke may be Satan. 
            Julian nates Luke. The Twelve are amazed thinking Julian may have nated the Devil. H.D. Logic reveals that 
            Big Luke was a Wicked Angel, but not Satan. The Twelve begin to revere Julian.
          </p>
        </NightSection>

        <NightSection type="battle" title="The Dragon Attack">
          <p>
            A terrifying Dragon shriek is heard in the distance. The Dragon attacks and all the Twelve either commit 
            &ldquo;suinate&rdquo; (suicide) or are nated by the Dragon&apos;s firebirth. Julian takes a defensive position in front of Emily. 
            The Dragon flies directly at them. Emily can barely fight, but both Emily and Julian fire arrows. The Dragon is 
            hit but their weapons have no effect. Julian screams at the Dragon, commanding it to depart.
          </p>
          <p>
            High above, the Dragon calls for its mate. The larger, male Dragon appears and both Dragons fly directly over 
            Emily and Julian taking arrow fire, which again has no effect. The Dragons appear to be flying away when the male 
            suddenly launches up and circles around for a solo attack. Emily and Julian prepare to be nated by firebirth, but 
            the Dragon merely flies over them again. Both Dragons fly away, to the amazement of Emily and Julian.
          </p>
        </NightSection>

        <NightSection type="resolution">
          <p>
            Julian helps Emily back to cover as fires burn out in the wildflowers. A &ldquo;trainer&rdquo; arrives to help them, 
            setting up the next phase of their spiritual journey.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}