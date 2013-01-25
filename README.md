livingdocs-design
=================

This project contains the official designs for the project Livingdocs found under the following url: https://github.com/peyerluk/upfront  
It defines a setup for easily creating and testing a design.  

**Technical Setup**  

  1. Install node.js and npm (http://nodejs.org/)
  2. From the root of the project run 'npm install'
  3. Run 'sudo npm install -g nodemon'
  4. Setup bundler (http://gembundler.com/)
  5. Run 'bundle install'
  
  
In order to view a page run 'nodemon app.js' and navigate to the page (e.g. http://localhost:3000/public/bootstrap.html).  
In order run the automatic less and coffee compilers run 'bundle exec guard'.


**CSS**  
.less source files are under the folders designs/design-name/design-name.less  
Each design has a setup file with the name of the design.  
To add a new design to automatic less compiling add a respective line in the Guardfile.  
See designs/bootstrap for an example of how to setup a design with less.  
  
Compiled designs are in the public/css folder. If you don't want to use less, you can also just work with a css file directly (or work with a css compiler of your choosing).  

**HTML Pages**  
HTML Pages live in the folder public/  
The pages are there to test a design. You can do a style guide page or just a regular HTML page using a certain design.  
To view the pages, start node ('nodemon app.js') and navigate to your page (e.g. http://localhost:3000/public/bootstrap.html)  
You can also use underscore templates to use snippets in your design in order to keep your HTML markup slim. For an example see the boostrap.html page.  

**Snippets**  
Snippets to be used in HTML pages can be defined in coffee script.  
Just put a design-name.coffee file in the folder of a design and add a respective line to the Guardfile if you want to use automatic compilation.  
For an example of a .coffee snippets file, see designs/bootstrap/bootstrap.coffee  


