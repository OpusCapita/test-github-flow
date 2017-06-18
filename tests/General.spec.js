const assert = require('assert');

describe('Example tests:', () => {
  it('sync true', () => {
    assert.equal(true, true);
  });

  it('async true', (done) => {
    setTimeout(() => {
        assert.equal(true, true);
        done();
    }, 100)
  });
});
