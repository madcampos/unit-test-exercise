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
 * @throws {Error} Erro caso as entradas sejam inválidas.
 */
module.exports = function rockPaperScisors(player1, player2) {
	if (typeof player1 !== 'string') {
		throw new Error('Entrada inválida');
	}

	if (typeof player2 !== 'string') {
		throw new Error('Entrada inválida');
	}

	const newPlayer1 = player1.trim().toLowerCase();
	const newPlayer2 = player2.trim().toLowerCase();

	if (newPlayer1 === '') {
		throw new Error('Entrada inválida');
	}

	if (newPlayer2 === '') {
		throw new Error('Entrada inválida');
	}

	const palavrasVálidas = ['pedra', 'papel', 'tesoura'];

	if (!palavrasVálidas.includes(newPlayer1)) {
		throw new Error('Entrada inválida');
	}

	if (!palavrasVálidas.includes(newPlayer2)) {
		throw new Error('Entrada inválida');
	}

	if (newPlayer1 === newPlayer2) {
		return 'Empate!';
	}

	if (newPlayer1 === 'pedra' && newPlayer2 === 'papel') {
		return 'Jogador 2 venceu!';
	}

	if (newPlayer1 === 'papel' && newPlayer2 === 'tesoura') {
		return 'Jogador 2 venceu!';
	}

	if (newPlayer1 === 'tesoura' && newPlayer2 === 'pedra') {
		return 'Jogador 2 venceu!';
	}

	return 'Jogador 1 venceu!';
};
