import { ComponentPropsWithoutRef } from "react"
import { Link, LinkProps } from "react-router-dom"

type ButtonProps = {
  textOnly?: boolean
} & ComponentPropsWithoutRef<'button'>
type LinkComponentProps = LinkProps

type ButtonComponentProps = ButtonProps | LinkComponentProps
export default function Button(props: ButtonComponentProps) {
  const { ...rest } = props;

  if ("to" in props) {
    const {to, ...linkProps} = rest as LinkComponentProps
    return <Link to={to} className="button" {...linkProps}></Link>
  }

  const { textOnly, ...buttonProps  } = rest as ButtonProps;

  return (
    <button className={textOnly ? "button button--text-only" : "button"} {...buttonProps}></button>
  )
}
