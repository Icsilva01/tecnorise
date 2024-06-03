import { ApolloProvider } from "@apollo/client";
import { Box, Stack } from "@mui/material";
import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./redux/store";
import { Dispositivos, Login } from "./components";
import { client } from "./services/api";

const MainComponent: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      height="100vh"
      bgcolor={"#F4F4F4F4"}
    >
      <Stack>{isAuthenticated ? <Dispositivos /> : <Login />}</Stack>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
