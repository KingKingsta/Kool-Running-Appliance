import clsx from 'clsx'
import { TextareaHTMLAttributes, useId } from 'react'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:bg-white focus:outline-none focus:ring-green-600 focus:ring-green-600 sm:text-sm'

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block font-display text-md text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function TextArea({
  label,
  className,
  ...props
}: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea id={id} rows={5} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
