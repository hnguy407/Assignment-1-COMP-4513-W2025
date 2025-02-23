const jsonMessage = msg => {return {message : msg}}

const init = (app, supabase) => {
    //returns all artists
    app.get('/api/artists', async (req, resp) =>{
        const {data, error} = await supabase
            .from('artists')
            .select()
        resp.send(data);
    })

    //returns a single artist from provided artistId
    app.get('/api/artists/:artistid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('artists')
            .select()
            .eq('artistId', req.params.artistid)
            .maybeSingle()
        if(data){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`Could not find artist with artistId: ${req.params.artistid}`));
        }
    })
    
    //returns all artists whose last name begins with provided substring (case insensitive)
    app.get('/api/artists/search/:substring', async (req, resp) =>{
        const {data, error} = await supabase
            .from('artists')
            .select()
            .ilike('lastName', req.params.substring + '%')
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No artists found whose last name begins with ${req.params.substring}`))
        }
    })
    
    //returns all artists whose nationality begins with provided substring (case insensitive)
    app.get('/api/artists/country/:substring', async (req, resp) =>{
        const {data, error} = await supabase
            .from('artists')
            .select()
            .ilike('nationality', req.params.substring + '%')
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No artists found whose nationality begins with ${req.params.substring}`))
        }
    })
}



module.exports = {
    init
}