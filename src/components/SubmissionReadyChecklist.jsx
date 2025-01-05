import axios from 'axios';

// Fetch all checklist items
axios.get('/checklist')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// Add a new checklist item
axios.post('/checklist', { task: 'Submit final report' })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

function Submission() {
  return(
    <>
    <h1>Submission Ready Checklist</h1>
    <p>
    Never miss a critical step before submitting your project.
    Mark tasks as complete and ensure everything is polished.
    </p>
    <br/>
    
    <p>A good submission includes a detailed README, Demo video, Live link (optional), Clean code commited to Github, and Presentation Slides.</p>
    </>
  )
}

export default Submission