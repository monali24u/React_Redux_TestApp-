import React, { Component, PropTypes } from 'react'

export default class User extends Component {
   render() {
      return (
         <li>
            {this.props.text}
         </li>
      )
   }
}