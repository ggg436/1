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
      title: "Mock Course",
      imageSrc: "/assets/course-image.png"
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
    },
    {
      id: "course2",
      title: "French",
      imageSrc: "/fr.svg",
      active: false
    },
    {
      id: "course3",
      title: "Italian",
      imageSrc: "/it.svg",
      active: false
    },
    {
      id: "course4",
      title: "German",
      imageSrc: "/de.svg",
      active: false
    }
  ]);
};

export const getLesson = () => {
  return Promise.resolve({
    id: "lesson1",
    title: "Introduction",
    order: 1,
    challenges: [
      {
        id: "challenge1",
        type: "SELECT",
        question: "What is 'hello' in Spanish?",
        completed: true,
        options: [
          { id: "option1", text: "Hola", correct: true },
          { id: "option2", text: "Adiós", correct: false },
          { id: "option3", text: "Gracias", correct: false }
        ]
      },
      {
        id: "challenge2",
        type: "ASSIST",
        question: "Translate: Good morning",
        completed: false,
        answer: "Buenos días"
      },
      {
        id: "challenge3",
        type: "SELECT",
        question: "What is 'thank you' in Spanish?",
        completed: false,
        options: [
          { id: "option1", text: "Por favor", correct: false },
          { id: "option2", text: "Gracias", correct: true },
          { id: "option3", text: "De nada", correct: false }
        ]
      }
    ]
  });
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
          id: "lesson3",
          order: 1,
          title: "Questions"
        },
        {
          id: "lesson4",
          order: 2,
          title: "Responses"
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