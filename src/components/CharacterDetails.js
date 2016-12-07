import React, { Component } from 'react'
import styles from './CharacterDetails.scss'
import characters from '../characters.json'

class CharacterDetails extends Component {

  render () {
    const character = characters[this.props.currentCharacter]
    return <main className={styles.root}>
      <h2>{character.name}</h2>
      <img src={character.image} />
      <p>{character.details}</p>
    </main>
  }
}

export default CharacterDetails
