export type GridItemType = {
    item: number | null; // Identificar qual item está sendo pego. Nesse caso pegarei pela posição do item no array.Ex: [0, 1, 2, 3, 4, 5]
    shown: boolean; // Saber se está ou não sendo exibida.
    permanentShown: boolean; // Deixar a carta exibida até reiniciar o jogo.
}