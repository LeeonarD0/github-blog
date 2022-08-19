import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
    theme: {
        colors: {
            background: '#071422',
            title: '#E7EDF4',
            text: '#AFC2D4',
            primaryShape: '#0B1B2B',
            secondaryShape: '#112131',
            brand: '#3294f8',
            span: '#7B96b2',
            border: '#1C2F41',
            placeholder: '#3A536B',
        },

        fonts: {
            default: "Nunito",
        }
    }
})