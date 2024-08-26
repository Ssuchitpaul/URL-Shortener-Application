# URL-Shortener-Application
This project is a URL shortener application built using Node.js and Express. The application allows users to shorten long URLs and provides a mechanism to retrieve the original URL using a shortened version. The application has a web interface for users to input long URLs, which then generates a shortened URL. The data is stored in a MySQL database, and the application handles URL redirection.

Features:

URL Shortening: Users can input a long URL, and the system generates a unique short URL.
URL Redirection: Users who visit the short URL are redirected to the original long URL.
Data Storage: URL mappings are stored in a MySQL database.
Web Interface: A simple, user-friendly HTML page to interact with the URL shortening service.
Project Setup and Running Instructions
Clone or Download the Repository: If you haven’t already, clone or download the project repository from its source.
Install Dependencies: Open your terminal, navigate to the project directory, and run the following command to install all required dependencies:
bash
Copy code
npm install
Set Up the Database: Ensure that you have MySQL installed and running. Create a database and a table for storing URL mappings. You can use the following SQL command to create the necessary table:
sql
Copy code
CREATE TABLE links (
    longurl VARCHAR(255),
    shorturlid VARCHAR(255),
    count INT(11) DEFAULT 0,
    id INT AUTO_INCREMENT PRIMARY KEY
);
Configure Database Connection: Make sure the config.js file (or equivalent) contains the correct MySQL connection settings. You may need to adjust these settings based on your MySQL server configuration.
Run the Application: Start the application by running the following command in your terminal:
bash
Copy code
npm start
This command will start the server on port 8080 (or the port specified in your app.js file).
Access the Web Interface: Open a web browser and go to http://localhost:8080 to access the URL shortener web interface.
Testing URL Shortening:
Enter a long URL in the input field and click "Shorten".
The shortened URL will be displayed in a table with a link to redirect to the original URL.
Testing URL Redirection:
Copy the shortened URL from the table and paste it into your browser's address bar.
You should be redirected to the original long URL.
Additional Information
Dependencies:
express: Web framework for Node.js.
mysql2: MySQL client for Node.js.
path: Utility for working with file and directory paths.
Scripts:
start: Runs the server using Node.js.
