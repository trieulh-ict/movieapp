import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, Text} from 'react-native'
import styled from 'styled-components/native'
import { THEME } from "config"
import { getAvatarUrl } from '../../utils/Helpers';
import { Container } from "components";

const CardContainer = styled.TouchableOpacity `
  background-color: ${THEME.coalGray};
  flexDirection: column;
  borderRadius: 10;
  minHeight: 120;
  borderColor: ${THEME.transparent};
`

const PeopleCard = ({onPress, people, ...rest}) => (
  <CardContainer style={styles.parentContainer} onPress={onPress} {...rest}>
    <Image style={styles.avatar} source={{uri: abc(people.profile_path)}} />
    <Text style={styles.name}>{people.name}</Text>
  </CardContainer>
)

function abc(path) {
  console.log(getAvatarUrl(path))
  return getAvatarUrl(path)
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  avatar: {
    resizeMode: 'cover',
    width: '100%',
    height: 140,
  },
  name: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    padding: 10
  }
})

PeopleCard.propTypes = {
  onPress: PropTypes.func,
  people: PropTypes.object,
}

export default PeopleCard