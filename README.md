# Movie APP
Thanks for your interest in this project. This project was created to demonstrate skills in React

# VIEW LIVE VERSION
https://movies-149i.onrender.com/

# HOW TO RUN THIS PROJECT
Please follow the steps below to run this project:
1. Clone this project from my GitHub public repo using the link: https://github.com/iprowriter/movies.git
2. Open the folder and edit the `.env_template` file. Make sure you add your API Key string into the file, then edit the ".env_template" file name to look like `.env`
3. Open your terminal, cd into this project root folder named "movies"
4. On the root folder on your terminal, run `npm install`
5. After installation of NPM, run `npm start`
6. The project will start on http://localhost:3000/
7. Should you have any confusion about running this project, please send me an email ( I reply fast)


# TECHNOLOGIES USED FOR THIS PROJECT
1. React
2. TypeScript
3. Material UI (v5)
4. Styled Component
5. Axios
6. React-router-dom


# PROJECT FUNCTIONALITY DESCRIPTION
This project allows you to search for various movies. The search bar on the homepage provides a fast live searching. The result is displayed as soon as you begin typing. The movies are then sorted according to their popularity. The most popular movies are displayed first. You can view a single movie detail by clicking on that movie.

# TECHNICAL DECISIONS 
1. React
React was an obvious choice because this project was created to demonstrate skills in React. While React is fast, a better option could be NextJS. React being a "Single Page Application" makes it fast but also makes it hard for search engine optimization. If the (potential) owner of this project want his site to do better in search engine, then NextJS which was built on React, is highly recommended.

2. TypeScript
TypeScript was used to enforce type checking. This helps to create an error-free (to a large extent) and production-ready code. The benefit of TypeScript is not fully harnessed in this project. The benefits will become more obvious in the future as this project grows and multiple developers work on it at the same time.


3. CSS
MUI was used as CSS framework to save time. MUI works well with React. It is fast and reliable. Moreover, the features lacked by MUI was compensated using Styled Components to add bare-bone CSS into the code. This helps to create a better-user friendly UI.


4. State Management
Using a state manager such as Redux or Context API was considered for this project. However, since there weren't too many states to be managed or variables to be passed, it was not implemented. Adding a Redux to a project of this size maybe considered over-engineering. Unless, the project is expected to grow in the future. Nevertheless, I'm very familiar with the use of Redux in state management and have used it in my other projects such as this one: [Flight Project](https://github.com/iprowriter/flight).

5. Fetching Data from API
Axios was preffered in this project due to personal preference. An alternative could be the React in-built fetch method or React Query.


# PROJECT LICENCE
You are free to clone, fork or use this project.
