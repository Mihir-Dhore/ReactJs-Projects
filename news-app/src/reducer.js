const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload, // This line use to
      };

    //Pagination
    case "GET_PREV_PAGE":
      return {
        ...state,
        page: state.page == 0 ? 0 : state.page - 1,
      };
    case "GET_NEXT_PAGE":
      return {
        ...state,
        //Add condition to page if it page size is full then redirect it to 1
        page: state.page + 1 >= state.nbPages ? 0 : state.page + 1,
      };
  }

  return state;
};
export default reducer;
