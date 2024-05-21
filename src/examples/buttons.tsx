import { Button, Buttons } from "../components"
import { FC } from "react"

export const ButtonTypes: FC = () => (
  <Buttons>
    <Button>Default</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
  </Buttons>
)
