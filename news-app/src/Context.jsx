// Steps to create Context api
// 1. Create a context
// 2. Create a provider
// 3. Create a consumer
// 4. Create a custom hook

import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
//Create context
const AppContext = createContext();

//define useReducer

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
//Create provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //write code to fetch api
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // To Remove Post
  const removePost = (post_ID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  //To search Post
  const searchPost = (query) => {
    dispatch({ type: "SEARCH_POST", payload: query });
  };

  //Pagination
  const getPrevPage = () => {
    dispatch({ type: "GET_PREV_PAGE" });
  };

  const getNextPage = () => {
    dispatch({ type: "GET_NEXT_PAGE" });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]); //Used state.query in [] to show result after search of each word.

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
