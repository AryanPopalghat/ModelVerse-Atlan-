import React from 'react';
import ModelCards from './ModelCard';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Explore = () => {
    // Sample data for AI models
    const models = [
        {
            name: 'Image Captioning Model',
            image: '/images/image_captioning_model.png', 
            description: 'This model generates descriptive textual captions for images, providing a natural language representation of the visual content.',
            rating: Math.floor(Math.random() * 5) + 1, // Random rating from 1 to 5
        },
        {
            name: 'Text Generation Model',
            image: '/images/text_generation_model.png', 
            description: 'Capable of producing coherent and contextually relevant text based on a given prompt or input, this model can be used for creative writing, content generation, or dialogue generation.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            name: 'Image Super-Resolution Model',
            image: '/images/image_super_resolution_model.png', 
            description: 'Enhances the resolution and quality of low-resolution images, producing sharper and more detailed versions while preserving important features.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            name: 'Object Detection Model',
            image: '/images/object_detection_model.png', 
            description: 'Identifies and localizes objects within an image, drawing bounding boxes around them and classifying the objects into predefined categories.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Named Entity Recognition (NER) Model',
            image: '/images/named_entity_recognition.png', 
            description: 'Detects and classifies named entities within text, such as persons, organizations, locations, dates, and more, enabling structured analysis of unstructured text data.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Speech to Text model',
            image: '/images/speech_to_text_model.png', 
            description: 'Transcribes spoken language into written text, enabling the conversion of audio recordings or live speech into readable text format.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Text Summarization Model',
            image: '/images/text_summarization_model.png', 
            description: 'Automatically generates concise summaries of longer text passages, distilling the main points and key information while preserving the overall meaning.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Style Transfer model',
            image: '/images/style_transfer_model.png', 
            description: 'Alters the style of an image or text to match that of another input, allowing for creative transformations such as applying the artistic style of a painting to a photograph.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Machine Translation  Model',
            image: '/images/machine_translation_model.png', 
            description: 'Translates text from one language to another, facilitating communication and understanding across language barriers.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },
        {
            name: 'Anomaly Detection model',
            image: '/images/anomaly_detection_model.png', 
            description: 'Identifies abnormal patterns or outliers in data, enabling the detection of unusual behavior, fraudulent activities, or anomalies in various domains such as finance, healthcare, and cybersecurity.',
            rating: Math.floor(Math.random() * 5) + 1, 
        },


    ];

    return (
        <Grid>
            {models.map((model, index) => (
                <ModelCards key={index} model={model} />
            ))}
        </Grid>
    );
};

export default Explore;

