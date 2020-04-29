
   CETEIcean.getHTML5("data/example.xml", function(data) {
       document.getElementById("TEI").appendChild(data)
       
       var substitutions = document.querySelectorAll("tei-subst")
       substitutions.forEach( function(subst){
            subst.querySelector("tei-add").addEventListener("click", function(){
                 var del = subst.querySelector("tei-del")
                 if (window.getComputedStyle(del).getPropertyValue("display") == "none") {
                     del.style.display = "inline"
                }  else {
                     del.style.display = "none"
                }
           })
       })

   })
