var firebaseConfig = {
    apiKey: "AIzaSyCnz9pRjIRmc0-FHlvAKFmsaDXBtvpgWyE",
    authDomain: "tecbiosbrazilcompare-db.firebaseapp.com",
    databaseURL: "https://tecbiosbrazilcompare-db.firebaseio.com",
    projectId: "tecbiosbrazilcompare-db",
    storageBucket: "tecbiosbrazilcompare-db.appspot.com",
    messagingSenderId: "469558542940",
    appId: "1:469558542940:web:0ad29848c170bb687bdc99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()


function visibilitytable(){
    const table = document.getElementById("comparegpu").style
    const loading = document.getElementById("loading").style
    loading.visibility="visible"
    loading.marginTop="40px"
    if (table.visibility=="hidden"){
      setTimeout(function(){
        table.visibility="visible"
        loading.visibility="hidden"
        loading.marginTop="-40px"
      }, 250)
    }
    if (table.visibility=="visible"){
      loading.visibility="hidden"
      loading.marginTop="-40px"
    }
  }
  function verification(){
    const first = document.getElementById("first").value
    const select = document.getElementById('first');
    const option = select.children[select.selectedIndex];
    const texto = option.textContent;
    const titletext = document.getElementById("title1").innerHTML
    
    if (first == "Selecione uma GPU:" || first == "" || texto == titletext){
      alert("Selecione uma opção, ou outra diferente!")
    }
    else{
    readVC1()  
    visibilitytable()
    lorenipsen()
}
}