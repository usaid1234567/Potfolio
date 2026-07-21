"use client";

import { useState } from "react";
import type { MeetingDuration, MeetingPlatform, MeetingSelection } from "@/types";

/** Owns the scheduling selection state, independent of how it's rendered or submitted. */
export function useMeetingScheduler() {
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [duration, setDuration] = useState<MeetingDuration | null>(null);
  const [timezone, setTimezone] = useState<string | null>(null);
  const [platform, setPlatform] = useState<MeetingPlatform | null>(null);

  const selection: MeetingSelection = { day, time, duration, timezone, platform };
  const isComplete = Boolean(day && time && duration && timezone && platform);

  return {
    selection,
    setDay,
    setTime,
    setDuration: (value: MeetingDuration) => setDuration(value),
    setTimezone,
    setPlatform: (value: MeetingPlatform) => setPlatform(value),
    isComplete,
  };
}
