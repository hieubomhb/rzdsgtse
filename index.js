
// import service from './service/firebase'
// import { runInContext } from 'vm';
import {mxFirebase} from "./mx";
import "./mx.css";
import "./index.css";
import riot from "riot";
import"./tags/ghidanh.tag";
// import"./tags/upload.tag";
import route from "riot-route";
var firebaseConfig = {
    apiKey: "AIzaSyCyDVXo_l-1HZ-2jF9sRLxKdCDsiTQl1Zg",
    authDomain: "hieucamp2k19.firebaseapp.com",
    databaseURL: "https://hieucamp2k19.firebaseio.com",
    projectId: "hieucamp2k19",
    storageBucket: "hieucamp2k19.appspot.com",
    messagingSenderId: "212502961584",
    appId: "1:212502961584:web:94d37b0aaa45b4cf"
};

mxFirebase.init(firebaseConfig);

route.base("/");

route("/ghidanh", () =>{
    const signin = riot.mount("div#root","ghidanh");
    document.getElementById("sign-in-form").addEventListener("submit", async (e)=> {
        e.preventDefault(); 
        const email = document.getElementById("email").value; 
        const password = document.getElementById("password").value;
        
        try{ 
            await mxFirebase.signIn(email,password);
            
            // window.location.href = "/home";
        }
        catch(err) {
            document.getElementById("error-message").innerText = err.message
        }
    });     
});
// route.base("/");
// riot.mount("*", {})
// const navbar
// mx.checkaAuth().then(user => {
//     console.log(user.displayName);
// }).catch(() =>{

// });
// import riot from 'riot';
// import 'riot-hot-reaload'
// import route from 'riot-route'
// import './assets/Vector.png'
// import "./tags/navbar.tag"