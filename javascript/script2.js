var xmlhttp = new XMLHttpRequest();
        var url = "json/lenguaje.json";
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                myFunction(myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function myFunction(arr) {

            var section = document.createElement("section");
            var element = document.getElementById("content");
            
            
            element.appendChild(section);
            
            
            
            var i;
            for (i = 0; i < arr.length; i++) {
                
                var article = document.createElement("article");
                var div_imagen = document.createElement("div");
                var imagen = document.createElement("img");
                var div_texto = document.createElement("div");
                var a = document.createElement("a");
                var h2 = document.createElement("h2");
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                
                
                var titulo = document.createTextNode(arr[i].titulo);
                var fecha = document.createTextNode(arr[i].fecha);
                var descripcion = document.createTextNode(arr[i].descripcion);
                var miembros = document.createTextNode(arr[i].miembros);
                
                
                section.setAttribute("class", "post_section");
                div_imagen.setAttribute("class","post_image");
                a.setAttribute("target","_blank");
                a.setAttribute("href",arr[i].url); 
                imagen.setAttribute("class", "imageClass");
                imagen.setAttribute("src", arr[i].imagen);
                div_texto.setAttribute("class","post_content");
                
                
                
                section.appendChild(article);
                article.appendChild(div_imagen);
                div_imagen.appendChild(a);
                a.appendChild(imagen);
                article.appendChild(div_texto);
                div_texto.appendChild(h2);
                h2.appendChild(titulo);
                div_texto.appendChild(p1);
                p1.appendChild(descripcion);
                div_texto.appendChild(p2);
                p2.appendChild(miembros);
                div_texto.appendChild(p3);
                p3.appendChild(fecha);
            }

        }
