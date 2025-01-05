import axios from 'axios';

// Fetch all goals
axios.get('/goals')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// Fetch motivational quotes
axios.get('/motivational_quotes')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));


function WhatsNext() {
  return(
    <>
    <h1>What’s Next Page</h1>
    <p>
    You have either completed a hackathon or about to start one. Congratulations. Before another hackathon starts, Reflect on your hackathon journey. Plan for your next big adventure with motivational content and future project ideas.
    </p>
    <br/>

    <h2>Find your next hackathon</h2>
    <p>
       <a>Devpost</a>
       <a>Major League Hacking</a>
       <a>Devfolio</a>
       <a>Dora Hacks</a>
    </p>
    <br/>

    <h2>Rest</h2>
    <p>
        Take a rest
    </p>
    <br/>

    <h2>Goals</h2>
    <p>
      Set good goals.
    </p>
    <br/>

    <h2>Motivational Quotes</h2>
    <p>
      Some motivational quotes for you.
    </p>
    <br/>

    <h2>Hackathon Tips and Tricks</h2>
    <p>
      Some hackathon tips and tricks for you.
    </p>
    <br/>

    <h2>Test your Hackathon skills</h2>
    <p>
      A quiz to test your hackathon skills playfully.
    </p>
    <br/>
    </>
  )
}
 export default WhatsNext