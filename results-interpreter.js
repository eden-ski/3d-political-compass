$(document).ready(function () { // jQuery detects state of readiness
  var stage = "#results";
  var e;
  var s;
  var p;
  var eVal = new Array();
  var sVal = new Array();
  var pVal = new Array();
  parseQueryString();
  if ($(window).width() < 960) {
    displayResultsTiny();
  }
  else {
     displayResults();
  }

  console.log(scores.length);

  if (scores.length != 1) {
    for (i = 0; i < scores.length; i++) {
        eVal[i] = scores[i].e;
    }
    for (i = 0; i < scores.length; i++) {
      sVal[i] = scores[i].s;
    }
    for (i = 0; i < scores.length; i++) {
      pVal[i] = scores[i].p;
    }
  }

  var data=[
    {
      opacity:1,
      type: 'scatter3d',
      x: [e],
      y: [s],
      z: [p],
      mode:'markers',
      marker: {'color': 'black'},
      name: "Your score"
    },
    {
      opacity: 0.2,
      marker: {'color': 'red'},
      type: 'scatter3d',
      x: eVal,
      y: sVal,
      z: pVal,
      mode:'markers',
      name: "Other scores"
    }
  ];

  var layout = {
    autosize: true,
    margin: {
      l: 30,
      r: 30,
      b: 30,
      t: 30,
      pad: 0
    },
    scene:{
      camera: {
        eye: {
          x: 1.88,
          y: -2.12,
          z: 0.96
        }
      },
      xaxis: {
        title: 'Economic',
        backgroundcolor: "rgb(214,214,214)",
        gridcolor: "black",
        showbackground: true,
        zerolinecolor: "black",
        nticks: 6,
        range: [-10, 10],
      },
      yaxis: {
        title: 'Social',
        backgroundcolor: "rgb(214,214,214)",
        gridcolor: "black",
        showbackground: true,
        zerolinecolor: "black",
        nticks: 6,
        range: [-10, 10],
      },
      zaxis: {
        title: 'Policy',
        backgroundcolor: "rgb(214,214,214)",
        gridcolor: "black",
        showbackground: true,
        zerolinecolor: "black",
        nticks: 6,
        range: [-10, 10],
      }
    },
  };
  Plotly.newPlot('graph', data, layout);
  window.onresize = function() {
    Plotly.Plots.resize( 'graph' );
  }

  function parseQueryString() {
    var url_string = window.location.href
    var url = new URL(url_string);
    e = url.searchParams.get("e");
    s = url.searchParams.get("s");
    p = url.searchParams.get("p");
  }

  function displayResults() {
		$(stage).append('<div class="topbar">' + "<b>Economic:</b> " + e
      + "&nbsp;&nbsp;&nbsp;&nbsp;<b>Social:</b> " + s
      + "&nbsp;&nbsp;&nbsp;&nbsp;<b>Policy:</b> " + p + '</div>');
  }

  function displayResultsTiny() {
		$(stage).append('<div class="topbar">' + "<b>Economic:</b> " + e
      + "<br><b>Social:</b> " + s + "<br><b>Policy:</b> " + p + '</div>');
  }
}); //doc ready
