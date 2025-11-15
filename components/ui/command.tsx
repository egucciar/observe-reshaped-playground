"use client"

import * as React from "react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col rounded-medium bg-elevation-overlay border border-neutral-faded shadow-overlay text-primary",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

// CommandDialog removed - not used in this implementation

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    size?: 'small' | 'medium' | 'large'
  }
>(({ className, size = 'medium', ...props }, ref) => (
  <div
    className={cn(
      "flex items-center gap-x1 border-b border-neutral-faded",
      size === 'small' && 'px-x2',
      size === 'medium' && 'px-x3',
      size === 'large' && 'px-x4'
    )}
    cmdk-input-wrapper=""
  >
    <MagnifyingGlassIcon
      className={cn(
        "shrink-0 text-neutral",
        size === 'small' && 'h-3.5 w-3.5',
        size === 'medium' && 'h-4 w-4',
        size === 'large' && 'h-5 w-5'
      )}
    />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex w-full rounded-medium bg-transparent text-neutral outline-none placeholder:text-neutral-faded placeholder:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",
        size === 'small' && 'h-8 py-x2 text-xs',
        size === 'medium' && 'h-10 py-x3 text-sm',
        size === 'large' && 'h-12 py-x3 text-base',
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden rounded-b-medium", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-x1 text-primary [&_[cmdk-group-heading]]:px-x2 [&_[cmdk-group-heading]]:py-x1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-faded",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    size?: 'small' | 'medium' | 'large'
  }
>(({ className, size = 'medium', ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-small text-neutral outline-none transition-colors duration-150",
      "hover:bg-neutral-faded",
      "aria-selected:bg-neutral-faded",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      size === 'small' && 'px-x2 py-x1 text-xs',
      size === 'medium' && 'px-x3 py-x2 text-sm',
      size === 'large' && 'px-x4 py-x3 text-base',
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
}
