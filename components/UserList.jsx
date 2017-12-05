import React, { Component, PropTypes } from 'react'
import User from './User.jsx'

export default class UserList extends Component {
   render() {
      return (
         <ul>
            {this.props.users.map(user =>
               <User
                  key = {user.id}
                  {...user}
               />
            )}
         </ul>
      )
   }
}