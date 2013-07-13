livingdocs-design
=================

This project contains the official designs for the project Livingdocs found under the following url: [https://github.com/upfrontIO/livingdocs](https://github.com/upfrontIO/livingdocs)  
It defines a setup for easily creating and testing a design.  

**Technical Setup**  

  1. Install node.js and npm (http://nodejs.org/)
  2. Install grunt using 'npm install -g grunt-cli'
  3. From the root of the project run 'npm install'
  4. Run 'grunt'
  
  
In order to view a page run 'node app.js' and navigate to the page (e.g. [http://localhost:3000/bootstrap.html](http://localhost:3000/bootstrap.html)).


**CSS**  
.less source files are under the folders **designs/design-name/css/**  
Each design has a setup file with the name **style.less**.  
See designs/bootstrap-atomic for an example of how to setup a design with less.  
  
Compiled designs are in the public/designs/design-name/css folder. If you don't want to use less, you can also just work with a css file directly (or work with a css compiler of your choosing).  

**HTML Pages**  
HTML Pages live in the folder public/  
The pages are there to test a design. You can do a style guide page or just a regular HTML page using a certain design.  
To view the pages, start node ('node app.js') and navigate to your page (e.g. [http://localhost:3000/bootstrap.html](http://localhost:3000/bootstrap.html))  
You can also use livingdocs templates to use snippets in your design in order to keep your HTML markup slim. For an example see the bootstrap.html page.  

**Snippets**  
Snippets to be used in HTML pages can be defined in html files.  
Just put a snippet-name.html file in the snippets folder of a design if you want to use automatic compilation.  
For an example of a html file, see designs/bootstrap-atomic/snippets/main_and_sidebar.html  


