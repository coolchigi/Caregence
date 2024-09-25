import { Anthropic } from '@anthropic-ai/sdk';

// Initialize the Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

// Define the Claude model to use
const CLAUDE_MODEL = "claude-3-opus-20240229";

// Define the response interface based on the actual structure
interface ClaudeResponse {
  completion: string;
  id: string;
  model: string;
  stop_reason: string;
  type: string;
}

// Function to generate a response from Claude
export async function generateClaudeResponse(prompt: string): Promise<string> {
  try {
    const response = await anthropic.completions.create({
      model: CLAUDE_MODEL,
      max_tokens_to_sample: 300,
      prompt: `Human: ${prompt}\n\nAssistant:`,
    });

    // Assuming the response structure matches the ClaudeResponse interface
    const claudeResponse = response as unknown as ClaudeResponse;

    // Return the completion text
    return claudeResponse.completion.trim();
  } catch (error) {
    console.error('Error generating Claude response:', error);
    throw new Error('Failed to generate response from Claude');
  }
}