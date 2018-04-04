# React Native Web - Bootstrap (v4)

This package is inspired by [React Native Style Tachyons](https://github.com/tachyons-css/react-native-style-tachyons). The goal is to provide Bootstrap features to react-native, since both BootstrapV4 and react-native depends heaily on flexbox, I think it is possible to bring most features from BootstrapV4 to react-native, and maybe react-native-web as well.


## Usage

Firstly, use `npm` to install, you can use `yarn` as well

```shell
npm install rnw-bs
```


Then, at the root component for the app, initiate the stylesheets

```javascript

import {build as rnwbsBuild} from 'rnw-bs';

rnwbsBuild({options});

import { styles } from 'rnw-bs';

```

To use the built styles, first import the styles, and pass them to the component's  style props

```jsx
//import fist
import { styles } from 'rnw-bs';

//...


//then in the render funciton
<View style={styles.containerFluid}>
  <View style={styles.row}>
    <View style={styles.col12}
      <Text style={styles.h1}>
        Hello
      </Text>
    </View>
  </View>
</View>

```

## Progress and To-Dos

Currently just trying to get the grid and typography going

### Grid
Reference to the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

| Element                         | Progress      | Remarks 
| ------------------------------- |:-------------:| ----- 
| container                       | Done          |  
| containerFluid                  | Done          |   
| row                             | Done          |
| col                             | In Progress   | not sure how to acheive this effect
| col-{columnscount}              | Done          |
| col-{breakpoint}-{columnscount} | Done          |
| col-auto                        | In Progress   | not sure how to acheive this effect
| col-{breakpoint}-auto           | In Progress   |


*Other **less commonly used** features will be dealt with later*

### Typography
| Element                         | Progress      | Remarks 
| ------------------------------- |:-------------:| ----- 
| h1, ... h5                      | Done          |  
| p                               | Done          |   
| a                               | Done          |


*Other **less commonly used** features will be dealt with later*


## Contribute
If you like this project and want to help me with it, *please send me PRs!*
