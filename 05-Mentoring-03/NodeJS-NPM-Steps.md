# Install Node JS

-   Download & Install Node JS from [[here]](https://nodejs.org/en/download/)
    -   Example Installation Directory
        ```
        C:\\Softwares\\NodeJS
        ```

-   Update the following variable to also include the NodeJS installation

        ```
        PATH=C:\\Softwares\\NodeJS
        ```
    -   Note
        -   Make use of Windows Environment Variables

-   Open a new command prompt and run the following commands to ensure that the installation and the path has been set correctly

    -   node --version
        -   This will print the version of node JS
    -   npm --version
        -   This will print the version of Node Packaging Manager (NPM)

# Create project

-   Let 'C:\\Projects' be base work directory that contains for all the projects

-   Take the source code from the GitHub location

# Converting a regular project into a NodeJS project

-   To convert an existing directory (such as food-app) to a NodeJS project, do the following
    -   Locate the folder where index.html is present
    -   CD to that folder

    -   Issue the following command
        -   "npm init --yes"
            -   Note
                -   A file called "package.json" will be created in the project's directory

    -   Edit package.json and add the following line
        -   "type": "module",
            -   Note
                -   The usage of comma at the end
                -   The above line can be inserted after the "description" attribute

    -   Update index.html or any other HTML files where there is a reference to \<script\> tag

        -   Search for script tag in the HTML file
        -   Add the attribute type='module'

            -   After editing, the complete script tag looks like this
                ```
                <script type='module' src='./food-app.js'>
                </script>
                ```

    -   Install HTTP Server

        -   Open a terminal
        -   Cd to the project directory (C:\\Projects\\food-app)

        -   Run the command
            -   "npm install -global http-server"
            -   Note
                -   This will ensure that the http-server is installed

    -   Launch the HTTP Server

        -   Cd to the project directory (C:\\Projects\\food-app)
        -   Run the following command
            -   "http-server \--port 9999"
            -   Note
                -   The server is started at port 9999 ready to serve contents that are available within the application's directory

    -   Access the application

        -   Open Browser
        -   Point to the URL - "http://localhost:9999"

# Running Java Script code

-   With the project now available as a NodeJS, it is possible to execute javascript code outside the browser environment

-   To do this,

    -   Pick a file that has java script logic that is not dependent on the View elements (such as HTML or CSS)
        -   Example
            -   "\\Food-App\\food-app\\food-category\\model\\food-category-factory.js"
    -   Open a Terminal
    -   CD to the below folder that has the JS file

        -   "\\Food-App\\food-app\\food-category\\model\\"
    -   To run the JS file, use the following command,
        -   "node food-category-factory.js"
