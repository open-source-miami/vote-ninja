import * as React from "react";
import { Flex, Typography, Button } from "@vote-ninja/component-library";

export default () => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      alignContent="center"
      height="50%"
      style={{ textAlign: "center" }}
    >
      <Typography variant="h1" fontSize="3rem">
        Vote Ninja
      </Typography>
      <Typography variant="span">
        Some decisions are best made together
      </Typography>
      <Typography variant="p">Start a poll, or a discussion</Typography>
      <Button
        border="1px solid #fff"
        background="#4dafff"
        width="100%"
        height="3rem"
        borderRadius="3px"
      >
        <Typography
          variant="span"
          fontFamily="Roboto"
          fontSize="1rem"
          color="#fff"
        >
          Create
        </Typography>
      </Button>
      <Typography variant="p">
        Search for an existing poll or discussion
      </Typography>
      <Button
        border="1px solid #fff"
        background="#c0325c"
        width="100%"
        height="3rem"
        borderRadius="3px"
      >
        <Typography
          variant="span"
          fontFamily="Roboto"
          fontSize="1rem"
          color="#fff"
        >
          Search
        </Typography>
      </Button>
    </Flex>
  );
};
