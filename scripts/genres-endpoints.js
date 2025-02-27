const jsonMessage = msg => {return {message : msg}}
const query = 
    `genreId, genreName, description, wikiLink, eras!inner(*)`
    // no artistId, no galleryId, instead all fields in artists and galleries table.

const init = (app, supabase) => {
    //returns all genres
    app.get('/api/genres', async (req, resp) =>{
        const {data, error} = await supabase
            .from('genres')
            .select(query);
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        else{
            resp.send(data);
        }
    })

    //return a single genre from provided genreId
    app.get('/api/genres/:genresid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('genres')
            .select(query)
            .eq('genreId', req.params.genresid)
            .maybeSingle()
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        else if (!data){
            resp.send(jsonMessage(`Could not find a genre with genreId: ${req.params.genresid}`));
        }
        else{
            resp.send(data);
        }
    })



    //returns all genres uses in a given painting provided a paintingId ordered by genreName
    app.get('/api/genres/painting/:paintingid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('painting-genres')
            .select(`genres(genreId, genreName, description, wikiLink, eras!inner(*))`)
            // .select(`genres(${query})`)
            .eq('paintingId', req.params.paintingid)
            .order('genres(genreName)', {ascending: true})
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        else if(data.length === 0){
            resp.send(jsonMessage(`No genres were found from the provided paintingId: ${req.params.paintingid}`));
        }
        else {
            resp.send(data);
        }
    })

}



module.exports = {
    init
}