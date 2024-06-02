import {
  Button as _Button,
  ButtonProps as _ButtonProps,
  ColorProp,
  MainColor,
} from "trunx"
import { PropsWithChildren } from "react"

type ButtonProps = Omit<_ButtonProps, "color" | "isRounded"> &
  ColorProp<Extract<MainColor, "warning" | "success">>

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <_Button isRounded {...props}>
      {children}
    </_Button>
  )
}
