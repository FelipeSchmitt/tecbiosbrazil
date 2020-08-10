let videocards = []


function renderVC1(){
  const title1 = document.getElementById("title1")
  title1.innerHTML=""
  const release1 = document.getElementById("release1")
  release1.innerHTML=""
  const launch_price1 = document.getElementById("launch_price1")
  launch_price1.innerHTML=""
  const microarchitecture1 = document.getElementById("microarchitecture1")
  microarchitecture1.innerHTML=""
  const die_size1 = document.getElementById("die_size1")
  die_size1.innerHTML=""
  const gpu_name1 = document.getElementById("gpu_name1")
  gpu_name1.innerHTML=""
  const manufacturing_process1 = document.getElementById("manufacturing_process1")
  manufacturing_process1.innerHTML=""
  const transistors1 = document.getElementById("transistors1")
  transistors1.innerHTML=""
  const thermal_design_power1 = document.getElementById("thermal_design_power1")
  thermal_design_power1.innerHTML=""
  const interface1 = document.getElementById("interface1")
  interface1.innerHTML=""
  const multi_gpu_support1 = document.getElementById("multi_gpu_support1")
  multi_gpu_support1.innerHTML=""
  const maximum_temperature1 = document.getElementById("maximum_temperature1")
  maximum_temperature1.innerHTML=""
  const technologies1 = document.getElementById("technologies1")
  technologies1.innerHTML=""
  const base_frequency1 = document.getElementById("base_frequency1")
  base_frequency1.innerHTML=""
  const boost_frequency1 = document.getElementById("boost_frequency1")
  boost_frequency1.innerHTML=""
  const cuda_cores1 = document.getElementById("cuda_cores1")
  cuda_cores1.innerHTML=""
  const texture_mapping_units1 = document.getElementById("texture_mapping_units1")
  texture_mapping_units1.innerHTML=""
  const rops1 = document.getElementById("rops1")
  rops1.innerHTML=""
  const pixel_fill_rate1 = document.getElementById("pixel_fill_rate1")
  pixel_fill_rate1.innerHTML=""
  const pixel_fill_rate_boost1 = document.getElementById("pixel_fill_rate_boost1")
  pixel_fill_rate_boost1.innerHTML=""
  const texture_fill_rate1 = document.getElementById("texture_fill_rate1")
  texture_fill_rate1.innerHTML=""
  const texture_fill_rate_boost = document.getElementById("texture_fill_rate_boost1")
  texture_fill_rate_boost.innerHTML=""
  const shaders1 = document.getElementById("shaders1")
  shaders1.innerHTML=""
  const brand_memory1 = document.getElementById("brand_memory1")
  brand_memory1.innerHTML=""
  const memory_type1 = document.getElementById("memory_type1")
  memory_type1.innerHTML=""
  const memory_size1 = document.getElementById("memory_size1")
  memory_size1.innerHTML=""
  const memory_speed1 = document.getElementById("memory_speed1")
  memory_speed1.innerHTML=""
  const memory_bus1 = document.getElementById("memory_bus1")
  memory_bus1.innerHTML=""
  const memory_bandwidth1 = document.getElementById("memory_bandwidth1")
  memory_bandwidth1.innerHTML=""
  const directx1 = document.getElementById("directx1")
  directx1.innerHTML=""
  const opengl1 = document.getElementById("opengl1")
  opengl1.innerHTML=""
  const opencl1 = document.getElementById("opencl1")
  opencl1.innerHTML=""
  const vulkan1 = document.getElementById("vulkan1")
  vulkan1.innerHTML=""
  const cuda1 = document.getElementById("cuda1")
  cuda1.innerHTML=""
  const mark3d1 = document.getElementById("mark3d1")
  mark3d1.innerHTML=""
  const pcmark1 = document.getElementById("pcmark1") 
  pcmark1.innerHTML=""

  for(videocard of videocards){
      title1.appendChild(document.createTextNode(videocard.title))
      release1.appendChild(document.createTextNode(videocard.release))
      launch_price1.appendChild(document.createTextNode(videocard.launch_price))
      microarchitecture1.appendChild(document.createTextNode(videocard.microarchitecture))
      die_size1.appendChild(document.createTextNode(videocard.die_size))
      gpu_name1.appendChild(document.createTextNode(videocard.gpu_name))
      manufacturing_process1.appendChild(document.createTextNode(videocard.manufacturing_process))
      transistors1.appendChild(document.createTextNode(videocard.transistors))
      thermal_design_power1.appendChild(document.createTextNode(videocard.thermal_design_power))
      interface1.appendChild(document.createTextNode(videocard.interface))
      multi_gpu_support1.appendChild(document.createTextNode(videocard.multi_gpu_support))
      maximum_temperature1.appendChild(document.createTextNode(videocard.maximum_temperature))
      technologies1.appendChild(document.createTextNode(videocard.technologies))
      base_frequency1.appendChild(document.createTextNode(videocard.base_frequency))
      boost_frequency1.appendChild(document.createTextNode(videocard.boost_frequency))
      cuda_cores1.appendChild(document.createTextNode(videocard.cuda_cores))
      texture_mapping_units1.appendChild(document.createTextNode(videocard.texture_mapping_units))
      rops1.appendChild(document.createTextNode(videocard.rops))
      pixel_fill_rate1.appendChild(document.createTextNode(videocard.pixel_fill_rate))
      pixel_fill_rate_boost1.appendChild(document.createTextNode(videocard.pixel_fill_rate_boost))
      texture_fill_rate1.appendChild(document.createTextNode(videocard.texture_fill_rate))
      texture_fill_rate_boost.appendChild(document.createTextNode(videocard.texture_fill_rate_boost))
      shaders1.appendChild(document.createTextNode(videocard.shaders))
      brand_memory1.appendChild(document.createTextNode(videocard.brand_memory))
      memory_type1.appendChild(document.createTextNode(videocard.memory_type))
      memory_size1.appendChild(document.createTextNode(videocard.memory_size))
      memory_speed1.appendChild(document.createTextNode(videocard.memory_speed))
      memory_bus1.appendChild(document.createTextNode(videocard.memory_bus))
      memory_bandwidth1.appendChild(document.createTextNode(videocard.memory_bandwidth))
      directx1.appendChild(document.createTextNode(videocard.directx))
      opengl1.appendChild(document.createTextNode(videocard.opengl))
      opencl1.appendChild(document.createTextNode(videocard.opencl))
      vulkan1.appendChild(document.createTextNode(videocard.vulkan))
      cuda1.appendChild(document.createTextNode(videocard.cuda))
      mark3d1.appendChild(document.createTextNode(videocard.mark3d1))
      pcmark1.appendChild(document.createTextNode(videocard.pcmark1))


    }
    document.getElementById("btn").disabled=false;
}

