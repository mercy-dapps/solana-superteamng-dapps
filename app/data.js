import anchor from "../public/anchor-bg.png";
import rust from "../public/rust-bg.jpg";
import solana from "../public/sol-bg.jpg";

export const popularCourses = [
  {
    course_id: 1,
    title: "Introduction to Rust",
    numOfChapters: 5,
    hours: 2,
    level: "Beginner",
    img: rust,
    chapters: [
      {
        module_number: "Module_one",
        module_link:
          "https://doc.rust-lang.org/book/ch01-00-getting-started.html",
      },
      {
        module_number: "Module_two",
        module_link:
          "https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html",
      },
      {
        module_number: "Module_three",
        module_link:
          "https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html",
      },
      {
        module_number: "Module_four",
        module_link:
          "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html",
      },
      {
        module_number: "Module_five",
        module_link: "https://doc.rust-lang.org/book/ch05-00-structs.html",
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
    certificate_link: "",
    questions: [
      {
        question: "What keyword is used to define a function in Rust?",
        options: ["function", "def", "fn", "create"],
        answer: 2,
      },
      {
        question:
          "How do you declare a variable that can hold a floating-point number in Rust?",
        options: [
          "var number: float",
          "let number = float_value",
          "let number: f32 = 3.14",
          "int number = 10.5",
        ],
        answer: 2,
      },
      {
        question: "What does the ownership concept in Rust ensure?",
        options: [
          "Code reusability",
          "Memory safety",
          "Faster runtime speed",
          "Easier debugging",
        ],
        answer: 1,
      },
      {
        question: "What symbol is used to access a value by reference in Rust?",
        options: ["*", "&", "=", "->"],
        answer: 0,
      },
      {
        question: "How do you print a message to the console in Rust?",
        options: [
          "console.log('Hello, world!')",
          "println!('Hello, world!')",
          "echo 'Hello, world!'",
          "display('Hello, world!')",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 2,
    title: "Solana Course",
    numOfChapters: 3,
    hours: 3,
    level: "Beginner",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://solana.com/developers/guides/getstarted/hello-world-in-your-browser",
      },
      {
        module_number: "module_two",
        module_link:
          "https://solana.com/developers/guides/getstarted/setup-local-development",
      },
      {
        module_number: "module_three",
        module_link:
          "https://solana.com/developers/guides/getstarted/local-rust-hello-world",
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
    certificate_link: "",
    questions: [
      {
        question: "What is the native cryptocurrency of the Solana blockchain?",
        options: [
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "Solana (SOL)",
          "Cardano (ADA)",
        ],
        answer: 2,
      },
      {
        question:
          "Solana is known for its high transaction throughput. What technology is primarily responsible for this?",
        options: [
          "Proof of Work (PoW)",
          "Proof of Stake (PoS)",
          "Delegated Proof of Stake (DPoS)",
          "Byzantine Fault Tolerance (BFT)",
        ],
        answer: 1,
      },
      {
        question: "What are smart contracts on Solana called?",
        options: [
          "DApps (Decentralized Applications)",
          "Programs",
          "Scripts",
          "Chains",
        ],
        answer: 1,
      },
      {
        question: "How do users interact with Solana applications (dApps)?",
        options: [
          "Through a command line interface",
          "By connecting a compatible crypto wallet",
          "Through a dedicated Solana app store",
          "By mining SOL tokens",
        ],
        answer: 1,
      },
      {
        question:
          "What is a popular Solana wallet used for storing SOL and interacting with dApps?",
        options: [
          "MetaMask (primarily for Ethereum)",
          "Phantom",
          "Trust Wallet (supports multiple blockchains)",
          "Ledger (hardware wallet)",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 3,
    title: "Anchor Course",
    numOfChapters: 4,
    hours: 2,
    level: "Intermediate",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link: "https://www.anchor-lang.com/docs/installation",
      },
      {
        module_number: "module_two",
        module_link: "https://www.anchor-lang.com/docs/hello-world",
      },
      {
        module_number: "module_three",
        module_link: "https://www.anchor-lang.com/docs/intro-to-solana",
      },
      {
        module_number: "module_four",
        module_link: "https://www.anchor-lang.com/docs/the-accounts-struct",
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
    certificate_link: "",
    questions: [
      {
        question: "What is Anchor in the context of Solana development?",
        options: [
          "A cryptocurrency exchange platform",
          "A smart contract development framework for Solana",
          "A type of Solana wallet",
          "A decentralized storage solution",
        ],
        answer: 1,
      },
      {
        question:
          "What programming language does Anchor primarily use for writing smart contracts?",
        options: ["Solidity", "Rust", "Python", "JavaScript"],
        answer: 1,
      },
    ],
  },
  {
    course_id: 4,
    title: "Rust Course",
    numOfChapters: 5,
    hours: 4,
    level: "Intermediate",
    img: solana,
    chapters: [
      {
        module_number: "Module_one",
        module_link:
          "https://doc.rust-lang.org/book/ch01-00-getting-started.html",
      },
      {
        module_number: "Module_two",
        module_link:
          "https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html",
      },
      {
        module_number: "Module_three",
        module_link:
          "https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html",
      },
      {
        module_number: "Module_four",
        module_link:
          "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html",
      },
      {
        module_number: "Module_five",
        module_link: "https://doc.rust-lang.org/book/ch05-00-structs.html",
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
    certificate_link: "",
    questions: [
      {
        question: "What keyword is used to define a function in Rust?",
        options: ["function", "def", "fn", "create"],
        answer: 2,
      },
      {
        question:
          "How do you declare a variable that can hold a floating-point number in Rust?",
        options: [
          "var number: float",
          "let number = float_value",
          "let number: f32 = 3.14",
          "int number = 10.5",
        ],
        answer: 2,
      },
      {
        question: "What does the ownership concept in Rust ensure?",
        options: [
          "Code reusability",
          "Memory safety",
          "Faster runtime speed",
          "Easier debugging",
        ],
        answer: 1,
      },
      {
        question: "What symbol is used to access a value by reference in Rust?",
        options: ["*", "&", "=", "->"],
        answer: 0,
      },
      {
        question: "How do you print a message to the console in Rust?",
        options: [
          "console.log('Hello, world!')",
          "println!('Hello, world!')",
          "echo 'Hello, world!'",
          "display('Hello, world!')",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 5,
    title: "Solana Course",
    numOfChapters: 3,
    hours: 1,
    level: "Beginner",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://solana.com/developers/guides/getstarted/hello-world-in-your-browser",
      },
      {
        module_number: "module_two",
        module_link:
          "https://solana.com/developers/guides/getstarted/setup-local-development",
      },
      {
        module_number: "module_three",
        module_link:
          "https://solana.com/developers/guides/getstarted/local-rust-hello-world",
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
    certificate_link: "",
    questions: [
      {
        question: "What is the native cryptocurrency of the Solana blockchain?",
        options: [
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "Solana (SOL)",
          "Cardano (ADA)",
        ],
        answer: 2,
      },
      {
        question:
          "Solana is known for its high transaction throughput. What technology is primarily responsible for this?",
        options: [
          "Proof of Work (PoW)",
          "Proof of Stake (PoS)",
          "Delegated Proof of Stake (DPoS)",
          "Byzantine Fault Tolerance (BFT)",
        ],
        answer: 1,
      },
      {
        question: "What are smart contracts on Solana called?",
        options: [
          "DApps (Decentralized Applications)",
          "Programs",
          "Scripts",
          "Chains",
        ],
        answer: 1,
      },
      {
        question: "How do users interact with Solana applications (dApps)?",
        options: [
          "Through a command line interface",
          "By connecting a compatible crypto wallet",
          "Through a dedicated Solana app store",
          "By mining SOL tokens",
        ],
        answer: 1,
      },
      {
        question:
          "What is a popular Solana wallet used for storing SOL and interacting with dApps?",
        options: [
          "MetaMask (primarily for Ethereum)",
          "Phantom",
          "Trust Wallet (supports multiple blockchains)",
          "Ledger (hardware wallet)",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 6,
    title: "Anchor Course",
    numOfChapters: 4,
    hours: 5,
    level: "Beginner",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link: "https://www.anchor-lang.com/docs/installation",
      },
      {
        module_number: "module_two",
        module_link: "https://www.anchor-lang.com/docs/hello-world",
      },
      {
        module_number: "module_three",
        module_link: "https://www.anchor-lang.com/docs/intro-to-solana",
      },
      {
        module_number: "module_four",
        module_link: "https://www.anchor-lang.com/docs/the-accounts-struct",
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
    certificate_link: "",
    questions: [
      {
        question: "What is Anchor in the context of Solana development?",
        options: [
          "A cryptocurrency exchange platform",
          "A smart contract development framework for Solana",
          "A type of Solana wallet",
          "A decentralized storage solution",
        ],
        answer: 1,
      },
      {
        question:
          "What programming language does Anchor primarily use for writing smart contracts?",
        options: ["Solidity", "Rust", "Python", "JavaScript"],
        answer: 1,
      },
    ],
  },
  {
    course_id: 7,
    title: "Rust Course",
    numOfChapters: 5,
    hours: 4,
    level: "Intermediate",
    img: solana,
    chapters: [
      {
        module_number: "Module_one",
        module_link:
          "https://doc.rust-lang.org/book/ch01-00-getting-started.html",
      },
      {
        module_number: "Module_two",
        module_link:
          "https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html",
      },
      {
        module_number: "Module_three",
        module_link:
          "https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html",
      },
      {
        module_number: "Module_four",
        module_link:
          "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html",
      },
      {
        module_number: "Module_five",
        module_link: "https://doc.rust-lang.org/book/ch05-00-structs.html",
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
    certificate_link: "",
    questions: [
      {
        question: "What keyword is used to define a function in Rust?",
        options: ["function", "def", "fn", "create"],
        answer: 2,
      },
      {
        question:
          "How do you declare a variable that can hold a floating-point number in Rust?",
        options: [
          "var number: float",
          "let number = float_value",
          "let number: f32 = 3.14",
          "int number = 10.5",
        ],
        answer: 2,
      },
      {
        question: "What does the ownership concept in Rust ensure?",
        options: [
          "Code reusability",
          "Memory safety",
          "Faster runtime speed",
          "Easier debugging",
        ],
        answer: 1,
      },
      {
        question: "What symbol is used to access a value by reference in Rust?",
        options: ["*", "&", "=", "->"],
        answer: 0,
      },
      {
        question: "How do you print a message to the console in Rust?",
        options: [
          "console.log('Hello, world!')",
          "println!('Hello, world!')",
          "echo 'Hello, world!'",
          "display('Hello, world!')",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 8,
    title: "Solana Course",
    numOfChapters: 3,
    hours: 2,
    level: "Beginner",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link:
          "https://solana.com/developers/guides/getstarted/hello-world-in-your-browser",
      },
      {
        module_number: "module_two",
        module_link:
          "https://solana.com/developers/guides/getstarted/setup-local-development",
      },
      {
        module_number: "module_three",
        module_link:
          "https://solana.com/developers/guides/getstarted/local-rust-hello-world",
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
    certificate_link: "",
    questions: [
      {
        question: "What is the native cryptocurrency of the Solana blockchain?",
        options: [
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "Solana (SOL)",
          "Cardano (ADA)",
        ],
        answer: 2,
      },
      {
        question:
          "Solana is known for its high transaction throughput. What technology is primarily responsible for this?",
        options: [
          "Proof of Work (PoW)",
          "Proof of Stake (PoS)",
          "Delegated Proof of Stake (DPoS)",
          "Byzantine Fault Tolerance (BFT)",
        ],
        answer: 1,
      },
      {
        question: "What are smart contracts on Solana called?",
        options: [
          "DApps (Decentralized Applications)",
          "Programs",
          "Scripts",
          "Chains",
        ],
        answer: 1,
      },
      {
        question: "How do users interact with Solana applications (dApps)?",
        options: [
          "Through a command line interface",
          "By connecting a compatible crypto wallet",
          "Through a dedicated Solana app store",
          "By mining SOL tokens",
        ],
        answer: 1,
      },
      {
        question:
          "What is a popular Solana wallet used for storing SOL and interacting with dApps?",
        options: [
          "MetaMask (primarily for Ethereum)",
          "Phantom",
          "Trust Wallet (supports multiple blockchains)",
          "Ledger (hardware wallet)",
        ],
        answer: 1,
      },
    ],
  },
  {
    course_id: 9,
    title: "Anchor Course",
    numOfChapters: 4,
    hours: 5,
    level: "Beginner",
    img: solana,
    chapters: [
      {
        module_number: "module_one",
        module_link: "https://www.anchor-lang.com/docs/installation",
      },
      {
        module_number: "module_two",
        module_link: "https://www.anchor-lang.com/docs/hello-world",
      },
      {
        module_number: "module_three",
        module_link: "https://www.anchor-lang.com/docs/intro-to-solana",
      },
      {
        module_number: "module_four",
        module_link: "https://www.anchor-lang.com/docs/the-accounts-struct",
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
    certificate_link: "",
    questions: [
      {
        question: "What is Anchor in the context of Solana development?",
        options: [
          "A cryptocurrency exchange platform",
          "A smart contract development framework for Solana",
          "A type of Solana wallet",
          "A decentralized storage solution",
        ],
        answer: 1,
      },
      {
        question:
          "What programming language does Anchor primarily use for writing smart contracts?",
        options: ["Solidity", "Rust", "Python", "JavaScript"],
        answer: 1,
      },
    ],
  },
];
