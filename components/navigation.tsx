import { TrendingUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  'Trending',
  'Breaking',
  'New',
  'Politics',
  'Sports',
  'Finance',
  'Crypto',
  'Geopolitics',
  'Earnings',
  'Tech',
  'Culture',
  'World',
  'Economy',
  'Elections',
  'Mentions',
  'More',
]

export function Navigation() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-3">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? 'default' : 'ghost'}
              size="sm"
              className={
                index === 0
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }
            >
              {index === 0 && <TrendingUp className="mr-2 h-4 w-4" />}
              {category}
              {category === 'More' && <ChevronDown className="ml-1 h-4 w-4" />}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
