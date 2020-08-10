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
      table.visibility="visible"
      loading.visibility="hidden"
      loading.marginTop="-5%"
  }
  if (table.visibility=="visible"){
    loading.visibility="hidden"
    loading.marginTop="-5%"
  }
}

function verification(){
  const first = document.getElementById("first").value
  const second = document.getElementById("second").value
  const select = document.getElementById('first');
  const option = select.children[select.selectedIndex];
  const texto = option.textContent;
  const titletext = document.getElementById("title1").innerHTML
  const select2 = document.getElementById('second');
  const option2 = select2.children[select2.selectedIndex];
  const texto2 = option2.textContent;
  const titletext2 = document.getElementById("title2").innerHTML
  if (titletext == texto && titletext2 == texto2 ||second == "Selecione uma CPU:" || second == "" || first == second || first == "" || first == "Selecione uma CPU:"){
    alert("Selecione uma opção, ou escolha duas distintas!")
  }
  else{
    readProcessor()
    readProcessor2()
    }
}
