let processors = []


function renderProcessor(){
  const title1 = document.getElementById("title1")
  title1.innerHTML=""
  const release1 = document.getElementById("release1")
  release1.innerHTML=""
  const launch_price1 = document.getElementById("launch_price1")
  launch_price1.innerHTML=""
  const manufacturing_process1 = document.getElementById("manufacturing_process1")
  manufacturing_process1.innerHTML=""
  const thermal_design_power1 = document.getElementById("thermal_design_power1") 
  thermal_design_power1.innerHTML=""
  const socket1 = document.getElementById("socket1")
  socket1.innerHTML=""
  const cores1 = document.getElementById("cores1")
  cores1.innerHTML=""
  const threads1 = document.getElementById("threads1")
  threads1.innerHTML=""
  const base_frequency1 = document.getElementById("base_frequency1")
  base_frequency1.innerHTML=""
  const turbo_frequency1 = document.getElementById("turbo_frequency1")
  turbo_frequency1.innerHTML=""
  const cache1 = document.getElementById("cache1")
  cache1.innerHTML=""
  const multiplier1 = document.getElementById("multiplier1")
  multiplier1.innerHTML=""
  const turbo_multiplier1 = document.getElementById("turbo_multiplier1")
  turbo_multiplier1.innerHTML=""
  const bus_speed1 = document.getElementById("bus_speed1")
  bus_speed1.innerHTML=""
  const instructions1 = document.getElementById("instructions1")
  instructions1.innerHTML=""
  const pci_express1 = document.getElementById("pci_express1")
  pci_express1.innerHTML=""
  const integrated_graphics1 = document.getElementById("integrated_graphics1")
  integrated_graphics1.innerHTML=""
  const cinebench_r15_single_core1 = document.getElementById("cinebench_r15_single_core1")
  cinebench_r15_single_core1.innerHTML=""
  const cinebench_r15_multi_core1 = document.getElementById("cinebench_r15_multi_core1")
  cinebench_r15_multi_core1.innerHTML=""
  const passmark_single_thread1 = document.getElementById("passmark_single_thread1")
  passmark_single_thread1.innerHTML=""
  const passmark_multi_thread1 = document.getElementById("passmark_multi_thread1")
  passmark_multi_thread1.innerHTML=""
  const maximum_temperature1 = document.getElementById("maximum_temperature1")
  maximum_temperature1.innerHTML=""
  for(processor of processors){
      title1.appendChild(document.createTextNode(processor.title))
      release1.appendChild(document.createTextNode(processor.release))
      launch_price1.appendChild(document.createTextNode(processor.launch_price))
      manufacturing_process1.appendChild(document.createTextNode(processor.manufacturing_process))
      thermal_design_power1.appendChild(document.createTextNode(processor.thermal_design_power))
      socket1.appendChild(document.createTextNode(processor.socket))
      cores1.appendChild(document.createTextNode(processor.cores))
      threads1.appendChild(document.createTextNode(processor.threads))
      base_frequency1.appendChild(document.createTextNode(processor.base_frequency))
      turbo_frequency1.appendChild(document.createTextNode(processor.turbo_frequency))
      cache1.appendChild(document.createTextNode(processor.cache))
      multiplier1.appendChild(document.createTextNode(processor.multiplier))
      turbo_multiplier1.appendChild(document.createTextNode(processor.turbo_multiplier))
      bus_speed1.appendChild(document.createTextNode(processor.bus_speed))
      instructions1.appendChild(document.createTextNode(processor.instructions))
      pci_express1.appendChild(document.createTextNode(processor.pci_express))
      integrated_graphics1.appendChild(document.createTextNode(processor.integrated_graphics))
      cinebench_r15_single_core1.appendChild(document.createTextNode(processor.cinebench_r15_single_core))
      cinebench_r15_multi_core1.appendChild(document.createTextNode(processor.cinebench_r15_multi_core))
      passmark_single_thread1.appendChild(document.createTextNode(processor.passmark_single_thread))
      passmark_multi_thread1.appendChild(document.createTextNode(processor.passmark_multi_thread))
      maximum_temperature1.appendChild(document.createTextNode(processor.maximum_temperature))
  }
  document.getElementById("btn").disabled = false;
}


async function readProcessor() {
    processors = []
    const first = document.getElementById("first").value
    document.getElementById("btn").disabled = true;
    const logPrc = await db.collection("processors").where("value", "==", first).get()
    for (doc of logPrc.docs){
    processors.push({
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
        cinebench_r15_single_core: doc.data(). cinebench_r15_single_core,
        cinebench_r15_multi_core: doc.data(). cinebench_r15_multi_core,
        passmark_single_thread: doc.data(). passmark_single_thread,
        passmark_multi_thread: doc.data(). passmark_multi_thread,
        maximum_temperature: doc.data(). maximum_temperature,
        
        })
    }
    renderProcessor()
}
