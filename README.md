# Primer

A getting-started kit for making your first interesting project with a Javascript frontend
talking to a Python Flask backend.

### Requirements
Python 3 with PIP and a modern browser. The frontend will probably not render or work 
properly in IE or older browsers in general.

### Tools
All these tools are cross-platform and works great on both Linux and Windows.
* IDE/editor - any modern one that can handle Python, HTML and Javascript will do.
I recommend [VSCode](https://code.visualstudio.com/) or, for true enlightenment, [Emacs](https://www.gnu.org/software/emacs).
* Insomnia - Get it [here](https://insomnia.rest/). Makes sending POST, GET and any other request easy.
* In-browser dev-tools - If you have Firefox or Chrome then you have their excellent 
  dev-tools already installed. Just press F12 show the panel that houses them.

### Running the project
Install the module requirements for the Python backend by running `pip install` from the 
`backend` folder. Pip is a module handler that comes bundled with Python unless you 
make effort to exclude it and it will read the `requirements.txt` file to find modules to install.
Start the Flask server with `python3 backend.py`. Note that the Python 3 binary sometimes
 installs itself as `python` so if `python3` gives you errors indicating something is missing
 try plain `python` instead. Stop the server by pressing control-c.

Start the frontend by opening `index.html` in the `frontend` folder in your browser. Make sure 
to open the dev-tools by pressing F12 so you can see what's going on in the console.
