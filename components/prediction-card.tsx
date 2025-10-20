import { Gift, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface PredictionOption {
  label: string
  percentage: number
  yes?: boolean
  no?: boolean
}

interface PredictionCardProps {
  icon: string
  title: string
  options: PredictionOption[]
  volume: string
  badge?: string
}

export function PredictionCard({ icon, title, options, volume, badge }: PredictionCardProps) {
  return (
    <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-sm font-medium text-foreground leading-tight flex-1">{title}</h3>
      </div>

      {badge && (
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-destructive/20 px-3 py-1">
          <span className="text-sm font-semibold text-destructive">{badge}</span>
        </div>
      )}

      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{option.label}</span>
              <span className="text-lg font-bold text-foreground">{option.percentage}%</span>
            </div>
            {option.yes && option.no && (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-600/30"
                >
                  Yes
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 border border-rose-600/30"
                >
                  No
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{volume}</span>
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
