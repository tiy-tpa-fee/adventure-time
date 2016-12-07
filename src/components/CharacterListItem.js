import React, { Component } from 'react'
import styles from './CharacterListItem.scss'

class CharacterListItem extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool,
    onSelectCharacter: React.PropTypes.func
  }

  render () {
    const active = this.props.isActive ? styles.active : null
    return <li
      className={`${styles.root} ${active}`}
      onClick={this.props.onSelectCharacter}>
      {this.props.name}
    </li>
  }
}

export default CharacterListItem
