"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  collapsible: boolean;
  openValue: string | null;
  setOpenValue: React.Dispatch<React.SetStateAction<string | null>>;
};

type ItemContextValue = {
  value: string;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const ItemContext = React.createContext<ItemContextValue | null>(null);

function Accordion({
  children,
  collapsible = false,
  initialValue = null,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  collapsible?: boolean;
  initialValue?: string | null;
  type?: "single" | "multiple";
}) {
  const [openValue, setOpenValue] = React.useState<string | null>(initialValue);

  return (
    <AccordionContext.Provider
      value={{ collapsible, openValue, setOpenValue }}
    >
      <div data-slot="accordion" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  children,
  value,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <ItemContext.Provider value={{ value }}>
      <div
        className={cn("border-b border-stone-950/10", className)}
        data-slot="accordion-item"
        {...props}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(ItemContext);

  if (!accordion || !item) {
    throw new Error("AccordionTrigger must be used inside AccordionItem");
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <div className="flex">
      <button
        aria-expanded={isOpen}
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-stone-950 transition hover:text-[#d3542a]",
          className,
        )}
        data-state={isOpen ? "open" : "closed"}
        data-slot="accordion-trigger"
        onClick={() => {
          accordion.setOpenValue((current) => {
            if (current === item.value) {
              return current;
            }

            return item.value;
          });
        }}
        type="button"
        {...props}
      >
        <span>{children}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-stone-500 transition-transform duration-300",
            isOpen && "rotate-180 text-[#d3542a]",
          )}
        />
      </button>
    </div>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(ItemContext);

  if (!accordion || !item) {
    throw new Error("AccordionContent must be used inside AccordionItem");
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <div
      className={cn("overflow-hidden text-sm leading-7 text-stone-700", className)}
      data-state={isOpen ? "open" : "closed"}
      data-slot="accordion-content"
      {...props}
    >
      <div className="pb-5 pr-10">{children}</div>
    </div>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
