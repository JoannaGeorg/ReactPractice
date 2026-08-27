import { InferenceClient } from '@huggingface/inference'

const hf_token = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export default async function genRecipeFromAI(ingredientList) {
  const SYSTEM_PROMPT = `
  You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
  `
  
  try {
    const response = await hf_token.chatCompletion({
      model: 'zai-org/GLM-5.3-Flash',
      messages: [
        {role: 'system', content: SYSTEM_PROMPT},
        {role: 'user', content: `I have ${ingredientList}. Please give me a recipe you'd recommend I make.`}
      ],
      // provider: 'hf-inference',
      max_tokens: 1024,
    })
    return response.choices[0].message.content;
  }
  
  catch (e) {
    console.log(JSON.stringify(e, null, 2))
    return 'Encountered an Error.'
  }
}