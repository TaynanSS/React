import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffffff;
    color: orange;
    padding: 20px;
    width: 100dvw;

    span {
        font-weight: bold;
        color: black;
    };

    .link {
        color: #0066ffff;

        &:hover {
            color: #FF0000;
        }
    }
`;

type BotaoProps = {
    small?: boolean; // Colocado a interrogação para dizer que é opcional. 
    bg: string;                // Caso remova a interrogação, dará aviso de erro em C.Botao que não tiver o small.
}
// Em font-size criado uma função props o nde busca a props small, e 
// então colocado uma condição, caso tenha a props small fique '15px' do contrário '30px'
// Para usar a props dentro da função, é necessário colocar ao lado da tag button a props BotaoProps
export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '15px' : '30px' }; 
    background-color: ${(props) => props.bg};
    border: 2px solid black;
`;