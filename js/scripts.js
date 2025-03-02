// a.jsx
const App = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <header className="header">
                <div className="container">
                    <h1>Jack's Data Engineer Portfolio</h1>
                    <p>Data Engineer | Arizona, USA</p>
                    <div className="contact-info">
                        <p>Email: Kav@gmail.com | 
                            <a href="#">LinkedIn</a> | 
                            <a href="#">GitHub</a>
                        </p>
                    </div>
                </div>
            </header>

            <main className="container">
                <section className="section">
                    <h2>Profile Summary</h2>
                    <p>Data Engineer with around 4 years of experience in designing, building, 
                    and optimizing scalable data pipelines...</p>
                </section>

                <section className="section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div>
                            <h3>Programming Languages</h3>
                            <p>Python, SQL, R, Scala, MATLAB</p>
                        </div>
                        {/* Add other skill categories */}
                    </div>
                </section>

                <section className="section">
                    <h2>Professional Experience</h2>
                    <div className="project-card">
                        <h3>Data Engineer, Accenture</h3>
                        <p>Architected and optimized real-time big data pipelines using PySpark...</p>
                    </div>
                </section>

                <section className="section">
                    <h2>Projects</h2>
                    <div className="project-card">
                        <h3>Real-Time Data Pipeline Optimization</h3>
                        <p>Designed a high-performance data pipeline using Apache Kafka and Spark Streaming...</p>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                    {/* Add other projects */}
                </section>

                <section className="section">
                    <h2>Education</h2>
                    <div className="education">
                        <h3>Master of Science, Computer Science</h3>
                        <p>Aug 2022 – Dec 2023 | Northern Arizona University | GPA: 3.9/4.0</p>
                    </div>
                </section>

                <section className="section">
                    <h2>Contact Me</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <textarea 
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>© 2025 Venkatesh | All rights reserved.</p>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
