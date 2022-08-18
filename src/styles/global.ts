import { globalCss } from ".";



export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        background: "$background",
        color: "$text",
        fontFamily: "$default, sans-serif"
    },

    "h1, h2, h3, h4, h5, n6" : {
        color: '$title'
    }
})