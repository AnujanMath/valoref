//responsible for handling DISPATCH
export const handleWallToggle = () => {
  return {
    type: "TOGGLE_WALL",
  }
}
export const handleLabelToggle = () => {
  return {
    type: "TOGGLE_LABEL",
  }
}
export const handleMapChange = choice => {
  console.log(choice)
  return {
    type: "SET_MAP",
    payload: choice,
  }
}
export const handleAgentChange = choice => {
  console.log(choice)

  return {
    type: "SET_AGENT",
    payload: choice,
  }
}
export const handleSideChange = choice => {
  console.log(choice)

  return {
    type: "SET_SIDE",
    payload: choice,
  }
}
export const handlePageChange = index => {
  return {
    type: "SET_PAGE",
    payload: index
  }
}
export const handleZoom = option => {
  return {
    type: "SET_ZOOM",
    payload: option
  }
}
export const handleAbilityChange = id => {
  return {
    type: "SET_ABILITY_ID",
    payload: id
  }
}

export const handleQuery = result => {
  return {
    type: "RETURN_QUERY",
    payload: result
  }
}