import './About.css';

function About() {
    return (
        <div className="about-container">
            <section className="about-intro">
                <h1>About HackBuddy</h1>
                <p className="tagline">Your ultimate hackathon companion, built with ❤️ and a bit of chaos!</p>
            </section>

            <section className="about-section">
                <h2>🧐 What is HackBuddy?</h2>
                <p>
                    HackBuddy is your ultimate hackathon companion, built to help you survive and thrive through the chaos 
                    of coding sprints! Whether you need to track upcoming hackathons, laugh off your blockers with our 
                    Excuse Generator, check off essential submission items, or plan your next coding adventure, 
                    HackBuddy has your back.
                </p>
                <p>
                    It's not just an app—it's your virtual buddy in the exhilarating (and sometimes chaotic) world of 
                    hackathons. Because hey, who said hacking can't be fun and functional? 😎
                </p>
                <p>
                    More info can be found in the <a href="https://github.com/ewa-edun/HackBuddy" target="_blank" rel="noopener noreferrer">README</a>
                </p>
            </section>

            <section className="about-section inspiration">
                <h2>✨ The Inspiration</h2>
                <div className="card">
                    <p>
                        HackBuddy started as a spark of genius (read: a late-night idea fueled by tea and ambition) 
                        during my gap year. I wanted to build something quirky yet practical to prep for hackathons 
                        and make the experience a little less stressful and a lot more enjoyable.
                    </p>
                    <div className="mission">
                        <h3>Mission:</h3>
                        <p>Keep it light, keep it fun, and keep hackers sane.</p>
                    </div>
                    <div className="thought-process">
                        <p>When brainstorming features, I thought:</p>
                        <ol>
                            <li>What's something we all need during hackathons? Organization.</li>
                            <li>What's something we also need? A break from all that seriousness.</li>
                        </ol>
                        <p>And voilà—HackBuddy was born! 🎉</p>
                    </div>
                </div>
            </section>

            <section className="about-section features">
                <h2>🚀 HackBuddy Highlights</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="emoji">🗓️</span>
                        <h3>Hackathon Tracker</h3>
                        <p>Because who can remember all those dates?</p>
                    </div>
                    <div className="feature-card">
                        <span className="emoji">😜</span>
                        <h3>Excuse Generator</h3>
                        <p>Feeling stuck? Get hilarious excuses to lighten the mood.</p>
                    </div>
                    <div className="feature-card">
                        <span className="emoji">✅</span>
                        <h3>Submission Checklist</h3>
                        <p>Let's make sure you don't forget the important stuff.</p>
                    </div>
                    <div className="feature-card">
                        <span className="emoji">🎯</span>
                        <h3>What's Next</h3>
                        <p>Plan ahead so you can keep the momentum going.</p>
                    </div>
                </div>
            </section>

            <section className="about-section hackathon">
                <h2>🏆 Hack for Hackers Hackathon</h2>
                <div className="card">
                    <p>
                        HackBuddy was created as my entry for the Hack for Hackers Hackathon, a fantastic event aimed at 
                        celebrating developers and their passion for coding. I wanted to use this opportunity to challenge 
                        myself, refine my React skills, and explore Flask and SQLite in a real-world project.
                    </p>
                    <p>
                        The best part? It's not just about coding—it's about community, creativity, and challenging yourself. 
                        Win or lose, HackBuddy is already a victory in my book. 💪 Plus, it's a solid excuse to procrastinate 
                        other things. 😉
                    </p>
                </div>
            </section>

            <section className="about-section personal">
                <h2>👋 About Me!</h2>
                <div className="card">
                    <p>
                        Hi there! I'm Ewa, a gap year explorer -trying out all the things I never had time for, future 
                        computer science major, and all-around tech enthusiast. 💻
                    </p>
                    <div className="fun-facts">
                        <h3>Quick Facts:</h3>
                        <ul>
                            <li>☕️ Favorite beverage: Tea over coffee, any day.</li>
                            <li>🧶 Current hobbies: Crocheting, learning badminton, and pretending I'm a React pro.</li>
                            <li>🎙️ Podcasting life: I host for Girl's Girl science aspect. Yes, I'm that nerd.</li>
                            <li>💻 Coding goals: Learn it all, build it all, and share the chaos on my upcoming YouTube channel.</li>
                        </ul>
                    </div>
                    <p>
                        I've always believed in making tech approachable, fun, and creative—HackBuddy is a testament to that.
                    </p>
                    <p className="fun-fact">
                        Fun fact: My laptop is decked out with Spider-Man stickers, so you know I mean business. 🕸️
                    </p>
                </div>
            </section>

            <section className="about-section note">
                <h2>📝 A Note From Me</h2>
                <div className="card">
                    <p>
                        HackBuddy is still evolving, just like me! Whether you're a hackathon pro or a first-timer, 
                        I hope HackBuddy helps you stay inspired, motivated, and a little less stressed.
                    </p>
                    <p>
                        Have ideas, feedback, or just want to chat? Hit me up—this is just the beginning. Let's keep 
                        hacking, laughing, and building cool stuff together. 💜
                    </p>
                    <p>
                        Please don't hesitate to connect with me—because we're all in this hacking journey together. 🚀
                    </p>
                </div>
            </section>

            <section className="about-section fun-facts">
                <h2>🎈 Fun Facts</h2>
                <div className="facts-grid">
                    <div className="fact-card">
                        <p>"The code isn't buggy; it's just creatively challenged."</p>
                    </div>
                    <div className="fact-card">
                        <p>HackBuddy's Excuse Generator is my personal favorite feature. Why? Because sometimes, 
                           we all need a silly excuse to lighten the mood and keep going.</p>
                    </div>
                    <div className="fact-card">
                        <p>Why no authorization in HackBuddy yet? Because sometimes, simplicity is genius. 😉</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;