import * as React from "react"
import { Calendar, MapPin } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "event-popup-seen-v1" // Change 'v1' to 'v2' to show it again to everyone for a new event

export function EventPopup() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // Check local storage immediately on mount
    const hasSeenPopup = localStorage.getItem(STORAGE_KEY)
    
    // specific condition: only open if they HAVEN'T seen it yet
    if (!hasSeenPopup) {
        // Small delay to make it feel less abrupt on page load
        const timer = setTimeout(() => setIsOpen(true), 1000)
        return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    // Save to local storage that the user has closed this
    localStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
  }

  // Handle onOpenChange specifically to catch clicks outside the dialog (clicking overlay)
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleClose()
    }
    setIsOpen(open)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-900">Upcoming Major Event!</DialogTitle>
          <DialogDescription>
            Don't miss out on our biggest research incubation meet of the year.
          </DialogDescription>
        </DialogHeader>
        
        {/* Event Details Section */}
        <div className="grid gap-4 py-4">
           <div className="rounded-lg bg-slate-50 p-4 border">
              <div className="flex items-center gap-3 mb-2">
                 <Calendar className="h-5 w-5 text-blue-600" />
                 <span className="font-semibold">Date: Oct 25th - 27th, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                 <MapPin className="h-5 w-5 text-blue-600" />
                 <span>Malnad College Main Auditorium</span>
              </div>
           </div>
           <p className="text-sm text-muted-foreground">
             Join industry leaders and top researchers for a 3-day intensive workshop on innovation in startups.
           </p>
        </div>

        <DialogFooter>
          <Button className="w-full sm:w-auto" onClick={handleClose}>
            Got it, I'll be there!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}