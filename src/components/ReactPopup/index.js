import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupContainer,
  RulesImageContainer,
  RulesImage,
  CloseButtonContainer,
  CustomCloseButton,
} from './styledComponents'

const RulesPopUp = () => (
  <div>
    <Popup modal trigger={<button type="button">Rules</button>}>
      {close => (
        <PopupContainer>
          <CloseButtonContainer type="button" onClick={() => close()}>
            <CustomCloseButton>
              <RiCloseLine />
            </CustomCloseButton>
          </CloseButtonContainer>
          <RulesImageContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesImageContainer>
        </PopupContainer>
      )}
    </Popup>
  </div>
)
export default RulesPopUp
