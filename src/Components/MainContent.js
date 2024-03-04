import React from 'react';
import './MainContent.css'; 

const MainContent = () => {
    return (
        
        <main className="main-content">
            <section id="intro">
                <h2>Welcome to AI Models Showcase</h2>
                <img src={'/images/friendly-robot.png'} alt="Friendly Robot" className="intro-image"/>
                <p>Explore a wide variety of AI models, understand their capabilities, and find the perfect fit for your project.</p>
            </section>

            <section id="future">
                <div className="content">
                    <img src={'/images/futuristic_cityscape.png'} alt="Futuristic City" className="content-image" />
                    <div className="content-text">
                        <h3>Explore the Future</h3>
                        <p>Discover the cutting-edge AI technologies that are transforming our world. Dive into our curated collection of AI models and find the perfect solution for your project. Whether you're a developer looking to integrate state-of-the-art natural language processing capabilities into your application or an organization seeking to leverage machine learning algorithms for data analysis, our platform provides a comprehensive showcase of diverse AI models. Explore different categories such as image recognition, language translation, sentiment analysis, and more. With our user-friendly interface, you can effortlessly navigate through the various models, examine their capabilities, and select the one that best fits your needs. Join us on this journey of innovation and unlock the potential of AI in your projects.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
