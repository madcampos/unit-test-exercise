/**
 * @file Teste da função `Pedra, Papel e Tesoura`.
 * @author Seu nome aqui
 * @version 1.0.0
 */
const tap = require('tap');
const rps = require('../src/rockPaperScisors.js');

tap.test('Verifica se há um empate', (assert) => {
	assert.equal(rps('pedra', 'pedra'), 'Empate!');
	assert.equal(rps('papel', 'papel'), 'Empate!');
	assert.equal(rps('tesoura', 'tesoura'), 'Empate!');

	assert.end();
});

tap.test('Verifica se o jogador 1 ganha', (assert) => {
	assert.equal(rps('pedra', 'tesoura'), 'Jogador 1 venceu!');
	assert.equal(rps('papel', 'pedra'), 'Jogador 1 venceu!');
	assert.equal(rps('tesoura', 'papel'), 'Jogador 1 venceu!');

	assert.end();
});

tap.test('Verifica se o jogador 2 ganha', (assert) => {
	assert.equal(rps('tesoura', 'pedra'), 'Jogador 2 venceu!');
	assert.equal(rps('pedra', 'papel'), 'Jogador 2 venceu!');
	assert.equal(rps('papel', 'tesoura'), 'Jogador 2 venceu!');

	assert.end();
});
