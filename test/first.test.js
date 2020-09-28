/**
 * @file Teste de exemplo.
 * @author madcampos <madcampos@outlook.com>
 * @version 1.0.0
 */
const tap = require('tap');

tap.test('Teste de exemplo', (assert) => {
	assert.ok(true);
	assert.type('uma string', 'string');
	assert.same({ a: 'A' }, { a: 'A' });
	assert.equal('A', 'A');
	assert.throws(() => {
		throw new Error('Erro');
	});

	assert.end();
});
