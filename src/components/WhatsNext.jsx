import { useState, useEffect } from 'react';
import './WhatsNext.css';

function WhatsNext() {
    const [goals, setGoals] = useState([
        { id: 1, title: "Learn a New Tech Stack", description: "Master React Native for mobile development", achieved: false },
        { id: 2, title: "Build Portfolio", description: "Create a personal website to showcase projects", achieved: false }
    ]);

    const [newGoal, setNewGoal] = useState({ title: '', description: '' });
    const [quote, setQuote] = useState('');
    const [showForm, setShowForm] = useState(false);

    const hackathonPlatforms = [
        { name: "Devpost", url: "https://devpost.com/hackathons" },
        { name: "Major League Hacking", url: "https://mlh.io/seasons/2025/events" },
        { name: "Devfolio", url: "https://devfolio.co/hackathons" },
        { name: "Dora Hacks", url: "https://dorahacks.io/" }
    ];

    const motivationalQuotes = [
        "Every expert was once a beginner.",
        "The only way to do great work is to love what you do.",
        "Your future self is watching you right now through memories.",
        "The best time to plant a tree was 20 years ago. The second best time is now."
    ];

    useEffect(() => {
        // This will be replaced with API call
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setQuote(randomQuote);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newGoal.title && newGoal.description) {
            setGoals([...goals, { ...newGoal, id: Date.now(), achieved: false }]);
            setNewGoal({ title: '', description: '' });
            setShowForm(false);
        }
    };

    const toggleGoal = (id) => {
        setGoals(goals.map(goal => 
            goal.id === id ? { ...goal, achieved: !goal.achieved } : goal
        ));
    };

    return (
        <div className="whats-next">
            <h1>What&apos;s Next?</h1>
            
            <div className="quote-box">
                <p className="quote">&quot;{quote}&quot;</p>
                <button onClick={() => setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])}>
                    New Quote
                </button>
            </div>

            <section className="next-hackathon">
                <h2>Find Your Next Hackathon</h2>
                <div className="platform-grid">
                    {hackathonPlatforms.map(platform => (
                        <a 
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-card"
                        >
                            {platform.name}
                        </a>
                    ))}
                </div>
            </section>

            <section className="goals">
                <h2>Your Goals</h2>
                <button 
                    className="add-goal-button"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Cancel' : 'Add New Goal'}
                </button>

                {showForm && (
                    <form onSubmit={handleSubmit} className="goal-form">
                        <input
                            type="text"
                            placeholder="Goal Title"
                            value={newGoal.title}
                            onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                            required
                        />
                        <textarea
                            placeholder="Goal Description"
                            value={newGoal.description}
                            onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                            required
                        />
                        <button type="submit">Add Goal</button>
                    </form>
                )}

                <div className="goals-list">
                    {goals.map(goal => (
                        <div 
                            key={goal.id} 
                            className={`goal-card ${goal.achieved ? 'achieved' : ''}`}
                            onClick={() => toggleGoal(goal.id)}
                        >
                            <h3>{goal.title}</h3>
                            <p>{goal.description}</p>
                            <span className="status">
                                {goal.achieved ? '✓ Achieved' : 'In Progress'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="tips">
                <h2>Quick Tips</h2>
                <ul>
                    <li>Take time to reflect on your hackathon experience</li>
                    <li>Document your learnings and challenges</li>
                    <li>Connect with teammates on LinkedIn</li>
                    <li>Share your project on social media</li>
                    <li>Consider turning your hackathon project into a full product</li>
                </ul>
            </section>
        </div>
    );
}

export default WhatsNext;
