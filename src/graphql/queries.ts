import { gql } from '@apollo/client';

export const GET_EMPRESA_QUERY = gql`
  query getEmpresa($isn_empresa: ID!) {
    getEmpresa(isn_empresa: $isn_empresa) {
      valor_cartao_rfid
      valor_tag_veicular
      valor_chaveiro_rfid
      valor_pulseira_rfid
      valor_controle_remoto
    }
  }
`;
