import { AppRegistry } from 'react-native';

// @Utils
import './src/utils/i18n';

// @Screens
import { RootScreen as App } from './src/screens/';

// @Constants
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
