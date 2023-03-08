import inquirer from "inquirer";

const questions = [
  // Type your question here
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid name";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Hello , What is your email?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid email";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "experience",
    message: "Are you an experienced developer?",
    choices: ["Yes", "No"],
    validate: (answer) => {
      if (answer.length < 1) {
        return "Please choose an answer";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "length of experience",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    validate: (answer) => {
      if (answer.length < 1) {
        return "Please choose an answer";
      }
      return true;
    },
    when: ({ experience }) => experience === "Yes",
  },
  {
    type: "checkbox",
    name: "Library",
    message: "What JavaScript library do you use?",
    choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    validate: (answer) => {
      if (answer.length < 1) {
        return "Please choose an answer";
      }
      return true;
    },
    when: ({ experience }) => experience === "Yes",
  },
  {
    type: "number",
    name: "Salary",
    message: "What is your desired salary?",
    validate: (answer) => {
      if (answer < 1) {
        return "Please enter a valid amount";
      }
      return true;
    },
    when: ({ experience }) => experience === "Yes",
  },
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
