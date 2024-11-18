import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(
  "postgresql://linguify_owner:q0ING9bPiznH@ep-silent-queen-a6kw9sa2.us-west-2.aws.neon.tech/linguify?sslmode=require"
);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Clear existing data
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    // Insert courses
    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "/es.svg" },
      { id: 2, title: "French", imageSrc: "/fr.svg" },
      { id: 3, title: "Croatian", imageSrc: "/hr.svg" },
    ]);

    // Insert units
    await db.insert(schema.units).values([
      // Spanish Units
      {
        id: 1,
        courseId: 1,
        title: "Basics",
        description: "Learn the basics of Spanish",
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
        title: "Food",
        description: "Learn about food and dining",
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: "Travel",
        description: "Phrases for traveling",
        order: 4,
      },
      // French Units
      {
        id: 5,
        courseId: 2,
        title: "Basics",
        description: "Learn the basics of French",
        order: 1,
      },
      {
        id: 6,
        courseId: 2,
        title: "Travel",
        description: "Phrases for traveling",
        order: 2,
      },
      {
        id: 7,
        courseId: 2,
        title: "Shopping",
        description: "Vocabulary for shopping",
        order: 3,
      },
      // Croatian Units
      {
        id: 8,
        courseId: 3,
        title: "Basics",
        description: "Learn the basics of Croatian",
        order: 1,
      },
      {
        id: 9,
        courseId: 3,
        title: "Directions",
        description: "Understanding directions",
        order: 2,
      },
    ]);

    // Insert lessons
    await db.insert(schema.lessons).values([
      // Spanish Lessons - Unit 1 (Basics)
      { id: 1, unitId: 1, order: 1, title: "Introduction to Nouns" },
      { id: 2, unitId: 1, order: 2, title: "Basic Verbs" },
      { id: 3, unitId: 1, order: 3, title: "Simple Sentences" },
      { id: 4, unitId: 1, order: 4, title: "Adjectives" },
      // Spanish Lessons - Unit 2 (Greetings)
      { id: 5, unitId: 2, order: 1, title: "Greetings" },
      { id: 6, unitId: 2, order: 2, title: "Introductions" },
      { id: 7, unitId: 2, order: 3, title: "Farewells" },
      // Spanish Lessons - Unit 3 (Food)
      { id: 8, unitId: 3, order: 1, title: "Fruits and Vegetables" },
      { id: 9, unitId: 3, order: 2, title: "Dining Vocabulary" },
      { id: 10, unitId: 3, order: 3, title: "Ordering Food" },
      { id: 11, unitId: 4, order: 1, title: "At the Airport" },
      { id: 12, unitId: 4, order: 2, title: "Hotel Reservations" },
      { id: 13, unitId: 4, order: 3, title: "Asking for Directions" },
      
      // French Lessons - Unit 5 (Basics)
      { id: 14, unitId: 5, order: 1, title: "Introduction to Nouns" },
      { id: 15, unitId: 5, order: 2, title: "Basic Verbs" },
      { id: 16, unitId: 5, order: 3, title: "Simple Sentences" },
      { id: 17, unitId: 5, order: 4, title: "Adjectives" },
      // French Lessons - Unit 6 (Travel)
      { id: 18, unitId: 6, order: 1, title: "At the Airport" },
      { id: 19, unitId: 6, order: 2, title: "Hotel Reservations" },
      { id: 20, unitId: 6, order: 3, title: "Asking for Directions" },
      // French Lessons - Unit 7 (Shopping)
      { id: 21, unitId: 7, order: 1, title: "Clothing Vocabulary" },
      { id: 22, unitId: 7, order: 2, title: "At the Store" },
      { id: 23, unitId: 7, order: 3, title: "Making Purchases" },
      
      // Croatian Lessons - Unit 8 (Basics)
      { id: 24, unitId: 8, order: 1, title: "Alphabet and Pronunciation" },
      { id: 25, unitId: 8, order: 2, title: "Basic Verbs" },
      { id: 26, unitId: 8, order: 3, title: "Simple Sentences" },
      { id: 27, unitId: 8, order: 4, title: "Numbers" },
      // Croatian Lessons - Unit 9 (Directions)
      { id: 28, unitId: 9, order: 1, title: "Understanding Directions" },
      { id: 29, unitId: 9, order: 2, title: "Asking for Locations" },
      { id: 30, unitId: 9, order: 3, title: "Public Transportation" },
    ]);

    // Insert challenges
    await db.insert(schema.challenges).values([
      // Spanish Challenges - Lesson 1 (Introduction to Nouns)
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the apple"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the apple"',
      },
      // Spanish Challenges - Lesson 2 (Basic Verbs)
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
      // Spanish Challenges - Lesson 3 (Simple Sentences)
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
      // Spanish Challenges - Lesson 4 (Adjectives)
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
      // Spanish Challenges - Lesson 5 (Greetings)
      {
        id: 9,
        lessonId: 5,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Good morning" in Spanish?',
      },
      {
        id: 10,
        lessonId: 5,
        type: "ASSIST",
        order: 2,
        question: '"Good morning"',
      },
      // Spanish Challenges - Lesson 6 (Introductions)
      {
        id: 11,
        lessonId: 6,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "My name is Juan"?',
      },
      {
        id: 12,
        lessonId: 6,
        type: "ASSIST",
        order: 2,
        question: '"My name is Juan"',
      },
      // Spanish Challenges - Lesson 7 (Farewells)
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
      // Spanish Challenges - Lesson 8 (Fruits and Vegetables)
      {
        id: 15,
        lessonId: 8,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the tomato"?',
      },
      {
        id: 16,
        lessonId: 8,
        type: "ASSIST",
        order: 2,
        question: '"the tomato"',
      },
      // Spanish Challenges - Lesson 9 (Dining Vocabulary)
      {
        id: 17,
        lessonId: 9,
        type: "SELECT",
        order: 1,
        question: 'What does "el menú" mean?',
      },
      {
        id: 18,
        lessonId: 9,
        type: "ASSIST",
        order: 2,
        question: '"el menú"',
      },
      // Spanish Challenges - Lesson 10 (Ordering Food)
      {
        id: 19,
        lessonId: 10,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I would like a coffee"?',
      },
      {
        id: 20,
        lessonId: 10,
        type: "ASSIST",
        order: 2,
        question: '"I would like a coffee"',
      },
      // Spanish Challenges - Lesson 11 (At the Airport)
      {
        id: 21,
        lessonId: 11,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "Where is the gate?"',
      },
      {
        id: 22,
        lessonId: 11,
        type: "ASSIST",
        order: 2,
        question: '"Where is the gate?"',
      },
      // Spanish Challenges - Lesson 12 (Hotel Reservations)
      {
        id: 23,
        lessonId: 12,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I would like a single room"?',
      },
      {
        id: 24,
        lessonId: 12,
        type: "ASSIST",
        order: 2,
        question: '"I would like a single room"',
      },
      // Spanish Challenges - Lesson 13 (Asking for Directions)
      {
        id: 25,
        lessonId: 13,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Turn left" in Spanish?',
      },
      {
        id: 26,
        lessonId: 13,
        type: "ASSIST",
        order: 2,
        question: '"Turn left"',
      },

      // French Challenges - Lesson 14 (Introduction to Nouns)
      {
        id: 27,
        lessonId: 14,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the book"?',
      },
      {
        id: 28,
        lessonId: 14,
        type: "ASSIST",
        order: 2,
        question: '"the book"',
      },
      // French Challenges - Lesson 15 (Basic Verbs)
      {
        id: 29,
        lessonId: 15,
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "I read"?',
      },
      {
        id: 30,
        lessonId: 15,
        type: "ASSIST",
        order: 2,
        question: '"I read"',
      },
      // French Challenges - Lesson 16 (Simple Sentences)
      {
        id: 31,
        lessonId: 16,
        type: "SELECT",
        order: 1,
        question: 'Which sentence translates to "I have a book"?',
      },
      {
        id: 32,
        lessonId: 16,
        type: "ASSIST",
        order: 2,
        question: '"I have a book"',
      },
      // French Challenges - Lesson 17 (Adjectives)
      {
        id: 33,
        lessonId: 17,
        type: "SELECT",
        order: 1,
        question: 'Which adjective means "small"?',
      },
      {
        id: 34,
        lessonId: 17,
        type: "ASSIST",
        order: 2,
        question: '"small"',
      },
      // French Challenges - Lesson 18 (At the Airport)
      {
        id: 35,
        lessonId: 18,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "Where is the luggage carousel?"',
      },
      {
        id: 36,
        lessonId: 18,
        type: "ASSIST",
        order: 2,
        question: '"Where is the luggage carousel?"',
      },
      // French Challenges - Lesson 19 (Hotel Reservations)
      {
        id: 37,
        lessonId: 19,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I have a reservation"?',
      },
      {
        id: 38,
        lessonId: 19,
        type: "ASSIST",
        order: 2,
        question: '"I have a reservation"',
      },
      // French Challenges - Lesson 20 (Asking for Directions)
      {
        id: 39,
        lessonId: 20,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Go straight" in French?',
      },
      {
        id: 40,
        lessonId: 20,
        type: "ASSIST",
        order: 2,
        question: '"Go straight"',
      },
      // French Challenges - Lesson 21 (Clothing Vocabulary)
      {
        id: 41,
        lessonId: 21,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the shirt"?',
      },
      {
        id: 42,
        lessonId: 21,
        type: "ASSIST",
        order: 2,
        question: '"the shirt"',
      },
      // French Challenges - Lesson 22 (At the Store)
      {
        id: 43,
        lessonId: 22,
        type: "SELECT",
        order: 1,
        question: 'What does "la caisse" mean?',
      },
      {
        id: 44,
        lessonId: 22,
        type: "ASSIST",
        order: 2,
        question: '"la caisse"',
      },
      // French Challenges - Lesson 23 (Making Purchases)
      {
        id: 45,
        lessonId: 23,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "How much does it cost?"',
      },
      {
        id: 46,
        lessonId: 23,
        type: "ASSIST",
        order: 2,
        question: '"How much does it cost?"',
      },

      // Croatian Challenges - Lesson 24 (Alphabet and Pronunciation)
      {
        id: 47,
        lessonId: 24,
        type: "SELECT",
        order: 1,
        question: 'Which letter is not in the Croatian alphabet?',
      },
      {
        id: 48,
        lessonId: 24,
        type: "ASSIST",
        order: 2,
        question: '"Č"',
      },
      // Croatian Challenges - Lesson 25 (Basic Verbs)
      {
        id: 49,
        lessonId: 25,
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "You swim"?',
      },
      {
        id: 50,
        lessonId: 25,
        type: "ASSIST",
        order: 2,
        question: '"You swim"',
      },
      // Croatian Challenges - Lesson 26 (Simple Sentences)
      {
        id: 51,
        lessonId: 26,
        type: "SELECT",
        order: 1,
        question: 'Which sentence translates to "I run quickly"?',
      },
      {
        id: 52,
        lessonId: 26,
        type: "ASSIST",
        order: 2,
        question: '"I run quickly"',
      },
      // Croatian Challenges - Lesson 27 (Numbers)
      {
        id: 53,
        lessonId: 27,
        type: "SELECT",
        order: 1,
        question: 'What is "five" in Croatian?',
      },
      {
        id: 54,
        lessonId: 27,
        type: "ASSIST",
        order: 2,
        question: '"five"',
      },
      // Croatian Challenges - Lesson 28 (Understanding Directions)
      {
        id: 55,
        lessonId: 28,
        type: "SELECT",
        order: 1,
        question: 'How do you say "left" in Croatian?',
      },
      {
        id: 56,
        lessonId: 28,
        type: "ASSIST",
        order: 2,
        question: '"left"',
      },
      // Croatian Challenges - Lesson 29 (Asking for Locations)
      {
        id: 57,
        lessonId: 29,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "Where is the bathroom?"',
      },
      {
        id: 58,
        lessonId: 29,
        type: "ASSIST",
        order: 2,
        question: '"Where is the bathroom?"',
      },
      // Croatian Challenges - Lesson 30 (Public Transportation)
      {
        id: 59,
        lessonId: 30,
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "I need a ticket"?',
      },
      {
        id: 60,
        lessonId: 30,
        type: "ASSIST",
        order: 2,
        question: '"I need a ticket"',
      },
    ]);

    // Insert challenge options
    await db.insert(schema.challengeOptions).values([
      // Challenge 1 Options (Spanish Lesson 1 - SELECT)
      {
        challengeId: 1,
        correct: true,
        imageSrc: "/apple.png",
        text: "la manzana",
        audioSrc: "/es_apple.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        imageSrc: "/bread.png",
        text: "el pan",
        audioSrc: "/es_bread.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        imageSrc: "/water.png",
        text: "el agua",
        audioSrc: "/es_water.mp3",
      },
      // Challenge 2 Options (Spanish Lesson 1 - ASSIST)
      {
        challengeId: 2,
        correct: true,
        text: "la manzana",
        audioSrc: "/es_apple.mp3",
      },
      // Challenge 3 Options (Spanish Lesson 2 - SELECT)
      {
        challengeId: 3,
        correct: true,
        text: "Yo como",
        audioSrc: "/es_i_eat.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "Tú bebes",
        audioSrc: "/es_you_drink.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "Él come",
        audioSrc: "/es_he_eats.mp3",
      },
      // Challenge 4 Options (Spanish Lesson 2 - ASSIST)
      {
        challengeId: 4,
        correct: true,
        text: "Yo como",
        audioSrc: "/es_i_eat.mp3",
      },
      // Challenge 5 Options (Spanish Lesson 3 - SELECT)
      {
        challengeId: 5,
        correct: true,
        text: "Yo tengo un libro",
        audioSrc: "/es_i_have_a_book.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "Tú tienes un libro",
        audioSrc: "/es_you_have_a_book.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "Él tiene un libro",
        audioSrc: "/es_he_has_a_book.mp3",
      },
      // Challenge 6 Options (Spanish Lesson 3 - ASSIST)
      {
        challengeId: 6,
        correct: true,
        text: "Yo tengo un libro",
        audioSrc: "/es_i_have_a_book.mp3",
      },
      // Challenge 7 Options (Spanish Lesson 4 - SELECT)
      {
        challengeId: 7,
        correct: true,
        text: "grande",
        audioSrc: "/es_big.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "pequeño",
        audioSrc: "/es_small.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "rápido",
        audioSrc: "/es_fast.mp3",
      },
      // Challenge 8 Options (Spanish Lesson 4 - ASSIST)
      {
        challengeId: 8,
        correct: true,
        text: "grande",
        audioSrc: "/es_big.mp3",
      },
      // Challenge 9 Options (Spanish Lesson 5 - SELECT)
      {
        challengeId: 9,
        correct: true,
        text: "Buenos días",
        audioSrc: "/es_good_morning.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "Buenas noches",
        audioSrc: "/es_good_night.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "Hola",
        audioSrc: "/es_hello.mp3",
      },
      // Challenge 10 Options (Spanish Lesson 5 - ASSIST)
      {
        challengeId: 10,
        correct: true,
        text: "Buenos días",
        audioSrc: "/es_good_morning.mp3",
      },
      // Challenge 11 Options (Spanish Lesson 6 - SELECT)
      {
        challengeId: 11,
        correct: true,
        text: "Me llamo Juan",
        audioSrc: "/es_my_name_is_juan.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "Soy Juan",
        audioSrc: "/es_i_am_juan.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "Tengo un perro",
        audioSrc: "/es_i_have_a_dog.mp3",
      },
      // Challenge 12 Options (Spanish Lesson 6 - ASSIST)
      {
        challengeId: 12,
        correct: true,
        text: "Me llamo Juan",
        audioSrc: "/es_my_name_is_juan.mp3",
      },
      // Challenge 13 Options (Spanish Lesson 7 - SELECT)
      {
        challengeId: 13,
        correct: true,
        text: "Hasta luego",
        audioSrc: "/es_see_you_later.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "Adiós",
        audioSrc: "/es_goodbye.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "Nos vemos",
        audioSrc: "/es_we_see_each_other.mp3",
      },
      // Challenge 14 Options (Spanish Lesson 7 - ASSIST)
      {
        challengeId: 14,
        correct: true,
        text: "Hasta luego",
        audioSrc: "/es_see_you_later.mp3",
      },
      // Challenge 15 Options (Spanish Lesson 8 - SELECT)
      {
        challengeId: 15,
        correct: true,
        imageSrc: "/tomato.png",
        text: "el tomate",
        audioSrc: "/es_tomato.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        imageSrc: "/potato.png",
        text: "la papa",
        audioSrc: "/es_potato.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        imageSrc: "/onion.png",
        text: "la cebolla",
        audioSrc: "/es_onion.mp3",
      },
      // Challenge 16 Options (Spanish Lesson 8 - ASSIST)
      {
        challengeId: 16,
        correct: true,
        text: "el tomate",
        audioSrc: "/es_tomato.mp3",
      },
      // Challenge 17 Options (Spanish Lesson 9 - SELECT)
      {
        challengeId: 17,
        correct: true,
        text: "the menu",
        audioSrc: "/es_menu.mp3",
      },
      {
        challengeId: 17,
        correct: false,
        text: "the bill",
        audioSrc: "/es_bill.mp3",
      },
      {
        challengeId: 17,
        correct: false,
        text: "the fork",
        audioSrc: "/es_fork.mp3",
      },
      // Challenge 18 Options (Spanish Lesson 9 - ASSIST)
      {
        challengeId: 18,
        correct: true,
        text: "el menú",
        audioSrc: "/es_menu.mp3",
      },
      // Challenge 19 Options (Spanish Lesson 10 - SELECT)
      {
        challengeId: 19,
        correct: true,
        text: "Quisiera un café",
        audioSrc: "/es_i_would_like_a_coffee.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "Tengo hambre",
        audioSrc: "/es_i_am_hungry.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "Dónde está el baño",
        audioSrc: "/es_where_is_the_bathroom.mp3",
      },
      // Challenge 20 Options (Spanish Lesson 10 - ASSIST)
      {
        challengeId: 20,
        correct: true,
        text: "Quisiera un café",
        audioSrc: "/es_i_would_like_a_coffee.mp3",
      },

      // French Challenges - Lesson 14 (Introduction to Nouns)
      {
        challengeId: 27,
        correct: true,
        imageSrc: "/book.png",
        text: "le livre",
        audioSrc: "/fr_book.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        imageSrc: "/pen.png",
        text: "le stylo",
        audioSrc: "/fr_pen.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        imageSrc: "/apple.png",
        text: "la pomme",
        audioSrc: "/fr_apple.mp3",
      },
      // Challenge 28 Options (French Lesson 14 - ASSIST)
      {
        challengeId: 28,
        correct: true,
        text: "le livre",
        audioSrc: "/fr_book.mp3",
      },
      // Challenge 29 Options (French Lesson 15 - SELECT)
      {
        challengeId: 29,
        correct: true,
        text: "Je lis",
        audioSrc: "/fr_i_read.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "Tu écris",
        audioSrc: "/fr_you_write.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "Il parle",
        audioSrc: "/fr_he_speaks.mp3",
      },
      // Challenge 30 Options (French Lesson 15 - ASSIST)
      {
        challengeId: 30,
        correct: true,
        text: "Je lis",
        audioSrc: "/fr_i_read.mp3",
      },
      // Challenge 31 Options (French Lesson 16 - SELECT)
      {
        challengeId: 31,
        correct: true,
        text: "Je ai un livre",
        audioSrc: "/fr_i_have_a_book.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "Tu as un livre",
        audioSrc: "/fr_you_have_a_book.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "Il a un livre",
        audioSrc: "/fr_he_has_a_book.mp3",
      },
      // Challenge 32 Options (French Lesson 16 - ASSIST)
      {
        challengeId: 32,
        correct: true,
        text: "Je ai un livre",
        audioSrc: "/fr_i_have_a_book.mp3",
      },
      // Challenge 33 Options (French Lesson 17 - SELECT)
      {
        challengeId: 33,
        correct: true,
        text: "petit",
        audioSrc: "/fr_small.mp3",
      },
      {
        challengeId: 33,
        correct: false,
        text: "grand",
        audioSrc: "/fr_big.mp3",
      },
      {
        challengeId: 33,
        correct: false,
        text: "rapide",
        audioSrc: "/fr_fast.mp3",
      },
      // Challenge 34 Options (French Lesson 17 - ASSIST)
      {
        challengeId: 34,
        correct: true,
        text: "petit",
        audioSrc: "/fr_small.mp3",
      },
      // Challenge 35 Options (French Lesson 18 - SELECT)
      {
        challengeId: 35,
        correct: true,
        text: "Où est le carrousel à bagages?",
        audioSrc: "/fr_where_is_the_luggage_carousel.mp3",
      },
      {
        challengeId: 35,
        correct: false,
        text: "Où est la porte d'embarquement?",
        audioSrc: "/fr_where_is_the_gate.mp3",
      },
      {
        challengeId: 35,
        correct: false,
        text: "Combien ça coûte?",
        audioSrc: "/fr_how_much.mp3",
      },
      // Challenge 36 Options (French Lesson 18 - ASSIST)
      {
        challengeId: 36,
        correct: true,
        text: "Où est le carrousel à bagages?",
        audioSrc: "/fr_where_is_the_luggage_carousel.mp3",
      },
      // Challenge 37 Options (French Lesson 19 - SELECT)
      {
        challengeId: 37,
        correct: true,
        text: "J'ai une réservation",
        audioSrc: "/fr_i_have_a_reservation.mp3",
      },
      {
        challengeId: 37,
        correct: false,
        text: "Je voudrais une chambre",
        audioSrc: "/fr_i_would_like_a_room.mp3",
      },
      {
        challengeId: 37,
        correct: false,
        text: "Où est l'ascenseur?",
        audioSrc: "/fr_where_is_the_elevator.mp3",
      },
      // Challenge 38 Options (French Lesson 19 - ASSIST)
      {
        challengeId: 38,
        correct: true,
        text: "J'ai une réservation",
        audioSrc: "/fr_i_have_a_reservation.mp3",
      },
      // Challenge 39 Options (French Lesson 20 - SELECT)
      {
        challengeId: 39,
        correct: true,
        text: "Va tout droit",
        audioSrc: "/fr_go_straight.mp3",
      },
      {
        challengeId: 39,
        correct: false,
        text: "Tourne à gauche",
        audioSrc: "/fr_turn_left.mp3",
      },
      {
        challengeId: 39,
        correct: false,
        text: "Tourne à droite",
        audioSrc: "/fr_turn_right.mp3",
      },
      // Challenge 40 Options (French Lesson 20 - ASSIST)
      {
        challengeId: 40,
        correct: true,
        text: "Va tout droit",
        audioSrc: "/fr_go_straight.mp3",
      },
      // Challenge 41 Options (French Lesson 21 - SELECT)
      {
        challengeId: 41,
        correct: true,
        text: "la chemise",
        audioSrc: "/fr_shirt.mp3",
      },
      {
        challengeId: 41,
        correct: false,
        text: "le pantalon",
        audioSrc: "/fr_pants.mp3",
      },
      {
        challengeId: 41,
        correct: false,
        text: "le chapeau",
        audioSrc: "/fr_hat.mp3",
      },
      // Challenge 42 Options (French Lesson 21 - ASSIST)
      {
        challengeId: 42,
        correct: true,
        text: "la chemise",
        audioSrc: "/fr_shirt.mp3",
      },
      // Challenge 43 Options (French Lesson 22 - SELECT)
      {
        challengeId: 43,
        correct: true,
        text: "la caisse",
        audioSrc: "/fr_register.mp3",
      },
      {
        challengeId: 43,
        correct: false,
        text: "le magasin",
        audioSrc: "/fr_store.mp3",
      },
      {
        challengeId: 43,
        correct: false,
        text: "la porte",
        audioSrc: "/fr_door.mp3",
      },
      // Challenge 44 Options (French Lesson 22 - ASSIST)
      {
        challengeId: 44,
        correct: true,
        text: "la caisse",
        audioSrc: "/fr_register.mp3",
      },
      // Challenge 45 Options (French Lesson 23 - SELECT)
      {
        challengeId: 45,
        correct: true,
        text: "Combien ça coûte?",
        audioSrc: "/fr_how_much.mp3",
      },
      {
        challengeId: 45,
        correct: false,
        text: "Je voudrais acheter ceci",
        audioSrc: "/fr_i_would_like_to_buy_this.mp3",
      },
      {
        challengeId: 45,
        correct: false,
        text: "Où est la salle de bain?",
        audioSrc: "/fr_where_is_the_bathroom.mp3",
      },
      // Challenge 46 Options (French Lesson 23 - ASSIST)
      {
        challengeId: 46,
        correct: true,
        text: "Combien ça coûte?",
        audioSrc: "/fr_how_much.mp3",
      },

      // Croatian Challenges - Lesson 24 (Alphabet and Pronunciation)
      {
        challengeId: 47,
        correct: false,
        text: "Q",
        audioSrc: "/hr_q.mp3",
      },
      {
        challengeId: 47,
        correct: true,
        text: "Č",
        audioSrc: "/hr_c_with_caron.mp3",
      },
      {
        challengeId: 47,
        correct: false,
        text: "X",
        audioSrc: "/hr_x.mp3",
      },
      // Challenge 48 Options (Croatian Lesson 24 - ASSIST)
      {
        challengeId: 48,
        correct: true,
        text: "Č",
        audioSrc: "/hr_c_with_caron.mp3",
      },
      // Challenge 49 Options (Croatian Lesson 25 - SELECT)
      {
        challengeId: 49,
        correct: true,
        text: "Ti plivaš",
        audioSrc: "/hr_you_swim.mp3",
      },
      {
        challengeId: 49,
        correct: false,
        text: "Ja trčim",
        audioSrc: "/hr_i_run.mp3",
      },
      {
        challengeId: 49,
        correct: false,
        text: "On jede",
        audioSrc: "/hr_he_eats.mp3",
      },
      // Challenge 50 Options (Croatian Lesson 25 - ASSIST)
      {
        challengeId: 50,
        correct: true,
        text: "Ti plivaš",
        audioSrc: "/hr_you_swim.mp3",
      },
      // Challenge 51 Options (Croatian Lesson 26 - SELECT)
      {
        challengeId: 51,
        correct: true,
        text: "Ja trčim brzo",
        audioSrc: "/hr_i_run_quickly.mp3",
      },
      {
        challengeId: 51,
        correct: false,
        text: "Ti plivaš brzo",
        audioSrc: "/hr_you_swim_quickly.mp3",
      },
      {
        challengeId: 51,
        correct: false,
        text: "On jede brzo",
        audioSrc: "/hr_he_eats_quickly.mp3",
      },
      // Challenge 52 Options (Croatian Lesson 26 - ASSIST)
      {
        challengeId: 52,
        correct: true,
        text: "Ja trčim brzo",
        audioSrc: "/hr_i_run_quickly.mp3",
      },
      // Challenge 53 Options (Croatian Lesson 27 - SELECT)
      {
        challengeId: 53,
        correct: true,
        text: "pet",
        audioSrc: "/hr_five.mp3",
      },
      {
        challengeId: 53,
        correct: false,
        text: "četiri",
        audioSrc: "/hr_four.mp3",
      },
      {
        challengeId: 53,
        correct: false,
        text: "šest",
        audioSrc: "/hr_six.mp3",
      },
      // Challenge 54 Options (Croatian Lesson 27 - ASSIST)
      {
        challengeId: 54,
        correct: true,
        text: "pet",
        audioSrc: "/hr_five.mp3",
      },
      // Challenge 55 Options (Croatian Lesson 28 - SELECT)
      {
        challengeId: 55,
        correct: true,
        text: "lijevo",
        audioSrc: "/hr_left.mp3",
      },
      {
        challengeId: 55,
        correct: false,
        text: "desno",
        audioSrc: "/hr_right.mp3",
      },
      {
        challengeId: 55,
        correct: false,
        text: "ravno",
        audioSrc: "/hr_straight.mp3",
      },
      // Challenge 56 Options (Croatian Lesson 28 - ASSIST)
      {
        challengeId: 56,
        correct: true,
        text: "lijevo",
        audioSrc: "/hr_left.mp3",
      },
      // Challenge 57 Options (Croatian Lesson 29 - SELECT)
      {
        challengeId: 57,
        correct: true,
        text: "Gdje je kupaonica?",
        audioSrc: "/hr_where_is_the_bathroom.mp3",
      },
      {
        challengeId: 57,
        correct: false,
        text: "Kako se kaže 'hello'?",
        audioSrc: "/hr_how_to_say_hello.mp3",
      },
      {
        challengeId: 57,
        correct: false,
        text: "Koliko to košta?",
        audioSrc: "/hr_how_much.mp3",
      },
      // Challenge 58 Options (Croatian Lesson 29 - ASSIST)
      {
        challengeId: 58,
        correct: true,
        text: "Gdje je kupaonica?",
        audioSrc: "/hr_where_is_the_bathroom.mp3",
      },
      // Challenge 59 Options (Croatian Lesson 30 - SELECT)
      {
        challengeId: 59,
        correct: true,
        text: "Trebam kartu",
        audioSrc: "/hr_i_need_a_ticket.mp3",
      },
      {
        challengeId: 59,
        correct: false,
        text: "Gdje je autobusna stanica?",
        audioSrc: "/hr_where_is_the_bus_station.mp3",
      },
      {
        challengeId: 59,
        correct: false,
        text: "Koliko to košta?",
        audioSrc: "/hr_how_much.mp3",
      },
      // Challenge 60 Options (Croatian Lesson 30 - ASSIST)
      {
        challengeId: 60,
        correct: true,
        text: "Trebam kartu",
        audioSrc: "/hr_i_need_a_ticket.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
