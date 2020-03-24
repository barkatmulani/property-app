# Documentation

## Installation instruction

This application is developed using React & Redux. Following are the installation instructions:

1. Download and install npm latest version from https://nodejs.org website.
2. Download and extract the zip file of this application from the GitHub link https://github.com/barkatmulani/property-app.
3. Go to the command prompt by running **cmd.exe**, and change the directory to the unzipped folder path.
4. Enter on command prompt **npm install** to install all the npm packages for this application.
5. Enter on command prompt **npm start** to run the application, which will open up in the default browser on port 3000 of localhost.
6. Enter on command prompt **npm test** to run all the tests.

## Application Architecture

Every component is created inside its own folder. A component folder may contain the corresponding stylesheet and test files.

### Component Hierarchy
-App
   |_ Results -> Properties
   |_ Saved Properties -> Properties
   |_ Shared
      |_ Properties
         |_ Property

## Notes
Tests are written using Jest & Enzyme.


## User Manual

- Application displays 2 columns, i.e. Results and Saved Properties.
- To add a property from **Results** to **Saved Property** column, hover the mouse pointer over the central photo of any box in the **Results** column to make the **Add Property** button visible. Click this button to add the property to the **Saved Properties** column.
- To remove an a property from the **Saved Property** column, hover the mouse pointer over the central photo of any box in the Saved Property column to make the **Remove Property** button visible. Click this button to remove the property from the **Saved Property** column.
- A property could be added only once in the **Saved Property** column.
