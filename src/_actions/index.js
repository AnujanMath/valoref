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
export const handleQuery = result => {
  return {
    type: "RETURN_QUERY",
    payload: result,
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
    payload: index,
  }
}
export const handleZoom = option => {
  return {
    type: "SET_ZOOM",
    payload: option,
  }
}
export const handleZoomSlider = value => {
  return {
    type: "SET_ZOOM_SLIDER",
    payload: value
  }
}
const handleAbilityChange = id => {
  console.log(id)
  return {
    type: "SET_ABILITY_ID",
    payload: id,
  }
}



//change ability with thunk
export const changeAbility = id => dispatch => {
  dispatch(handleAbilityChange(id))
  //add any other function/query you want to run here
  /*   const data = useLazyQuery(gql`
      query CloudinaryImage {
        allCloudinaryMedia(
          filter: { public_id: { regex: "/maps/haven/Cypher/camera_1//" } }
        ) {
          edges {
            node {
              secure_url
            }
          }
        }
      }
    `)
    dispatch(handleQuery(data.allCloudinaryMedia.edges)) */
}

//return Promise.resolve();
