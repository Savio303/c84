meunuListArray = ["Pizza Vegetariana"
"Pizza de Frango"
"Pizza Portuguesa"
"Pizza Quatro Queijos"
"Pizza de Calabresa"
"Pizza Extravaganza"
]

function getMenu(){

    var htmldata="";

    menuListarray.sort();

    for(var i-0;i<cmenuListArray.length;i++){


    htmldata-htmldata+ menulistarray[i] + '<br>'
 }

  document.getElementById("displayMenu”").innerHTML = htmldata;
}

function addItem(){
    var htmldata;
    var imgtags='<img id-"iml" src-"images/pizzalng.png"/>'
    var item=document.getElementById("addItem”).value;
    menuListArray.sort();
    htmldata=""
    for(var i=0;i<menuÇistArray.lenght;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
    }


    function addTop(){
      var item=document.getElementById("addItem").value;
      menuListArray.push(item);
      addItem();
      
      }
      
    



