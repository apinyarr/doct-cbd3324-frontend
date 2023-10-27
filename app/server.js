const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Set up the backend URL
const backend_url = process.env.BACKEND_URL || "http://127.0.0.1:8088/search"

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Simple Dictionary</h1>
        <form action="/sendRequest" method="get">
          <label for="word">Enter a Word: </label>
          <input type="text" id="word" name="word">
          <button type="submit">Get definitions</button>
        </form>
        <h2>Results:</h2>
        <button id="formatButton" type="button">Format text</button><br/><br/>
        <textarea id="response" rows="25" cols="150" readonly></textarea>        
      </body>
      <script>
        const form = document.querySelector('form');
        const responseTextArea = document.getElementById('response');
        
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const word = document.getElementById('word').value;
          fetch('/sendRequest?word=' + encodeURIComponent(word))
            .then(response => response.text())
            .then(data => {
              responseTextArea.value = data;
            })
            .catch(error => {
              responseTextArea.value = 'Error: ' + error.message;
            });
        });

        // Get references to the text area and the format button
        const jsonTextArea = document.getElementById('response');
        const formatButton = document.getElementById('formatButton');

        // Add an event listener to the format button
        formatButton.addEventListener('click', function (e) {
          e.preventDefault();
          // Get the JSON data from the text area
          const inputData = jsonTextArea.value;

          try {
              // Parse the JSON data
              const parsedData = JSON.parse(inputData);

              // Stringify the JSON with pretty formatting
              const formattedJSON = JSON.stringify(parsedData, null, 4);

              // Set the formatted JSON back to the text area
              jsonTextArea.value = formattedJSON;
          } catch (error) {
              alert('Invalid JSON data. Please check your input.');
          }
        });
      </script>
    </html>
  `);
});

// Handle the GET request from the form
app.get('/sendRequest', (req, res) => {
  const word = req.query.word;

  console.log(`${backend_url}?word=${word}`)

  // Make a request to the backend API (replace with your backend URL)
  request.get(`${backend_url}?word=${word}`, (error, response, body) => {
    if (error) {
      res.send('Error: ' + error.message);
    } else {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Front-End server is running on port ${port}`);
});
