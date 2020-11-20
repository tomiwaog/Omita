const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: process.env.PORT });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();