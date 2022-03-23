export const dropItems = (state) => {
  return state.drops || []
}

export const getDropDetail = (state, id) => {
  const drops = state.drops || []
  const detail = drops.find((d) => d.dropid === id || d.dropid === parseInt(id))
  return detail || {}
}
