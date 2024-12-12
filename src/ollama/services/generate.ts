import axios from 'axios'

export const ollamaGenerateService = async (
    prompt: string
) => {
    const url = 'http://localhost:11434/api/generate'

    const systemPrompt = 'You are a Magic Judge, help me with the cards that i ask for help in the user prompt'
    const stream = false
    const model = 'llama3:8b'
    const format = 'json'
    
    const response = await axios.post (
        url,
        {
            model,
            stream,
            systemPrompt,
            prompt,
            format
        },
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
    )

    console.log('response: ', response)
}