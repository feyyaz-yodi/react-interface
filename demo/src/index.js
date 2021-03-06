import React, {Component} from 'react'
import { render } from 'react-dom'
import ReactStory from 'react-story'

import { Button } from '../../src/components'
import themes from '../../src/themes'
import Theme from '../../src/Theme'
import stories from './stories'


const themeMap = {
  light: themes.light,
  dark: themes.dark
}

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light'
    }
  }

  getTheme() {
    return themeMap[this.state.theme]
  }

  renderThemeSelector() {
    const options = Object.keys(themeMap).map(key =>
      <Button
        size="sm"
        key={`theme-${key}`}
        onClick={() => this.setState({ theme: key })}
      >
        {key}
      </Button>
    )

    return <ul>{options}</ul>
  }

  render() {
    return (
      <Theme>
        <ReactStory
          stories={stories}
          useTheme={false}
        />
      </Theme>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
