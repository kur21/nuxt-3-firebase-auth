export default defineEventHandler((event) => {
    console.log('---server middleware---');
    // console.log('CONTEXT', event.context);
    event.context.cookie = getCookie(event, 'userCookie')
})
