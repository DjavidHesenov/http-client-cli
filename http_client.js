#!/usr/bin/env node

const { program } = require('commander');
const axios = require('axios');

program
  .argument('<method>', 'HTTP method (GET, POST, PUT, PATCH, DELETE)')
  .argument('<url>', 'URL to request')
  .option('-h, --header <headers...>', 'HTTP headers')
  .option('-b, --body <body>', 'Request body')
  .action(async (method, url, options) => {
    try {
      const headers = {};

      if (options.header) {
        options.header.forEach(header => {
          const [key, ...valueParts] = header.split(':');
          headers[key.trim()] = valueParts.join(':').trim();
        });
      }

      const requestConfig = {
        method: method.toLowerCase(),
        url,
        headers,
        data: options.body ? JSON.parse(options.body) : undefined,
        validateStatus: () => true, // always resolve
      };

      const response = await axios(requestConfig);

      console.log(`# Status: ${response.status}`);
      console.log('# Response:');
      console.log(typeof response.data === 'object' ? JSON.stringify(response.data, null, 2) : response.data);

    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse();
