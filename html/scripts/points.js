var margin = { top: 40, right: 20, bottom: 20, left: 40 };
		var radius = 4;

        function createGraph(){

            //Width and height
            //var w = width;
            //var h = height;


            var hBody = document.getElementById('card').offsetHeight;
            //console.log('wBody:'+wBody);
            console.log('hBody:'+hBody);

            // SET WIDTH
            var widthCardBody = document.getElementById('cardBody').offsetWidth;
            var cardBody = document.getElementById('cardBody');
            var padd = window.getComputedStyle(cardBody, null).getPropertyValue('padding-left');
            console.log('padd:'+padd);
            var iPadd = (parseInt(padd.replace(/px/,"")));
            var w = widthCardBody - 2* iPadd;

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
            console.log('h='+heightWindow+'-'+iMarginBottom+'-'+iMarginTop+'-'+heightCard+'+'+heightBodyCard+'-2*'+paddingBodyCard);
            var h = heightWindow - 2*iMarginBottom - 2*iMarginTop - heightCard /*+ heightBodyCard*/ - 2*paddingBodyCard;
            console.log('var h after compute:'+h);

            document.getElementById('graphCard').style.width = w+'px';
            document.getElementById('graphCard').style.height = h+'px';

            var dataset = [
                  { x: 0.100, y: 0.110, label: 'hello' },
                { x: 0.83, y: 0.43, label: 'hello' },
                { x: 0.92, y: 0.28, label: 'hello' },
                { x: 0.49, y: 0.74, label: 'hello' },
                { x: 0.51, y: 0.10, label: 'hello' },
                { x: 0.25, y: 0.98, label: 'hello' },
                { x: 0.77, y: 0.30, label: 'hello' },
                { x: 0.20, y: 0.83, label: 'hello' },
                { x: 0.11, y: 0.63, label: 'hello' },
                { x:  0.4, y: 0.55, label: 'hello' },
                { x: 0.85, y: 0.100, label: 'hello' },
                { x: 0.60, y: 0.40, label: 'hello' },
                { x: 0.70, y: 0.80, label: 'hello' },
                { x: 0.10, y: 0.20, label: 'hello' },
                { x: 0.40, y: 0.50, label: 'hello' },
                { x: 0.25, y: 0.31, label: 'hello' }
              ];

             // set dataset
             console.log('dataset changed : '+dataset);
             for (var vector in dataset){
                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
             }

             dataset = changeDataset(dataset, w, h);
             console.log('dataset changed : '+dataset);
             for (var vector in dataset){
                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
             }


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
				r: radius
			};


			//Create SVG circle
			svg.selectAll("circle")
				.data(dataset)
				.enter()
				.append("circle")
				.attr(circleAttrs)  // Get attributes from circleAttrs var
				.on("mouseover", handleMouseOver)
				.on("mouseout", handleMouseOut);
        }

        function changeDataset(dataset, maxWidth, maxHeight){

            console.log('changing dataset ...');

            for (var vector in dataset) {
                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');

                // [-1;1] -> [0;2]
                dataset[vector].x = dataset[vector].x + 1;
                dataset[vector].y = dataset[vector].y + 1;

                // [0;2] -> [0;1]
                dataset[vector].x = dataset[vector].x / 2;
                dataset[vector].y = dataset[vector].y / 2;

                // new position
                dataset[vector].x = dataset[vector].x*maxWidth;
                dataset[vector].y = dataset[vector].y*maxHeight;

                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
            }

            console.log('... dataset changed');
            return dataset;
        }

        function handleMouseOver(d, i) {  // Add interactivity

					// get the element SVG
					var svg = document.getElementById('svg');
					var svg = d3.select('#svg');
                    console.log('svg:'+svg);

					// Use D3 to select element, change color and size
					d3.select(this).attr({
					fill: "orange",
					r: radius * 1.2
					});

					// Specify where to put label of text
					svg.append("text").attr({
					id: "t" + d.x + "-" + d.y + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
						x: function() { return d.x - 30; },
						y: function() { return d.y - 15; }
					})
					.text(function() {
					return [d.label];  // Value of the text
					});
			}

        function handleMouseOut(d, i) {
            	// Use D3 to select element, change color back to normal
            	d3.select(this).attr({
              		fill: "black",
             		 r: radius
           		});

            	// Select text by id and then remove
           		d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
          	}