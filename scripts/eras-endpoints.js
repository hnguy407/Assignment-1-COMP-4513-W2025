
const init = (app, supabase) => {
    //returns all eras
    app.get('/api/eras', async (req, resp) =>{
        const {data, error} = await supabase
            .from('eras')
            .select();
        resp.send(data);
    })

}



module.exports = {
    init
}