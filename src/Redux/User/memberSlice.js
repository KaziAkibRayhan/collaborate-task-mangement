// membersSlice.js (Redux slice for managing team members)
import { createSlice } from '@reduxjs/toolkit';

const membersSlice = createSlice({
  name: 'members',
  initialState: {
    members: [], 
  },
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
  },
});

export const { addMember } = membersSlice.actions;
export default membersSlice.reducer;
