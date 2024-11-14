import { PropsWithChildren } from 'react'

type CalloutType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger'

interface CalloutProps {
  type?: CalloutType
  icon?: string
}

const calloutStyles = {
  default: 'bg-callout',
  primary: 'bg-callout-primary',
  info: 'bg-callout-info',
  warning: 'bg-callout-warning',
  success: 'bg-callout-success',
  danger: 'bg-callout-danger',
}

const Callout = ({
  type = 'default',
  icon,
  children,
}: PropsWithChildren<CalloutProps>) => {
  return (
    <div
      className={`my-4 flex items-start gap-3 rounded-lg px-4 py-3 text-primary prose-headings:my-0.5 prose-p:my-1 prose-pre:m-0 ${calloutStyles[type]}`}
    >
      {icon && <p>{icon}</p>}
      <span className="w-full min-w-0 flex-1">{children}</span>
    </div>
  )
}

export default Callout
