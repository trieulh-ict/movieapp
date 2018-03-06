import { Navigation } from 'react-native-navigation'
import { THEME } from 'config'
import { HOME_SCREEN } from 'screens/Home/index'
import { COUNTER_SCREEN } from 'screens/Counter/index'
import { POPULAR_PEOPLE_SCREEN } from 'screens/People/PopularPeople'

import homeIcoSrc from 'static/images/home.png'
import CounterIcoSrc from 'static/images/counter.png'


const tabs = [{
//   label: 'Home',
//   icon: homeIcoSrc,
//   ...HOME_SCREEN,
// }, {
//   label: 'Redux Counter',
//   icon: CounterIcoSrc,
//   ...COUNTER_SCREEN,
// }, {
  label: 'Popular People',
  icon: homeIcoSrc,
  ...POPULAR_PEOPLE_SCREEN,
}]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.textOnPrimary,
    tabBarBackgroundColor: '#000000',
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: '#000000',
    tabBarBackgroundColor: THEME.textOnPrimary,
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
})
