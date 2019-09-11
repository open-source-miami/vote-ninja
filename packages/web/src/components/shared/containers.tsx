import * as React from "react"
import { Flex, Box, Button, Typography } from "@vote-ninja/component-library";


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
                style={{ textAlign: "center", color: "#fff" }}
            >
                {children}
            </Box>
        </Flex>
    );
}

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
    buttonColor: string
    children: any
}
export const VoteNinjaButton: React.FC<BtnProps> = ({ children, buttonColor, ...props }) => {
    return (
        <Button
          border="none"
          background={buttonColor}
          width="100%"
          height="3rem"
          borderRadius="3px"
          style={{
            mixBlendMode: "normal",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
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
        </Button>
    )
}