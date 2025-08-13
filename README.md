# Where's Waldo?

- Where's Waldo web game based on real levels
- Can you be the fastest to find all the characters?

[Play Game](https://brandony16.github.io/where-is-waldo/) :point_left:

## Features

- 7 levels and 4 different difficulties
- 4 different characters to find: Waldo, Odlaw, Wenda, and Wizard
- Leaderboard displaying top 10 times for that level (Non functional at the
  moment because the databases were closed due to inactivity)
- Ability to submit your name and time to the leaderboard

## Construction

- Built with [React](https://reactjs.org/)
- Utilizes Firebase as a backend

## Goals

- Learn how to use Firebase as a backend service
- Further develop React skills
- Create a fun game!

## DB Structure

- LevelData: Array of level objects
  - Level Object: { difficulty, id, img, name, characters, }
- CharacterData: Array of characters
  - Character: { desc, id, img, name }
- CoordsData: Array of Coord Objetcs for each level
  - Coord Object: { id, name, character (waldo, wenda, etc.) }
    - Character: { relX, relY, }
- LeaderboardData: Object of Arrays of leaderboard entries for each level
  Accessed by level name
  - Leaderboard Entry: { id, level, name, timer, }
