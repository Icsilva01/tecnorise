import { createAction } from '@reduxjs/toolkit';
import { UpdatePayload } from '../types/types';

export const loginRequest = createAction<{ usuario: string; password: string }>('LOGIN_REQUEST');
export const setToken = createAction<string>('SET_TOKEN');
export const updateRequest = createAction<UpdatePayload>('UPDATE_REQUEST');

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');

