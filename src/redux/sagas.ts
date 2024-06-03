import { call, put, takeLatest } from 'redux-saga/effects';
import { login, updateEmpresa } from '../services/api';
import { LoginResponse } from '../types/types';
import { loginRequest, updateRequest } from './actions';
import { setIsnEmpresa, setToken } from './reducers';

function* loginSaga(action: ReturnType<typeof loginRequest>): Generator<any, void, LoginResponse> {
  try {
    const loginData: any = yield call(login, action.payload.usuario, action.payload.password);
    const response: LoginResponse = { data: loginData };
    console.log("Resposta da API: ", response);

    if (response.data && response.data.token) {
      yield put(setToken(response.data.token));
      //@ts-expect-error
      yield put(setIsnEmpresa(response.data.empresa.isn_empresa));
    } else {
      console.error("Dados de login não encontrados na resposta da API", response);
    }
  } catch (error) {
    console.error("Erro no login: ", error);
  }
}

function* updateSaga(action: ReturnType<typeof updateRequest>): Generator<any, void, any> {
  try {
    yield call(updateEmpresa, action.payload);
  } catch (error) {
    console.error("Erro ao atualizar empresa: ", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(updateRequest.type, updateSaga);
}
