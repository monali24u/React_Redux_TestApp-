export const ADD_USER = 'ADD_USER'

let UserId = 0;

export function addUser(text) {
   return {
      type: ADD_USER,
      id: UserId++,
      text
   };
}