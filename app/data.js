// import anchor from "../../public/anchor-bg.png";
// import rust from "../../public/rust-bg.jpg";
import solana from "../public/sol-bg.jpg";

export const coursesAvailable = [
  {
    course_id: 1,
    title: "Rust Course",
    numOfChapters: 5,
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_two",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_three",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_four",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_five",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
    ],
    certificate: {
      name: "Rust Certifcate",
      symbol: "RUST",
      description:
        "This is to certify that your completed and earned certificate in learning Rust",
      image: "",
    },
    completed: false,
    questions: [
      {
        question: "What is rust?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 1,
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: 1,
      },
    ],
  },
  {
    course_id: 2,
    title: "Solana Course",
    numOfChapters: 3,
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_two",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_three",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
    ],
    certificate: {
      name: "Solana Certifcate",
      symbol: "SOL",
      description:
        "This is to certify that your completed and earned certificate in learning Solana Dapps Development",
      image: "",
    },
    completed: false,
    questions: [
      {
        question: "What is solana?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 1,
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: 1,
      },
    ],
  },
  {
    course_id: 3,
    title: "Anchor Course",
    numOfChapters: 4,
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_two",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_three",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
      {
        module_number: "module_four",
        module_link:
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      },
    ],
    certificate: {
      name: "Anchor Certifcate",
      symbol: "ANCHOR",
      description:
        "This is to certify that your completed and earned certificate in learning Anchor Framework",
      image: "",
    },
    completed: false,
    questions: [
      {
        question: "What is anchor",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 1,
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: 1,
      },
    ],
  },
];
