import * as React from "react";
import { Typography } from "@vote-ninja/component-library";
import { FlexCenteredContainer, VoteNinjaButton } from "./shared/containers";
import Loading from "./Loading";
import Search from "./Search";


export default () => {

  const [isLoading, setLoading] = React.useState(false);
  const [isFading, setFading] = React.useState(false);

  const handleLoad = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(!isLoading)
  }

  const handleFade = () => setFading(true);

  return (
    <div style={{ display: "flex", justifyContent: "center", overflow: "hidden", width: "400px", position: "relative" }}>
    <FlexCenteredContainer style={{ position: "relative" }}>
        <Typography variant="h1" fontSize="5rem" mb="0" fontFamily="Mouse Memoirs">
          Vote Ninja
      </Typography>
        <Typography variant="span" mb="2rem">
          Some decisions are best made together
      </Typography>
        <Typography variant="p">Start a poll, or a discussion</Typography>
      <VoteNinjaButton background="#4dafff" onClick={handleLoad}>
        Create
      </VoteNinjaButton>
        <Typography variant="p">
          Search for an existing poll or discussion
      </Typography>
      <div style={{ position: "relative" }}>
        <VoteNinjaButton onClick={handleFade} background="#c0325c">
          Search
        </VoteNinjaButton>
        <Search isSearching={isFading} />
      </div>
      </FlexCenteredContainer>
      <Loading isLoading={isLoading} />
      </div>
  );
};
