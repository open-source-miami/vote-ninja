import React, { useState } from "react";
import { Flex } from "@vote-ninja/component-library";
import "./App.css";
import Welcome from "./components/Welcome";
import Loading from "./components/Loading";




const App = () => {
  const [isLoading, setLoading] = useState(false);

  const handleLoad = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(!isLoading)
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
    >
      <Welcome setLoading={handleLoad} />
      <Loading isLoading={isLoading} />
    </Flex>
  );
};

export default App;
