//responsible for handling DISPATCH
export const handleWallToggle = () => {
  console.log("asdflkjsa")
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
    choice: choice,
  }
}
export const handlePageChange = index => {
  return {
    type: "SET_PAGE",
    payload: index
  }
}
