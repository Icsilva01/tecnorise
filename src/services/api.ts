import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { LOGIN_MUTATION, UPDATE_EMPRESA_MUTATION } from "../graphql/mutations";
import { LoginData } from "../types/types";
import { httpLink } from "./httpLink";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const login = async (
  usuario: string,
  password: string
): Promise<LoginData> => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { usuario, password },
    });

    if (data.login) {
      localStorage.setItem('token', data.login.token);
    }

    return data.login;
  } catch (error) {
    console.error("Erro na requisição de login: ", error);
    throw new Error("Erro ao fazer login");
  }
};

export const updateEmpresa = async ({
  isn_empresa,
  valor_cartao_rfid,
  valor_tag_veicular,
  valor_chaveiro_rfid,
  valor_pulseira_rfid,
  valor_controle_remoto,
}: {
  isn_empresa: string;
  valor_cartao_rfid: string;
  valor_tag_veicular: string;
  valor_chaveiro_rfid: string;
  valor_pulseira_rfid: string;
  valor_controle_remoto: string;
}): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_EMPRESA_MUTATION,
      variables: {
        isn_empresa,
        valor_cartao_rfid,
        valor_tag_veicular,
        valor_chaveiro_rfid,
        valor_pulseira_rfid,
        valor_controle_remoto,
      },
    });
    if (data && data.updateEmpresa && data.updateEmpresa.result === "success") {
      console.log("Empresa atualizada com sucesso");
    } else {
      throw new Error("Falha ao atualizar empresa");
    }
  } catch (error) {
    throw new Error("Erro ao atualizar empresa");
  }
};