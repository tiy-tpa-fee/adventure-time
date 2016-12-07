import React, { Component } from 'react'
import styles from './CharacterListItem.scss'

class CharacterListItem extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool
  }

  render () {
    const active = this.props.isActive ? styles.active : null
    return <li className={`${styles.root} ${active}`}>
      {this.props.name}
    </li>
  }
}

export default CharacterListItem
