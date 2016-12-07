import React, { Component } from 'react'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import styles from './App.scss'

// define a component called App
class App extends Component {

  // called when this component is created
  constructor () {
    // calls the constructor of the super class "Component"
    super()
    // sets an initial state
    this.state = {
      currentCharacter: 0
    }
  }

  setCurrentCharacter = (character) => {
    // mutate the state with the new current character
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
          <CharacterList
            currentCharacter={this.state.currentCharacter}
            setCurrentCharacter={this.setCurrentCharacter} />
        </aside>
        <CharacterDetails
          currentCharacter={this.state.currentCharacter} />
      </section>
    </div>
  }
}

export default App
