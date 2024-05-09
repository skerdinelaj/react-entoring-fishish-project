import { ComponentPropsWithoutRef, ReactNode } from "react"

type InputProps = {
    id: string
    children: ReactNode
    className: string
} & ComponentPropsWithoutRef<"input">

export default function Input({id, children, className, ...otherProps}: InputProps) {
  return (
    <div className={className}>
        <label htmlFor={id}>{children}</label>
        <input id={id} name={id} {...otherProps}/>
    </div>
  )
}
