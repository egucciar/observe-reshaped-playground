import { Button as ReshapedButton } from 'reshaped'

const Button = ({ size = "small", ...restProps }: React.ComponentProps<typeof ReshapedButton>) => {
  return <ReshapedButton size={size} {...restProps} />
}

Object.assign(Button, ReshapedButton)

export { Button }
export type { ButtonProps } from 'reshaped'
