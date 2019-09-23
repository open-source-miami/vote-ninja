import * as React from "react";
import { Typography } from "@vote-ninja/component-library";
import { FlexCenteredContainer, VoteNinjaLink } from "./shared/CommonComponents";
import Loading from "./Loading/Loading";
import SearchButton from "./SearchButton";
import { RouteComponentProps} from "@reach/router";

const Welcome: React.FC<RouteComponentProps> = () => {

  const [isLoading, setLoading] = React.useState(false);
  const [isFading, setFading] = React.useState(false);

  const handleLoad = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(!isLoading)
    window.location.href = "/create"
  }

  const handleFade = () => setFading(true);

  return (
    <div style={{ display: "flex", justifyContent: "center", overflow: "hidden", width: "400px", position: "relative" }}>
      <FlexCenteredContainer style={{ color: "#fff", textAlign: "center"}}>
        <Typography variant="h1" fontSize="5rem" m="0" fontFamily="Mouse Memoirs">
          Vote Ninja
      </Typography>
        <Typography variant="span" mb="2rem">
          Some decisions are best made together
      </Typography>
        <Typography variant="p">Start a poll, or a discussion</Typography>
        <VoteNinjaLink 
          background="#4dafff" 
          onClick={handleLoad}
          >
          Create
      </VoteNinjaLink>
        <Typography variant="p">
          Search for an existing poll or discussion
      </Typography>
        <div style={{ position: "relative" }}>
          <VoteNinjaLink onClick={handleFade} background="#c0325c">
            Search
        </VoteNinjaLink>
          <SearchButton isSearching={isFading} />
        </div>
      </FlexCenteredContainer>
      <Loading isLoading={isLoading} />
    </div>
  );
};
export default Welcome;