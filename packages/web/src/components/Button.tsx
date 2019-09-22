import styled from "styled-components"
import {
    ButtonStyleProps,
    BorderProps,
    LayoutProps,
    BackgroundProps,
    compose,
    background,
    color,
    border,
    borderBottom,
    borderColor,
    borderLeft,
    borderTop,
    borderRadius,
    borderRight,
    width,
    height
  } from "styled-system"
  
  type Btn = ButtonStyleProps & BorderProps & LayoutProps & BackgroundProps
  
  const buttonStyled = compose(
    background,
    color,
    border,
    borderBottom,
    borderColor,
    borderLeft,
    borderTop,
    borderRadius,
    borderRight,
    width,
    height
  )
  
  const StyledButton = styled.button<Btn>`
    ${buttonStyled}
  `
  
  export default StyledButton