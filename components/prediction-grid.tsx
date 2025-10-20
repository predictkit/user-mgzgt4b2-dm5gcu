import { PredictionCard } from "@/components/prediction-card"
import { SportsCard } from "@/components/sports-card"

export function PredictionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <PredictionCard
        icon="🏛️"
        title="When will the Government shutdown end?"
        options={[
          { label: "October 23-26", percentage: 17, yes: true, no: true },
          { label: "October 27-30", percentage: 13, yes: true, no: true },
        ]}
        volume="$1m Vol."
      />

      <PredictionCard
        icon="🗽"
        title="New York City Mayoral Election"
        options={[
          { label: "Zohran Mamdani", percentage: 93, yes: true, no: true },
          { label: "Andrew Cuomo", percentage: 6, yes: true, no: true },
        ]}
        volume="$214m Vol."
      />

      <PredictionCard
        icon="💼"
        title="Fed decision in October?"
        options={[
          { label: "50+ bps decrease", percentage: 2, yes: true, no: true },
          { label: "25 bps decrease", percentage: 96, yes: true, no: true },
        ]}
        volume="$102m Vol."
      />

      <PredictionCard
        icon="🇦🇺"
        title="What will Trump say during Australia PM events on October..."
        options={[
          { label: "Trillion / Million /...", percentage: 100, yes: true, no: true },
          { label: "Australia 8+ times", percentage: 100, yes: true, no: true },
        ]}
        volume="$295k Vol."
      />

      <SportsCard
        league="NFL"
        teams={[
          { name: "Buccaneers", logo: "🏴‍☠️", percentage: 30 },
          { name: "Lions", logo: "🦁", percentage: 71 },
        ]}
        volume="$2m Vol."
        time="8:00 AM"
      />

      <SportsCard
        league="EPL"
        teams={[
          { name: "West Ham", logo: "⚒️", percentage: 38 },
          { name: "Brentford", logo: "🐝", percentage: 35 },
        ]}
        volume="$199k Vol."
        time="4:00 AM"
        draw
      />

      <SportsCard
        league="LALIGA"
        teams={[
          { name: "Alaves", logo: "🔵", percentage: 44 },
          { name: "Valencia", logo: "🦇", percentage: 26 },
        ]}
        volume="$104k Vol."
        time="4:00 AM"
        draw
      />

      <SportsCard
        league="NFL"
        teams={[
          { name: "Texans", logo: "🐂", percentage: 39 },
          { name: "Seahawks", logo: "🦅", percentage: 62 },
        ]}
        volume="$306k Vol."
        time="11:00 AM"
      />

      <PredictionCard
        icon="🇮🇱"
        title="Israel x Hamas ceasefire cancelled by..?"
        options={[
          { label: "October 31", percentage: 8, yes: true, no: true },
          { label: "December 31", percentage: 40, yes: true, no: true },
        ]}
        volume="$926k Vol."
      />

      <PredictionCard
        icon="🖼️"
        title="Will any Louvre heist robbers be arrested by..?"
        options={[
          { label: "October 20", percentage: 1, yes: true, no: true },
          { label: "October 24", percentage: 17, yes: true, no: true },
        ]}
        volume="$98k Vol."
      />

      <PredictionCard
        icon="🇧🇴"
        title="Bolivia Presidential Election Margin of Victory"
        options={[
          { label: "Paz by 10-15%", percentage: 38, yes: true, no: true },
          { label: "Paz by 5-10%", percentage: 60, yes: true, no: true },
        ]}
        volume="$2m Vol."
      />

      <SportsCard
        league="MLB"
        teams={[
          { name: "Mariners", logo: "⚓", percentage: 46 },
          { name: "Blue Jays", logo: "🐦", percentage: 55 },
        ]}
        volume="$2m Vol."
        time="9:08 AM"
      />

      <PredictionCard
        icon="🇺🇸"
        title="US x Venezuela military engagement by..?"
        options={[{ label: "October 31", percentage: 7, yes: true, no: true }]}
        volume=""
      />

      <PredictionCard icon="🇺🇦" title="Russia x Ukraine Ceasefire in 2025?" badge="17% chance" options={[]} volume="" />

      <PredictionCard
        icon="⭕"
        title="Monad airdrop by...?"
        options={[{ label: "November 15", percentage: 31, yes: true, no: true }]}
        volume=""
      />

      <PredictionCard
        icon="👤"
        title="#1 Searched Person on Google this year?"
        options={[{ label: "Pope Leo XIV", percentage: 30, yes: true, no: true }]}
        volume=""
      />
    </div>
  )
}
