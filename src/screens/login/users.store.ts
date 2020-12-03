import * as remx from 'remx';

const initialState = {
  users: [],
};

const state = remx.state(initialState);

const getters = remx.getters({
  getUsers() {
    return state.users;
  },
});

const setters = remx.setters({
  setUsers(users) {
    state.users = users;
  },

  signUpUser(user) {
    state.users = [...state.users, user];
  },

});

export const usersStore = {
  ...getters,
  ...setters,
};
