fetch("https://wagiunkbuiylyjplirba.supabase.co/rest/v1/students?select=id&limit=1",{
  headers: {
    "apikey": "sb_publishable_fSW0HQ2Swg8p4XzTHAKlRA_VjShom-J",
    "Authorization": "Bearer sb_publishable_fSW0HQ2Swg8p4XzTHAKlRA_VjShom-J"
  }
}).then(()=>{
  process.exit(0)
})
