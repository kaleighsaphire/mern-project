<h1 align="center"><img height="75px"src="https://i.imgur.com/OgwNEG6.png" title="source: imgur.com" /> Liber</h1>


I created this website to organize my library and keep a log of the books that I read, want, and the books I loan to my friends/family that are never returned!  

The program uses MVC architecture and follows separation of concerns, with Javascript, React, and CSS on the front end. Node JS, Express and Mongoose on the back connecting to a Mongo Database.
Authorization has been implemented via Json Web Token, using an email sign up.

All visuals and animations were created with 100% CSS styling.

<p align="center"><a href="https://imgur.com/60aR9Ca"><img src="https://i.imgur.com/60aR9Ca.gif" title="source: imgur.com" /></a></p>

<h2>Current Features</h2>
<ul>
<li>Create an account with an email login</li>
<li>On the Journal page, add / store / delete a journal entry.</li>
<li>On Library page, add/ store/ delete a book with its title, author and genre.</li>
<li>The selected book genres are represented with colour coding on the books.</li>
<li>Wish list page for books you would like to purchase.</li>
<li>Show/hide form entry components.</li>
<li>Book created on Library page, own:true. Book created on Wish List page, own:false.</li>
<li>Rating feature on journal entries.</li>
<li>Custom CSS logo</li>
</ul>

<h2>Future Features</h2>
<ul>
<li>Edit a journal entry.</li>
<li>Sort journal entries by date / book title / author / rating.</li>
<li>Filter/Sort Library by genre/title/author.</li>
<li>Toggle indication of whether a book has been read or not.</li>
<li>Indication of book that has been loaned out. To who and when.</li>
<li>About page availible for view without an account.</li>

</ul>

<h2>Dependencies</h2>
bcryptjs, colors, dotenv, express, express-async-handler, jsonwebtoken, nodemon, mongoose, axios, react, react-dom, react-icons, react-redux, react-router-dom, react-scripts, react-toastify
<h3>To Setup:</h3>
<ol>
<li> Clone the repo. </li>
<li> npm install dependencies in the main folder.</li>
<li> cd into the frontend folder.</li>
<li> npm install dependencies.</li>
<li> cd back into main folder.</li>
<li> Create a .env file to store:
<ul>
  <li>NODE_ENV = development</li>
  <li>PORT = **Desired backend port**</li>
  <li>MONGO_URI = **Your mongodb connection string**</li>
  <li>JWT_SECRET = **Your web token**</li>
  </ul>
  </li>
<li> *Add your .env to your .gitignore if you plan on uploading to remote repository. </li>
<li> Use command npm run dev to run frontend and baackend at the same time.</li>
</ol>

<h3 align="center">Loading Animation</h3>
<p align="center"><a href="https://imgur.com/sYUPO9J"><img src="https://i.imgur.com/sYUPO9J.gif" title="source: imgur.com" /></a></p>

