// importing relevant module
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CurrentType } from '../../types/store.types';
import { USER_ACTION_TYPES } from './user.action';

// initial state
const initialState : CurrentType = {
    currentUser : "", 
    rewards : null,
    bills : null
}

// setting user actions;
export const userSlice = createSlice({
    name: USER_ACTION_TYPES.SET_CURRENT_USER,
    initialState,
    reducers : {
     setCurrentUser : (state, action : PayloadAction<string | undefined>) => {
      state.currentUser = action.payload
     },
     setRewards : (state, action : PayloadAction<Array<string> | null>) => {
        state.rewards = action.payload
     },
     setBills : (state, action : PayloadAction<Array<string> | null>) => {
        state.bills = action.payload
     }
    }
})

// dispatch
export const {setCurrentUser, setRewards, setBills } = userSlice.actions

//reducer
export default userSlice.reducer;