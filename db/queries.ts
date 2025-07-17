// Mock queries to replace the original DB queries
// These functions return mock data instead of querying a database

export const getUserProgress = () => {
  return Promise.resolve({
    id: "user1",
    hearts: 5,
    points: 100,
    activeCourseId: "course1",
    activeCourse: {
      id: "course1",
      title: "Spanish",
      imageSrc: "/es.svg"
    }
  });
};

export const getCourseProgress = () => {
  return Promise.resolve({
    activeLesson: {
      id: "lesson1",
      title: "Introduction",
      order: 1,
      unit: {
        id: "unit1",
        title: "Unit 1",
        order: 1
      }
    }
  });
};

export const getLessonPercentage = () => {
  return Promise.resolve(60); // 60% complete
};

export const getCourses = () => {
  return Promise.resolve([
    {
      id: "course1",
      title: "Spanish",
      imageSrc: "/es.svg",
      active: true
    }
  ]);
};

interface Lesson {
  id: string;
  title: string;
  order: number;
  challenges: {
    id: string;
    type: string;
    question: string;
    completed: boolean;
    answer: string;
  }[];
}

interface LessonMap {
  [key: string]: Lesson;
}

export const getLesson = (lessonId?: string | number) => {
  // Default to lesson1 if no lessonId is provided
  const id = lessonId?.toString() || "lesson1";
  
  const lessons: LessonMap = {
    "lesson1": {
      id: "lesson1",
      title: "HTML Tutorial",
      order: 1,
      challenges: [
        {
          id: "challenge1",
          type: "ASSIST",
          question: "HTML Tutorial\nLearn HTML\nHTML is the standard markup language for Web pages.\n\nWith HTML you can create your own Website.\n\nHTML is easy to learn - You will enjoy it!\n\n\nEasy Learning with HTML \"Try it Yourself\"\nWith our \"Try it Yourself\" editor, you can edit the HTML code and view the result:\n\nExample\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\nClick on the \"Try it Yourself\" button to see how it works.\n\nHTML Examples\nIn this HTML tutorial, you will find more than 200 examples. With our online \"Try it Yourself\" editor, you can edit and test each example yourself!\n\n\nHTML Exercises\nMany chapters in this tutorial end with an exercise where you can check your level of knowledge.\n\n\nHTML Quiz Test\nTest your HTML skills with our HTML Quiz!\n\n\nTrack Your Progress\nCreate a free W3Schools account and get access to more features and learning materials:\n\nCheckmarkView your completed tutorials, exercises, and quizzes\nCheckmarkKeep an eye on your progress and daily streaks\nCheckmarkSet goals and create learning paths\nCheckmarkCreate your own personal website\n\nNote: This is an optional feature. You can study at W3Schools without creating an account.\n\nHTML References\nAt W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:\n\nHTML ElementsBrowser SupportAttributesGlobal AttributesEvent AttributesColor NamesCanvasAudio/Video DOMCharacter SetsURL EncodingLanguage CodesCountry CodesHTTP MessagesPx to Em ConverterKeyboard Shortcuts\n\nKickstart your career\nGet certified by completing the HTML course\n\nw\n3\ns\nc\nh\no\no\nl\ns\nC\nE\nR\nT\nI\nF\nI\nE\nD\n.\n2\n0\n2\n5\nVideo: HTML for Beginners\nTutorial on YouTubeTutorial on YouTube",
          completed: false,
          answer: "HTML Tutorial"
        }
      ]
    },
    "lesson2": {
      id: "lesson2",
      title: "Greetings",
      order: 2,
      challenges: [
        {
          id: "challenge2",
          type: "ASSIST",
          question: "We are good",
          completed: false,
          answer: "We are good"
        }
      ]
    },
    "lesson3": {
      id: "lesson3",
      title: "Basic Phrases",
      order: 3,
      challenges: [
        {
          id: "challenge3",
          type: "ASSIST",
          question: "Thank you",
          completed: false,
          answer: "Thank you"
        }
      ]
    },
    "lesson4": {
      id: "lesson4",
      title: "Conversations",
      order: 4,
      challenges: [
        {
          id: "challenge4",
          type: "ASSIST",
          question: "Nice to meet you",
          completed: false,
          answer: "Nice to meet you"
        }
      ]
    },
    "lesson5": {
      id: "lesson5",
      title: "Daily Talk",
      order: 5,
      challenges: [
        {
          id: "challenge5",
          type: "ASSIST",
          question: "Good morning",
          completed: false,
          answer: "Good morning"
        }
      ]
    },
    "lesson6": {
      id: "lesson6",
      title: "Common Phrases",
      order: 6,
      challenges: [
        {
          id: "challenge6",
          type: "ASSIST",
          question: "What's your name?",
          completed: false,
          answer: "What's your name?"
        }
      ]
    },
    "lesson7": {
      id: "lesson7",
      title: "Questions",
      order: 1,
      challenges: [
        {
          id: "challenge7",
          type: "ASSIST",
          question: "Where are you going?",
          completed: false,
          answer: "Where are you going?"
        }
      ]
    },
    "lesson8": {
      id: "lesson8",
      title: "Responses",
      order: 2,
      challenges: [
        {
          id: "challenge8",
          type: "ASSIST",
          question: "I'm going home",
          completed: false,
          answer: "I'm going home"
        }
      ]
    },
    "lesson9": {
      id: "lesson9",
      title: "Directions",
      order: 3,
      challenges: [
        {
          id: "challenge9",
          type: "ASSIST",
          question: "Turn left at the corner",
          completed: false,
          answer: "Turn left at the corner"
        }
      ]
    },
    "lesson10": {
      id: "lesson10",
      title: "Time Expressions",
      order: 4,
      challenges: [
        {
          id: "challenge10",
          type: "ASSIST",
          question: "What time is it?",
          completed: false,
          answer: "What time is it?"
        }
      ]
    },
    "lesson11": {
      id: "lesson11",
      title: "Activities",
      order: 5,
      challenges: [
        {
          id: "challenge11",
          type: "ASSIST",
          question: "What do you like to do?",
          completed: false,
          answer: "What do you like to do?"
        }
      ]
    },
    "lesson12": {
      id: "lesson12",
      title: "Plans",
      order: 6,
      challenges: [
        {
          id: "challenge12",
          type: "ASSIST",
          question: "See you tomorrow",
          completed: false,
          answer: "See you tomorrow"
        }
      ]
    }
  };
  
  return Promise.resolve(lessons[id] || lessons["lesson1"]);
};

