
'use server';
/**
 * @fileOverview A flow for generating audio from text using a TTS model.
 *
 * - generateAudio - A function that takes text and returns a data URI for the audio.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

// Define the input schema for the audio generation flow
const AudioInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type AudioInput = z.infer<typeof AudioInputSchema>;

// Define the output schema for the audio generation flow
const AudioOutputSchema = z.object({
  audioDataUri: z.string().describe("The generated audio as a data URI in WAV format. Expected format: 'data:audio/wav;base64,<encoded_data>'."),
});
export type AudioOutput = z.infer<typeof AudioOutputSchema>;

/**
 * Converts raw PCM audio buffer to a Base64 encoded WAV data string.
 * @param pcmData The raw PCM audio data buffer.
 * @param channels The number of audio channels.
 * @param rate The sample rate.
 * @param sampleWidth The sample width in bytes.
 * @returns A promise that resolves to the Base64 encoded WAV string.
 */
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', (d) => bufs.push(d));
    writer.on('end', () => {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

// Define the Genkit flow for text-to-speech
const audioFlow = ai.defineFlow(
  {
    name: 'audioFlow',
    inputSchema: AudioInputSchema,
    outputSchema: AudioOutputSchema,
  },
  async ({ text }) => {
    // Generate audio using the Gemini TTS model
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' }, // A professional and clear voice
          },
        },
      },
      prompt: text,
    });

    if (!media?.url) {
      throw new Error('Audio generation failed: no media was returned from the model.');
    }

    // The model returns a base64 data URI for raw PCM data. We need to extract it.
    const pcmBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    // Convert the raw PCM data to a proper WAV format
    const wavBase64 = await toWav(pcmBuffer);

    return {
      audioDataUri: `data:audio/wav;base64,${wavBase64}`,
    };
  }
);


/**
 * Public-facing function to generate audio from text.
 * @param input The text to convert to speech.
 * @returns A promise that resolves to the audio data URI.
 */
export async function generateAudio(input: AudioInput): Promise<AudioOutput> {
  return audioFlow(input);
}
