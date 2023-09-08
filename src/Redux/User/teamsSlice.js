import { createSlice } from '@reduxjs/toolkit';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [], 
  },
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload);
    },
  },
});

export const { addTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