export const getUnits = () => {
  return Promise.resolve([
    {
      id: "unit1",
      order: 1,
      title: "Basics",
      description: "Learn the basics",
      lessons: [
        {
          id: "lesson1",
          order: 1,
          title: "Introduction"
        },
        {
          id: "lesson2",
          order: 2,
          title: "Greetings"
        },
        {
          id: "lesson3",
          order: 3,
          title: "Basic Phrases"
        },
        {
          id: "lesson4",
          order: 4,
          title: "Conversations"
        },
        {
          id: "lesson5",
          order: 5,
          title: "Daily Talk"
        },
        {
          id: "lesson6",
          order: 6,
          title: "Common Phrases"
        }
      ]
    },
    {
      id: "unit2",
      order: 2,
      title: "Phrases",
      description: "Common phrases",
      lessons: [
        {
          id: "lesson7",
          order: 1,
          title: "Questions"
        },
        {
          id: "lesson8",
          order: 2,
          title: "Responses"
        },
        {
          id: "lesson9",
          order: 3,
          title: "Directions"
        },
        {
          id: "lesson10",
          order: 4,
          title: "Time Expressions"
        },
        {
          id: "lesson11",
          order: 5,
          title: "Activities"
        },
        {
          id: "lesson12",
          order: 6,
          title: "Plans"
        }
      ]
    }
  ]);
};

export const getUserSubscription = () => {
  return Promise.resolve({
    isActive: false
  });
};

// Add any other query functions that might be needed 