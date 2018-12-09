# Overview
## What is the website for?
### This is a back-end website containing statistics about all members of the European Union.
### Purpose
The purpose of this project is to create a back-end website about the European Union or more precisely, the states that make it up. The purpose of the site is to provide users with detailed information regarding the countries that make up the European Union - information on their membership - year of accession, number of seats in the EU Parliament, etc., as well as information concerning only state identity as a sovereign, such as language and currency.
### How does it work?
The site works as follows: when the user views it, it sees a page containing 4 bar / pie charts and three other boxes containing different types of information. The user can see information about EU as a whole, or to choose a particular member country, and its choice will affect all bar charts and the information provided by them will only be directed to its choice. To make things as user-friendly as possible, a tour button is provided to users to guide them through all aspects of the page, explaining the details of what it serves and what information the selected page element provides.
## Features
### Navigation
The site consists of one page, but it contains rich information provided in the form of a short introduction and various bar / pie charts. For ease of use, the site is provided with a tour button that will guide it through all aspects of the page, explaining the details of what it serves and what information the selected element of the page provides.
### Eye catching
Colors and shades close to those of EU are used to make the site and more precisely to those used for the EU flag, so that the user can feel the spirit of the EU and that he is viewing and reading information and statistics concerning the EU. The background of the site is the sparkling stars of the alliance flag contrasting to a dark blue background.
### Information shown in the website
The statistics used on the website come from a database taken from (https://www.kaggle.com). Consumers can see information on the number of seats in the European Parliament as a whole and on each country, the number of Member States, the official language of each country, the currency, the year of accession and the number of Member States of the European Monetary Union. Information written as an introduction is own knowledge.
### Tech used
HTML, CSS and JavaScript were used to create the website. HTML is used to display the dashboard and CSS is used to style it. Bootstrap is also used to make the site responsive and user friendly layout. A Python app has been created to server the database content to the web interface. The data presented in the website is stored in a noSQL database (MongoDB). MondoDB is used to convert and present the data in JSON format. A Python based framework is used to serve our data from the server to the web based interface. The dashboard consists of several .js libraries that are used to perform different tasks in the making of and visualizing of charts -Dc.js, D3.js and Crossfilter.js. Dc.js is a wrapper library for D3.js which is used to make the plotting of the charts much easier. D3.js is used to render interactive charts and graphs based on the data. Crossfilter.js is used for data manipulation by enabling two way data bind.
### Media and information origins
The website provides its visitors with the opportunity to get to know the EU by numbers and statistics. Information regarding the EU is taken from the database provided in https://www.kaggle.com and the introduction is written using own knowledge and understanding of the EU.
### Testing
The codes used on the site are checked to ensure its proper functioning. The site has been tested on - Mozilla Firebox, Google Chrome, Opera.
### Running the site
The website can be found at https://whispering-cove-52005.herokuapp.com/ requires no other than a web browser such as Mozilla Firebox, Google Chrome, Opera, etc. which can read HTML, CSS and JavaScript.
