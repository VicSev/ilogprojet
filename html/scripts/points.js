function createGraph(width, height){

    //Width and height
    //var w = width;
    //var h = height;

    var winH = window.innerHeight; // for height
    var winW = window.innerWidth; // for width
    console.log('winW:'+winW);
    console.log('winH:'+winH);

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
          [ 0.5,     0.20 ],
          [ 0.480,   0.90 ],
          [ 0.250,   0.50 ],
          [ 0.100,   0.33 ],
          [ 0.330,   0.95 ],
          [ 0.410,   0.12 ],
          [ 0.475,   0.44 ],
          [ 0.25,    0.67 ],
          [ 0.85,    0.21 ],
          [ 0.220,   0.88 ],
          [ 0.700,   0.50 ],
          [ -0.4,  -0.56  ],
      ];

     // set dataset
     console.log('dataset changed : '+dataset);
     dataset = changeDataset(dataset, w, h);
     console.log('dataset changed : '+dataset);


    //Create SVG element
    var svg = d3.select("#graphCard")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", function(d) {
            return d[0];
       })
       .attr("cy", function(d) {
            return d[1];
       })
       .attr("r", function(d) {
            return 2;
       });
        }

    function changeDataset(dataset, maxWidth, maxHeight){

        console.log('changing dataset ...');

        for (var vector in dataset) {
            console.log('vector:'+vector+' ['+dataset[vector]+']');

            // [-1;1] -> [0;2]
            dataset[vector][0] = dataset[vector][0] + 1;
            dataset[vector][1] = dataset[vector][1] + 1;

            // [0;2] -> [0;1]
            dataset[vector][0] = dataset[vector][0] / 2;
            dataset[vector][1] = dataset[vector][1] / 2;

            // new position
            dataset[vector][0] = dataset[vector][0]*maxWidth;
            dataset[vector][1] = dataset[vector][1]*maxHeight;

            console.log('vector:'+vector+' ['+dataset[vector]+']');
        }

        console.log('... dataset changed');
        return dataset;
    }