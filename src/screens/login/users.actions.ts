import {usersStore} from './users.store';

export async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  usersStore.setUsers(users);
}

export async function signUpUser(user) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const userToAdd = await response.json();
  usersStore.signUpUser(userToAdd);
}
