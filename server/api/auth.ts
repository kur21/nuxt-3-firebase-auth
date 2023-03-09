export default defineEventHandler(async(event) => {
    console.log('---api/auth---');
    
    if(event.node.req.method !== 'POST') return 'Must be post request'
    const { user } = await readBody(event)
    console.log(user);
    return { updated: true }
})