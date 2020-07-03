function dropdown(){
    const menu = document.getElementById("menudrop").style
    if(menu.visibility =="hidden"){
       menu.marginTop="0";
       menu.marginBottom="20px"
       menu.visibility="visible";
    }else{
        menu.visibility="hidden";
        menu.marginTop="-70px"
    }
}