# domElement loader

The simpliest way to load your HTML as DOM element/node for Webpack 4+.

## Usage

```js
import ui from './templates/ui.html' // ui will be a dom Node 

ui.style.background = '#FFF' // do whatever you want on it ^_^

document.appendChild( ui )
```

## Installation

```sh
npm install --save domElement-loader
```

```js
module.exports = {
	//..
    module: {
		//..
        loaders: [
            { test: /\.(html)?$/, loader: 'domElement' }
        ]
    }
};
```

## How it works internaly & why ?

Its the raw-loader using this extraStep : 

```js
const domParser = document.createElement('div')
const string2dom = (string)=>{
	domParser.innerHTML = string 
	return domParser.firstChild
}
```

I used this snippet a lot while developping ui for modular tools and decided to make a loader for a better life.

## Other html & dom loaders : 
* html-loader : very complete but export string and not a DOM node, so its a different usage
* dom-loader : create an extra container & doesnt work on latest webpack

## Happy coding!

For more stuffs follow me on [@makio64](https://twitter.com/makio64)

Cheers!

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
