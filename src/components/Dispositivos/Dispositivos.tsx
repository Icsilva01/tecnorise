import { useMutation, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UPDATE_EMPRESA_MUTATION } from "../../graphql/mutations";
import { GET_EMPRESA_QUERY } from "../../graphql/queries";
import { RootState } from "../../redux/store";
import { DefaultTextFieldCurrency } from "../CurrencyField/CurrencyField";
import { StandartButton } from "../StandartButton/StandartButton";

export const Dispositivos: React.FC = () => {
  const isnEmpresa = useSelector((state: RootState) => state.user.isnEmpresa);
  const { loading, error, data } = useQuery(GET_EMPRESA_QUERY, {
    variables: { isn_empresa: isnEmpresa },
  });

  const [values, setValues] = useState({
    valor_cartao_rfid: "",
    valor_pulseira_rfid: "",
    valor_controle_remoto: "",
    valor_tag_veicular: "",
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const empresaData = data.getEmpresa;
      if (empresaData && empresaData.isn_empresa !== null) {
        setValues({
          valor_cartao_rfid: empresaData.valor_cartao_rfid || "",
          valor_pulseira_rfid: empresaData.valor_pulseira_rfid || "",
          valor_controle_remoto: empresaData.valor_controle_remoto || "",
          valor_tag_veicular: empresaData.valor_tag_veicular || "",
        });
      }
    }
  }, [loading, error, data]);

  const handleChange =
    (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [fieldName]: event.target.value });
    };

  const [updateEmpresa] = useMutation(UPDATE_EMPRESA_MUTATION, {
    variables: {
      isn_empresa: isnEmpresa,
      valor_cartao_rfid: values.valor_cartao_rfid,
      valor_pulseira_rfid: values.valor_pulseira_rfid,
      valor_controle_remoto: values.valor_controle_remoto,
      valor_tag_veicular: values.valor_tag_veicular,
    },
  });

  const handleSubmit = async () => {
    try {
      await updateEmpresa();
      console.log("Valores atualizados com sucesso!");
      alert("Valores atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar valores:", error);
      alert("Erro ao atualizar valores");
    }
  };
  return (
    <Stack
      borderRadius={"30px"}
      width={{ xs: 300, sm: 400, md: 1000 }}
      height={500}
      padding={2}
      spacing={2}
    >
      <Typography fontSize={30} fontWeight={400}>
        Dispositivo
      </Typography>
      <Box display={"flex"} gap={2}>
        <Typography fontSize={12} fontWeight={400}>
          Sistema
        </Typography>
        <Typography fontSize={12} fontWeight={400}>
          Dispositivo
        </Typography>
      </Box>
      <Stack
        bgcolor={"#FFFFFF"}
        borderRadius={"30px"}
        width={1}
        height={1}
        padding={2}
        spacing={2}
      >
        {DefaultTextFieldCurrency("Cartão RFID", {
          label: "1. Cartão RFID",
          value: values.valor_cartao_rfid,
          onChange: handleChange("valor_cartao_rfid"),
        })}
        {DefaultTextFieldCurrency("Pulseira RFID", {
          label: "2. Pulseira RFID",
          value: values.valor_pulseira_rfid,
          onChange: handleChange("valor_pulseira_rfid"),
        })}
        {DefaultTextFieldCurrency("Controle veicular", {
          label: "3. Controle veicular",
          value: values.valor_controle_remoto,
          onChange: handleChange("valor_controle_remoto"),
        })}
        {DefaultTextFieldCurrency("Tag veicular", {
          label: "4. Tag veicular",
          value: values.valor_tag_veicular,
          onChange: handleChange("valor_tag_veicular"),
        })}
        <Box display={"flex"} justifyContent={"end"} width={1}>
          <Box width={200}>
            <StandartButton
              bgcolor={"#B4E1AC"}
              textColor={"#267918"}
              onClick={handleSubmit}
            >
              Salvar
            </StandartButton>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
