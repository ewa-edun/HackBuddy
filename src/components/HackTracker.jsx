import { useState } from 'react';
import './HackTracker.css';

function HackTracker() {
    const [hackathons, setHackathons] = useState([
        { 
            id: 1, 
            name: "Hack for Hackers", 
            startDate: "2024-03-15", 
            endDate: "2024-03-17",
            status: "upcoming"
        },
        { 
            id: 2, 
            name: "Code for Good", 
            startDate: "2024-04-01", 
            endDate: "2024-04-03",
            status: "registered"
        }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newHackathon, setNewHackathon] = useState({
        name: '',
        startDate: '',
        endDate: '',
        status: 'upcoming'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setHackathons([...hackathons, { ...newHackathon, id: hackathons.length + 1 }]);
        setShowForm(false);
        setNewHackathon({ name: '', startDate: '', endDate: '', status: 'upcoming' });
    };

    return (
        <div className="hackathon-tracker">
            <h1>Hackathon Tracker</h1>
            <p className="description">
                Keep track of your hackathon journey! Add upcoming events, mark your registrations, 
                and never miss a deadline.
            </p>

            <button 
                className="add-button"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Cancel' : 'Add New Hackathon'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className="hackathon-form">
                    <input
                        type="text"
                        placeholder="Hackathon Name"
                        value={newHackathon.name}
                        onChange={(e) => setNewHackathon({...newHackathon, name: e.target.value})}
                        required
                    />
                    <input
                        type="date"
                        value={newHackathon.startDate}
                        onChange={(e) => setNewHackathon({...newHackathon, startDate: e.target.value})}
                        required
                    />
                    <input
                        type="date"
                        value={newHackathon.endDate}
                        onChange={(e) => setNewHackathon({...newHackathon, endDate: e.target.value})}
                        required
                    />
                    <select
                        value={newHackathon.status}
                        onChange={(e) => setNewHackathon({...newHackathon, status: e.target.value})}
                    >
                        <option value="upcoming">Upcoming</option>
                        <option value="registered">Registered</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit">Add Hackathon</button>
                </form>
            )}

            <div className="hackathons-list">
                {hackathons.map(hackathon => (
                    <div key={hackathon.id} className={`hackathon-card ${hackathon.status}`}>
                        <h3>{hackathon.name}</h3>
                        <p>Start Date: {hackathon.startDate}</p>
                        <p>End Date: {hackathon.endDate}</p>
                        <span className="status-badge">{hackathon.status}</span>
                        <div className="card-actions">
                            <button>Edit</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HackTracker;