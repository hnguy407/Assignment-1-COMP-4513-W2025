const supa = require('@supabase/supabase-js');

const supaUrl = 'https://xdazptsihkccawpccuhx.supabase.co'
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYXpwdHNpaGtjY2F3cGNjdWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNzg4ODMsImV4cCI6MjA1NTg1NDg4M30.sieRq6jNFIVu4dMXygNu4jrlHI_DkE7OEP5a-AdIGCk'

const supabase = supa.createClient(supaUrl, supaAnonKey);

const artists_endpoints = require('./artists-endpoints')
const counts_endpoints = require('./counts-endpoints')
const eras_endpoints = require('./eras-endpoints')
const galleries_endpoints = require('./galleries-endpoints')
const genres_endpoints = require('./genres-endpoints')
const paintings_endpoints = require('./paintings-endpoints')

function delegateRoutes(app){
    artists_endpoints.init(app,supabase);
    counts_endpoints.init(app,supabase);
    eras_endpoints.init(app,supabase);
    galleries_endpoints.init(app,supabase);
    genres_endpoints.init(app,supabase);
    paintings_endpoints.init(app,supabase);
}


module.exports =  {
    delegateRoutes
}