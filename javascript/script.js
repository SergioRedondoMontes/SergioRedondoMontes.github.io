var xmlhttp = new XMLHttpRequest();
        var url = "json/sistemas.json";
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                myFunction(myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function myFunction(arr) {

            var tabla = document.createElement("table");
            var element = document.getElementById("content");


            var tr = document.createElement("tr");
            var titulo = document.createElement("th");
            var titulo2 = document.createElement("th");
            var node = document.createTextNode("Display");
            var node2 = document.createTextNode("Link");
            tabla.appendChild(tr);
            tr.appendChild(titulo);
            tr.appendChild(titulo2);
            titulo.appendChild(node);
            titulo2.appendChild(node2);

            element.appendChild(tabla);
            tabla.setAttribute("border",1);


            var i;
            for (i = 0; i < arr.length; i++) {
                var fila = document.createElement("tr");
                var columna = document.createElement("td");
                var columna2 = document.createElement("td");
                var a = document.createElement("a");
                var node = document.createTextNode(arr[i].display);
                var node2 = document.createTextNode(arr[i].url);
                a.setAttribute("href",arr[i].url)
                tabla.appendChild(fila);
                fila.appendChild(columna);
                fila.appendChild(columna2);
                columna.appendChild(node);
                columna2.appendChild(a);
                a.appendChild(node2);
            }

        }
