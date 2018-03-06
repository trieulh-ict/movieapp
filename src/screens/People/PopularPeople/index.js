import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native'
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
    this._retrievePeoples(1);
  }

  _retrievePeoples(page) {
    this.props.actions.retrievePopularPeople(page)
  }

  _getNextPage(currentPage){
    console.log("Next Clicked")
    this._retrievePeoples(currentPage + 1)
  }

  _getPreviousPage(currentPage){
    console.log("Next Clicked")
    this._retrievePeoples(currentPage - 1)
  }

  render() {
    let {page, results, total_pages} = this.props.popularPeople

    const isLoading = Object.getOwnPropertyNames(this.props.popularPeople).length === 0

    let content = null

    if(!isLoading){
      content = <GridView style={styles.gridView} 
          items={results}
          renderItem={people => (
            <PeopleCard onPress={console.log(people.name)} people={people}/>
          )}
          showsVerticalScrollIndicator={false}
          renderFooter={() => (
            <View style={{height: 10}}/>
          )}/>
    } else {
      content = <ActivityIndicator style={styles.loading}/>
    }

    return (
      <Container style={styles.parentContainer}>
        <TopNav 
          onNextPress={() => this._getNextPage(page)} 
          onPreviousPress={() => this._getPreviousPage(page)} 
          page={page} 
          totalPages={total_pages}
        />
        {content}
      </Container>
    )
  }
}

const TopNav = ({onNextPress, onPreviousPress, page, totalPages}) => {
  return (
  <Container style={styles.topNavContainer} >
    <ImageButton onPress={onPreviousPress} src='backArrow'/>
    <Text style={{flex: 1, textAlign: 'center'}}>{page}/{totalPages}</Text>
    <ImageButton onPress={onNextPress} src='nextArrow'/>
  </Container>
)}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'visible',
  },
  topNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
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
