const Hapi = require('hapi');

console.log('Helloworld we are initializing..');

// init server
const server = new Hapi.Server({
    port: 8080,
    host: 'localhost'
});

// Starting server
async function start() {
    // start your server
    try {
        await server.start()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('Server running at: ', server.info.uri)
}

start()