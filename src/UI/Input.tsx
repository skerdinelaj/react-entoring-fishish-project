import { ComponentPropsWithoutRef, ReactNode } from "react"

type InputProps = {
    id: string
    children: ReactNode
} & ComponentPropsWithoutRef<"input">

export default function Input({id, children, ...otherProps}: InputProps) {
  return (
    <div>
        <label htmlFor={id}>{children}</label>
        <input id={id} name={id} {...otherProps}/>
    </div>
  )
}
