        var margin = { top: 40, right: 20, bottom: 20, left: 40 };
		var radius = 4;

        var datasetGlobal = null;

        /**
        * create a graph from a dataset
        *
        * @param dataset the data to display
        **/
        function createGraph(dataset){

            console.log('createGraph with dataset = \n'+dataset);
            datasetGlobal = dataset;

            //Width and height

            // SET WIDTH
            var widthCardBody = document.getElementById('cardBody').offsetWidth;
            var cardBody = document.getElementById('cardBody');
            var padd = window.getComputedStyle(cardBody, null).getPropertyValue('padding-left');
            var iPadd = (parseInt(padd.replace(/px/,"")));
            var widthColCaract = document.getElementById('colCaract').offsetWidth;
            var w = widthCardBody - 2* iPadd - widthColCaract;

            // SET HEIGHT
            var heightWindow = window.innerHeight;
            var mainElem = document.getElementById('cardBody');
            var marginBottom = document.getElementById("mainDiv").style.marginBottom;
            var marginTop = document.getElementById("mainDiv").style.marginTop;
            var iMarginBottom = (parseInt(marginBottom.replace(/px/,"")))
            var iMarginTop = (parseInt(marginTop.replace(/px/,"")))
            var heightBodyCard = document.getElementById('cardBody').offsetHeight;
            var heightCard = document.getElementById('card').offsetHeight;
            var paddingBodyCard = iPadd;
            var h = heightWindow - 2*iMarginBottom - 2*iMarginTop - heightCard + heightBodyCard - 4*paddingBodyCard;

            // apply width & height to the elements
            document.getElementById('graphCard').style.width = w+'px';
            document.getElementById('graphCard').style.height = h+'px';
            document.getElementById('caractCard').style.height = h+'px';

             dataset = changeDatasetCoordinates(dataset, w, h);

            //Create SVG element
			var svg = d3.select("#graphCard").append("svg").attr({
        		width: w,
        		height: h,
        		id: 'svg'
			  });


			var xScale = d3.scale.linear()
         		.domain([0, d3.max(dataset, function (d) { return d.x + 10; })])
          		.range([margin.left, w - margin.right]);  // Set margins for x specific

      		// We're passing in a function in d3.max to tell it what we're maxing (y value)
     		var yScale = d3.scale.linear()
          		.domain([0, d3.max(dataset, function (d) { return d.y + 10; })])
          		.range([margin.top, h - margin.bottom]);  // Set margins for y specific


			var circleAttrs = {
          		cx: function(d) { return d.x; },
				cy: function(d) { return d.y; },
				r: radius,
				fill: 'gray',
				id: function(d) { return d.label; }
			};


			//Create SVG circle
			svg.selectAll("circle")
				.data(dataset)
				.enter()
				.append("circle")
				.attr(circleAttrs)  // Get attributes from circleAttrs var
				.on("click", handleMouseClick)
				.on("mouseover", handleMouseOver)
				.on("mouseout", handleMouseOut);
        }

        /**
        * change the scale of the coordinates
        *
        * @param dataset the data to change
        * @param maxWidth the width max of svg
        * @param maxHeight the height max of svg
        **/
        function changeDatasetCoordinates(dataset, maxWidth, maxHeight){

            console.log('changing dataset ...');

            for (var vector in dataset) {

                // save init coordinates
                dataset[vector].xInit = dataset[vector].x
                dataset[vector].yInit = dataset[vector].y

                // new position
                // [-1;1] -> [0;2] -> [0;1] -> * [maxW;maxH]
                dataset[vector].x = maxWidth * (parseFloat(dataset[vector].x) + 1) / 2;
                dataset[vector].y = maxHeight * (parseFloat(dataset[vector].y) + 1) / 2;
            }
            displayJSONinConsole(dataset);
            console.log('... dataset changed');
            return dataset;
        }

        /**
        * update the word display in the left card
        **/
        function updateCaractDisplay(word){

            console.log('update left card');

            // update word to display as card's title
            var card = document.getElementById('caractCardTitle');
            console.log(card.innerHTML);
            console.log(word.label);
            card.innerHTML = '<b>'+word.label+'</b>';

            // display in HTML table
            clearTabHTML();
            for (var key in word){

                // récupérer le nombre de lignes actuelles
                var nbLignes = document.getElementById("caractTable").rows.length;

                // inserer à la dernière ligne
                l = document.getElementById("caractTable").insertRow(nbLignes);

                // insérer 2 cellules
                c1 = l.insertCell();
                c2 = l.insertCell();

                // insérer le texte dans chaque cellule
                c1.appendChild(document.createTextNode(key));
                c2.appendChild(document.createTextNode(word[key]));
            }
        }

        /**
        * clear the HTML table which contains the caracteristics
        **/
        function clearTabHTML() {
            // effacer toutes les ligne

            tab = document.getElementById("caractTable");
            imax = tab.rows.length;
            for (var i=imax;i>0;i--){
                document.getElementById("caractTable").deleteRow(i-1);
            }
        }

        /**
        * get a dataset from a tsv file
        **/
        function readDataFromFile(){

            var dataset = Object;

            // get the file
            var fileData = document.getElementById("myFile");
           //console.log(fileData);
            var fileURL = fileData.files[0];
            var fileReader = new FileReader();

            // read the file, remove and create a new graph
            fileReader.onload = function(e) {
                var text = fileReader.result;
                dataset = tsvJSON(text);
               // console.log('tsvJSON:\n'+dataset);

                d3.select("svg").remove();
                createGraph(dataset);
            }
            fileReader.readAsText(fileURL, 'UTF-8');

           /*var dataset = d3.tsv("", function(data){
                //console.log('data:'+data);
                 data.forEach(function(d){
                   d.x = +d.x;
                   d.y = +d.y;
                 });
                // console.log('readData:'+dataset);
               });*/

           /* d3.tsv(text).then(function(dataset) {
              console.log(dataset[0]);
            });

            console.log('dataset:'+dataset);
            d3.select("svg").remove();
            createGraph([{'x':0.1,'y':0.5,'label':'leMot'}]);*/
        }

        //var tsv is the TSV file with headers
        function tsvJSON(tsv){

          var lines=tsv.split("\n");
          var result = [];
          var headers=lines[0].split("\t");

          for(var i=1;i<lines.length;i++){

              var obj = {};
              var currentline=lines[i].split("\t");

              for(var j=0;j<headers.length;j++){
                  obj[headers[j]] = currentline[j];
              }

              result.push(obj);
          }

          return result; //JavaScript object
          //return JSON.stringify(result); //JSON
        }

        function displayJSONinConsole(json){
            for (key in json){
                console.log(key+':'+json[key].x+'|'+json[key].y+'|'+json[key].label);
            }
        }


        // Colorize the nearest vector's neighboors form the selected point
        function ColorizeNearest(tab) {
            d3.selectAll("circle").attr({
                fill: "grey"
            });
            for (const i of tab) {
                console.log('i.label.toString():'+i.label.toString());
                d3.select("#" + i.label.toString())
                    .attr({
                        fill: "orange",
                    });
            }
        }

        // Give the euclidian distance between 2 vector
        function getDistanceEuclidienne(d1, d2) {
            return Math.sqrt(Math.pow(d2.y - d1.y, 2) + Math.pow(d2.x - d1.x, 2));
        }

        /**
        * Give a list of [limit] nearest vector from the vector [d]
        *
        * @param d a word
        * @param limit number of neighbours
        *
        * @return a list which contains all the neighbours
        **/
        function getNearest(d, limit) {

            // get the dataset
            var dataset  = datasetGlobal;
            console.log('dataset:'+dataset);

            if(limit > dataset.length){
                console.log('limit > dataset.length:'+limit+'>'+dataset.length);
                limit = dataset.length - 1;
            }
            var copy = dataset.filter(v => v != d);
            var nearObjectTab = [];
            var nearObject;
            var i = 0;

            while(i < limit){
                var nearIndex = null;
                for (const j of copy) {
                    var dist = getDistanceEuclidienne(d,j);
                    if(dist < nearIndex || nearIndex == null){
                        nearIndex = dist;
                        nearObject = j;
                    }
                }
                nearObjectTab.push(nearObject);
                var strKeyNearest = 'nearest'+(i+1);
                d[strKeyNearest] = nearObject.label;
                copy = copy.filter(v => v != nearObject);
                i++;
            }
            return nearObjectTab;
        }

        /**
        * get the data corresponding to the label
        *
        * @param label the label String to get
        *
        * @return the data corresponding to the label
        **/
        function labelToData(label){
            console.log('labelToData('+label+');');
            var d = null;
            var dataset = datasetGlobal;
            for (var i in dataset){
                console.log(i+':'+dataset[i].label);
                if (dataset[i].label == label){
                    d = dataset[i];
                    break;
                }
            }
            return d;
        }

        // select a point in the graph by function (not by clicking)
        // @param d is a word
        function selectPoint(d){

            // get the element SVG
            var svg = d3.select('#svg');

            // attention: cas particulier si on recherche en premier
            try {
                // get text of last selected
                var lastLabel = d3.select("text").text();
                console.log('lastLabel:'+lastLabel);

                // Retire la couleur de l'ancien point sélectionné
                d3.select("#c-selected").attr({
                    fill: "gray",
                    r: radius,
                    id: lastLabel.toString()
                });
            }
            catch(error) {
                console.log('first search');
            }

            // Retire le texte de l'ancien point sélectionné
            d3.select("#t-selected")
            .text(function() {return ''})
            .attr({
                id: 'lastSelected'
            });

            // Select text by id and then remove
           	d3.select("#lastSelected").remove();  // Remove text location

            // Colorise les n-1 voisins plus proche du point selectionné
            ColorizeNearest(getNearest(d, 2));

            // Use D3 to select element, change color and size. Plus set up a specific id for this point
            d3.select('#'+d.label).attr({
                fill: "blue",
                r: radius * 1.2,
                id: "c-selected"
            });

            // Specify where to put label of text
            svg.append("text").attr({
                id: "t-selected",  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return d.x - 30; },
                y: function() { return d.y - 15; }
            })
            .text(function() {
                return [d.label];  // Value of the text
            });

            updateCaractDisplay(d);

        }

        /**
        * select a word by searching it with the search bar
        **/
        function searchWord(){

            // get word from the input
            var word = document.getElementById('inputWord').value;
            console.log('wordToSearch:'+word);

            var d = labelToData(word);
            if (d == null){
                alert(word+' is not part of the dataset');
            }
            else{
                selectPoint(d);
            }
        }


        function handleMouseOver(d, i) {  // Add interactivity

					// get the element SVG
					var svg = d3.select('#svg');

					// Use D3 to select element, change color and size
					var idPoint = d3.select(this).attr('id');
                    if (idPoint != 'c-selected'){
                        d3.select(this).attr({
                        fill: "black",
                        r: radius * 1.2
                        });
					}

					// Specify where to put label of text
					svg.append("text").attr({
					id: "t" + d.label + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
						x: function() { return d.x - 30; },
						y: function() { return d.y - 15; }
					})
					.text(function() {
					return [d.label];  // Value of the text
					});
			}

        function handleMouseOut(d, i) {
            	// Use D3 to select element, change color back to normal
            	var idPoint = d3.select(this).attr('id');
                if (idPoint != 'c-selected'){
                    d3.select(this).attr({
                         fill: "gray",
                         r: radius
                    });
                }

            	// Select text by id and then remove
           		d3.select("#t" + d.label + "-" + i).remove();  // Remove text location
          	}

        function handleMouseClick(d, i){

            selectPoint(d);
        }