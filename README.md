livingdocs-design
=================

This project contains the official designs for the project Livingdocs found under the following url: [https://github.com/upfrontIO/livingdocs](https://github.com/upfrontIO/livingdocs)  
It defines a setup for easily creating and testing a design.  

###Technical Setup  

  1. Install node.js and npm (http://nodejs.org/)
  2. Install grunt using 'npm install -g grunt-cli'
  3. From the root of the project run 'npm install'
  4. Run 'grunt'
  
  
In order to view a page run 'node app.js' and navigate to the page (e.g. [http://localhost:3000/bootstrap.html](http://localhost:3000/bootstrap.html)).


###css  
A design can consist of multiple .less or .css files. All files must be stored inside the directory **css**.  
Each file inside the directory **css** will be compiled automatically.  
All files in the subdirectories won't compile directly. You can include them in your less files.  
If you want to put a file directly in the **css** directory but you don't want to compile it,  
you can add an underscore to the beginning of the filename.  
e.g.
    
    style.less               // will compile to style.css
    anotherFile.less         // will compile to anotherFile.css
    canBeCSS.css             // will copy to canBeCSS.css
    _doNotCompile.less       // won't compile
    directoriesWontCompile/  // all files in this directory won't compile
    	fasdf.less           // won't compile

    
Each file you want to use in a template has to be defined in the designs config.json file.  
The file must be declared in an array of the **"css"** key.  
e.g.

    {
      "css": ["/designs/design-name/css/style.css", "/designs/design-name/css/anotherFile.css"]
    }
 

See designs/bootstrap-atomic for an example of how to setup a design with less.
  
Compiled designs are in the public/designs/design-name/css folder. If you don't want to use less, you can also just work with a css file directly (or work with a css compiler of your choosing).  

###HTML Pages  
HTML Pages live in the folder public/  
The pages are there to test a design. You can do a style guide page or just a regular HTML page using a certain design.  
To view the pages, start node ('node app.js') and navigate to your page (e.g. [http://localhost:3000/bootstrap.html](http://localhost:3000/bootstrap.html))  
You can also use livingdocs templates to use snippets in your design in order to keep your HTML markup slim. For an example see the bootstrap.html page.  

###Snippets 
Snippets to be used in HTML pages can be defined in html files.  
Just put a snippet-name.html file in the snippets folder of a design if you want to use automatic compilation.  
For an example of a html file, see designs/bootstrap-atomic/snippets/main_and_sidebar.html  


