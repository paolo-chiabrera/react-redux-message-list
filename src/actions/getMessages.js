import { getMessages } from '../data';

import { MESSAGES } from '../constants';

export default function() {
  return {
    type: MESSAGES,
    payload: getMessages()
  };
}