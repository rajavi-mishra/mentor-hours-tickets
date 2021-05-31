import { firebase } from 'https://jspm.dev/@firebase/app'
import 'https://jspm.dev/@firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCI5LlJJP3-7IS_M6HjFSuXoaSTRiRHfBI",
    authDomain: "bhep-a7e38.firebaseapp.com",
    databaseURL: "https://bhep-a7e38-default-rtdb.firebaseio.com",
    projectId: "bhep-a7e38",
    storageBucket: "bhep-a7e38.appspot.com",
    messagingSenderId: "10399782046",
    appId: "1:10399782046:web:2f83bae7f078937a00978f",
    measurementId: "G-JFHQC8D6CC"
    };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
var my_database = db.ref().child("mentors");
my_database.on("value", function(mentors)
{
    var mentorHtml = "";
    if (mentors.exists()) {
        mentors.forEach(function(mentor) {
            mentorHtml += "<div class='card' style='width: 18rem;'> <div class='card-body'> <h5 class='card-title'>";
            mentorHtml += mentor.val().name;
            mentorHtml += "</h5><p class='card-text'>";
            mentorHtml += mentor.val().bio;
            mentorHtml += "</p></div></div>";
        });
        document.getElementById("slots").innerHTML = mentorHtml;
    }

});