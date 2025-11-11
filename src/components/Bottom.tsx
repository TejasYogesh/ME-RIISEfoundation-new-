import * as React from "react"
import { CalendarClock } from "lucide-react" // Added CalendarClock icon

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// --- Helper Component: CountdownTimer ---
interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = +targetDate - +new Date()
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft(targetDate))

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex w-full justify-around px-4 text-center">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeSeparator />
      <TimeBox value={timeLeft.hours} label="Hrs" />
      <TimeSeparator />
      <TimeBox value={timeLeft.minutes} label="Mins" />
      <TimeSeparator />
      <TimeBox value={timeLeft.seconds} label="Secs" />
    </div>
  )
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl font-bold tabular-nums tracking-tight">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-[0.65rem] uppercase text-muted-foreground">{label}</div>
  </div>
)

const TimeSeparator = () => (
  <div className="flex flex-col justify-start pt-1">
    <span className="text-xl font-bold text-muted-foreground">:</span>
  </div>
)
// ----------------------------------------

export function DrawerDemo() {
  // Example: Event is 10 days from now. Change this to your actual event date.
  const eventDate = new Date("2025-11-28T00:00:00")

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">Upcoming event</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Pragyatha 2025</DrawerTitle>
            <DrawerDescription>National Event.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-6">
            {/* Goal Adjuster Section */}

            {/* Countdown Section (Replaces Chart) */}
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CalendarClock className="h-4 w-4" />
                <span>Time Remaining</span>
              </div>
              <CountdownTimer targetDate={eventDate} />
            </div>
          </div>
          <DrawerFooter>
            <Button>View Event</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}