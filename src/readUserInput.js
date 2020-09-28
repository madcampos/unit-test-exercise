/**
 * @file Lê entrada de dados do usuário e retorna uma `Promise`.
 * @author madcampos <madcampos@outlook.com>
 * @version 1.0.0
 */
const readline = require('readline');

module.exports = function readUserInput(question) {
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
