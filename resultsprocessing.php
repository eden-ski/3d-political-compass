<?php

/* configure this with your own information */
$db = mysqli_connect('host','username','password','database')
or die('Error connecting to MySQL server.');

?>
<html>
  <head>
    <title>Results</title>
    <link href="http://localhost/resultsstyle.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="device-width, initial-scale=1">
    <link rel="icon" href="data:,">
    <script src="http://localhost/jquery.js"></script>
    <script src="http://localhost/plotly-latest.min.js"></script>
    <script src="http://localhost//results-interpreter.js"></script>
  </head>
  <body>
    <div class="bluesSpacer"></div>
    <div id="mainBox">
      <div id="main">
        <div id="results"></div>
        <div class="spacer"></div>
        <p id="congrats">You finished the test! Now, let's see how
          your results stack up.</p>
        <div class="spacer"></div>
        <div id='graph'></div>
      </div>
      <br><br>
      <br><br>
      <br><br>
      <br><br>
      <br><br>
      <br><br>
    </div>
    <footer>
      <div id="copyrightParagraph">
        <div class="spacer"></div>
        <p id="suggestions">Feedback? Suggestions? Contact me at <a href
          ="mailto:edenski@uw.edu" style="color:#6794f6">edenski@uw.edu</a></p>
        <br>
        <p id="copyright">Last updated: Wednesday 29 July 2020</p>
        <p id="copyright">Copyright © 2020 Eden Chmielewski. All rights
          reserved.</p>
      </div>
    </footer>
    <?php
    $query = "SELECT * FROM point";
    mysqli_query($db, $query) or die('Error querying database.');
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_array($result);
    $v[] = $row;
    while ($row = mysqli_fetch_array($result)) {
      $row['e'] . ': ' . $row['s'] . ' ' . $row['p'] .'<br />';
      $v[] = $row;
    }
    ?>
    <script>
      var scores = <?= json_encode($v) ?>;
    </script>
    /*<?php
    $e = $_GET['e'];
    $s = $_GET['s'];
    $p = $_GET['p'];
    $query = "INSERT INTO point ". "(e,s,p) ". "VALUES($e,$s,$p)";
    $retval = mysqli_query($db, $query);
    if(! $retval ) {
       die('Could not enter data: ');
    }
    echo "Entered data successfully\n";
    ?>*/
  </body>
</html>
