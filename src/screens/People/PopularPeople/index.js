import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ImageButton, Container, PeopleCard } from 'components'
import GridView from 'react-native-super-grid'

import * as peopleActions from 'modules/people/actions'

export const POPULAR_PEOPLE_SCREEN = {
  screen: 'app.PopularScreen',
  title: 'Popular People',
}

class PopularPeople extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this._retrievePeoples();
  }

  _retrievePeoples() {
    this.props.actions.retrievePopularPeople();
  }

  render() {
    const isLoading = Object.getOwnPropertyNames(this.props.popularPeople).length === 0
    let content = null

    if(!isLoading){
      content = <GridView style={styles.gridView} 
          items={this.props.popularPeople.results}
          renderItem={people => (
            <PeopleCard onPress={console.log(people.name)} people={people}/>
          )}/>
    } else {
      content = <Text>Loading</Text>
    }

    console.log(isLoading + " "+content);

    return (
      <Container style={styles.parentContainer}>
        <TopNav title={this.props.popularPeople.page}/>
        {content}
      </Container>
    )
  }
}

const TopNav = ({title}) => (
  <Container style={styles.topNavContainer} >
    <ImageButton onPress={console.log("Clicked")} src='backArrow'/>
    <Text style={{flex: 1, textAlign: 'center'}}>Page {title}</Text>
    <ImageButton onPress={console.log("Clicked")} src='nextArrow'/>
  </Container>
)

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  topNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridView: {
    flex: 1,
    backgroundColor: 'white',
  }
})

PopularPeople.propTypes = {
	actions: PropTypes.object.isRequired,
	popularPeople: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    popularPeople: state.people.popularPeople,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPeople);
