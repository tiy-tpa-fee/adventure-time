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

  setCurrentCharacter (character) {
    this.setState({
      currentCharacter: character
    })
  }

  render () {
    const items = characters.map((character, i) => {
      const active = i === this.state.currentCharacter
      return <CharacterListItem
        name={character.name}
        isActive={active}
        onSelectCharacter={() => this.setCurrentCharacter(i)}
        key={i} />
    })
    return <ul className={styles.root}>
      {items}
    </ul>
  }
}

export default CharacterList
