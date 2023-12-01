const firebaseConfig = {
    apiKey: "AIzaSyCWIA7o86bgqvKI3PZac8yqmfsBy1p8uF8",
    authDomain: "nutrilicious-food.firebaseapp.com",
    databaseURL: "https://nutrilicious-food-default-rtdb.firebaseio.com",
    projectId: "nutrilicious-food",
    storageBucket: "nutrilicious-food.appspot.com",
    messagingSenderId: "116177267695",
    appId: "1:116177267695:web:7a8f3327ab830b0577a41a"
  };


firebase.initializeApp(firebaseConfig);

// reference your db

var SignDB  =  firebase.database().ref('nutrilicious-food');

document.getElementById('sign-in').addEventListener('submit', Sign);
document.getElementById('sign-up').addEventListener('submit',Signup)

function Sign(e){
    e.preventDefault();

    var name = getElementsVal('name');
    var pass = getElementsVal('pass');

    saveMessages(name, pass);

    //reset the form
    document.getElementById('sign-in').reset();
}

const saveMessages = (name, pass) =>{
    var newSign = SignDB.push();
    newSign.set({
        name : name,
        pass : pass,
    })
}


function Signup(e) {
    e.preventDefault();

    var name = getElementsVal('uname');
    var email = getElementsVal('email')
    var password = getElementsVal('password')

    SignUpDetails(name,email,password);

    document.getElementById('sign-up').reset();
}

const SignUpDetails = (name,email,password) =>{
    var newSignUp = SignDB.push();
    newSignUp.set({
        uname : name,
        email : email,
        password : password,
    })
}

const getElementsVal = (id) =>{
    return document.getElementById(id).value;
};

