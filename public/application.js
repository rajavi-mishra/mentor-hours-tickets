// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCI5LlJJP3-7IS_M6HjFSuXoaSTRiRHfBI",
    authDomain: "bhep-a7e38.firebaseapp.com",
    databaseURL: "https://bhep-a7e38-default-rtdb.firebaseio.com",
    projectId: "bhep-a7e38",
    storageBucket: "bhep-a7e38.appspot.com",
    messagingSenderId: "10399782046",
    appId: "1:10399782046:web:8b07260d1fea6fa900978f",
    measurementId: "G-3ZTYYBQ32T"
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(config);
  
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref();
  
  // Get a reference to the recommendations object of your Firebase.
  // Note: this doesn't exist yet. But when we write to our Firebase using
  // this reference, it will create this object for us!
  var recommendations = myFirebase.child("recommendations");
  
  // Push our first recommendation to the end of the list and assign it a
  // unique ID automatically.
  recommendations.push({
      "title": "The danger of a single story",
      "presenter": "Chimamanda Ngozi Adichie",
      "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
  });