import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function FridayNightPage() {
  return (
    <NightPageLayout
      title="Friday Night"
      subtitle="Of Course"
      currentNight={5}
    >
      <div className="space-y-8">
        <NightSection type="battle" title="The Hollow">
          <p>
            Julian awakens concerned that Emily may already have given birth. John Hungover guards the hollow but leaves to 
            investigate a twig snap. The Wicked Angel Karl captures and taunts Julian in the hollow. John Underover surprises 
            Karl, giving Julian the chance to throw a dagger at him. Karl flees and they give chase. They find Karl dazing 
            John Holdover after a duel. Karl taunts Julian again, but John Underover surprises Karl a second time, and 
            Julian nates Karl.
          </p>
        </NightSection>

        <NightSection type="narrative">
          <p>
            Secret Angel Chen witnesses Karl&apos;s birth. Julian questions what she is doing alone in the wilderness. He reassembles 
            his squad and sends Chen to the Bills. Julian&apos;s squad is ambushed by a patrol of Angels. Julian nates one Angel 
            and wounds another and the rest of the Angel patrol flees. Julian&apos;s squad continues searching for Satan&apos;s Army.
          </p>
        </NightSection>

        <NightSection type="battle" title="The Battle at the Fortress">
          <p>
            The squad finds Satan&apos;s Army and a Fortress on top of a mountain that likely houses Satan&apos;s Plan. They watch as 
            the Angels assemble to their battle anthem. The voices of Regular Bill and then Wild Bill order Julian to attack. 
            John Laborover, an assassin, nearly nates Julian with an arrow. The squad hears battle orders to the Angels coming 
            from the Fortress. Julian and the three Johns charge into battle.
          </p>
          <p>
            Fiery serpents appear in the middle of Satan&apos;s Army, and Julian assumes it is Emily&apos;s attack. Wicked Angel John 
            Notover leads a charge against Julian but retreats when Julian shoots an arrow into his shield. John Laborover and 
            Julian try to assassinate each other. Fiery serpents slither about as John Notover and Julian fight. Righteous John 
            Holdover intervenes to protect Julian and is nated by Notover, who then retreats. The attack loses momentum as all 
            the fiery serpents are nated by Satan&apos;s Army.
          </p>
        </NightSection>

        <NightSection type="battle" title="Ascent to the Fortress">
          <p>
            The major battle over, Julian and the two remaining Righteous Johns begin a steep ascent up the mountain to the 
            Fortress as it starts to rain. John Underover pushes Julian out of an arrow&apos;s line of fire. Wicked John Notover 
            ambushes Julian and they wrestle to the ground. John Underover intervenes but Notover nates Underover.
          </p>
          <p>
            The rain stops and Julian and the last remaining John continue their perilous climb toward Satan&apos;s Fortress, 
            determined to complete their mission despite overwhelming losses.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}