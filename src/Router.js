import React from 'react';

import {
    createSwitchNavigator,
    createAppContainer,
  } from 'react-navigation';

  import Welcome from './pages/Welcome';
  import SignIn from './screens/Signin';

  const AppSwitchNavigator = createSwitchNavigator(
    {
      Welcome: {
        screen: Welcome
      },
      SignIn: {
        screen: SignIn
      },
    },
    {
      initialRouteName: 'Welcome'
    }
  );
  
  export default createAppContainer(AppSwitchNavigator);