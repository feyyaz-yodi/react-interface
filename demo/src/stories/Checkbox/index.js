import React from "react"
import { Story, Demo } from "react-story"
import { Checkbox } from "../../../../src/components"
import CheckboxRaw from "!raw-loader!../../../../src/components/Checkbox"

class CheckboxExample extends React.Component {
  state = {
    checked: true
  }

  handleChange = (e, value, checked) => {
    this.setState({ checked })
  }

  render() {
    return (
      <Checkbox
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    )
  }
}

const CheckboxStory = () => (
  <Story>
    <Demo name="Checkbox Sizes" desc="Pick from any of the theme sizes.">
      <CheckboxExample size="sm" mr={1} />
      <CheckboxExample size="md" mr={1} />
      <CheckboxExample size="lg" mr={1} />
      <CheckboxExample size="xl" mr={1} />
    </Demo>
    <Demo name="Checkbox Colors" desc="Pick from any of the theme colors.">
      <CheckboxExample size="md" mr={1} palette="primary" label="primary" />
      <CheckboxExample size="md" mr={1} palette="warning" label="warning" />
      <CheckboxExample size="md" mr={1} palette="danger" label="danger" />
      <CheckboxExample size="md" mr={1} palette="success" label="success" />
    </Demo>
    <Demo
      name="Checkbox Labels"
      desc="Checkbox takes an optional label param, which can have it's own click handler."
    >
      <CheckboxExample size="sm" mr={1} label="Use" />
      <CheckboxExample size="md" mr={1} label="The" />
      <CheckboxExample size="lg" mr={1} label="Force" />
      <CheckboxExample size="xl" mr={1} label="Luke" />
    </Demo>
  </Story>
)

export default {
  name: "Checkbox",
  component: CheckboxStory
}
