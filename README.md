# 3D Political Compass

The Political Compass is a website which uses responses to a set of 62 propositions to rate political ideology in a political spectrum with two axes: economic and social. Here, I propose an alternate model: a political compass with three axes. My primary reasoning behind this decision is that a two axis model fails to account for foreign policy. By taking the redesigned test and selecting how much you agree with each statement, your political ideology can be modeled in three dimensions. After finishing the quiz, users are directed to a results page where their political views are broken down, graphed, and explained in greater detail. Because my website implements a MySQL backend, you can compare your results to everyone else's!

The website is currently deployed at the following link: 3dcompass.tk

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
Windows or Linux machine
```

### Installing

On the web, servers use database engines -- programs that provide a standardized way to contain one or more databases. For this project, we'll use the relational type. These organize your data based on how it relates to each other. MySQL is an open-source relational database management system available for free download here: https://dev.mysql.com/downloads/

Once you have MySQL installed, you'll need to create a database schema. In the schema, you'll add a table, which will store everyone's scores. I called my schema `scores` and my table `point`. You'll add three columns to `point`, one for each axis on the compass. Their types will all be decimals. Make the query `ALTER TABLE point AUTO_INCREMENT=1`, as we're not concerned with unique users.

Servers send the data to the database, and the database saves it. A server can then retrieve it at any time. I recommend downloading Apache, which is a free and open-source cross-platform web server available for free download here: https://httpd.apache.org/download.cgi

Next, you'll want to download and configure PHP. PHP works with Apache through HTTP verbs. It's a server-side programming language that handles HTTP requests. In other words, you can send, retrieve, and display MySQL data using PHP and Apache. PHP and MySQL work together by connecting and querying data from the PHP script. In the script, we can make a connection to a MySQL by using built-in libraries e.g. MySQLi. Then we can query the database on that connection and retrieve or insert data. You can download PHP here: https://www.php.net/downloads.php

But before you can run PHP scripts on your machine, you'll need to configure it by modifying the `.ini` file. Configuration instructions are available here: https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-a-php-website-on-iis/configuring-step-2-configure-php-settings#22-configure-other-php-settings

Phew! That was a lot of work! Check that PHP and Apache are your machine's PATH system variables, and then you can download the code in the repo to your Apache's `htdocs` folder.

Now, you can go into `resultsprocessing.php` and configure the `mysqli_connect` function with your MySQL host, user, password, and database. Open `localhost` in a new tab, and you should have access to the website!

## Testing MySQL Connection By Running A Query

As a test, go to `localhost/resultsprocessing.php/?e=0&s=0&p=0` and reload your MySQL table. The first row should read [0, 0, 0].

### Breakdown

As you can see, we have the query string `/?e=0&s=0&p=0` at the end of our URL. This is treated as a score of (0, 0, 0) on the political compass test, and the point is inserted into our `point` table after the PHP file "reads" our URL. Taking additional tests will make additional queries and continue adding points to our MySQL table.

## Built With

* [Plotly.js](https://plotly.com/javascript/) - Graphing library
* [MySQL](https://www.mysql.com/) - Database management
* [jQuery](https://jquery.com/) - Event handling

## Authors

* **Eden Chmielewski** - [eden-ski](https://github.com/eden-ski)

## Acknowledgments

* Thank you to Angie and Eva for helping me brainstorm questions :)
