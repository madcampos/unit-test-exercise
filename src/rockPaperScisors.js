/**
 * @file Função de `Pedra, Papel e Tesoura`.
 * @author Seu nome aqui
 * @version 1.0.0
 */

/**
 * Lê a entrada dos dois jogadores e retorna quem ganhou.
 *
 * @param {string} player1 Entrada do jogador 1.
 * @param {string} player2 Entrada do jogador 2.
 *
 * @returns {string} O resultado.
 */
module.exports = function rockPaperScisors(player1, player2) {
	if (player1 === player2) {
		return 'Empate!';
	}

	if (player1 === 'pedra' && player2 === 'papel') {
		return 'Jogador 2 venceu!';
	}

	if (player1 === 'papel' && player2 === 'tesoura') {
		return 'Jogador 2 venceu!';
	}

	if (player1 === 'tesoura' && player2 === 'pedra') {
		return 'Jogador 2 venceu!';
	}

	return 'Jogador 1 venceu!';
};
