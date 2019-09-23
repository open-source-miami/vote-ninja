import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import FernImage from "../../assets/img/fern-in-red-pot.png"
import { FlexCenteredContainer, VoteNinjaButton } from "../shared/CommonComponents"
import { PostTitle, PostDescription } from "./CreatePost.styles"
import Card from "@vote-ninja/component-library/build/lib/Card/Card"



const CreatePost: React.FC<RouteComponentProps> = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", overflow: "hidden", width: "400px", position: "relative", textAlign: "left" }}>
            <FlexCenteredContainer>
                <Card
                    background={`#fff url(${FernImage})`}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    color="#000"
                >
                    <Card.Body>
                        <Card.Title fontSize="2.5rem" fontWeight="bolder" style={{ textAlign: "center" }}>
                            Create a Topic
                        </Card.Title>
                            <PostTitle placeholder="Topic of discussion" />
                            <PostDescription placeholder="Choices (apples, pears, bananas)" rows={12} />
                    <VoteNinjaButton background="#4dafff">
                        Submit
                    </VoteNinjaButton>
                    </Card.Body>
                </Card>
            </FlexCenteredContainer>
        </div>
    )
}

export default CreatePost;