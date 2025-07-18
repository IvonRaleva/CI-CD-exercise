const assert = require('assert');
let fetch;
describe('About page', function() {
  before(async () => {
    fetch = (await import('node-fetch')).default;
  });

  it('Page title', async function() {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
