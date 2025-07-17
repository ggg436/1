"use client";

import Image from "next/image";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useWindowSize } from "react-use";

import { Header } from "./header";
import { Footer } from "./footer";
import { ResultCard } from "./result-card";

type Props ={
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: string | number;
  initialLessonChallenges: any[];
  userSubscription: any;
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const [lessonId] = useState(initialLessonId);
  const [hearts] = useState(initialHearts);
  const [status, setStatus] = useState<"none" | "completed">("none");

  // Get the first challenge question
  const questionText = initialLessonChallenges[0]?.question || "How are you";
  
  const handleFinish = () => {
    // Play finish sound
    const audio = new Audio("/finish.mp3");
    audio.play().catch(e => console.error("Error playing audio:", e));
    
    // Set status to completed to show the congratulation screen
    setStatus("completed");
  };
  
  if (status === "completed") {
    return (
      <>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
        />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full">
          <Image
            src="/finish.svg"
            alt="Finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />
          <Image
            src="/finish.svg"
            alt="Finish"
            className="block lg:hidden"
            height={50}
            width={50}
          />
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-700">
            Great job! <br /> You&apos;ve completed the lesson.
          </h1>
          <div className="flex items-center gap-x-4 w-full">
            <ResultCard
              variant="points"
              value={10}
            />
            <ResultCard
              variant="hearts"
              value={hearts}
            />
          </div>
        </div>
        <Footer
          lessonId={typeof lessonId === 'string' ? parseInt(lessonId, 10) : lessonId as number}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    );
  }

  // Format the HTML tutorial content
  const formatContent = (text: string) => {
    // Split the content by newlines to create paragraphs
    return text.split('\n').map((line, index) => {
      if (line.startsWith('<!DOCTYPE') || line.startsWith('<html') || line.startsWith('<head') || 
          line.startsWith('</head') || line.startsWith('<body') || line.startsWith('</body') || 
          line.startsWith('</html') || line.startsWith('<title') || line.startsWith('</title')) {
        return <div key={index} className="my-1"><code className="font-mono text-blue-600">{line}</code></div>;
      } else if (line.startsWith('<h1>') || line.startsWith('</h1>')) {
        return <div key={index} className="my-1"><code className="font-mono text-purple-600">{line}</code></div>;
      } else if (line.startsWith('<p>') || line.startsWith('</p>')) {
        return <div key={index} className="my-1"><code className="font-mono text-green-600">{line}</code></div>;
      } else if (line.startsWith('Example')) {
        return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line}</h2>;
      } else if (line.startsWith('HTML ')) {
        return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line}</h2>;
      } else if (line.startsWith('Track Your')) {
        return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line}</h2>;
      } else if (line.startsWith('Kickstart')) {
        return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line}</h2>;
      } else if (line.startsWith('Checkmark')) {
        return (
          <div key={index} className="flex items-start my-1">
            <span className="text-green-500 mr-2">✓</span>
            <span>{line.replace('Checkmark', '')}</span>
          </div>
        );
      } else if (line === 'Video: HTML for Beginners') {
        return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line}</h2>;
      } else if (line.trim() === 'Learn HTML') {
        return <h1 key={index} className="text-2xl font-bold mt-4 mb-2">{line}</h1>;
      } else if (line.trim() === 'HTML Tutorial') {
        return <h1 key={index} className="text-3xl font-bold mt-4 mb-2">{line}</h1>;
      } else if (line.trim() === 'w' || line.trim() === '3' || line.trim() === 's' || 
                line.trim() === 'c' || line.trim() === 'h' || line.trim() === 'o' || 
                line.trim() === 'l' || line.trim() === 'C' || line.trim() === 'E' ||
                line.trim() === 'R' || line.trim() === 'T' || line.trim() === 'I' || 
                line.trim() === 'F' || line.trim() === 'I' || line.trim() === 'E' || 
                line.trim() === 'D' || line.trim() === '.' || line.trim() === '2' || 
                line.trim() === '0' || line.trim() === '5') {
        return <span key={index} className="text-lg font-bold text-green-600 inline-block">{line}</span>;
      } else if (line.trim() === 'Note: This is an optional feature. You can study at W3Schools without creating an account.') {
        return <p key={index} className="italic text-gray-600 my-2">{line}</p>;
      } else if (line.trim() === 'Click on the "Try it Yourself" button to see how it works.') {
        return <p key={index} className="font-semibold my-2">{line}</p>;
      } else if (line.trim() === 'Tutorial on YouTubeTutorial on YouTube') {
        return (
          <div key={index} className="flex justify-center my-2">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2">
              Watch on YouTube
            </button>
          </div>
        );
      } else if (line.trim() === '') {
        return <div key={index} className="my-4"></div>;
      } else {
        return <p key={index} className="my-1">{line}</p>;
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <div className="prose">{formatContent(questionText)}</div>
        </div>
      </div>
      
      <div className="p-6 flex justify-center">
        <button 
          onClick={handleFinish}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-md transition-colors"
        >
          Finish
        </button>
      </div>
    </div>
  );
};
