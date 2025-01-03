# Chemistry Game

This project is a web-based interactive chemistry game built with React. It features two main game modes: "Find the Element" and a detailed "Periodic Table" exploration. The game is designed to be educational and fun, helping users learn about the elements in an engaging way.

## Features

- **Find the Element Game:** Test your knowledge of the periodic table by finding elements based on given clues.
- **Periodic Table Exploration:** Explore an interactive periodic table with detailed information about each element.
- **Score Tracking:** Keeps track of your score and high score.
- **Ranking System:** View a leaderboard of top scores.
- **Responsive Design:** Optimized for various screen sizes.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/quangngonz/chemistry-game
```

2. Navigate to the project directory:

```bash
cd chemistry-game
```

3. Install dependencies:

```bash
npm install
```

## Running the App

To start the development server, run:

```bash
npm start
```

This will open the app in your default browser, typically at `http://localhost:3000`.

## Building for Production

To create a production build of the app, run:

```bash
npm run build
```

This will create an optimized build in the `build` directory.

## Game Modes

### 1. Find the Element

- **Objective:** Find the correct element on the periodic table based on the given name.
- **Gameplay:**
  - A random element name is displayed.
  - Click on the corresponding element in the periodic table.
  - Correct answers increase your score.
  - Incorrect answers trigger a penalty.
- **Timer:** A countdown timer adds urgency to the game.
- **Scoring:** Your score and high score are displayed and updated in real-time.

### 2. Periodic Table

- **Objective:** Learn about the elements and their properties.
- **Features:**
  - Click on any element to view detailed information.
  - Information includes atomic mass, density, appearance, melting/boiling points, and a summary.
  - Links to external sources for more in-depth information.

### 3. Ranking

- **Objective:** View top scores from other players.
- **Features:**
  - Displays a table of player names and their scores.
  - Fetches data from a backend server.

## Contributing

Contributions to this project are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

## Acknowledgements

- Data for the periodic table is sourced from [muratkemaldar's periodic-table-css](https://github.com/muratkemaldar/periodic-table-css).
- 

## Author

Quang Ngo - ISPH
