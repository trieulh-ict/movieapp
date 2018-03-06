import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { THEME } from "config"

const ButtonContainer = styled.TouchableOpacity `
  background-color: ${THEME.transparent};
  padding: 10px 5px;
  margin: 10px 0;
`

const ButtonImage = styled.Image`
  width: 40;
  height: 40;
  resizeMode: contain;
`

const ImageButton = ({onPress, src, ...rest}) => (
  <ButtonContainer onPress={onPress} {...rest}>
    <ButtonImage source={images[src]}/>
  </ButtonContainer>
)

const images = {
  backArrow: require('static/images/sallyBotGreen.png'),
  nextArrow: require('static/images/sallyBotGreen.png'),
}

ImageButton.propTypes = {
  onPress: PropTypes.func,
  src: PropTypes.string,
}

export default ImageButton