'use strict'
const Hapi = require('@hapi/hapi');

// init server
const startServer = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    // get method

    server.route({
        method:'GET',
        path:'/user',
        handler: (request) => {
            return 'some test'
        }
    })

    await server.start()
    console.log(`server started at ${server.info.uri}`)


}


startServer()


