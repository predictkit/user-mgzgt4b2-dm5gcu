import { Search, Menu, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">Polymarket</span>
              <span className="text-lg text-muted-foreground">🇺🇸</span>
            </div>
          </div>

          <div className="flex flex-1 max-w-md items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search polymarket"
                className="w-full bg-secondary pl-10 border-border text-foreground placeholder:text-muted-foreground"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                /
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
              <Info className="mr-2 h-4 w-4" />
              How it works
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
            >
              Log In
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
