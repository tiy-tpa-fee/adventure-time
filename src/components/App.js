import React, { Component } from 'react'
import styles from './App.scss'

class App extends Component {

  render () {
    return <div className={styles.app}>
      <header>
        <h1>Adventure Time!</h1>
      </header>
      <section>
        <aside>
          <ul>
            <li>Finn the Human</li>
            <li>Jake the Dog</li>
          </ul>
        </aside>
        <main>
          <h2>Finn the Human</h2>
          <img />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
      </section>
    </div>
  }
}

export default App
