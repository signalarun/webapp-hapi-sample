const Hapi = require('@hapi/hapi');
const Path = require('path');

console.log('Hello world we are initializing..');

// init server
const server = new Hapi.Server({
    port: 8080,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});

// defining routes
server.route({
    method : 'get',
    path : '/',
    handler : (request) => {
        return 'Hello world !'
    }
});

server.route({
    method: 'GET',
    path: '/picture.jpg',
    handler: function (request, h) {

        return h.file('picture.jpg');
    }
});

// Starting server
async function start() {
    // start your server
    try {
        await server.register(require('@hapi/inert'));
        await server.start()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('Server running at : ', server.info.uri)
}

start()