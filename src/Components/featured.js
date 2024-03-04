import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FeaturedGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ModelCardContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: calc(33.333% - 32px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-5px);
    }
    @media (max-width: 768px) {
        width: calc(50% - 32px); // For tablets and below, adjust to 50% if you want two cards in a row
    }
    @media (max-width: 480px) {
        width: 90%; // For mobile screens, make it 90% of the screen width
        margin: 16px auto; // Center the card on small screens
    }
`;

const ExploreButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #0056b3;
    }
`;

const StarContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Star = styled.span`
    cursor: pointer;
    color: #f39c12; /* Yellow color for stars */
    font-size: 20px;
`;

const EmptyStar = styled.span`
    color: #ddd; /* Gray color for empty stars */
    font-size: 20px;
`;

const ModelCard = ({ model }) => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate(model.detailLink);
    };

    const generateRatingStars = () => {
        const fullStars = Math.floor(model.rating);
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`}>★</Star>);
        }
        for (let i = fullStars; i < 5; i++) {
            stars.push(<EmptyStar key={`empty-${i}`}>☆</EmptyStar>);
        }
        return stars;
    };

    return (
        <ModelCardContainer>
            <h3>{model.name}</h3>
            <img src={model.image} alt={model.name} style={{ width: '100%', height: 'auto' }} />
            <p>{model.description}</p>
            <StarContainer>{generateRatingStars()}</StarContainer>
            <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>
        </ModelCardContainer>
    );
};

const featuredModels = [
    {
        name: 'ChatGPT',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png', 
        description: 'A conversational agent that can chat in a human-like manner.',
        rating: 4.5, // Static rating for featured models
        detailLink: '/featured/chatgpt' 
    },
    {
        name: 'Copilot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/2048px-Microsoft_365_Copilot_Icon.svg.png', 
        description: 'An AI pair programmer that helps you write better code.',
        rating: 4.0,
        detailLink: '/featured/copilot'
    },
    {
        name: 'Gemini (Google)',
        image: 'https://walletinvestormagazine.b-cdn.net/wp-content/uploads/2024/02/Google_Gemini_Musk.webp', 
        description: 'Google’s latest multimodal AI capable of various tasks.',
        rating: 3.5,
        detailLink: '/featured/gemini'
    },
];

const Featured = () => {
    return (
        <section>
            <h2>Featured Models</h2>
            <FeaturedGrid>
                {featuredModels.map((model, index) => (
                    <ModelCard
                        key={index}
                        model={model}
                    />
                ))}
            </FeaturedGrid>
        </section>
    );
};

export default Featured;

