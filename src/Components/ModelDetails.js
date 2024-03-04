import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const DetailContainer = styled.div`
    padding: 1rem;
`;

const ImageGallery = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    & > img {
        max-width: 300px;
        height: auto;
        border-radius: 8px;
    }
`;

const InteractionSection = styled.section`
    margin-top: 2rem;
    text-align: center;
`;

const ResponseOutput = styled.div`
    margin-top: 1rem;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
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

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const models = [
    
        {
            id: 'chatgpt',
            name: 'Chatgpt',
            image: 'https://media.licdn.com/dms/image/D5612AQFU23fawQKaww/article-cover_image-shrink_720_1280/0/1683737303475?e=2147483647&v=beta&t=NlszWB_1g5eiN4CbVR_iedb0i6VrBPsbazsVGaViIlA',
            description: 'ChatGPT is an advanced conversational agent renowned for its ability to engage users in natural, human-like dialogue. Powered by cutting-edge artificial intelligence, ChatGPT can understand and respond to a wide range of conversational prompts, from casual chit-chat to more complex discussions. With its sophisticated language modeling capabilities, ChatGPT can generate contextually relevant and coherent responses, making it an invaluable tool for virtual assistants, customer support systems, and interactive applications. Leveraging deep learning techniques, ChatGPT continually learns from interactions to enhance its conversational abilities, ensuring a personalized and engaging user experience. Its versatility and adaptability make it an ideal solution for various domains, including education, entertainment, and healthcare. Whether it\'s providing information, answering queries, or simply engaging in friendly banter, ChatGPT excels in delivering high-quality, human-like conversations, revolutionizing the way we interact with AI-powered systems.',
        },
        {
            id: 'copilot',
            name: 'Copilot',
            image: 'https://news.microsoft.com/wp-content/uploads/prod/sites/655/2023/03/OMB_Hero-WholeNewWayToWork.jpg',
            description: 'Microsoft Copilot is an AI-powered companion that seamlessly integrates into your daily workflow. Whether you’re a developer, a business professional, or a creative thinker, Copilot assists you by providing code suggestions, enhancing productivity, and streamlining tasks. Its adaptability and integration with Microsoft applications make it a versatile tool for decision-making, collaboration, and creativity. With both free and premium versions available, Copilot is designed to empower users across various domains, making work smarter and more efficient. 🚀',
        },
        {
            id: 'gemini',
            name: 'Gemini',
            image: 'https://assets-global.website-files.com/630d4d1c4a462569dd189855/6584a9975ade35940f95e9ba_2.webp',
            description: "Google Gemini is a family of large language models, announced in December 2023, that stands as the successor to previous models like LaMDA and PaLM 2. Developed by Google DeepMind, it comes in three sizes: Ultra, Pro, and Nano, catering to different needs, from complex tasks requiring the most powerful Ultra model to efficient on-device tasks handled by the Nano model. Gemini is known for its ability to understand and work with various information formats, including text, code, audio, images, and video, making it a multimodal language model. This versatility has positioned it as a competitor to OpenAI's GPT-4 model. While an experimental mobile app using the technology exists, its capabilities are still under development. Overall, Google Gemini represents a significant step forward in Google's AI research, offering a powerful and versatile language model with various potential applications.",
        }
    
];

const ModelDetails = () => {
    const { modelName } = useParams();
    const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('');

    const handleInteract = async () => {
        if (modelName === 'chatgpt') {
            try {
                const response = await axios.post(
                    'https://api.openai.com/v1/completions',
                    {
                        model: "gpt-3.5-turbo", 
                        prompt: prompt, 
                        max_tokens: 300 
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer Open-AI-Key` //Here I am not putting my key because my openAI account is not the paid one and for fetching data from chatgpt it requires paid openAI account
                        },
                    }
                );
                setOutput(response.data.choices[0].text); 
            } catch (error) {
                console.error('There was an error processing your request:', error);
                setOutput('Failed to fetch response from OpenAI.');
            }
        } else {
            
            setOutput(`Response from ${modelName}: ...`);
        }
    };

    const modelDetail = models.find(model => model.id === modelName);

    return (
        <DetailContainer>
            {modelDetail ? (
                <>
                    <h1>{modelDetail.name}</h1>
                    <ImageGallery>
                        <img src={modelDetail.image} alt={modelDetail.name} />
                    </ImageGallery>
                    <p>{modelDetail.description}</p>

                    <InteractionSection>
                        <h2>Try it out</h2>
                        <Input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Enter a prompt"
                        />
                        <Button onClick={handleInteract}>Submit</Button>
                        <ResponseOutput>Output: {output}</ResponseOutput>
                    </InteractionSection>
                </>
            ) : (
                <p>Model not found.</p>
            )}
        </DetailContainer>
    );
};

export default ModelDetails;
