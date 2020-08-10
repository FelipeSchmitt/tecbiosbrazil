let videocards2 = []


function renderVC2(){
  const title2 = document.getElementById("title2")
  title2.innerHTML=""
  const release2 = document.getElementById("release2")
  release2.innerHTML=""
  const launch_price2 = document.getElementById("launch_price2")
  launch_price2.innerHTML=""
  const microarchitecture2 = document.getElementById("microarchitecture2")
  microarchitecture2.innerHTML=""
  const die_size2 = document.getElementById("die_size2")
  die_size2.innerHTML=""  
  const gpu_name2 = document.getElementById("gpu_name2")
  gpu_name2.innerHTML=""
  const manufacturing_process2 = document.getElementById("manufacturing_process2")
  manufacturing_process2.innerHTML=""
  const transistors2 = document.getElementById("transistors2")
  transistors2.innerHTML=""
  const thermal_design_power2 = document.getElementById("thermal_design_power2")
  thermal_design_power2.innerHTML=""
  const interface2 = document.getElementById("interface2")
  interface2.innerHTML=""
  const multi_gpu_support2 = document.getElementById("multi_gpu_support2")
  multi_gpu_support2.innerHTML=""
  const maximum_temperature2 = document.getElementById("maximum_temperature2")
  maximum_temperature2.innerHTML=""
  const technologies2 = document.getElementById("technologies2")
  technologies2.innerHTML=""
  const base_frequency2 = document.getElementById("base_frequency2")
  base_frequency2.innerHTML=""
  const boost_frequency2 = document.getElementById("boost_frequency2")
  boost_frequency2.innerHTML=""
  const cuda_cores2 = document.getElementById("cuda_cores2")
  cuda_cores2.innerHTML=""
  const texture_mapping_units2 = document.getElementById("texture_mapping_units2")
  texture_mapping_units2.innerHTML=""
  const rops2 = document.getElementById("rops2")
  rops2.innerHTML=""
  const pixel_fill_rate2 = document.getElementById("pixel_fill_rate2")
  pixel_fill_rate2.innerHTML=""
  const pixel_fill_rate_boost2 = document.getElementById("pixel_fill_rate_boost2")
  pixel_fill_rate_boost2.innerHTML=""
  const texture_fill_rate2 = document.getElementById("texture_fill_rate2")
  texture_fill_rate2.innerHTML=""
  const texture_fill_rate_boost = document.getElementById("texture_fill_rate_boost2")
  texture_fill_rate_boost.innerHTML=""
  const shaders2 = document.getElementById("shaders2")
  shaders2.innerHTML=""
  const brand_memory2 = document.getElementById("brand_memory2")
  brand_memory2.innerHTML=""
  const memory_type2 = document.getElementById("memory_type2")
  memory_type2.innerHTML=""
  const memory_size2 = document.getElementById("memory_size2")
  memory_size2.innerHTML=""
  const memory_speed2 = document.getElementById("memory_speed2")
  memory_speed2.innerHTML=""
  const memory_bus2 = document.getElementById("memory_bus2")
  memory_bus2.innerHTML=""
  const memory_bandwidth2 = document.getElementById("memory_bandwidth2")
  memory_bandwidth2.innerHTML=""
  const directx2 = document.getElementById("directx2")
  directx2.innerHTML=""
  const opengl2 = document.getElementById("opengl2")
  opengl2.innerHTML=""
  const opencl2 = document.getElementById("opencl2")
  opencl2.innerHTML=""
  const vulkan2 = document.getElementById("vulkan2")
  vulkan2.innerHTML=""
  const cuda2 = document.getElementById("cuda2")
  cuda2.innerHTML=""
  const mark3d2 = document.getElementById("mark3d2")
  mark3d2.innerHTML=""
  const pcmark2 = document.getElementById("pcmark2") 
  pcmark2.innerHTML=""
  for(videocard2 of videocards2){
    title2.appendChild(document.createTextNode(videocard2.title))
    release2.appendChild(document.createTextNode(videocard2.release))
    launch_price2.appendChild(document.createTextNode(videocard2.launch_price))
    microarchitecture2.appendChild(document.createTextNode(videocard2.microarchitecture))
    die_size2.appendChild(document.createTextNode(videocard2.die_size))
    gpu_name2.appendChild(document.createTextNode(videocard2.gpu_name))
    manufacturing_process2.appendChild(document.createTextNode(videocard2.manufacturing_process))
    transistors2.appendChild(document.createTextNode(videocard2.transistors))
    thermal_design_power2.appendChild(document.createTextNode(videocard2.thermal_design_power))
    interface2.appendChild(document.createTextNode(videocard2.interface))
    multi_gpu_support2.appendChild(document.createTextNode(videocard2.multi_gpu_support))
    maximum_temperature2.appendChild(document.createTextNode(videocard2.maximum_temperature))
    technologies2.appendChild(document.createTextNode(videocard2.technologies))
    base_frequency2.appendChild(document.createTextNode(videocard2.base_frequency))
    boost_frequency2.appendChild(document.createTextNode(videocard2.boost_frequency))
    cuda_cores2.appendChild(document.createTextNode(videocard2.cuda_cores))
    texture_mapping_units2.appendChild(document.createTextNode(videocard2.texture_mapping_units))
    rops2.appendChild(document.createTextNode(videocard2.rops))
    pixel_fill_rate2.appendChild(document.createTextNode(videocard2.pixel_fill_rate))
    pixel_fill_rate_boost2.appendChild(document.createTextNode(videocard2.pixel_fill_rate_boost))
    texture_fill_rate2.appendChild(document.createTextNode(videocard2.texture_fill_rate))
    texture_fill_rate_boost.appendChild(document.createTextNode(videocard2.texture_fill_rate_boost))
    shaders2.appendChild(document.createTextNode(videocard2.shaders))
    brand_memory2.appendChild(document.createTextNode(videocard2.brand_memory))
    memory_type2.appendChild(document.createTextNode(videocard2.memory_type))
    memory_size2.appendChild(document.createTextNode(videocard2.memory_size))
    memory_speed2.appendChild(document.createTextNode(videocard2.memory_speed))
    memory_bus2.appendChild(document.createTextNode(videocard2.memory_bus))
    memory_bandwidth2.appendChild(document.createTextNode(videocard2.memory_bandwidth))
    directx2.appendChild(document.createTextNode(videocard2.directx))
    opengl2.appendChild(document.createTextNode(videocard2.opengl))
    opencl2.appendChild(document.createTextNode(videocard2.opencl))
    vulkan2.appendChild(document.createTextNode(videocard2.vulkan))
    cuda2.appendChild(document.createTextNode(videocard2.cuda))
    mark3d2.appendChild(document.createTextNode(videocard2.mark3d))
    pcmark2.appendChild(document.createTextNode(videocard2.pcmark))
  }
    visibilitytable()
    document.getElementById("btn").disabled=false;
}

