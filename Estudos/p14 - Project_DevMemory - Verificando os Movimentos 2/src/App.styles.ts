import styled from 'styled-components';

//margin: auto; -> coloca tudo no meio.

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto; 
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const infoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        align-items: center;
        margin-bottom: 50px;
        margin-right: 0;
    }
`; 

export const Logo = styled.a`
    display: block;
`;

export const info = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

//justify-content: flex-end; -> joga o conteúdo para o final do width.
export const gridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr)
    }
`;
