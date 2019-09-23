import React from "react";
import { Flex } from "@vote-ninja/component-library";
import "./App.css";
import Welcome from "./components/Welcome";
import CreatePost from "./components/CreatePost/CreatePost"
import { Router } from "@reach/router";




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
      <Router>
        <Welcome path="/" />
        <CreatePost path="/create" />
      </Router>
    </Flex>
  );
};

export default App;
