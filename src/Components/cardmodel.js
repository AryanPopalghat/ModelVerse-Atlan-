// Components/ModelCards.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.2em;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9em;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ModelCards() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/models');
        setModels(response.data);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      {models.map((model) => (
        <Card key={model._id}>
          <Image src={model.imageUrl} alt={model.modelName} />
          <Content>
            <Title>{model.modelName}</Title>
            <Description>{model.description}</Description>
            <Link href={model.modelLink} target="_blank" rel="noopener noreferrer">
              View Model
            </Link>
          </Content>
        </Card>
      ))}
    </Container>
  );
}
