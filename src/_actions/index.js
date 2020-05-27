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
    choice: choice,
  }
}
export const handleAgentChange = choice => {
  console.log(choice)

  return {
    type: "SET_AGENT",
    choice: choice,
  }
}
export const handleSideChange = choice => {
  console.log(choice)

  return {
    type: "SET_SIDE",
    choice: choice,
  }
}
