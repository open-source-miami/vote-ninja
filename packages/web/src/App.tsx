import React from "react";
import { Flex } from "@vote-ninja/component-library";
import "./App.css";
import Welcome from "./components/Welcome";

const App: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
    >
      <Welcome />
    </Flex>
  );
};

export default App;
