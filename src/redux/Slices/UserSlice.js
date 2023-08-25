import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: [
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const { id, firstName, lastName, status } = action.payload;
      const contactToUpdate = state.find((user) => user.id === id);
      if (contactToUpdate) {
        contactToUpdate.firstName = firstName;
        contactToUpdate.lastName = lastName;
        contactToUpdate.status = status;
      }
    },
    remove:(state,action)=>{
        const { id } = action.payload;
        const remove = state.find((user) => user.id === id);
        if(remove){
            return state.filter((user) => user.id !== id);
        }

    }
  },
});

export const { add, update ,remove} = UserSlice.actions;
export default UserSlice.reducer;
