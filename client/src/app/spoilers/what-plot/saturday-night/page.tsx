import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function SaturdayNightPage() {
  return (
    <NightPageLayout
      title="Saturday Night"
      subtitle="First"
      currentNight={6}
    >
      <div className="space-y-8">
        <NightSection type="narrative">
          <p>
            Julian is greeted in prison by a friendly Guardian Angel who informs him that Emily is still alive but also a 
            prisoner and will be joining Julian at Satan&apos;s Court and to be induced. Julian is anxious to leave the prison 
            and reunite with Emily.
          </p>
          <p>
            Courteous Guardian Angels escort Julian by horseback to Satan&apos;s Court. Emily and Julian are reunited and exchange 
            the details of their respective &ldquo;missions.&rdquo; They are escorted to a mountainside cliff estate overlooking the beach 
            and the ocean, which is Satan&apos;s Court.
          </p>
        </NightSection>

        <NightSection type="intro" title="Meeting Lilith and Satan">
          <p>
            Emily and Julian are greeted by Lilith. The Scriptures begin with impromptu introductory psalms by Julian, Lilith, 
            and Satan. Lilith and Satan introduce Emily and Julian into their home and show them the world. They introduce 
            Natalie, their adopted daughter with disabilities. They all hike to the pinnacle for a picnic and to meet the Dragons. 
            Lilith teaches &ldquo;we each must fill our measure of creation.&rdquo;
          </p>
        </NightSection>

        <NightSection type="spiritual" title="Beach Teachings">
          <p>
            The group goes to the beach to swim. Natalie wears swim aids that Satan made for her. Lilith holds court on the 
            beach, teaching that spirits live in fear of birth and create fables to assuage their terror. She shares parables 
            to refute the fables.
          </p>
          <p>
            Lilith identifies &ldquo;The Great Fable: There is no end for we live forever,&rdquo; which creates a false hope for salvation. 
            She teaches, &ldquo;Life is not forever. It is a precious gift.&rdquo; She commands, &ldquo;Thou shalt not worship Satan,&rdquo; to Satan&apos;s 
            delight. She tells Emily and Julian that they are glorious.
          </p>
        </NightSection>

        <NightSection type="spiritual" title="The Righteous Envoys">
          <p>
            The group finishes its visit to the beach and Natalie says goodbye. Robert and Richard, Righteous envoys, arrive 
            to share the details of the celebration and inducement of Emily and Julian to be held the following day. The devils 
            mock the Righteous Plan. Lilith says, &ldquo;The Righteous swear Satan induces, when it is themselves.&rdquo; Satan rants a 
            drunken lamentation about his diminished role in the world and the miserable state of truth.
          </p>
        </NightSection>

        <NightSection type="resolution">
          <p>
            After a farewell dinner, the group watches the sunset and Lilith weeps that Emily and Julian must be induced. She 
            elaborates the purpose of life in a simple round: &ldquo;Live well life well lived,&rdquo; with the best living being to fill 
            one&apos;s measure of creation.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}