async function readVC2() {
    videocards2 = []
    const second = document.getElementById("second").value
    document.getElementById("btn").disabled = true;
    const logVC2 = await db.collection("videocards").where("value", "==", second).get()
    for (doc of logVC2.docs){
    videocards2.push({
      id: doc.id,
      title: doc.data().title,
      release: doc.data().release,
      launch_price: doc.data().launch_price,
      microarchitecture: doc.data().microarchitecture,
      die_size: doc.data().die_size,
      gpu_name: doc.data().gpu_name,
      manufacturing_process: doc.data().manufacturing_process,
      transistors: doc.data(). transistors,
      thermal_design_power: doc.data().thermal_design_power,
      interface: doc.data(). interface,
      multi_gpu_support: doc.data(). multi_gpu_support,
      maximum_temperature: doc.data(). maximum_temperature,
      technologies: doc.data(). technologies,
      base_frequency: doc.data(). base_frequency,
      boost_frequency: doc.data(). boost_frequency,
      cuda_cores: doc.data(). cuda_cores,
      texture_mapping_units: doc.data().texture_mapping_units,
      rops: doc.data().rops,
      pixel_fill_rate: doc.data().pixel_fill_rate,
      pixel_fill_rate_boost: doc.data().pixel_fill_rate_boost,
      texture_fill_rate: doc.data(). texture_fill_rate,
      texture_fill_rate_boost: doc.data().texture_fill_rate_boost,
      shaders: doc.data().shaders,
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
    renderVC2()
}

