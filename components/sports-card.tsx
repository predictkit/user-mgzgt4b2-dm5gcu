import { Gift, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Team {
  name: string
  logo: string
  percentage: number
}

interface SportsCardProps {
  league: string
  teams: Team[]
  volume: string
  time: string
  draw?: boolean
}

export function SportsCard({ league, teams, volume, time, draw }: SportsCardProps) {
  return (
    <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors">
      <div className="space-y-3 mb-4">
        {teams.map((team, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-xl">{team.logo}</div>
            <span className="flex-1 text-sm font-medium text-foreground">{team.name}</span>
            <span className="text-lg font-bold text-foreground">{team.percentage}%</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <Button
          size="sm"
          className="flex-1 bg-rose-900/40 text-rose-300 hover:bg-rose-900/50 border border-rose-800/50"
        >
          {teams[0].name}
        </Button>
        {draw && (
          <Button
            size="sm"
            className="px-4 bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border"
          >
            DRAW
          </Button>
        )}
        <Button
          size="sm"
          className="flex-1 bg-blue-900/40 text-blue-300 hover:bg-blue-900/50 border border-blue-800/50"
        >
          {teams[1].name}
        </Button>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>{volume}</span>
          <span>•</span>
          <span className="uppercase">{league}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
            <Gift className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
            <Bookmark className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
