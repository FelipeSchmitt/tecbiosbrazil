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

  function renderTasks(){
    const first = document.getElementById("first")
    first.innerHTML=""
    const elementcreate = document.createElement("option")
    elementcreate.appendChild(document.createTextNode("Selecione uma CPU:"))
    first.appendChild(elementcreate)

    for (processor of processors){
        const newItem = document.createElement("option")
        newItem.setAttribute("value", processor.value)
        newItem.appendChild(document.createTextNode(processor.title))
        first.appendChild(newItem)
    }
  }

async function readTasks() {
    processors = []
    const logPrc1 = await db.collection("processors").get()
    for (doc of logPrc1.docs) {
    processors.push({
        id: doc.id,
        title: doc.data().title,
        value: doc.data().value,
        })
    }
    renderTasks()
}
readTasks()

function visibilitytable(){
    const table = document.getElementById("compare").style
    const loading = document.getElementById("loading").style
    loading.visibility="visible"
    loading.marginTop="30px"
    if (table.visibility=="hidden"){
      setTimeout(function(){
        table.visibility="visible"
        loading.visibility="hidden"
        loading.marginTop="-120px"
      }, 2000)
    }
    if (table.visibility=="visible"){
      loading.visibility="hidden"
      loading.marginTop="-120px"
    }
  }