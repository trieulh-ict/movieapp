import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'
import configureStore from './store'

const store = configureStore();

registerScreens({ Provider, store })
startTabBasedApp()
