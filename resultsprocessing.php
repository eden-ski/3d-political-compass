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
        <p id="text"><b><i>Economic Policy</i></b> refers to a government’s 
        control of monetary affairs. A 10 represents true capitalism. As 
        protectionism, taxes, regulations, and social programs expand, we 
        approach -10.</p>
        <p id="text"><b><i>Domestic Policy</i></b> refers to social issues 
        inside a country’s borders. More restrictions on immigration, marriage 
        equality, reproductive rights, free speech, and drugs would constitute 
        a 10. A -10 represents domestic social liberalism.</p>
        <p id="text"><b><i>Foreign Policy</i></b> spans international affairs, 
        such as wars abroad, regime change, and international trade. 
        Intervention increases as we approach 10.</p>
        <p id="text">To understand these axes a bit better, we can predict how
        the four major candidates of the 2016 Presidential election might have
        scored.</p>
        <p id="text"><b>Economic Policy: </b>Johnson, Clinton, and Trump have 
        all emphasized deregulation at different extremes. Johnson's utopia 
        would consist of a federal income tax of zero, while Clinton and Trump 
        have emphasized certain limited amounts of federal control (progressive 
        taxes and protectionism, respectively), but are in large part advocates 
        of the same neoliberal deregulation espoused by Johnson. Stein is the 
        furthest left economically.</p>
        <p id="text"><b>Domestic Policy: </b>Stein and Johnson are consistently 
        opposed to mass surveillance, deportations, and harsh social 
        restrictions, and therein earn low scores. Trump is on the entirely 
        opposite end of the spectrum, as evidenced by incresed immigration
        regulations, defunding Planned Parenthood, and threats to imprison 
        journalists. Clinton is a but harder to define, with socially liberal 
        views such as support for abortion and gay marriage, but a history that 
        has expanded mass surveillance (vote for the Patriot Act), imprisoned 
        non-violent drug offenders (support for the 1994 Crime Bill), and 
        attempted to restrict free expression (sponsorship of the Flag 
        Protection Act of 2005).</p>
        <p id="text"><b>Foreign Policy: </b>Johnson and Stein again find common 
        ground with their non-interventionist, anti-war outlooks, another 
        indicator that a progressive-libertarian alliance is not all that 
        far-fetched. Meanwhile, both Trump and Clinton endorse interventionism 
        to a large extent, be it “take out their families” for Trump or 
        initiating a No Fly Zone in Syria for Clinton.</p>
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
    <?php
    $e = $_GET['e'];
    $s = $_GET['s'];
    $p = $_GET['p'];
    $query = "INSERT INTO point ". "(e,s,p) ". "VALUES($e,$s,$p)";
    $retval = mysqli_query($db, $query);
    ?>
  </body>
</html>
