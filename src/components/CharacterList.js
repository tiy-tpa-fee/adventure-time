import React, { Component } from 'react'
import CharacterListItem from './CharacterListItem'
import styles from './CharacterList.scss'
import characters from '../characters.json'

class CharacterList extends Component {

  constructor () {
    super()
    this.state = {
      currentCharacter: 4
    }
  }

  render () {
    const items = characters.map((character, i) => {
      const active = i === this.state.currentCharacter
      return <CharacterListItem name={character.name} isActive={active} key={i} />
    })
    return <ul className={styles.root}>
      {items}
    </ul>
  }
}

export default CharacterList
