import { createSlice } from '@reduxjs/toolkit';

const invitationsSlice = createSlice({
  name: 'invitations',
  initialState: {
    invitations: [], 
  },
  reducers: {
    sendInvitation: (state, action) => {
      state.invitations.push(action.payload);
    },
    
  },
});

export const { sendInvitation } = invitationsSlice.actions;
export default invitationsSlice.reducer;
