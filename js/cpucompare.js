  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTRp7A9moWiuX3qwhABfELWVLdNKqSS0o",
    authDomain: "tecbiosbrazil-69430.firebaseapp.com",
    databaseURL: "https://tecbiosbrazil-69430.firebaseio.com",
    projectId: "tecbiosbrazil-69430",
    storageBucket: "tecbiosbrazil-69430.appspot.com",
    messagingSenderId: "893507120163",
    appId: "1:893507120163:web:b06d5544b3143308385596"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()

  function renderTasks(){
    const first = document.getElementById("first")
    first.innerHTML=""
    const firstelement = document.getElementById("first")
    firstelement.innerHTML=""
    const elementcreate = document.createElement("option")
    elementcreate.appendChild(document.createTextNode("Selecione uma CPU:"))
    first.appendChild(elementcreate)

    
    const second = document.getElementById("second")
    second.innerHTML=""
    const secondelement = document.createElement("option")
    secondelement.appendChild(document.createTextNode("Selecione uma CPU:"))
    second.appendChild(secondelement)
    for (processor of processors){
        const newItem = document.createElement("option")
        newItem.setAttribute("value", processor.value)
        newItem.appendChild(document.createTextNode(processor.title))
        first.appendChild(newItem)
        const newItem2 = document.createElement("option")
        newItem2.setAttribute("value", processor.value)
        newItem2.appendChild(document.createTextNode(processor.title))
        second.appendChild(newItem2)


        
    }
  }

async function readTasks() {
    processors = []
    const logTasks = await db.collection("processors").get()
    for (doc of logTasks.docs) {
    processors.push({
        id: doc.id,
        title: doc.data().title,
        value: doc.data().value,
        })
    }
    renderTasks()
}
readTasks()