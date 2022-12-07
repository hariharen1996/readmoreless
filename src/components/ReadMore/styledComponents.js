// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const Text = styled.p`
  color: #334155;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const Image = styled.img`
  width: 400px;
`

export const Description = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #334155;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 14px;
`
