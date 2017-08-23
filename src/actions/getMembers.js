import { getMembers } from '../data';

import { MEMBERS } from '../constants';

export default function() {
  return {
    type: MEMBERS,
    payload: getMembers()
  };
}