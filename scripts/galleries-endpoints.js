
const jsonMessage = msg => {return {message : msg}}

const init = (app, supabase) => {
    //returns all galleries
    app.get('/api/galleries', async (req, resp) =>{
        const {data, error} = await supabase
            .from('galleries')
            .select();
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        resp.send(data);
    })
    
    
    //returns a single gallery from galleryId params
    app.get('/api/galleries/:galleryid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('galleries')
            .select()
            .eq('galleryId', req.params.galleryid)
            .maybeSingle()
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        if(data){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`Could not find gallery with galleryId: ${req.params.galleryid}`));
        }
    })
    
    //returns all galleries whose gallery country begins with provided substring (case insensitive)
    app.get('/api/galleries/country/:substring', async (req, resp) =>{
        const {data, error} = await supabase
            .from('galleries')
            .select()
            .ilike('galleryCountry', req.params.substring + '%')
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No galleries found from country that starts with ${req.params.substring}`))
        }
    })

}



module.exports = {
    init
}