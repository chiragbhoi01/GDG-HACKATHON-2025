import { useState, useEffect } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/outline';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceOrder() {
  const [isListening, setIsListening] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setIsListening(true);
    } else {
      setIsListening(false);
    }
  }, [listening]);

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="rounded-lg bg-red-50 p-4">
        <p className="text-sm text-red-700">
          Your browser doesn't support speech recognition. Please try a different browser.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Voice Order</h3>
        <p className="mt-1 text-sm text-gray-500">
          Click the microphone and speak your order
        </p>
      </div>

      <div className="mb-4 min-h-[100px] rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">
          {transcript || 'Your order will appear here...'}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={isListening ? stopListening : startListening}
          className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-semibold ${
            isListening
              ? 'bg-red-600 text-white hover:bg-red-500'
              : 'bg-indigo-600 text-white hover:bg-indigo-500'
          }`}
        >
          {isListening ? (
            <>
              <StopIcon className="h-5 w-5" />
              <span>Stop Listening</span>
            </>
          ) : (
            <>
              <MicrophoneIcon className="h-5 w-5" />
              <span>Start Listening</span>
            </>
          )}
        </button>

        {transcript && (
          <button
            onClick={resetTranscript}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Clear
          </button>
        )}
      </div>

      {isListening && (
        <div className="mt-4 animate-pulse text-center text-sm text-indigo-600">
          Listening...
        </div>
      )}
    </div>
  );
} 