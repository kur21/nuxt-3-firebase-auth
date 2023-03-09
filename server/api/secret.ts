export default defineEventHandler((event) => {
    console.log('---api/secret---')
    if(!event.context.cookie) {
        // throw createError({
        //     statusCode: 401,
        //     statusMessage: 'FORBIDDEN',
        //     message: 'Must be signed in to read secret message',
        // })
        return 'Must be signed in to read secret message'
    }
    return 'This is a top secret message from the API'
})
