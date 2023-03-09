export default defineEventHandler((event) => {
    console.log('---api/me---');
    // let cookie = getCookie(event, 'userCookie')
	// return cookie
    
    // console.log(event.context);
    return event.context.cookie
})
