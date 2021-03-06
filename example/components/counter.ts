import { Helpers, Component, helper, $, comm } from '../../'

const { Comm } = comm
  .props({
    value: $(Number)
  })
  .emits<{
    input (value: number): void
  }>()

@Component
class Counter extends Comm {
  onIncrement () {
    this.$emit('input', this.$props.value + 1)
  }

  onDecrement () {
    this.$emit('input', this.$props.value - 1)
  }

  render ({ div, button, output }: Helpers) {
    return div('.counter', [
      button('.counter-button', { on: { click: this.onDecrement }}, '-'),
      output('.counter-output', this.$props.value),
      button('.counter-button', { on: { click: this.onIncrement }}, '+')
    ])
  }
}

export const counter = helper(Counter)
