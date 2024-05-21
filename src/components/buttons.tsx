import {
  Button as _Button,
  ButtonProps as _ButtonProps,
  ColorProp,
  MainColor,
} from "trunx"
import { FC, PropsWithChildren } from "react"

type ButtonProps = Omit<_ButtonProps, "color" | "isRounded"> &
  ColorProp<Extract<MainColor, "warning" | "success">>

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <_Button isRounded {...props}>
    {children}
  </_Button>
)
