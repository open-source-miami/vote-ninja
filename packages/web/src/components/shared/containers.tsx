import * as React from "react"
import { Flex, Box, Button, Typography } from "@vote-ninja/component-library";
import styled from "styled-components";


export const FlexCenteredContainer = ({ children, style }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => {
    return (
        <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="100vh"
            width="100vw"
            style={style}>
            <Box
                width="350px"
                height="400px"
                style={{ textAlign: "center", color: "#fff", position: "relative" }}
            >
                {children}
            </Box>
        </Flex>
    );
}

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
    background: string
    children: any
}

const CustomButton = styled(Button)<BtnProps>`
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const VoteNinjaButton: React.FC<BtnProps> = ({ children, background, ...props }) => {
    return (
        <CustomButton
          border="none"
          background={background}
          width="100%"
          height="3rem"
          borderRadius="3px"
          {...props}
        >
          <Typography
            variant="span"
            fontFamily="Roboto"
            fontSize="1rem"
            color="#fff"
          >
            {children}
        </Typography>
        </CustomButton>
    )
}