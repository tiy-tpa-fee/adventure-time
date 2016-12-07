import React, { Component } from 'react'
import characters from '../characters.json'
import styles from './CharacterDetails.scss'

class CharacterDetails extends Component {

  static propTypes = {
    currentCharacter: React.PropTypes.number
  }

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
