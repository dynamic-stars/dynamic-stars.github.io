import {SBServer} from "./sb-server.module.js";

window.regForm = document.getElementById("regform");
let formType = "log";
window.user = {
    name: document.getElementById("name"),
    number: document.getElementById("number"),
    age: document.getElementById("age"),
    course: document.getElementById("course"),
    gender: document.getElementById("gender")

};

const DB = new SBServer(
    "https://wagiunkbuiylyjplirba.supabase.co",
    "students",
    "sb_publishable_fSW0HQ2Swg8p4XzTHAKlRA_VjShom-J"
);

regForm.addEventListener("submit",async event=>{
    event.preventDefault();

    if(formType == "register") {
        await DB.get(
            `select=name&name=eq.${user.name.value.replace(" ","")}&tel=eq.${user.number.value}`
        ).then(async e=>{
            if(e.length == 0){
                regForm.innerHTML = `<img class="load" src="src/icon/load.png" width="100px">`;
                await DB.post({
                    name: user.name.value.replace(" ",""),
                    tel: user.number.value,
                    age: user.age.value,
                    gender: user.gender.value,
                    course: user.course.value
                }).then(()=>{
                    regForm.innerHTML = `<p class="little">You are now Registered</p>`;
                    goToITclass();
                    
                })
            } else {
                regForm.innerHTML = `
                <p class="little">This Account has been regitered.</p>
                <p class="little">Kindly Log in</p>`;
                lockReload();
            }
        }).catch(()=>{
            regForm.innerHTML = `
            <p class="little">Something went wrong.</p>
            <p class="little">Pls check your internet connection</p>`;
            lockReload();

        });
        
    } else {
        regForm.innerHTML = `<img class="load" src="src/icon/load.png" width="100px">`;
        await DB.get(
            `select=name&name=eq.${user.name.value.replace(" ","")}&tel=eq.${user.number.value}`
        ).then(async e=>{
            if(e.length >= 1){
                goToITclass()
            } else {
                regForm.innerHTML = `
                <p class="little">You have not been.</p>
                <p class="little">REGISTERERD</p>`;
                lockReload();
            }
        }).catch(()=>{
            regForm.innerHTML = `
            <p class="little">Something went wrong.</p>
            <p class="little">Pls check your internet connection</p>`;
            lockReload();
        });
        
    };
});

function lockReload() {
    document.addEventListener("click",()=>{
        window.location.reload();
    })
}

function goToITclass() {
    const ITclass = document.createElement("iframe");
    ITclass.style.position = "absolute";
    ITclass.src = "classes/IT-h6oreXAg5.html";
    ITclass.style.width = "100vw";
    ITclass.style.height = "100vh";
    document.body.append(ITclass);
    ITclass.style.left = 0;
    ITclass.style.top = 0;
    ITclass.frameBorder = 0;
}

window.toRegForm = ()=> {
    formType = "register";
    regForm.innerHTML = `
                <label class="title">Join Course</label>
                <br>
                <div class="details">
                    <label>Enter name:</label>
                    <br>
                    <input id="name" minlength="3" required placeholder="Full name">
                    <br>
                    <label>Enter Age:</label>
                    <br>
                    <input id="age" type="number" max="50" min="13" required placeholder="13 to 50">
                    <br>
                    <label>Whatsapp:</label>
                    <br>
                    <input id="number" type="tel" maxlength="15" minlength="11" required>
                    <br>
                    <label>Course to apply:</label>
                    <br>
                    <select id="course" required>
                        <option value="MS-office">MS-Office (1-month)</option>
                        <option value="Graphic">Graphic Design (2-month)</option>
                        <option value="Desktop">Desktop Publishing (3-month)</option>
                    </select>
                    <br>
                    <label>Gender:</label>
                    <br>
                    <select id="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br>
                    <p class="keyBtn">
                        <button type="submit">Register</button>
                        <button type="reset">Reset</button>
                    </p>
                </div>`;
                user = {
                    name: document.getElementById("name"),
                    number: document.getElementById("number"),
                    age: document.getElementById("age"),
                    course: document.getElementById("course"),
                    gender: document.getElementById("gender")
                
                };
}