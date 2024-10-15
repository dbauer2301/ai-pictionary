import Together from 'together-ai';
import { ImageCreateParams } from 'together-ai/resources/images.mjs';
import apiKey from '../secrets/api_key';

interface ExtendedImageCreateParams extends ImageCreateParams {
  response_format?: string;
}

export default async function imageGen(prompt: string) {
  const together = new Together({ apiKey: apiKey });

  try {
    const response = await together.images.create({
      model: 'black-forest-labs/FLUX.1-schnell-Free',
      prompt: prompt,
      width: 1024,
      height: 768,
      steps: 1,
      n: 1,
      response_format: 'b64_json',
    } as ExtendedImageCreateParams);
    return response.data[0].b64_json;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Image generation failed. Please try again later.');
  }
}
