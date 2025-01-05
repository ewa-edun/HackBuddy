import axios from 'axios';

// Fetch excuse based on mood
const mood = 'feeling_lazy'; // Example
axios.get(`/excuse?mood=${mood}`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

function ExcuseGenerator() {
    return(
       <>
       <h1>Excuse Generator</h1>
       <p>
       Feeling stuck during a hackathon? Get hilarious and relatable excuses to lighten the mood. Practical tips to unblock your progress. Click on a reason to get a `Justified` <del>excuse</del> explaination.
       </p>
       <br/>
       
       <p>
        What is your reason for an unfinished project right now?
       </p>
       <ul>
        <li>Cant come up with ideas?</li>
        <li>Feeling lazy?</li>
        <li>Tired or Burnt out?</li>
        <li>Too much energy drink or caffine</li>
        <li>Sleep deprived</li>
        <li>Other / Random</li>
       </ul>
       </>
    )
}

export default ExcuseGenerator