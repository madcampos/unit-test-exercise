/**
 * @file Arquivo inicial, contendo funções de leitura de entrada.
 * @author madcampos <madcampos@outlook.com>
 * @version 1.0.0
 */

const rps = require('./rockPaperScisors.js');
const readUserInput = require('./readUserInput.js');

(async () => {
	const player1 = await readUserInput('Jogador 1:');
	const player2 = await readUserInput('Jogador 2:');

	const result = rps(player1, player2);

	console.log(result);
})();
