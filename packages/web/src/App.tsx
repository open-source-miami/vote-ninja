import React from "react";
import { Typography, Flex, Box } from "@vote-ninja/component-library";
import "./App.css";

const App: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
    >
      <Box style={{ textAlign: "center" }}>
        <Typography variant="h1">Vote Ninja</Typography>
        <Typography variant="span">
          Some devisions are best made together
        </Typography>
        <Typography variant="p">Start a poll, or a discussion</Typography>
        <button>Create</button>
        <Typography variant="p">
          Search for an existing poll or discussion
        </Typography>
        <button>Search</button>
      </Box>
    </Flex>
  );
};

export default App;
