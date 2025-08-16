export default function SongsPage() {
  const songs = [
    { title: "Phase", artist: "Beck", album: "Morning Phase", year: "2014" },
    { title: "Mansion", artist: "Calvin Harris", album: "18 Months", year: "2012" },
    { title: "Grace", artist: "Future Generations", album: "Future Generations", year: "2016" },
    { title: "Langage", artist: "Moodoïd, Wednesday Campanella", album: "Cité Champagne", year: "2018" },
    { title: "Estonian Lullaby", artist: "Arvo Pärt", year: "2002" },
    { title: "Genesis", artist: "Grimes", album: "Visions", year: "2012" },
    { title: "Sequentia: Confutatis", artist: "Wolfgang Amadeus Mozart", album: "Requiem in D-minor", year: "1791" },
    { title: "The Ride of the Valkyries", artist: "Richard Wagner", album: "Die Walküre", year: "1856" },
    { title: "Song 2", artist: "Blur", album: "Blur", year: "1997" },
    { title: "Band On the Run", artist: "Paul McCartney and Wings", album: "Band On the Run", year: "1973" },
    { title: "Act Naturally", artist: "The Beatles", album: "Help!", year: "1965" },
    { title: "Free Falling", artist: "Florrie", album: "Sirens", year: "2014" },
    { title: "Voicething", artist: "Goldfrapp", album: "Head First", year: "2010" },
    { title: "Get Myself Together", artist: "Robyn", album: "Body Talk", year: "2010" },
    { title: "With Or Without You", artist: "U2", album: "The Joshua Tree", year: "1987" },
    { title: "C'est La Mort", artist: "The Civil Wars", album: "Barton Hollow", year: "2011" },
    { title: "No. 16 in B-Flat Minor", artist: "Frédéric Chopin", album: "24 Préludes", year: "1839" },
    { title: "II. Allegro vivo", artist: "Pyotr Ilyich Tchaikovsky", album: "Francesca da Rimini", year: "1876" },
    { title: "Pie Jesu", artist: "Gabriel Fauré", album: "Requiem", year: "1893" },
    { title: "If I Survive", artist: "Hybrid", album: "Morning Sci-Fi", year: "2003" },
    { title: "Better Off Alone", artist: "Alice Deejay", album: "Who Needs Guitars Anyway?", year: "2000" },
    { title: "Waterfall", artist: "The Stone Roses", album: "The Stone Roses", year: "1989" },
    { title: "Out Of Time Man", artist: "Mano Negra", album: "King of Bongo", year: "1991" },
    { title: "Rock'n Roll Suicide", artist: "David Bowie", album: "The Rise and Fall of Ziggy Stardust", year: "1972" },
    { title: "Without Me", artist: "Eminem", album: "The Eminem Show", year: "2002" },
    { title: "Where the Wild Roses Grow", artist: "Nick Cave and the Bad Seeds & Kylie Minogue", album: "Murder Ballads", year: "1995" },
    { title: "Deep Blue Day", artist: "Brian Eno", album: "Apollo: Atmospheres and Soundtracks", year: "1983" },
    { title: "Bury a Friend", artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", year: "2019" },
    { title: "Another One Bites the Dust", artist: "Queen", album: "The Game", year: "1980" },
    { title: "Down Under", artist: "Men at Work", album: "Business as Usual", year: "1981" },
    { title: "Stuck in the Middle with You", artist: "Stealers Wheel", album: "Stealers Wheel", year: "1972" },
    { title: "Venus in Furs", artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967" },
    { title: "Doll Parts", artist: "Hole", album: "Live Through This", year: "1994" },
    { title: "Say My Name", artist: "Destiny's Child", album: "The Writing's on the Wall", year: "1999" },
    { title: "Monkey Gone to Heaven", artist: "Pixies", album: "Doolittle", year: "1989" },
    { title: "Free Bird", artist: "Lynyrd Skynyrd", album: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", year: "1973" },
    { title: "Ring of Fire", artist: "Johnny Cash", album: "Ring of Fire: The Best of Johnny Cash", year: "1963" },
    { title: "Wild Thing", artist: "Tone Lōc", album: "Lōc-ed After Dark", year: "1989" },
    { title: "Theme from Shaft", artist: "Isaac Hayes", album: "Shaft", year: "1971" },
    { title: "Daydream Believer", artist: "The Monkees", album: "The Birds, The Bees & The Monkees", year: "1967" },
    { title: "Walking on Sunshine", artist: "Katrina and the Waves", album: "Walking on Sunshine", year: "1985" },
    { title: "Strawberry Swing", artist: "Coldplay", album: "Viva la Vida or Death and All His Friends", year: "2008" },
    { title: "When You Were Young", artist: "The Killers", album: "Sam's Town", year: "2006" },
    { title: "Waking Up", artist: "PVRIS", album: "White Noise", year: "2014" },
    { title: "Last Nite", artist: "The Strokes", album: "Is This It", year: "2001" },
    { title: "Push It", artist: "Salt-N-Pepa", album: "Hot, Cool & Vicious", year: "1987" },
    { title: "Heart of Glass", artist: "Blondie", album: "Parallel Lines", year: "1978" },
    { title: "Paranoid Android", artist: "Radiohead", album: "OK Computer", year: "1997" },
    { title: "A-Punk", artist: "Vampire Weekend", album: "Vampire Weekend", year: "2008" },
    { title: "Blue Monday", artist: "New Order", album: "Power, Corruption & Lies", year: "1983" },
    { title: "Kids", artist: "MGMT", album: "Oracular Spectacular", year: "2007" },
    { title: "Crazy", artist: "Gnarls Barkley", album: "St. Elsewhere", year: "2006" },
    { title: "Such Great Heights", artist: "The Postal Service", album: "Give Up", year: "2003" },
    { title: "Everlong", artist: "Foo Fighters", album: "The Colour and the Shape", year: "1997" },
    { title: "High and Dry", artist: "Radiohead", album: "The Bends", year: "1995" },
    { title: "Seven Nation Army", artist: "The White Stripes", album: "Elephant", year: "2003" },
    { title: "Bitter Sweet Symphony", artist: "The Verve", album: "Urban Hymns", year: "1997" },
    { title: "Time to Dance", artist: "The Sounds", album: "Living in America", year: "2002" },
    { title: "Heads Will Roll", artist: "Yeah Yeah Yeahs", album: "It's Blitz!", year: "2009" },
    { title: "Pumped Up Kicks", artist: "Foster the People", album: "Torches", year: "2010" },
    { title: "Somebody That I Used to Know", artist: "Gotye feat. Kimbra", album: "Making Mirrors", year: "2011" },
    { title: "Sleepyhead", artist: "Passion Pit", album: "Manners", year: "2009" },
    { title: "Tongue Tied", artist: "Grouplove", album: "Never Trust a Happy Song", year: "2011" },
    { title: "Safe and Sound", artist: "Capital Cities", album: "In a Tidal Wave of Mystery", year: "2013" },
    { title: "Sweater Weather", artist: "The Neighbourhood", album: "I Love You", year: "2012" },
    { title: "Riptide", artist: "Vance Joy", album: "Dream Your Life Away", year: "2013" },
    { title: "Come a Little Closer", artist: "Cage the Elephant", album: "Melophobia", year: "2013" },
    { title: "Electric Feel", artist: "MGMT", album: "Oracular Spectacular", year: "2007" },
    { title: "Get Lucky", artist: "Daft Punk feat. Pharrell Williams", album: "Random Access Memories", year: "2013" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold mb-8">SONGS</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            68 songs that resonate with the themes and emotions of &ldquo;Of the Noble and Great Ones&rdquo;
          </p>
          
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid gap-4">
              {songs.map((song, index) => (
                <div key={index} className="flex items-start border-b border-gray-800 pb-4 last:border-0">
                  <span className="text-amber-400 font-bold mr-4 mt-1 min-w-[2rem]">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold text-lg">&ldquo;{song.title}&rdquo;</span>
                      <span className="text-gray-400">by</span>
                      <span className="text-amber-400">{song.artist}</span>
                      {song.album && (
                        <>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 italic">{song.album}</span>
                        </>
                      )}
                      <span className="text-gray-500">({song.year})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}