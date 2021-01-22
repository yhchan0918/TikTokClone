import React, {createContext, useReducer} from 'react';

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  const {payload, type} = action;
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

const initialState = {userID: null};
function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }

  function logout() {
    dispatch({
      type: 'LOGOUT',
    });
  }

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout}}
      {...props}
    />
  );
}

export {AuthContext, AuthProvider};
