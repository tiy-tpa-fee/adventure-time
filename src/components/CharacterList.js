import React, { Component } from 'react'
import CharacterListItem from './CharacterListItem'
import styles from './CharacterList.scss'

class CharacterList extends Component {

  render () {
    return <ul className={styles.root}>
      <CharacterListItem name='Finn the Human' />
      <CharacterListItem name='Jake the Dog' />
    </ul>
  }
}

export default CharacterList
