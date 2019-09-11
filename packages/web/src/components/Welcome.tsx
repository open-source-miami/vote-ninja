import * as React from "react";
import { Typography } from "@vote-ninja/component-library";
import { FlexCenteredContainer, VoteNinjaButton } from "./shared/containers";

interface WelcomeProps {
  setLoading(event: React.MouseEvent<HTMLButtonElement>): void
}

export default ({ setLoading }: WelcomeProps) => {
  return (
    <FlexCenteredContainer style={{ background: "linear-gradient(180deg, #154A70 0%, rgba(255, 255, 255, 0) 100%)" }}>
        <Typography variant="h1" fontSize="5rem" mb="0" fontFamily="Mouse Memoirs">
          Vote Ninja
      </Typography>
        <Typography variant="span" mb="2rem">
          Some decisions are best made together
      </Typography>
        <Typography variant="p">Start a poll, or a discussion</Typography>
      <VoteNinjaButton buttonColor="#4dafff" onClick={setLoading}>
        Create
      </VoteNinjaButton>
        <Typography variant="p">
          Search for an existing poll or discussion
      </Typography>
      <VoteNinjaButton buttonColor="#c0325c">
        Search
      </VoteNinjaButton>
      </FlexCenteredContainer>
  );
};
