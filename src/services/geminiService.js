const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

export const callGeminiAPI = async (prompt, context = {}) => {
  const response = await fetch(`${GEMINI_API_URL}?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    })
  });
  
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};