let processors2 = []

function renderProcessor2(){
  const title2 = document.getElementById("title2")
  title2.innerHTML=""
  const release2 = document.getElementById("release2")
  release2.innerHTML=""
  const launch_price2 = document.getElementById("launch_price2")
  launch_price2.innerHTML=""
  const manufacturing_process2 = document.getElementById("manufacturing_process2")
  manufacturing_process2.innerHTML=""
  const thermal_design_power2 = document.getElementById("thermal_design_power2") 
  thermal_design_power2.innerHTML=""
  const socket2 = document.getElementById("socket2")
  socket2.innerHTML=""
  const cores2 = document.getElementById("cores2")
  cores2.innerHTML=""
  const threads2 = document.getElementById("threads2")
  threads2.innerHTML=""
  const base_frequency2 = document.getElementById("base_frequency2")
  base_frequency2.innerHTML=""
  const turbo_frequency2 = document.getElementById("turbo_frequency2")
  turbo_frequency2.innerHTML=""
  const cache2 = document.getElementById("cache2")
  cache2.innerHTML=""
  const multiplier2 = document.getElementById("multiplier2")
  multiplier2.innerHTML=""
  const turbo_multiplier2 = document.getElementById("turbo_multiplier2")
  turbo_multiplier2.innerHTML=""
  const bus_speed2 = document.getElementById("bus_speed2")
  bus_speed2.innerHTML=""
  const instructions2 = document.getElementById("instructions2")
  instructions2.innerHTML=""
  const pci_express2 = document.getElementById("pci_express2")
  pci_express2.innerHTML=""
  const integrated_graphics2 = document.getElementById("integrated_graphics2")
  integrated_graphics2.innerHTML=""

  const maximum_temperature2 = document.getElementById("maximum_temperature2")
  maximum_temperature2.innerHTML=""
  
  for(processor2 of processors2){
      title2.appendChild(document.createTextNode(processor2.title))
      release2.appendChild(document.createTextNode(processor2.release))
      launch_price2.appendChild(document.createTextNode(processor2.launch_price))
      manufacturing_process2.appendChild(document.createTextNode(processor2.manufacturing_process))
      thermal_design_power2.appendChild(document.createTextNode(processor2.thermal_design_power))
      socket2.appendChild(document.createTextNode(processor2.socket))
      cores2.appendChild(document.createTextNode(processor2.cores))
      threads2.appendChild(document.createTextNode(processor2.threads))
      base_frequency2.appendChild(document.createTextNode(processor2.base_frequency))
      turbo_frequency2.appendChild(document.createTextNode(processor2.turbo_frequency))
      cache2.appendChild(document.createTextNode(processor2.cache))
      multiplier2.appendChild(document.createTextNode(processor2.multiplier))
      turbo_multiplier2.appendChild(document.createTextNode(processor2.turbo_multiplier))
      bus_speed2.appendChild(document.createTextNode(processor2.bus_speed))
      instructions2.appendChild(document.createTextNode(processor2.instructions))
      pci_express2.appendChild(document.createTextNode(processor2.pci_express))
      integrated_graphics2.appendChild(document.createTextNode(processor2.integrated_graphics))

      maximum_temperature2.appendChild(document.createTextNode(processor2.maximum_temperature))
  }
}

async function readProcessor2() {
    processors2 = []
    const second = document.getElementById("second").value
    const logPrc2 = await db.collection("processors").where("value", "==", second).get()
    for (doc of logPrc2.docs){
    processors2.push({
        id: doc.id,
        title: doc.data().title,
        release: doc.data(). release,
        launch_price: doc.data(). launch_price,
        manufacturing_process: doc.data(). manufacturing_process,
        thermal_design_power: doc.data(). thermal_design_power,
        socket: doc.data(). socket,
        cores: doc.data(). cores,
        threads: doc.data(). threads,
        base_frequency: doc.data(). base_frequency,
        turbo_frequency: doc.data(). turbo_frequency,
        cache: doc.data(). cache,
        multiplier: doc.data(). multiplier,
        turbo_multiplier: doc.data(). turbo_multiplier,
        bus_speed: doc.data(). bus_speed,
        instructions: doc.data(). instructions,
        pci_express: doc.data(). pci_express,
        integrated_graphics: doc.data(). integrated_graphics,
        
        maximum_temperature: doc.data(). maximum_temperature,

        })
    }
    renderProcessor2()
}
readProcessor2()