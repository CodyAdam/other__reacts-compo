This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this ?

This is a single React component that allow you to make custom resize bar for your panels.

## How to use

##### You just need to import :

`import ResizeBar from "./ResizeBar.js";`

##### You can use props for more customization :

(e.g. `<ResizeBar direction="horizontal" position={70} className="bar1" minPos={30} maxPos={60}> [...]`)

-   `direction` either "vertical" or "horizontal" (horizontal by default)
-   `position` area where the bar should be placed at the start in percent (50% by default)
-   `className` the className of the bar to change it's style ("resizeBar" by default)
-   `minPos` the minimum % position of the bar (10% by default)
-   `maxPos` the maximum % position of the bar (90% by default)

![preview](https://github.com/CodyAdam/react-components/blob/master/Resizable-Panel/preview.gif?raw=true)
![Screen of the JSX code](https://github.com/CodyAdam/react-components/blob/master/Resizable-Panel/ScreenCode.png?raw=true)
![Gif demo](https://github.com/CodyAdam/react-components/blob/master/Resizable-Panel/demo.gif?raw=true)
