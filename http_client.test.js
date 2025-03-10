const axios = require('axios');
const { execSync } = require('child_process');

describe('HTTP Client CLI', () => {
  const baseUrl = 'https://httpbin.org';

  test('GET request', () => {
    const output = execSync(`./http_client.js GET ${baseUrl}/get`).toString();
    expect(output).toContain('# Status: 200');
    expect(output).toContain('"url": "https://httpbin.org/get"');
  });

  test('POST request', () => {
    const body = '{"test":"post"}';
    const output = execSync(`./http_client.js POST ${baseUrl}/post -h "Content-Type: application/json" -b '${body}'`).toString();
    expect(output).toContain('# Status: 200');
    expect(output).toContain('"test": "post"');
  });

  test('PUT request', () => {
    const body = '{"test":"put"}';
    const output = execSync(`./http_client.js PUT ${baseUrl}/put -h "Content-Type: application/json" -b '${body}'`).toString();
    expect(output).toContain('# Status: 200');
    expect(output).toContain('"test": "put"');
  });

  test('PATCH request', () => {
    const body = '{"test":"patch"}';
    const output = execSync(`./http_client.js PATCH ${baseUrl}/patch -h "Content-Type: application/json" -b '${body}'`).toString();
    expect(output).toContain('# Status: 200');
    expect(output).toContain('"test": "patch"');
  });

  test('DELETE request', () => {
    const output = execSync(`./http_client.js DELETE ${baseUrl}/delete`).toString();
    expect(output).toContain('# Status: 200');
    expect(output).toContain('"url": "https://httpbin.org/delete"');
  });
});
