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

  function renderVC(){
    const first = document.getElementById("first")
    first.innerHTML=""
    const firstelement = document.getElementById("first")
    firstelement.innerHTML=""
    const elementcreate = document.createElement("option")
    elementcreate.appendChild(document.createTextNode("Selecione uma GPU:"))
    first.appendChild(elementcreate)


    const second = document.getElementById("second")
    second.innerHTML=""
    const secondelement = document.createElement("option")
    secondelement.appendChild(document.createTextNode("Selecione uma GPU:"))
    second.appendChild(secondelement)
    for (videocard of videocards){
        const newItem = document.createElement("option")
        newItem.setAttribute("value", videocard.value)
        newItem.appendChild(document.createTextNode(videocard.title))
        first.appendChild(newItem)
        const newItem2 = document.createElement("option")
        newItem2.setAttribute("value", videocard.value)
        newItem2.appendChild(document.createTextNode(videocard.title))
        second.appendChild(newItem2)


        
    }
  }

async function readVC() {
    videocards = []
    const logVCS = await db.collection("videocards").get()
    for (doc of logVCS.docs) {
    videocards.push({
        id: doc.id,
        title: doc.data().title,
        value: doc.data().value,
        })
    }
    renderVC()
}
readVC()

function visibilitytable(){
  const table = document.getElementById("compare").style
  const loading = document.getElementById("loading").style
  loading.visibility="visible"
  loading.marginTop="30px"
  if (table.visibility=="hidden"){
    setTimeout(function(){
      table.visibility="visible"
      loading.visibility="hidden"
      loading.marginTop="-5%"
    }, 2000)
  }
  if (table.visibility=="visible"){
    loading.visibility="hidden"
    loading.marginTop="-5%"
  }
}