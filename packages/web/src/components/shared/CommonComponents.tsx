import * as React from "react"
import { Flex, Box, Button, Typography } from "@vote-ninja/component-library";
import styled from "styled-components";
import { BackgroundProps, background } from "styled-system";


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
                style={{ position: "relative" }}
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

const CustomButton = styled(Button) <BtnProps>`
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

// Switch out with Component Lib link
type TButton = BackgroundProps & React.HTMLAttributes<HTMLAnchorElement>

const CustomLink = styled.a<TButton>`
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    display: inline-flex;
    text-decoration: none;
    width: 100%;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    ${background}
`

export const VoteNinjaLink: React.FC<TButton & React.HTMLProps<HTMLAnchorElement>> = ({ children, ...props }: TButton) => {
    return (
        <CustomLink
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
        </CustomLink>
    )
}