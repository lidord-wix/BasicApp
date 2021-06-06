import {usersStore} from './users.store';

export async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users').catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  const users = await response.json().catch(error => {
    console.warn('error: ', error);
    throw error;
  });
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
  }).catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  const userToAdd = await response.json().catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  usersStore.signUpUser(userToAdd);
}
