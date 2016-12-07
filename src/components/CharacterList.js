import React, { Component } from 'react'
import CharacterListItem from './CharacterListItem'
import characters from '../characters.json'
import styles from './CharacterList.scss'

class CharacterList extends Component {

  static propTypes = {
    currentCharacter: React.PropTypes.number,
    setCurrentCharacter: React.PropTypes.func
  }

  render () {
    const items = characters.map((character, i) => {
      const active = i === this.props.currentCharacter
      return <CharacterListItem
        name={character.name}
        isActive={active}
        onSelectCharacter={() => this.props.setCurrentCharacter(i)}
        key={i} />
    })
    return <ul className={styles.root}>
      {items}
    </ul>
  }
}

export default CharacterList
