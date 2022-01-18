/**
 * Bundling: Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.
 * 
 * CodeSplitting: Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify which can create multiple bundles that can be dynamically loaded at runtime. Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app.
 */

function add(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

function divide(a, b) {
    return a/b
}

function multiply(a, b) {
    return a*b
}


export let math = {add, minus, divide, multiply};
