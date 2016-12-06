import React, { Component } from 'react'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import styles from './App.scss'

class App extends Component {

  render () {
    return <div className={styles.root}>
      <header>
        <h1>Adventure Time!</h1>
      </header>
      <section>
        <aside>
          <CharacterList />
        </aside>
        <CharacterDetails />
      </section>
    </div>
  }
}

export default App
