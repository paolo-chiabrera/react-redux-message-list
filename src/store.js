import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { isEmpty, keyBy } from 'lodash';

import { MEMBERS, MESSAGES } from './constants';

export const initialState = {
  members: {},
  messages: []
};

export function reducer(state, action = {}) {
  const { payload, type } = action;

  switch(type) {
    case `${ MEMBERS }_FULFILLED`:
      return Object.assign({}, state, {
        members: keyBy(payload, 'id')
      });
    case `${ MESSAGES }_FULFILLED`:
      return Object.assign({}, state, {
        messages: payload
      });
    default:
      return isEmpty(state) ? initialState : state;
  }
}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));