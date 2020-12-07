import styled from 'styled-components'

export const Heading = styled.h1.attrs({
  className: 'mt-10 text-2xl'
})`
  color: ${props => props.theme.colors.primary};
`

export const Paragraph = styled.p.attrs({
  className: 'mt-10 text-2xl'
})`
  ${Heading}:hover & {
    color: red;
  }
`

export const Container = styled.div.attrs({
  className: 'bg-blue-100'
})`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
