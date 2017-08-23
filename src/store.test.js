const MESSAGES = [{
  id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  timestamp: '2017-02-09T04:27:38Z'
}]

const MEMBERS = [{
  'id': 'e837c9f5-247f-445f-bcc3-7d434348336b',
  'firstName': 'Martin',
  'lastName': 'Bradley',
  'email': 'mbradley0@google.it',
  'avatar': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
  'ip': '166.124.172.160'
}];

import {
  reducer
} from './store';

describe('Given the store', () => {
  describe('When MESSAGES_FULFILLED action is dispatched', () => {
    const updatedStore = reducer({}, {
      type: 'MESSAGES_FULFILLED',
      payload: MESSAGES
    });

    it('Should update the store with the new messages', () => {
      expect(updatedStore.messages).toEqual(MESSAGES);
    });
  });

  describe('When MEMBERS_FULFILLED action is dispatched', () => {
    const updatedStore = reducer({}, {
      type: 'MEMBERS_FULFILLED',
      payload: MEMBERS
    });

    it('Should update the store with the new members', () => {
      expect(updatedStore.members).toEqual({
        [MEMBERS[0].id]: MEMBERS[0]
      });
    });
  });
});