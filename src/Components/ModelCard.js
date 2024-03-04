import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
const Card = styled.div`
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
        width: calc(50% - 32px);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const ModelTitle = styled.h3`
    margin-top: 0;
`;

const ModelDescription = styled.p`
    color: #666;
`;

const Rating = styled.div`
    margin: 10px 0;
`;

const Star = styled.span`
    cursor: pointer;
    color: gold;
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

const ModelCard = ({ model }) => {
    const [rating, setRating] = useState(model.rating); // Initial rating
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleExploreClick = () => {
        // Navigate to the detailed page for the model
        navigate(`/models/${model.name.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <Card>
            <ModelTitle>{model.name}</ModelTitle>
            <img src={model.image} alt={model.name} style={{ width: '100%', height: 'auto' }} />
            <ModelDescription>{model.description}</ModelDescription>
            <Rating>
                {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} onClick={() => setRating(index + 1)}>
                        {index < rating ? '★' : '☆'}
                    </Star>
                ))}
            </Rating>
            <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>
        </Card>
    );
};
export default ModelCard;
