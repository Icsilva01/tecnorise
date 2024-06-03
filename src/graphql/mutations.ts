import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($usuario: String!, $password: String!) {
    login(usuario: $usuario, password: $password) {
      isn_usuario
      dsc_operador
      dsc_sobrenome
      dsc_email
      priv_admin
      token
      dsc_list_condominios
      permissoes
      auth_flg
      empresa {
        isn_empresa
        dsc_nome_fantasia_empresa
        dsc_logo
        dsc_host_voip
        flg_pendencia
        dsc_msg_pendencia
        dsc_host_proxy
      }
    }
  }
`;


export const UPDATE_EMPRESA_MUTATION = gql`
  mutation updateEmpresa(
    $isn_empresa: ID
    $valor_cartao_rfid: String
    $valor_tag_veicular: String
    $valor_chaveiro_rfid: String
    $valor_pulseira_rfid: String
    $valor_controle_remoto: String
  ) {
    updateEmpresa(
      input: {
        isn_empresa: $isn_empresa
        valor_cartao_rfid: $valor_cartao_rfid
        valor_tag_veicular: $valor_tag_veicular
        valor_chaveiro_rfid: $valor_chaveiro_rfid
        valor_pulseira_rfid: $valor_pulseira_rfid
        valor_controle_remoto: $valor_controle_remoto
      }
    ) {
      result
    }
  }
`;
