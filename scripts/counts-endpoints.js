const jsonMessage = msg => {return {message : msg}}
const query = 
    `genreId, genreName, description, wikiLink, eras!inner(*)`
    // no artistId, no galleryId, instead all fields in artists and galleries table.

const init = (app, supabase) => {
    //note: so a lot of these end points are easier to do in pure sql so 
    //I quickly learned how to make postgres functions. So Ill post the 
    //functions I wrote on supabase since I only need to call them here.

/*
create or replace function group_genres() returns table (genreName text, number_of_paintings int) as $$
  SELECT "genreName", count(*) as num_of_paintings
  FROM "painting-genres"
  INNER JOIN genres ON genres."genreId" = "painting-genres"."genreId" 
  GROUP BY genres."genreId" 
  ORDER BY num_of_paintings ASC
$$ language sql
*/
    //returns genre name and number of paints for each genre
    // ordered by number of paintings, ascending
    app.get('/api/counts/genres', async (req, resp) =>{
        const {data, error} = await supabase.rpc('group_genres')
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        resp.send(data)
    })



/*
create or replace function group_artists() returns table (artist_name text, number_of_paintings int) as $$ 
  SELECT CONCAT("firstName", ' ', "lastName"),
  COUNT(*) AS num_of_painting FROM paintings 
  INNER JOIN artists ON paintings."artistId" = artists."artistId"
  GROUP BY artists."artistId"
  ORDER BY num_of_painting DESC
$$ language sql;
 */

    //returns artist first & last name delimited with a space
    // and the number of paints the artist created. 
    // ordered by number of paintings, descending
    app.get('/api/counts/artists', async (req, resp) =>{
        const {data, error} = await supabase.rpc('group_artists')
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        resp.send(data)
    })


    
    //returns genre name and number of paints for each genre
    // ordered by number of paintings, descending
    // also filters removes entries below minimum count.
    app.get('/api/counts/topgenres/:min_count', async (req, resp) =>{
        const {data, error} = await supabase.rpc('group_genres')
        if(error){
            resp.send(jsonMessage('Something went wrong, please try something else'));
        }
        const matches = data.filter(obj => obj.number_of_paintings > req.params.min_count)
        if (matches.length > 0){
            resp.send(matches.reverse())
        }
        else{
            resp.send(jsonMessage(`No genres were found that have at least ${req.params.min_count} paintings`))
        }
    })

}



module.exports = {
    init
}