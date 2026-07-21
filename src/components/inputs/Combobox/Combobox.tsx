"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { FIELD_BASE } from "../Input/Input";

export interface ComboboxOption {
  label: string;
  value: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  id?: string;
  error?: string;
  className?: string;
}

/** Searchable single-select dropdown — for long lists (countries, time zones) where a
 * native <select> becomes unusable. Filters as you type, full keyboard navigation. */
export function Combobox({ options, value, onChange, placeholder = "Search…", label, id, error, className }: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Recompute the dropdown's position relative to the viewport whenever it opens,
  // and keep it pinned to the trigger on scroll/resize — since it's portaled to
  // <body>, it's no longer affected by any ancestor's overflow/transform.
  useEffect(() => {
    if (!isOpen) return;

    function updateCoords() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCoords({ top: rect.bottom + 8, left: rect.left, width: rect.width });
    }

    updateCoords();
    window.addEventListener("scroll", updateCoords, true);
    window.addEventListener("resize", updateCoords);
    return () => {
      window.removeEventListener("scroll", updateCoords, true);
      window.removeEventListener("resize", updateCoords);
    };
  }, [isOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((option) => option.label.toLowerCase().includes(q));
  }, [options, query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const insideTrigger = rootRef.current?.contains(target);
      const insideMenu = menuRef.current?.contains(target);
      if (!insideTrigger && !insideMenu) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);

  function selectOption(option: ComboboxOption) {
    onChange(option.value);
    setIsOpen(false);
    setQuery("");
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (filtered[activeIndex]) selectOption(filtered[activeIndex]);
    } else if (event.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    }
  }

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <button
        ref={triggerRef}
        type="button"
        id={id}
        onClick={() => {
          setIsOpen((prev) => !prev);
          requestAnimationFrame(() => inputRef.current?.focus());
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label}
        className={cn(FIELD_BASE, "flex items-center justify-between text-left", error && "border-rose-400/60")}
      >
        <span className={cn("truncate", !selected && "text-mist-faint")}>{selected ? selected.label : placeholder}</span>
        <ChevronDown className={cn("h-4 w-4 text-mist-faint shrink-0 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                style={{ top: coords.top, left: coords.left, width: coords.width }}
                className="
fixed
z-[99999]
max-h-64
overflow-visible
rounded-xl
border border-white/10
bg-[#111118]
shadow-2xl
backdrop-blur-xl
flex flex-col
"
              >
                <div className="relative shrink-0 border-b border-white/10 bg-[#111118] p-2">
                  <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-mist-faint" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    aria-label={`Search ${label}`}
                    className="w-full bg-transparent text-sm text-mist placeholder:text-mist-faint pl-6 py-1.5 focus:outline-none"
                  />
                </div>
                <ul role="listbox" className="max-h-52 overflow-y-auto bg-[#111118] py-1">
                  {filtered.length === 0 && <li className="px-4 py-3 text-sm text-mist-faint">No matches</li>}
                  {filtered.map((option, index) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={option.value === value}
                        onClick={() => selectOption(option)}
                        className={cn(
                          "w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-left transition-colors",
                          index === activeIndex
                            ? "bg-violet-600/20 text-white"
                            : "text-gray-300 hover:bg-violet-600/10 hover:text-white")}
                      >
                        {option.label}
                        {option.value === value && <Check className="h-3.5 w-3.5 text-violet-soft shrink-0" aria-hidden="true" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {error && <p className="text-xs text-rose-400 mt-1.5">{error}</p>}
    </div>
  );
}
