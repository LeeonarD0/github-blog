import { styled } from "..";

export const InputContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '12px',
    width:'100%',
    marginTop: '72px',
    div: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
    },

    input: {
        width: '100%',
        height: '50px',
        background: '$background',
        border: `1px solid `,
        borderColor: '$border',
        borderRadius: '6px',

        color: "$placeholder",
        padding: '12px 16px',
        outline: 0 ,

        '&:focus': {
            border: '7x solid',
            boxShadow: '0 0 0 2px $colors$brand'
        }
    },

})