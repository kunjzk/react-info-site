# Overview

From the scrimba course: https://v2.scrimba.com/learn-react-c0e

## Deployment

https://sparkling-buttercream-0d7b06.netlify.app

## Takeaways

### React
- a frontend library/framework that provides reusable components for easy construction of a frontend
- ReactDOM.render() takes one parent element to render as the first argument, and a document element as the second
- parent element can contain multiple child elements
- parent element can be defined as a function

### JSX
- "Javascript XML": a way to embed HTML elements within Javasript code
``` 
// These are equivalent:

const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"

const element = <h1 className="header">This is JSX</h1>
// console.log(element) shows that a json has been produced by that one line of code describing the element
```

### Deployment using Netlify

No code deployment using Netlify drag and drop: https://www.netlify.com