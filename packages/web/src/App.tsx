import React from "react";
import { Flex } from "@vote-ninja/component-library";
import "./App.css";
import Welcome from "./components/Welcome";




const App = () => {

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      style={{
        background: "linear-gradient(180deg, #154A70 0%, rgba(255, 255, 255, 0) 100%)"
      }}
    >
      <Welcome />
    </Flex>
  );
};

export default App;
