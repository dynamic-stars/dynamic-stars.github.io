import { SBServer } from "./sb-server.module.js";

const donates = new SBServer(
    "https://wagiunkbuiylyjplirba.supabase.co",
    "updates",
    "sb_publishable_fSW0HQ2Swg8p4XzTHAKlRA_VjShom-J"
);

loadDnt();

async function loadDnt() {
    const output = document.getElementById("donations");
    output.innerHTML = "";
    const givers =  await donates.get("select=name,amount")
    .catch(()=>
    {   
        setTimeout(() => {
            loadDnt() 
        }, 100);
    }); // If network fails

    for(let giver of givers){
        output.innerHTML += `
        <p><strong>
            <small>${giver.name} -</small>
        </strong>
        <small>$${giver.amount}</small></p>`
    }
}