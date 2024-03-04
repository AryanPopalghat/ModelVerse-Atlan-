
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function SubmitModelForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    modelName: '',
    imageUrl: '',
    description: '',
    modelLink: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/models', formData); //This path should be changes at the time of deployment
      alert('Model submitted successfully!');
      setFormData({
        name: '',
        email: '',
        modelName: '',
        imageUrl: '',
        description: '',
        modelLink: '',
      }); 
    } catch (error) {
      console.error('Error submitting the model:', error.response);
      alert('Failed to submit the model.');
    }
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <Input
        type="text"
        name="modelName"
        value={formData.modelName}
        onChange={handleChange}
        placeholder="Model Name"
        required
      />
      <Input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Model Description"
        required
      />
      <Input
        type="text"
        name="modelLink"
        value={formData.modelLink}
        onChange={handleChange}
        placeholder="Model Link"
        required
      />
      <Button type="submit">Submit Model</Button>
    </Form>
  );
}
