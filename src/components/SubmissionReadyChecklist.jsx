import { useState } from 'react';
import './SubmissionReadyChecklist.css';

function SubmissionReadyChecklist() {
    const [checklist, setChecklist] = useState([
        { id: 1, text: "Create a detailed README.md", completed: false },
        { id: 2, text: "Record demo video", completed: false },
        { id: 3, text: "Deploy project and add live link", completed: false },
        { id: 4, text: "Clean up code and add comments", completed: false },
        { id: 5, text: "Prepare presentation slides", completed: false },
        { id: 6, text: "Test all features", completed: false },
        { id: 7, text: "Update project documentation", completed: false },
        { id: 8, text: "Create a compelling project description", completed: false }
    ]);

    const [newItem, setNewItem] = useState('');

    const toggleItem = (id) => {
        setChecklist(checklist.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const addItem = (e) => {
        e.preventDefault();
        if (newItem.trim()) {
            setChecklist([
                ...checklist,
                { id: Date.now(), text: newItem, completed: false }
            ]);
            setNewItem('');
        }
    };

    const progress = Math.round(
        (checklist.filter(item => item.completed).length / checklist.length) * 100
    );

    return (
        <div className="submission-checklist">
            <h1>Submission Ready Checklist</h1>
            <p className="description">
                Ensure your project is polished and ready for submission. 
                Track your progress and never miss a critical component!
            </p>

            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{ width: `${progress}%` }}
                >
                    {progress}%
                </div>
            </div>

            <form onSubmit={addItem} className="add-item-form">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add new checklist item..."
                />
                <button type="submit">Add Item</button>
            </form>

            <div className="checklist-items">
                {checklist.map(item => (
                    <div 
                        key={item.id} 
                        className={`checklist-item ${item.completed ? 'completed' : ''}`}
                        onClick={() => toggleItem(item.id)}
                    >
                        <div className="checkbox">
                            {item.completed && <span>✓</span>}
                        </div>
                        <span className="item-text">{item.text}</span>
                    </div>
                ))}
            </div>

            {progress === 100 && (
                <div className="completion-message">
                    🎉 Congratulations! Your project is ready for submission! 🚀
                </div>
            )}
        </div>
    );
}

export default SubmissionReadyChecklist;