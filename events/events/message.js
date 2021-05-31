// this is a test event file
module.exports = (client) => {
    client.on('message', (message) => {
        console.log('message event success!')
    })
}