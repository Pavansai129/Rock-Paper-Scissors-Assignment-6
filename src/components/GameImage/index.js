import {Button, CustomImage} from './styledComponents'

const GameImage = props => {
  const {details, getGameResult} = props
  const {id, imageUrl} = details
  const onClickButton = () => {
    getGameResult(id)
  }
  return (
    <Button data-testid={`${id.toLowerCase()}Button`} onClick={onClickButton}>
      <CustomImage src={imageUrl} alt={id} />
    </Button>
  )
}

export default GameImage
