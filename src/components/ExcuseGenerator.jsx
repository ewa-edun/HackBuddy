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
        const excuses = {
            'ideas': {
                excuses: [
                    "My creative neurons took a vacation without notifying HR",
                    "My inspiration is currently stuck in traffic",
                    "My idea generator is experiencing technical difficulties",
                    "My brain's idea factory is on strike",
                    "The muse ghosted me today"
                ],
                motivation: [
                    "Remember, even the most obvious ideas can lead to innovative solutions!",
                    "Sometimes the best ideas come from taking a short break",
                    "Start with something small - great ideas often begin as tiny thoughts",
                    "Every expert started with a blank page too",
                    "Your next brilliant idea is just around the corner"
                ]
            },
            'lazy': {
                excuses: [
                    "My productivity is on airplane mode",
                    "My motivation took a day off without approval",
                    "I'm conserving energy for future brilliance",
                    "My work ethic is experiencing a temporary outage",
                    "I'm practicing the art of strategic procrastination"
                ],
                motivation: [
                    "Start with just 5 minutes. That's all it takes to build momentum!",
                    "Small progress is still progress",
                    "You don't have to be perfect, you just have to start",
                    "Every line of code counts, even if it's just a console.log",
                    "Remember why you started this journey"
                ]
            },
            'burnout': {
                excuses: [
                    "My brain cells are staging a protest",
                    "I've exceeded my weekly quota of brilliant ideas",
                    "My code and I need couples therapy",
                    "My debugging powers need a recharge",
                    "I'm experiencing temporary technical difficulties between keyboard and chair"
                ],
                motivation: [
                    "It's okay to take breaks - they make you stronger!",
                    "Rest is part of the process, not a deviation from it",
                    "Your well-being comes first, the code can wait",
                    "Sometimes stepping back helps you move forward faster",
                    "You've overcome challenges before, you'll do it again"
                ]
            },
            'caffeine': {
                excuses: [
                    "My coffee has achieved sentience and is now writing the code",
                    "I've transcended normal human typing speed",
                    "My energy levels have gone quantum",
                    "I'm vibrating at the frequency of pure code",
                    "My keyboard can't keep up with my caffeine-powered fingers"
                ],
                motivation: [
                    "Channel that energy into focused bursts of productivity",
                    "Take deep breaths and tackle one task at a time",
                    "Your enthusiasm is a superpower - use it wisely",
                    "High energy + clear direction = unstoppable progress",
                    "You're not overcaffeinated, you're extra motivated!"
                ]
            },
            'sleep': {
                excuses: [
                    "My brain is running on Windows 95",
                    "I'm debugging in my dreams",
                    "My consciousness is buffering",
                    "My code is as coherent as my sleep schedule",
                    "I've forgotten how many semicolons I've had today"
                ],
                motivation: [
                    "A well-rested mind is a productive mind",
                    "Quality over quantity - take care of yourself",
                    "Even the best developers need their sleep",
                    "Tomorrow is another day to shine",
                    "Your health is your most important feature"
                ]
            },
            'random': {
                excuses: [
                    "My code decided to become a performance art piece",
                    "My rubber duck called in sick today",
                    "Mercury is in retrograde in my repository",
                    "My git commits have achieved consciousness",
                    "The internet's series of tubes are clogged"
                ],
                motivation: [
                    "Embrace the chaos - sometimes it leads to brilliance",
                    "Every obstacle is an opportunity in disguise",
                    "The best solutions often come from unexpected places",
                    "Keep your sense of humor - it's your secret weapon",
                    "You're doing better than you think you are"
                ]
            }
        };

        const moodData = excuses[mood];
        if (moodData) {
            const randomExcuse = moodData.excuses[Math.floor(Math.random() * moodData.excuses.length)];
            const randomMotivation = moodData.motivation[Math.floor(Math.random() * moodData.motivation.length)];
            setExcuse({ excuse: randomExcuse, motivation: randomMotivation });
        }
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