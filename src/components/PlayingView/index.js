import {Component} from 'react'
import GameImage from '../GameImage'
import ReactPopup from '../ReactPopup'
import {
  AppContainer,
  Container,
  Text,
  Header,
  Heading,
  ScoreContainer,
  GameContainer,
  GameImagesContainer,
  GameResultContainer,
  GameChoicesContainer,
  GameImageChoice,
  Button,
  RulesContainer,
} from './styledComponents'

class PlayingView extends Component {
  state = {
    isGamePlayed: false,
    score: 0,
    myChoice: '',
    opponentChoice: '',
    gameResult: '',
  }

  getGameResult = id => {
    const {
      isGamePlayed,
      score,
      myChoice,
      opponentChoice,
      gameResult,
    } = this.state
    const {choicesList} = this.props
    const updatedMyChoiceId = id
    const updatedOpponentChoiceId =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    const updatedMyChoice = choicesList.find(
      each => each.id === updatedMyChoiceId,
    ).imageUrl
    const updatedOpponentChoice = choicesList.find(
      each => each.id === updatedOpponentChoiceId,
    ).imageUrl
    if (updatedMyChoiceId === updatedOpponentChoiceId) {
      const updatedGameResult = 'IT IS DRAW'
      this.setState(prevState => ({
        score: prevState.score,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'PAPER' &&
      updatedOpponentChoiceId === 'ROCK'
    ) {
      const updatedGameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'ROCK' &&
      updatedOpponentChoiceId === 'PAPER'
    ) {
      const updatedGameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'SCISSORS' &&
      updatedOpponentChoiceId === 'PAPER'
    ) {
      const updatedGameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'PAPER' &&
      updatedOpponentChoiceId === 'SCISSORS'
    ) {
      const updatedGameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'ROCK' &&
      updatedOpponentChoiceId === 'SCISSORS'
    ) {
      const updatedGameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    } else if (
      updatedMyChoiceId === 'SCISSORS' &&
      updatedOpponentChoiceId === 'ROCK'
    ) {
      const updatedGameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: updatedMyChoice,
        opponentChoice: updatedOpponentChoice,
        isGamePlayed: true,
        gameResult: updatedGameResult,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({isGamePlayed: false})
  }

  render() {
    const {choicesList} = this.props
    const {
      isGamePlayed,
      score,
      myChoice,
      opponentChoice,
      gameResult,
    } = this.state
    return (
      <AppContainer>
        <Header>
          <Container>
            <Heading color="#ffffff" width="100px">
              Rock Paper Scissors
            </Heading>
          </Container>
          <ScoreContainer>
            <Text color="#223a5f">Score</Text>
            <Text color="#223a5f">{score}</Text>
          </ScoreContainer>
        </Header>
        <GameContainer>
          {isGamePlayed ? (
            <Container>
              <GameResultContainer>
                <GameChoicesContainer>
                  <Container>
                    <Text color="#ffffff">YOU</Text>
                    <GameImageChoice src={myChoice} alt="your choice" />
                  </Container>
                  <Container>
                    <Text color="#ffffff">OPPONENT</Text>
                    <GameImageChoice
                      src={opponentChoice}
                      alt="opponent choice"
                    />
                  </Container>
                </GameChoicesContainer>
                <Container>
                  <Text color="#ffffff">{gameResult}</Text>
                  <Button onClick={this.onClickPlayAgain}>Play Again</Button>
                </Container>
              </GameResultContainer>
            </Container>
          ) : (
            <GameImagesContainer>
              {choicesList.map(each => (
                <GameImage
                  key={each.id}
                  details={each}
                  getGameResult={this.getGameResult}
                />
              ))}
            </GameImagesContainer>
          )}
        </GameContainer>
        <RulesContainer>
          <ReactPopup />
        </RulesContainer>
      </AppContainer>
    )
  }
}

export default PlayingView
