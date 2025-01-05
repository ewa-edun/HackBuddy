import axios from 'axios';

// Fetch all hackathons
axios.get('/hackathons')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// Add a new hackathon
axios.post('/hackathons', {
    name: 'Hackathon Name',
    date: '2025-01-10',
    status: 'Upcoming'
}).then(response => console.log(response.data))
  .catch(error => console.error(error));


function HackTracker(){
    return(
      <>
      <h1>HackBuddy – Stay on Track, Crush the Hackathons!</h1>
      <h2>Hackathon Tracker</h2>
      <p>
        This is the hackthon tracker page. testing to see if everything works well. Features of this page include CRUD ability for hackathons and would include a start and end date for the hackathon. Track their status: Upcoming, Ongoing, or Completed.
      </p>
      </>
    )
}

export default HackTracker