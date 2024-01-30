export const addLinkRedux = (link) => ({
  type: "ADD_LINK",
  payload: link,
});

export const updateLinkRedux = (id, link) => ({
  type: "UPDATE_LINK",
  payload: { id, link },
});

export const removeLinkRedux = (id) => ({
  type: "DELETE_LINK",
  payload: id,
});
