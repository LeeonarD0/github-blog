import { styled } from "../../src/styles";

export const UserCardContainer = styled('div', {
    display: 'flex',
    backgroundColor: "$primaryShape", 
    padding: '32px 40px',
    width: '100%',
    alignItems: 'center',
    borderRadius: '10px',
    marginTop: '-80px',
    gap: '32px',

    img: {
        width: '140px',
        height: '148px',
        border: '2px solid $brand',
        borderRadius: '22px'
    },
})

export const UserCardContent = styled('div', {
    display: "flex",
    flex: 1,
    flexDirection: 'column',

    p: {
        fontWeight: 400,
        marginTop: '8px'
    }

    
})

export const UserCardNomeContainer = styled('div', {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%',
    
    a: {
        color: "$brand",
        textDecoration: 'none',
        textTransform: "uppercase",
        fontWeight: 'bold',
        fontSize: '12px',
    },

    svg: {
        marginLeft: '8px'
    }
})

export const UserCardInfo = styled('div', {
    display: "flex",
    alignItems: 'center',
    width: '100%',

    marginTop: '8px',

    gap: '50px',
    span: {
        display: "flex",
        alignItems: 'center',
        gap: '8px'
    }
})
