"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/typography";
import { ChoiceGroup, Combobox } from "@/components/inputs";
import { GlassCard } from "@/components/cards";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import { getTimezones, formatTimezoneLabel } from "@/utils/getTimezones";
import { AVAILABLE_DAYS, TIME_SLOTS, MEETING_DURATIONS, MEETING_PLATFORMS } from "@/data/bookingOptions";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardItem } from "@/animations/cards";
import type { useMeetingScheduler } from "@/hooks/useMeetingScheduler";
import type { MeetingPlatform } from "@/types";

export interface MeetingSchedulerProps {
  scheduler: ReturnType<typeof useMeetingScheduler>;
}

export function MeetingScheduler({ scheduler }: MeetingSchedulerProps) {
  const variants = useAnimationVariants({ cardItem });
  const dayOptions = AVAILABLE_DAYS.map((day) => ({ label: day.label, value: day.id, disabled: !day.available }));
  const timeOptions = TIME_SLOTS.map((slot) => ({ label: slot, value: slot }));
  const durationOptions = MEETING_DURATIONS.map((d) => ({ label: d.label, value: String(d.value) }));
  const platformOptions = MEETING_PLATFORMS.map((p) => {
    const Icon = resolveLucideIcon(p.icon);
    return { label: p.label, value: p.value, icon: <Icon className="h-3.5 w-3.5" aria-hidden="true" /> };
  });
  const timezoneOptions = useMemo(
    () => getTimezones().map((tz) => ({ label: formatTimezoneLabel(tz), value: tz })),
    []
  );

  return (
    <GlassCard className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={variants.cardItem}>
        <Label>Available Day</Label>
        <ChoiceGroup label="Available day" options={dayOptions} value={scheduler.selection.day} onChange={scheduler.setDay} className="mt-3" />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={variants.cardItem}>
        <Label>Time Slot</Label>
        <ChoiceGroup label="Time slot" options={timeOptions} value={scheduler.selection.time} onChange={scheduler.setTime} className="mt-3" />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={variants.cardItem}>
        <Label>Meeting Duration</Label>
        <ChoiceGroup
          label="Meeting duration"
          options={durationOptions}
          value={scheduler.selection.duration ? String(scheduler.selection.duration) : null}
          onChange={(value) => scheduler.setDuration(Number(value) as 30 | 60 | 90)}
          className="mt-3"
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={variants.cardItem}>
        <Label>Meeting Platform</Label>
        <ChoiceGroup
          label="Meeting platform"
          options={platformOptions}
          value={scheduler.selection.platform}
          onChange={(value) => scheduler.setPlatform(value as MeetingPlatform)}
          className="mt-3"
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={variants.cardItem} className="max-w-xs">
        <Label htmlFor="timezone">Time Zone</Label>
        <Combobox
          id="timezone"
          label="Time zone"
          options={timezoneOptions}
          placeholder="Search your time zone…"
          value={scheduler.selection.timezone ?? ""}
          onChange={scheduler.setTimezone}
          className="mt-2"
        />
      </motion.div>
    </GlassCard>
  );
}
