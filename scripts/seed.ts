import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(
  "postgresql://linguify_owner:q0ING9bPiznH@ep-silent-queen-a6kw9sa2.us-west-2.aws.neon.tech/linguify?sslmode=require"
);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Telugu database");

    // Clear existing data
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    // Insert course
    await db.insert(schema.courses).values([
      { id: 1, title: "Telugu", imageSrc: "/te.svg" },
    ]);

    // Insert units
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Basics",
        description: "Learn the basics of Telugu",
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: "Greetings",
        description: "Common greetings and phrases",
        order: 2,
      },
      {
        id: 3,
        courseId: 1,
        title: "Numbers",
        description: "Learn numbers in Telugu",
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: "Food",
        description: "Learn about food and dining",
        order: 4,
      },
      {
        id: 5,
        courseId: 1,
        title: "Travel",
        description: "Phrases for traveling",
        order: 5,
      },
    ]);

    // Insert lessons
    await db.insert(schema.lessons).values([
      // Basics Lessons
      { id: 1, unitId: 1, order: 1, title: "Introduction to Telugu Script" },
      { id: 2, unitId: 1, order: 2, title: "Basic Verbs" },
      { id: 3, unitId: 1, order: 3, title: "Simple Sentences" },
      { id: 4, unitId: 1, order: 4, title: "Adjectives" },

      // Greetings Lessons
      { id: 5, unitId: 2, order: 1, title: "Greetings" },
      { id: 6, unitId: 2, order: 2, title: "Introductions" },
      { id: 7, unitId: 2, order: 3, title: "Farewells" },

      // Numbers Lessons
      { id: 8, unitId: 3, order: 1, title: "Numbers 1-10" },
      { id: 9, unitId: 3, order: 2, title: "Numbers 11-20" },
      { id: 10, unitId: 3, order: 3, title: "Counting Practice" },

      // Food Lessons
      { id: 11, unitId: 4, order: 1, title: "Fruits and Vegetables" },
      { id: 12, unitId: 4, order: 2, title: "Dining Vocabulary" },
      { id: 13, unitId: 4, order: 3, title: "Ordering Food" },

      // Travel Lessons
      { id: 14, unitId: 5, order: 1, title: "At the Airport" },
      { id: 15, unitId: 5, order: 2, title: "Hotel Reservations" },
      { id: 16, unitId: 5, order: 3, title: "Asking for Directions" },
    ]);

    // Insert challenges
    await db.insert(schema.challenges).values([
      // Basics Challenges - Lesson 1 (Introduction to Telugu Script)
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the book"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the book"',
      },
      // Basics Challenges - Lesson 2 (Basic Verbs)
      {
        id: 3,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "I eat"?',
      },
      {
        id: 4,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '"I eat"',
      },
      // Basics Challenges - Lesson 3 (Simple Sentences)
      {
        id: 5,
        lessonId: 3,
        type: "SELECT",
        order: 1,
        question: 'Which sentence translates to "I have a book"?',
      },
      {
        id: 6,
        lessonId: 3,
        type: "ASSIST",
        order: 2,
        question: '"I have a book"',
      },
      // Basics Challenges - Lesson 4 (Adjectives)
      {
        id: 7,
        lessonId: 4,
        type: "SELECT",
        order: 1,
        question: 'Which adjective means "big"?',
      },
      {
        id: 8,
        lessonId: 4,
        type: "ASSIST",
        order: 2,
        question: '"big"',
      },
      // Greetings Challenges - Lesson 5 (Greetings)
      {
        id: 9,
        lessonId: 5,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Good morning" in Telugu?',
      },
      {
        id: 10,
        lessonId: 5,
        type: "ASSIST",
        order: 2,
        question: '"Good morning"',
      },
      // Greetings Challenges - Lesson 6 (Introductions)
      {
        id: 11,
        lessonId: 6,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "My name is Ravi"?',
      },
      {
        id: 12,
        lessonId: 6,
        type: "ASSIST",
        order: 2,
        question: '"My name is Ravi"',
      },
      // Greetings Challenges - Lesson 7 (Farewells)
      {
        id: 13,
        lessonId: 7,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "See you later"?',
      },
      {
        id: 14,
        lessonId: 7,
        type: "ASSIST",
        order: 2,
        question: '"See you later"',
      },
      // Numbers Challenges - Lesson 8 (Numbers 1-10)
      {
        id: 15,
        lessonId: 8,
        type: "SELECT",
        order: 1,
        question: 'What is "five" in Telugu?',
      },
      {
        id: 16,
        lessonId: 8,
        type: "ASSIST",
        order: 2,
        question: '"five"',
      },
      // Numbers Challenges - Lesson 9 (Numbers 11-20)
      {
        id: 17,
        lessonId: 9,
        type: "SELECT",
        order: 1,
        question: 'What is "fifteen" in Telugu?',
      },
      {
        id: 18,
        lessonId: 9,
        type: "ASSIST",
        order: 2,
        question: '"fifteen"',
      },
      // Numbers Challenges - Lesson 10 (Counting Practice)
      {
        id: 19,
        lessonId: 10,
        type: "SELECT",
        order: 1,
        question: 'Which number is "seven" in Telugu?',
      },
      {
        id: 20,
        lessonId: 10,
        type: "ASSIST",
        order: 2,
        question: '"seven"',
      },
      // Food Challenges - Lesson 11 (Fruits and Vegetables)
      {
        id: 21,
        lessonId: 11,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the tomato"?',
      },
      {
        id: 22,
        lessonId: 11,
        type: "ASSIST",
        order: 2,
        question: '"the tomato"',
      },
      // Food Challenges - Lesson 12 (Dining Vocabulary)
      {
        id: 23,
        lessonId: 12,
        type: "SELECT",
        order: 1,
        question: 'What does "తినే జాబితా" mean?',
      },
      {
        id: 24,
        lessonId: 12,
        type: "ASSIST",
        order: 2,
        question: '"తినే జాబితా"',
      },
      // Food Challenges - Lesson 13 (Ordering Food)
      {
        id: 25,
        lessonId: 13,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I would like a coffee"?',
      },
      {
        id: 26,
        lessonId: 13,
        type: "ASSIST",
        order: 2,
        question: '"I would like a coffee"',
      },
      // Travel Challenges - Lesson 14 (At the Airport)
      {
        id: 27,
        lessonId: 14,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "Where is the gate?"',
      },
      {
        id: 28,
        lessonId: 14,
        type: "ASSIST",
        order: 2,
        question: '"Where is the gate?"',
      },
      // Travel Challenges - Lesson 15 (Hotel Reservations)
      {
        id: 29,
        lessonId: 15,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I have a reservation"?',
      },
      {
        id: 30,
        lessonId: 15,
        type: "ASSIST",
        order: 2,
        question: '"I have a reservation"',
      },
      // Travel Challenges - Lesson 16 (Asking for Directions)
      {
        id: 31,
        lessonId: 16,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Turn left" in Telugu?',
      },
      {
        id: 32,
        lessonId: 16,
        type: "ASSIST",
        order: 2,
        question: '"Turn left"',
      },
    ]);

    // Insert challenge options
    await db.insert(schema.challengeOptions).values([
      // Challenge 1 Options (Basics Lesson 1 - SELECT)
      {
        challengeId: 1,
        correct: true,
        imageSrc: "/book.png",
        text: "పుస్తకం",
        audioSrc: "/te_book.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        imageSrc: "/cow.png",
        text: "గోవు",
        audioSrc: "/te_cow.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        imageSrc: "/door.png",
        text: "తలుపు",
        audioSrc: "/te_door.mp3",
      },
      // Challenge 2 Options (Basics Lesson 1 - ASSIST)
      {
        challengeId: 2,
        correct: true,
        text: "పుస్తకం",
        audioSrc: "/te_book.mp3",
      },

      // Challenge 3 Options (Basics Lesson 2 - SELECT)
      {
        challengeId: 3,
        correct: true,
        text: "నేను తినుతాను",
        audioSrc: "/te_i_eat.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "నీవు తింటావు",
        audioSrc: "/te_you_eat.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "అతను తింటాడు",
        audioSrc: "/te_he_eats.mp3",
      },
      // Challenge 4 Options (Basics Lesson 2 - ASSIST)
      {
        challengeId: 4,
        correct: true,
        text: "నేను తినుతాను",
        audioSrc: "/te_i_eat.mp3",
      },

      // Challenge 5 Options (Basics Lesson 3 - SELECT)
      {
        challengeId: 5,
        correct: true,
        text: "నాకు పుస్తకం ఉంది",
        audioSrc: "/te_i_have_a_book.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "నీవు పుస్తకం ఉన్నావు",
        audioSrc: "/te_you_have_a_book.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "అతనికి పుస్తకం ఉంది",
        audioSrc: "/te_he_has_a_book.mp3",
      },
      // Challenge 6 Options (Basics Lesson 3 - ASSIST)
      {
        challengeId: 6,
        correct: true,
        text: "నాకు పుస్తకం ఉంది",
        audioSrc: "/te_i_have_a_book.mp3",
      },

      // Challenge 7 Options (Basics Lesson 4 - SELECT)
      {
        challengeId: 7,
        correct: true,
        text: "పెద్ద",
        audioSrc: "/te_big.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "చిన్న",
        audioSrc: "/te_small.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "వేగంగా",
        audioSrc: "/te_fast.mp3",
      },
      // Challenge 8 Options (Basics Lesson 4 - ASSIST)
      {
        challengeId: 8,
        correct: true,
        text: "పెద్ద",
        audioSrc: "/te_big.mp3",
      },

      // Challenge 9 Options (Greetings Lesson 5 - SELECT)
      {
        challengeId: 9,
        correct: true,
        text: "శుభోదయం",
        audioSrc: "/te_good_morning.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "శుభరాత్రి",
        audioSrc: "/te_good_night.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "నమస్తే",
        audioSrc: "/te_hello.mp3",
      },
      // Challenge 10 Options (Greetings Lesson 5 - ASSIST)
      {
        challengeId: 10,
        correct: true,
        text: "శుభోదయం",
        audioSrc: "/te_good_morning.mp3",
      },

      // Challenge 11 Options (Greetings Lesson 6 - SELECT)
      {
        challengeId: 11,
        correct: true,
        text: "నా పేరు రవి",
        audioSrc: "/te_my_name_is_ravi.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "నేను రవి",
        audioSrc: "/te_i_am_ravi.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "నాకు కుక్క ఉంది",
        audioSrc: "/te_i_have_a_dog.mp3",
      },
      // Challenge 12 Options (Greetings Lesson 6 - ASSIST)
      {
        challengeId: 12,
        correct: true,
        text: "నా పేరు రవి",
        audioSrc: "/te_my_name_is_ravi.mp3",
      },

      // Challenge 13 Options (Greetings Lesson 7 - SELECT)
      {
        challengeId: 13,
        correct: true,
        text: "తర్వాత కలుద్దాం",
        audioSrc: "/te_see_you_later.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "వీడ్కోలు",
        audioSrc: "/te_goodbye.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "మనం కలుద్దాం",
        audioSrc: "/te_we_see_each_other.mp3",
      },
      // Challenge 14 Options (Greetings Lesson 7 - ASSIST)
      {
        challengeId: 14,
        correct: true,
        text: "తర్వాత కలుద్దాం",
        audioSrc: "/te_see_you_later.mp3",
      },

      // Challenge 15 Options (Numbers Lesson 8 - SELECT)
      {
        challengeId: 15,
        correct: true,
        text: "ఐదు",
        audioSrc: "/te_five.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "నాలుగు",
        audioSrc: "/te_four.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "ఆరు",
        audioSrc: "/te_six.mp3",
      },
      // Challenge 16 Options (Numbers Lesson 8 - ASSIST)
      {
        challengeId: 16,
        correct: true,
        text: "ఐదు",
        audioSrc: "/te_five.mp3",
      },

      // Challenge 17 Options (Numbers Lesson 9 - SELECT)
      {
        challengeId: 17,
        correct: true,
        text: "పదిహేను",
        audioSrc: "/te_fifteen.mp3",
      },
      {
        challengeId: 17,
        correct: false,
        text: "పదమూడు",
        audioSrc: "/te_thirteen.mp3",
      },
      {
        challengeId: 17,
        correct: false,
        text: "పదకొండు",
        audioSrc: "/te_eleven.mp3",
      },
      // Challenge 18 Options (Numbers Lesson 9 - ASSIST)
      {
        challengeId: 18,
        correct: true,
        text: "పదిహేను",
        audioSrc: "/te_fifteen.mp3",
      },

      // Challenge 19 Options (Numbers Lesson 10 - SELECT)
      {
        challengeId: 19,
        correct: true,
        text: "ఏడు",
        audioSrc: "/te_seven.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "ఎనిమిది",
        audioSrc: "/te_eight.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "ఐదు",
        audioSrc: "/te_five.mp3",
      },
      // Challenge 20 Options (Numbers Lesson 10 - ASSIST)
      {
        challengeId: 20,
        correct: true,
        text: "ఏడు",
        audioSrc: "/te_seven.mp3",
      },

      // Challenge 21 Options (Food Lesson 11 - SELECT)
      {
        challengeId: 21,
        correct: true,
        imageSrc: "/tomato.png",
        text: "టమోట",
        audioSrc: "/te_tomato.mp3",
      },
      {
        challengeId: 21,
        correct: false,
        imageSrc: "/potato.png",
        text: "అల్లం",
        audioSrc: "/te_potato.mp3",
      },
      {
        challengeId: 21,
        correct: false,
        imageSrc: "/onion.png",
        text: "ఉల్లిపాయ",
        audioSrc: "/te_onion.mp3",
      },
      // Challenge 22 Options (Food Lesson 11 - ASSIST)
      {
        challengeId: 22,
        correct: true,
        text: "టమోట",
        audioSrc: "/te_tomato.mp3",
      },

      // Challenge 23 Options (Food Lesson 12 - SELECT)
      {
        challengeId: 23,
        correct: true,
        text: "తినే జాబితా",
        audioSrc: "/te_menu.mp3",
      },
      {
        challengeId: 23,
        correct: false,
        text: "బిల్లు",
        audioSrc: "/te_bill.mp3",
      },
      {
        challengeId: 23,
        correct: false,
        text: "కోస్తా",
        audioSrc: "/te_fork.mp3",
      },
      // Challenge 24 Options (Food Lesson 12 - ASSIST)
      {
        challengeId: 24,
        correct: true,
        text: "తినే జాబితా",
        audioSrc: "/te_menu.mp3",
      },

      // Challenge 25 Options (Food Lesson 13 - SELECT)
      {
        challengeId: 25,
        correct: true,
        text: "నేను కాఫీ కావాలి",
        audioSrc: "/te_i_would_like_a_coffee.mp3",
      },
      {
        challengeId: 25,
        correct: false,
        text: "నాకు ఆకలి ఉంది",
        audioSrc: "/te_i_am_hungry.mp3",
      },
      {
        challengeId: 25,
        correct: false,
        text: "బాత్రూమ్ ఎక్కడ?",
        audioSrc: "/te_where_is_the_bathroom.mp3",
      },
      // Challenge 26 Options (Food Lesson 13 - ASSIST)
      {
        challengeId: 26,
        correct: true,
        text: "నేను కాఫీ కావాలి",
        audioSrc: "/te_i_would_like_a_coffee.mp3",
      },

      // Challenge 27 Options (Travel Lesson 14 - SELECT)
      {
        challengeId: 27,
        correct: true,
        text: "గేట్ ఎక్కడ?",
        audioSrc: "/te_where_is_the_gate.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        text: "బాగేజ్ క్యారousel ఎక్కడ?",
        audioSrc: "/te_where_is_the_luggage_carousel.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        text: "ఎంత ఖరీదైంది?",
        audioSrc: "/te_how_much.mp3",
      },
      // Challenge 28 Options (Travel Lesson 14 - ASSIST)
      {
        challengeId: 28,
        correct: true,
        text: "గేట్ ఎక్కడ?",
        audioSrc: "/te_where_is_the_gate.mp3",
      },

      // Challenge 29 Options (Travel Lesson 15 - SELECT)
      {
        challengeId: 29,
        correct: true,
        text: "నాకు ఒక రిజర్వేషన్ ఉంది",
        audioSrc: "/te_i_have_a_reservation.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "నేను ఒక గది కావాలి",
        audioSrc: "/te_i_would_like_a_room.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "లిఫ్టు ఎక్కడ?",
        audioSrc: "/te_where_is_the_elevator.mp3",
      },
      // Challenge 30 Options (Travel Lesson 15 - ASSIST)
      {
        challengeId: 30,
        correct: true,
        text: "నాకు ఒక రిజర్వేషన్ ఉంది",
        audioSrc: "/te_i_have_a_reservation.mp3",
      },

      // Challenge 31 Options (Travel Lesson 16 - SELECT)
      {
        challengeId: 31,
        correct: true,
        text: "ఎడమవైపు తిరుగండి",
        audioSrc: "/te_turn_left.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "కుడివైపు తిరుగండి",
        audioSrc: "/te_turn_right.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "సూటిగా కొనసాగండి",
        audioSrc: "/te_go_straight.mp3",
      },
      // Challenge 32 Options (Travel Lesson 16 - ASSIST)
      {
        challengeId: 32,
        correct: true,
        text: "ఎడమవైపు తిరుగండి",
        audioSrc: "/te_turn_left.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
