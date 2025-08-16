export default function TuesdayPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-cyan-400">Tuesday</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Chapters 9-16: Crisis and Intervention
          </p>
          
          <div className="space-y-8">
            {/* Chapter 9 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 9: <em>My Will Be Won</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke wakes up to find Dad is not home</li>
                <li>Ms. Edna has returned but Aminata is gone</li>
                <li>Juke refuses to take the school bus</li>
                <li>Mom is left alone with Juke and becomes distressed</li>
              </ul>
            </div>
            
            {/* Chapter 10 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 10: <em>She Aims to Swoop</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Mom tries to take Juke to school but he refuses</li>
                <li>Juke sweeps items off tables</li>
                <li>Mom calls Janet, a caretaker Juke dislikes</li>
                <li>An extra medication dose further disrupts Juke&apos;s thinking</li>
              </ul>
            </div>
            
            {/* Chapter 11 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 11: <em>The Internal Questions</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke remains on the floor, ignoring Janet</li>
                <li>Mom tries songs and foods to improve his mood</li>
                <li>Aminata briefly checks on Juke</li>
                <li>Juke lunges at Janet, crashes into stairs</li>
                <li>Has a bowel movement that Mom cleans up</li>
              </ul>
            </div>
            
            {/* Chapter 12 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Chapter 12: <em>I Do Not Yet as I Ought to Do</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Mr. Gabe from Juke&apos;s school arrives</li>
                <li>Juke attacks Mr. Gabe, grabbing his hair and ripping his jacket</li>
                <li>Juke then attacks Mom, pulling her hair and forcing her to the floor</li>
              </ul>
            </div>
            
            {/* Chapter 13 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Chapter 13: <em>Fire, Police to the Rescue</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke holds Mom on the floor</li>
                <li>Fire and police arrive</li>
                <li>A firewoman tries to release Juke&apos;s grip</li>
                <li>Policeman and firewoman argue about handling the situation</li>
              </ul>
            </div>
            
            {/* Chapter 14 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 14: <em>The Terms of Disengagement</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Dad returns home</li>
                <li>Authorities discuss whether Juke is dangerous</li>
                <li>Dad convinces them Juke will be fine</li>
                <li>Authorities leave with a warning</li>
              </ul>
            </div>
            
            {/* Chapter 15 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 15: <em>The Jacobsen Indictment</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Mr. Jacobsen discusses a potential state-funded waiver for Juke</li>
                <li>Explains Juke has been on a 13-year waitlist</li>
                <li>Warns that receiving the waiver is unlikely</li>
              </ul>
            </div>
            
            {/* Chapter 16 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Chapter 16: <em>He Got Waived</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Ms. Joyce arrives and grants Juke the waiver</li>
                <li>Mom puts Juke to bed</li>
                <li>A moment of hope after a day of crisis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}