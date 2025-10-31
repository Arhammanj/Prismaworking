'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-accent-blue text-primary-foreground hover:bg-primary-light focus:ring-accent-blue',
        secondary: 'bg-button-secondary-bg text-button-secondary-text hover:bg-secondary-light focus:ring-accent-blue',
        outline: 'border-2 border-accent-blue text-accent-blue bg-transparent hover:bg-secondary-light focus:ring-accent-blue',
        success: 'bg-accent-green text-primary-foreground hover:bg-accent-green-light focus:ring-accent-green',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-md px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const Button = ({
  // Required parameters with defaults
  text = "Empieza ahora",
  text_font_size = "text-md",
  text_font_family = "Roboto",
  text_font_weight = "font-medium",
  text_line_height = "leading-md",
  text_text_align = "center",
  text_color = "text-primary-foreground",
  fill_background_color = "bg-accent-blue",
  border_border_radius = "rounded-xl",
  layout_align_self = "center",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  layout_gap,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    layout_align_self === 'center' ? 'self-center' : '',
  ]?.filter(Boolean)?.join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'left' ? 'text-left' : text_text_align === 'right' ? 'text-right' : '',
    // Only apply these if not using variant system
    !variant ? text_color : '',
    !variant ? fill_background_color : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button