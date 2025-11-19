'use client';
import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const switchClasses = cva(
  'relative inline-flex items-center cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue disabled:opacity-50 disabled:cursor-not-allowed p-0.5',
  {
    variants: {
      size: {
        small: 'h-5 w-9',
        medium: 'h-6 w-11',
        large: 'h-7 w-14',
      },
      variant: {
        primary: 'bg-border-primary data-[checked=true]:bg-accent-blue',
        success: 'bg-border-primary data-[checked=true]:bg-accent-green',
        secondary: 'bg-border-primary data-[checked=true]:bg-accent-purple',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  }
)

const thumbClasses = cva(
  'pointer-events-none inline-block transform rounded-full bg-secondary-background shadow-lg ring-0 transition duration-200 ease-in-out',
  {
    variants: {
      size: {
        small: 'h-4 w-4 translate-x-0 data-[checked=true]:translate-x-4',
        medium: 'h-5 w-5 translate-x-0 data-[checked=true]:translate-x-5',
        large: 'h-6 w-6 translate-x-0 data-[checked=true]:translate-x-9',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
)

const Switch = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  checked = false,
  onChange,
  disabled = false,
  size,
  variant,
  className,
  id,
  name,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  const handleToggle = () => {
    if (disabled) return
    
    const newChecked = !isChecked
    setIsChecked(newChecked)
    
    if (typeof onChange === 'function') {
      onChange(newChecked)
    }
  }

  const handleKeyDown = (event) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      event?.preventDefault()
      handleToggle()
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      data-checked={isChecked}
      className={twMerge(
        switchClasses({ size, variant }),
        'rounded-full border-[#CBCBCB] border-2 w-[68px] h-9',
        optionalClasses,
        className
      )}
      id={id}
      name={name}
      {...props}
    >
      <span
        data-checked={isChecked}
        className={twMerge(
          thumbClasses({ size }), 'bg-[#007ADB]'
        )}
        aria-hidden="true"
      />
    </button>
  )
}

export default Switch