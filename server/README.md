**This is where we will work on the back end part**

**Before running the code in here--
	1. Install VS Code(recommended) or any other editor on your machine. 
	2. Install node.js on your machine (We will be using npm='node package manager' to install other required packages. NPM will be install once you install node.js).
	
**To run the code in "server folder"--
	1. Open your console (terminal for Linux/Mac or cmd for Windows) in this folder.
	2. Type 'node app' and press Enter. (We are executing the file app.js)
		Once you hit enter, it'll show "server is running on 5000" on your terminal(since in app.js, 5000 is set as a default port).
	3. Open your browser and type "localhost:5000" and press Enter.
		"Hello World" will be printed.

**EXTRA important packages to work on the back-end for now--
	1. nodemon
		Instead of typing "node app" to get started, type "nodemon app". If it works, you can open your browser and work as usual. If it doesn't work, you need to install nodemon. 
		Open you terminal(make sure while working on the back-end, always open your terminal inside this folder) and type "sudo npm install nodemon -g" (use sudo for Linux/Mac, just ignore sudo if its windows...... '-g' means installing it globally so that we can use nodemon in all of our project.)
	
	2. express
		As in the file app.js, we have imported Express(the 'E' from mErn). So if you find some error, you must not have express installed. To install express, open your terminal and type "npm install express".

**How to check your installed packages(like nodemon, express, etc)
	1. Open the file 'package.json'.
	2. Under the dependencies, you should see your installed packages along with their version number. If you don't find it there, install those. 