async function readVC1() {
    videocards = []
    const first = document.getElementById("first").value
    document.getElementById("btn").disabled = true;
    const logVC = await db.collection("videocards").where("value", "==", first).get()
    for (doc of logVC.docs){
    videocards.push({
        id: doc.id,
        title: doc.data().title,
        release: doc.data().release,
        launch_price: doc.data().launch_price,
        microarchitecture: doc.data().microarchitecture,
        die_size: doc.data(). die_size,
        gpu_name: doc.data().gpu_name,
        manufacturing_process: doc.data().manufacturing_process,
        transistors: doc.data(). transistors,
        interface: doc.data(). interface,
        multi_gpu_support: doc.data(). multi_gpu_support,
        base_frequency: doc.data(). base_frequency,
        boost_frequency: doc.data(). boost_frequency,
        cuda_cores: doc.data(). cuda_cores,
        texture_mapping_units: doc.data(). texture_mapping_units,
        rops: doc.data(). rops,
        pixel_fill_rate: doc.data(). pixel_fill_rate,
        pixel_fill_rate_boost: doc.data(). pixel_fill_rate_boost,
        texture_fill_rate: doc.data(). texture_fill_rate,
        texture_fill_rate_boost: doc.data().texture_fill_rate_boost,
        shaders: doc.data(). shaders,
        brand_memory: doc.data(). brand_memory,
        memory_type: doc.data(). memory_type,
        memory_size: doc.data(). memory_size,
        memory_speed: doc.data(). memory_speed,
        memory_bus: doc.data().memory_bus,
        memory_bandwidth: doc.data(). memory_bandwidth,
        directx: doc.data(). directx,
        opengl: doc.data(). opengl,
        opencl: doc.data(). opencl,
        vulkan: doc.data(). vulkan,
        cuda: doc.data(). cuda,
        mark3d: doc.data(). mark3d,
        pcmark: doc.data(). pcmark,

    })
}
    renderVC1()

}



