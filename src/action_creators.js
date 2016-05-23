export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function poke() {
  return {
    meta: {remote: true},
    type: 'POKE'
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}
