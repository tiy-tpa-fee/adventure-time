import React, { Component } from 'react'
import CharacterListItem from './CharacterListItem'
import styles from './CharacterList.scss'
import characters from '../characters.json'

class CharacterList extends Component {

  render () {
    const items = characters.map((character) => {
      return <CharacterListItem name={character.name} />
    })
    return <ul className={styles.root}>
      {items}
    </ul>
  }
}

export default CharacterList
