import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// here createAsyncThunk(action,api) we pass action name as a parametere and call api

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(
      (res) => res.json()
    );
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [], //for list of product
    error: null,
    cocktail: [], //for single product
  },
});
