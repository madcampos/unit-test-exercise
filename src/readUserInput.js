/**
 * @file Lê entrada de dados do usuário e retorna uma `Promise`.
 * @author madcampos <madcampos@outlook.com>
 * @version 1.0.0
 */
const readline = require('readline');

/**
 * Lê e retorna uma entrada do usuário do console.
 *
 * @param {string} [question] O texto para exibir no console.
 *
 * @returns {string} A resposta do usuário.
 */
module.exports = function readUserInput(question = '') {
	return new Promise((resolve) => {
		const readlineInterface = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		readlineInterface.question(`${question} `, (answer) => {
			readlineInterface.close();

			resolve(answer);
		});
	});
};
