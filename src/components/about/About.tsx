import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* Mission Section */}
                <section className="mission-section">
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p>
                            We are dedicated to empowering writers and readers by providing a 
                            platform that allows everyone to share their stories, insights, and 
                            knowledge. Our goal is to create a thriving blogging community.
                        </p>
                    </div>
                    <div className="image-box">
                        <img 
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" 
                            alt="Writing and blogging" 
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <h2>Why Choose Our Blog Platform</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">✍️</div>
                            <h3>Write Freely</h3>
                            <p>Create and publish your content with ease and full creative freedom.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>Track Engagement</h3>
                            <p>Analyze how readers interact with your posts and grow your audience.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Quick Publish</h3>
                            <p>Seamlessly publish articles and share them instantly with the world.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌐</div>
                            <h3>Global Reach</h3>
                            <p>Connect with readers across the globe and join a community of bloggers.</p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="stat-box">
                        <h3>25,000+</h3>
                        <p>Published Articles</p>
                    </div>
                    <div className="stat-box">
                        <h3>8,000+</h3>
                        <p>Active Bloggers</p>
                    </div>
                    <div className="stat-box">
                        <h3>100,000+</h3>
                        <p>Readers Monthly</p>
                    </div>
                    <div className="stat-box">
                        <h3>90%</h3>
                        <p>Engagement Rate</p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section">
                    <div className="image-box">
                        <img 
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500" 
                            alt="Blog team working" 
                        />
                    </div>
                    <div className="text-content">
                        <h2>Our Team</h2>
                        <p>
                            Our team of passionate writers, editors, and developers works 
                            tirelessly to provide the best blogging experience. We focus on 
                            quality, community, and innovation to help every blogger succeed.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
