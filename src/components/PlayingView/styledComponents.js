import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const Container = styled.div`
  padding: 20px;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
  width: ${props => props.width};
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
  width: ${props => props.width};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 75%;
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding: 30px;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
`

export const GameImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`
export const GameImageChoice = styled.img`
  height: 200px;
  width: 200px;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 90vw;
`
