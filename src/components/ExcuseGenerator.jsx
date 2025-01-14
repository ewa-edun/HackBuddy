import { useState } from 'react';
import './ExcuseGenerator.css';

function ExcuseGenerator() {
    const [selectedMood, setSelectedMood] = useState('');
    const [excuse, setExcuse] = useState(null);

    const moods = [
        { id: 'ideas', label: "Can't come up with ideas", icon: '💭' },
        { id: 'lazy', label: 'Feeling lazy', icon: '🛋️' },
        { id: 'burnout', label: 'Tired or Burnt out', icon: '😫' },
        { id: 'caffeine', label: 'Too much energy drink/caffeine', icon: '☕' },
        { id: 'sleep', label: 'Sleep deprived', icon: '😴' },
        { id: 'random', label: 'Other / Random', icon: '🎲' }
    ];

    const generateExcuse = (mood) => {
        // This will be replaced with actual API call
        const excuses = {
            'ideas': {
                excuse: "My creative neurons took a vacation without notifying HR",
                motivation: "Remember, even the most obvious ideas can lead to innovative solutions!"
            },
            'lazy': {
                excuse: "My productivity is on airplane mode",
                motivation: "Start with just 5 minutes. That's all it takes to build momentum!"
            }
            // ... more excuses will come from backend
        };

        setExcuse(excuses[mood] || {
            excuse: "My code decided to take a sabbatical",
            motivation: "Every line of code counts, even if it's just a console.log!"
        });
    };

    return (
        <div className="excuse-generator">
            <h1>Excuse Generator</h1>
            <p className="subtitle">
                Need a creative excuse? Select your current mood and get a perfectly crafted explanation 
                (plus a little motivation to get back on track!)
            </p>

            <div className="mood-grid">
                {moods.map(mood => (
                    <button
                        key={mood.id}
                        className={`mood-button ${selectedMood === mood.id ? 'selected' : ''}`}
                        onClick={() => {
                            setSelectedMood(mood.id);
                            generateExcuse(mood.id);
                        }}
                    >
                        <span className="mood-icon">{mood.icon}</span>
                        <span className="mood-label">{mood.label}</span>
                    </button>
                ))}
            </div>

            {excuse && (
                <div className="excuse-box">
                    <div className="excuse-content">
                        <h3>Your Creative Excuse:</h3>
                        <p className="excuse-text">{excuse.excuse}</p>
                        <div className="motivation">
                            <h4>But remember:</h4>
                            <p>{excuse.motivation}</p>
                        </div>
                    </div>
                    <button 
                        className="regenerate"
                        onClick={() => generateExcuse(selectedMood)}
                    >
                        Get Another Excuse
                    </button>
                </div>
            )}
        </div>
    );
}

export default ExcuseGenerator;