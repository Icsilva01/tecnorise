export interface LoginData {
  isn_usuario: string;
  dsc_operador: string;
  dsc_sobrenome: string;
  dsc_email: string | null;
  priv_admin: string;
  token: string;
  dsc_list_condominios: string;
  permissoes: string;
  auth_flg: boolean;
  empresa: Empresa;
}

export interface Empresa {
  isn_empresa: string | null;
  dsc_nome_fantasia_empresa: string;
  dsc_logo: string;
  dsc_host_voip: string;
  flg_pendencia: boolean;
  dsc_msg_pendencia: string;
  dsc_host_proxy: string;
}

export interface LoginResponse {
  data: LoginData;
}

export interface UpdatePayload {
  isn_empresa: string;
  valor_cartao_rfid: string;
  valor_tag_veicular: string;
  valor_chaveiro_rfid: string;
  valor_pulseira_rfid: string;
  valor_controle_remoto: string;
}
