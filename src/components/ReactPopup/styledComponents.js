import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align: center;
  padding: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  height: 60vh;
  width: 60vw;
`
export const RulesImage = styled.img`
  height: 100%;
  width: 100%;
`
export const RulesImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align: center;
  margin: 0px;
  padding: 10px;
  height: 80%;
  width: 100%;
`

export const CloseButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align: flex-start;
  background-color: transparent;
  border: none;
`

export const CustomCloseButton = styled.button`
  height: 50px;
  width: 50px;
  border: none;
`
