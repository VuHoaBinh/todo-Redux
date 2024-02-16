import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployees: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export const { addEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
