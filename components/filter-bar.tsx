import { Search, SlidersHorizontal, Bookmark, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const filters = [
  "All",
  "Trump",
  "Gov Shutdown",
  "Global Elections",
  "NYC Mayor",
  "Gaza",
  "Ukraine",
  "MLB Playoffs",
  "Venezuela",
  "China",
  "Epstein",
]

export function FilterBar() {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-full bg-secondary pl-10 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-2 overflow-x-auto">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={index === 0 ? "default" : "secondary"}
              size="sm"
              className={
                index === 0
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                  : "bg-secondary text-foreground hover:bg-secondary/80 rounded-full"
              }
            >
              {filter}
            </Button>
          ))}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
