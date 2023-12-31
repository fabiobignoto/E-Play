import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  $maxWidth?: string
}

type RowProps = {
  $marginTop?: string
}

type TabButtonProps = {
  $isActive: boolean
}

export const Row = styled.div<RowProps>`
  margin-top: ${(props) => props.$marginTop || '0'};
  display: flex;
  align-items: flex-end;
  column-gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.$maxWidth || 'none'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  select,
  input {
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    &.hasError {
      border: 1px solid red;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.$isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 8px;
  }
`
