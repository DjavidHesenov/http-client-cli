# HTTP Client CLI Application

This simple CLI (Command Line Interface) HTTP client application built with JavaScript and Node.js allows you to easily perform HTTP requests directly from your terminal.

## Supported Methods

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

## Installation

### Clone the Repository

```bash
git clone https://github.com/DjavidHesenov/http-client-cli.git
cd http-client-cli
```

### Install Dependencies

```bash
npm install
```

### Make the Script Executable (optional but recommended)

```bash
chmod +x http_client.js
```

## Usage

### Basic Syntax

```bash
./http_client.js <METHOD> <URL> [options]
```

### Options

- `-h, --header <headers>` : Provide custom HTTP headers.
- `-b, --body <body>` : Provide the request body in JSON format.

### Examples

**GET Request:**

```bash
./http_client.js GET https://httpbin.org/get
```

**POST Request with Headers and Body:**

```bash
./http_client.js POST https://httpbin.org/post -h "Content-Type: application/json" -b '{"id": 1, "name": "Hello World"}'
```

## Testing

This application includes automated tests written with Jest to ensure reliability across all HTTP methods.

### Run Tests

```bash
npm test
```

### Expected Test Output

```
 PASS  ./http_client.test.js
  HTTP Client CLI
    ✓ GET request
    ✓ POST request
    ✓ PUT request
    ✓ PATCH request
    ✓ DELETE request

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Time:        11 s
```

## Dependencies

- [axios](https://github.com/axios/axios) - HTTP client
- [commander](https://github.com/tj/commander.js) - CLI argument parser
- [jest](https://jestjs.io/) - Testing framework

## Test Endpoint

Tests use [httpbin.org](https://httpbin.org/) to validate HTTP requests.
