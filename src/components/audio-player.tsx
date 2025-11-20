
'use client';
import { useState, useTransition } from 'react';
import { generateAudio } from '@/ai/flows/audio-flow';
import { Button } from './ui/button';
import { Loader2, PlayCircle, StopCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AudioPlayerProps {
    textToSpeak: string;
}

export function AudioPlayer({ textToSpeak }: AudioPlayerProps) {
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleGenerateAudio = () => {
        setError(null);
        startTransition(async () => {
            try {
                const { audioDataUri } = await generateAudio({ text: textToSpeak });
                setAudioSrc(audioDataUri);
            } catch (err: any) {
                console.error("Audio generation failed:", err);
                setError(err.message || 'Failed to generate audio. Please try again.');
            }
        });
    };

    if (audioSrc) {
        return (
             <Card className="bg-secondary/30">
                <CardContent className="p-4 flex items-center gap-4">
                     <StopCircle className="h-6 w-6 text-primary" />
                     <audio controls autoPlay src={audioSrc} className="w-full">
                        Your browser does not support the audio element.
                    </audio>
                </CardContent>
             </Card>
        );
    }
    
    if (error) {
        return (
             <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertTriangle className="h-4 w-4" />
                <p>{error}</p>
            </div>
        )
    }

    return (
        <Card className="bg-secondary/30">
            <CardHeader className='pb-4'>
                <CardTitle className="text-xl">Listen to this article</CardTitle>
                <CardDescription>Press play to hear an AI-generated audio version.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleGenerateAudio} disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Audio...
                        </>
                    ) : (
                        <>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Play Audio
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}
