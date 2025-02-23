const jsonMessage = msg => {return {message : msg}}
const query = 
    `paintingId, imageFileName,title, shapeId, museumLink, 
    accessionNumber, copyrightText, description, excerpt,
    yearOfWork, width, height, medium, cost, MSRP, googleLink, 
    googleDescription, wikiLink, jsonAnnotations, 
    artists!inner(*), galleries!inner(*)`
    // no artistId, no galleryId, instead all fields in artists and galleries table.


const init = (app, supabase) => {
    //return all paintings sorted by title
    app.get('/api/paintings(/sort/title)?', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .order('title', {ascending: true})
        resp.send(data);
    })
    
    //return all paintings sorted by year
    //note: specs dont specify if ascending or descending, also
    //specs wants /sort/title|year so i just put /sort/title 
    //route above instead.
    app.get('/api/paintings/sort/year', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .order('yearOfWork', {ascending: true})
        resp.send(data);
    })

    //return a single painting from provided paintingId
    app.get('/api/paintings/:paintingid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .eq('paintingId', req.params.paintingid)
            .maybeSingle()
        if(data){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`Could not find a painting with paintingId: ${req.params.paintingid}`));
        }
    })

    //returns all paintings whose title contains provided substring (case insensitive)
    app.get('/api/paintings/search/:substring', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .ilike('title', "%" + req.params.substring + '%')
            .order('title', {ascending: true})
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings found whose title contains ${req.params.substring}`))
        }
    })

    //returns all paintings between two given years inclusive, ordered by year
    app.get('/api/paintings/years/:start_year/:end_year', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .gte('yearOfWork',req.params.start_year)
            .lte('yearOfWork',req.params.end_year)
            .order('yearOfWork', {ascending: true})
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings found produced between the years ${req.params.start_year}-${req.params.end_year}`))
        }
    })

    //returns all paintings in a given gallery from provided galleryId
    app.get('/api/paintings/galleries/:galleryid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .eq('galleryId', req.params.galleryid)
            .order('title', {ascending: true})
        if(data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings were found in the given galleryId: ${req.params.galleryid}`));
        }
    })

    //returns all paintings from a given artist from provided artistId
    app.get('/api/paintings/artist/:artistid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .eq('artistId', req.params.artistid)
            .order('title', {ascending: true})
        if(data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings were found from the given artistId: ${req.params.artistid}`));
        }
    })

    // returns all paintings by artists whose nationality begins with the provided substring
    app.get('/api/paintings/artists/country/:substring', async (req, resp) =>{
        const {data, error} = await supabase
            .from('paintings')
            .select(query)
            .ilike('artists.nationality', req.params.substring + '%')
            .order('title', {ascending: true})
        if (data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings found with artists whose nationality starts with ${req.params.substring}`))
        }
    })




    //returns all the paintings of a given genre
    app.get('/api/paintings/genre/:genreid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('painting-genres')
            .select(`paintings(paintingId, title, yearOfWork)`)
            .eq('genreId', req.params.genreid)
            .order('paintings(yearOfWork)', {ascending: true})
        if(data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings were found from the provided genreId: ${req.params.genreid}`));
        }
    })

    
    //returns all the paintings for a given era
    app.get('/api/paintings/era/:eraid', async (req, resp) =>{
        const {data, error} = await supabase
            .from('painting-genres')
            .select(`paintings!inner(paintingId, title, yearOfWork), genres!inner()`)
            .eq('genres.eraId', req.params.eraid)
            .order('paintings(yearOfWork)', {ascending: true})
        if(data.length > 0){
            resp.send(data);
        }
        else{
            resp.send(jsonMessage(`No paintings were found from the provided eraId: ${req.params.eraid}`));
        }
    })



}



module.exports = {
    init
}