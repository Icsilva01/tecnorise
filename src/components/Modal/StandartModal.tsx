import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../redux/actions";
import { RootState } from "../../redux/store";

const style = {
  position: "absolute" as "absolute",
  top: { lg: "50%", md: "50%", xs: "50%" },
  left: { lg: "50%", md: "50%", xs: "55%" },
  transform: "translate(-50%, -50%)",
  width: { lg: 872, md: 673, xs: "80%" },
  height: "auto",
  maxHeight: { lg: 500, md: 500, xs: "100%" },
  bgcolor: "white",
  borderRadius: "30px",
  boxShadow: "0px 0px 20px 0px #858484CC",
  overflow: { lg: "hidden", md: "hidden", xs: "auto" },
  alignItems: "center",
  textAlign: "center",
  outline: "none",
};

export const StandartModal: React.FC = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();


  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Stack sx={style} spacing={1}>
        <Box
          paddingY={2}
          width={0.9}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
        <Box width={0.68}>
          <Typography
            fontSize={24}
            fontWeight={700}
            lineHeight={"29.05px"}
            color="#013F79"
          >
            Dados atualizados com sucesso
          </Typography>
        </Box>
      </Stack>
    </Modal>
  );
};
