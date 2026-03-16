# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Savora App
//Structure of the App
// *Header
// -Logo
// -NavItems
// *Body
// -Search
// -RestaurantContainer
// --RestaurantCard
// --Img
// --Name of restaurant, star rating, cuisine, delivery time, cost for two
// -Menu
// *Footer
// -Copyright
// -Links
// -Address
// -Contact

Two types of Export/Import

-Default Export/Import
export default Component;
import Component from "path";

-Named Export/Import
export const Component;
import {Component} from "path";

# React hooks
(Normal JS Utility functions)
-useState() - superpowerful state variables in react
-useEffect() - 

# 2 types Routing in web apps
-Client Side Routing
-Server Side Routing


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing(developer)
- Unit Testing
- Integration testing
- End to End Testing - e2e testing

# Setting up Testing in our app
- Installed React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration
- Jest : npx create-jest
- Include @babel/preset-react : to make JSX work in test case
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom


