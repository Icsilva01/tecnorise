import { combineReducers } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  isAuthenticated: boolean;
  isnEmpresa: string | null;
}

const initialState: UserState = {
  token: null,
  isAuthenticated: false,
  isnEmpresa: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setIsnEmpresa(state, action: PayloadAction<string>) {
      state.isnEmpresa = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.isnEmpresa = null;
    },
  },
});

export const { setToken, setIsnEmpresa, logout } = userSlice.actions;

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
