# React Text Display

React Text Display is a simple React application that allows users to enter text in a text area and display it below a button. It serves as a basic demonstration of React component structure, state management, and event handling.

## Features

- Single-page application with a header, content section, and footer.
- Header component displays the title of the application.
- Content section contains a text area where users can enter text.
- Button click event triggers the display of the entered text below the button.
- Footer displays some information about yourself or your favorite quote.

## Getting Started

To run the React Text Display application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ahmad-ml/financetracker.git`
2. Navigate to the project directory: `cd financetracker`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Create React App: A command-line tool to quickly set up a new React project.

## Project Structure

The project is structured as follows:

- `src/App.js`: The main component that serves as the entry point for the application.
- `src/components/Home.jsx`: Component responsible for displaying the application title.
- `src/components/Income.jsx`: Component containing income input and display.
- `src/components/Expense.jsx`: Component containing Expense input and display.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ahmad-ml/react-text-display/blob/main/LICENSE) file for more details.

## 🚀 About Me

I'm a Leader

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/coolhead/)

https://github.com/ahmad-ml

## Lessons Learned

While building this project, I learned several things:

React component structure: I gained a better understanding of how to organize and structure components in a React application. I created three separate components: Header, Content, and Footer, to encapsulate different parts of the application.

Component communication: I learned how to pass data between components using props. I passed the title prop from the App component to the Header component, allowing the Header to display the title.

State management: I utilized React's state to manage the text entered in the text area. The Content component had a state variable that stored the entered text, and a button click triggered a function to update the state with the text from the text area. This allowed the entered text to be displayed below the button.

Event handling: I learned how to handle button click events in React. When the button was clicked, a function was called to update the state variable with the text from the text area.

Challenges faced and how I overcame them:

Setting up the project: Initially, setting up the React project using Create React App or any other method can be a challenge if you are new to React development. However, there are detailed instructions and tutorials available online that guide you through the setup process.

Passing props: Passing props between components correctly can be a bit tricky, especially when dealing with multiple components. To overcome this challenge, I carefully defined the prop types and made sure to pass the props correctly from the parent component to the child components.

State management: Managing state in React requires understanding the concepts of state and props. Initially, I had to ensure that I set up the state correctly in the Content component and updated it with the text from the text area. By referring to React documentation and examples, I was able to overcome this challenge.

Event handling: Handling button click events and triggering the corresponding function can be challenging if you are new to React. To overcome this, I studied the React documentation and learned about event handling in React. I then implemented the necessary event handling code to ensure the button click triggered the desired function.

Overall, building this project helped me strengthen my understanding of React concepts, such as component structure, props, state management, and event handling. It also taught me the importance of referring to documentation and seeking out examples and tutorials when facing challenges.
