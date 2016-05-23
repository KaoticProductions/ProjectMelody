import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function poke(state) {
  return state;
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'POKE':
    return poke(state, action.entry);
  }
  return state;
}
