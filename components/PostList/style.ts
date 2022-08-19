import { styled } from "../../src/styles";

export const PostListContainer = styled('div', {
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    marginTop: '48px',
})

export const PostItem = styled('article', {
    background: "$secondaryShape",
    padding: '32px',
    borderRadius: '10px',

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        width: '100%',
    },

    h3: {
        maxWidth: '283px'
    },

    p: {
        marginTop: '20px'
    }

})
