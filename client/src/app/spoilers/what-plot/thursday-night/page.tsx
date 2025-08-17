import NightPageLayout from '@/app/components/plot/NightPageLayout';
import NightSection from '@/app/components/plot/NightSection';

export default function ThursdayNightPage() {
  return (
    <NightPageLayout
      title="Thursday Night"
      subtitle='The "Mission"'
      currentNight={4}
    >
      <div className="space-y-8">
        <NightSection type="narrative">
          <p>
            Emily and Julian awake &ldquo;inspired&rdquo; for their &ldquo;mission,&rdquo; which is the pre-mortal way of saying they need showers. 
            They feel reminiscent leaving their training shack in the prairie. Julian falls off his horse as they prepare to depart.
          </p>
          <p>
            Emily and Julian travel vast distances through spectacular varieties of terrain only possible in a dream. They discuss 
            the possible failure of their &ldquo;mission&rdquo; and succumbing to Satan, and Julian says, &ldquo;I would rather be born than live 
            my life in bondage.&rdquo; They arrive at the Bills.
          </p>
        </NightSection>

        <NightSection type="intro" title="The Bills">
          <p>
            H.D. Logic discusses the significance of the Bills as &ldquo;spirits, places, and profanities.&rdquo; Regular Bill outlines 
            the strategy to steal Satan&apos;s Plan, which involves Emily and Julian leading separate small squads to locate Satan&apos;s 
            Army and then a fiery serpent attack. Wild Bill contradicts Regular Bill&apos;s lodgings, appearance, demeanor, and instructions.
          </p>
        </NightSection>

        <NightSection type="spiritual" title="The Johns">
          <p>
            Emily and Julian meet their squads of volunteers. Each of the five members of Julian&apos;s squad are named John. 
            H.D. Logic explains that the dream always introduces them individually:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>John Leftover craves attention</li>
            <li>John Takeover wants to be in charge</li>
            <li>John Underover is an intellectual</li>
            <li>John Holdover commits to a plan</li>
            <li>John Hungover is cantankerous</li>
          </ul>
          <p className="mt-4">
            Julian commits to the Johns that he will do his best.
          </p>
        </NightSection>

        <NightSection type="narrative">
          <p>
            Emily and Julian say goodbye, certain it will be their last, renewing their promises to remember each other. 
            They set off with their squads in opposite directions circling around the mountains to locate Satan&apos;s Army.
          </p>
        </NightSection>

        <NightSection type="battle" title="The Attack">
          <p>
            A thunderstorm drenches Julian&apos;s squad. The squad debates the battle plan and whether to follow the fiery serpents 
            into Satan&apos;s Army (Regular Bill&apos;s plan) or use them as a diversion (Wild Bill&apos;s plan). They locate a Division of 
            Satan&apos;s Army of about 10,000 Angels. The squad debates whether they are supposed to call for the fiery serpents. 
            Julian decides against it and proceeds with the attack. The squad sees fiery serpents above making their way down 
            the mountainside.
          </p>
          <p>
            John Takeover sends John Leftover to create another diversion to confuse Satan&apos;s Army, but it confuses the fiery 
            serpents who appear to turn straight for Julian. In the confusion, John Takeover is nated.
          </p>
        </NightSection>
      </div>
    </NightPageLayout>
  );
}