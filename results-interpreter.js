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
      marker: {'color': 'purple'},
      type: 'scatter3d',
      x: eVal,
      y: sVal,
      z: pVal,
      mode:'markers',
      name: "Other scores"
    },
    {
      opacity:1,
      type: 'scatter3d',
      x: [5],
      y: [-2],
      z: [6],
      mode:'markers',
      marker: {'color': 'blue'},
      name: "Clinton"
    },
   {
      opacity:1,
      type: 'scatter3d',
      x: [6],
      y: [8],
      z: [7],
      mode:'markers',
      marker: {'color': 'red'},
      name: "Trump"
    },
   {
      opacity:1,
      type: 'scatter3d',
      x: [8],
      y: [-7.5],
      z: [-7],
      mode:'markers',
      marker: {'color': 'yellow'},
      name: "Johnson"
    },
    {
      opacity:1,
      type: 'scatter3d',
      x: [-7],
      y: [-8],
      z: [-7],
      mode:'markers',
      marker: {'color': 'green'},
      name: "Stein"
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
		  $(stage).append('<div class="topbar">' + "<b>Economic Policy:</b> " + e
      + "&nbsp;&nbsp;&nbsp;&nbsp;<b>Domestic Policy:</b> " + s
      + "&nbsp;&nbsp;&nbsp;&nbsp;<b>Foreign Policy:</b> " + p + '</div>');
      if (e < 0 && s > 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Authoritarian Leftist</div>');
      }
      if (e < 0 && s > 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Authoritarian Populist</div>');
      }
      if (e < 0 && s < 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Progressive Globalist</div>');
      }
      if (e < 0 && s < 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Democratic Socialist</div>');
      }
      if (e > 0 && s > 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Neoconservative</div>');
      }
      if (e > 0 && s > 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Isolationist Conservative</div>');
      }
      if (e > 0 && s < 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Neoliberal</div>');
      }
      if (e > 0 && s < 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Libertarian</div>');
      }
  }

  function displayResultsTiny() {
		  $(stage).append('<div class="topbar">' + "<b>Economic Policy:</b> " + e
      + "<br><b>Domestic Policy:</b> " + s + "<br><b>Foreign Policy:</b> " + p 
      + '</div>');
      if (e < 0 && s > 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Authoritarian Leftist</div>');
      }
      if (e < 0 && s > 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Authoritarian Populist</div>');
      }
      if (e < 0 && s < 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Progressive Globalist</div>');
      }
      if (e < 0 && s < 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Democratic Socialist</div>');
      }
      if (e > 0 && s > 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Neoconservative</div>');
      }
      if (e > 0 && s > 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Isolationist Conservative</div>');
      }
      if (e > 0 && s < 0 && p > 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Neoliberal</div>');
      }
      if (e > 0 && s < 0 && p < 0) {
          $(stage).append('<div class="spacer"></div><div class="topbar">You scored: Libertarian</div>');
      }
  }
}); //doc ready
