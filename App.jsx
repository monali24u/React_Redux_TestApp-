import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from './actions/actions'

import AddUser from './components/AddUser.jsx'
import UserList from './components/UserList.jsx'

class App extends Component {
   render() {
      const { dispatch, visibleUsers } = this.props
      
      return (
         <div>
            <AddUser onAddClick = {text =>dispatch(addUser(text))} />
            <UserList users = {visibleUsers}/>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleUsers: state.users
   }
}
export default connect(select)(App);