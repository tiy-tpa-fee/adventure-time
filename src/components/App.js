import React, { Component } from 'react'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import styles from './App.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      currentCharacter: 4
    }
  }

  setCurrentCharacter = (character) => {
    this.setState({
      currentCharacter: character
    })
  }

  render () {
    return <div className={styles.root}>
      <header>
        <h1>Adventure Time!</h1>
      </header>
      <section>
        <aside>
          <CharacterList currentCharacter={this.state.currentCharacter}
            setCurrentCharacter={this.setCurrentCharacter} />
        </aside>
        <CharacterDetails
          currentCharacter={this.state.currentCharacter} />
      </section>
    </div>
  }
}

export default App
