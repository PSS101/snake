# 🐍 Snake Game (React)

This project is a simple and interactive Snake Game built using React. It recreates the classic arcade gameplay where the player controls a snake that moves across a grid, eats food to grow longer, and avoids collisions to stay alive. The game uses modern React features like hooks to manage state and lifecycle behavior, making it both functional and easy to understand.

The game includes core features such as smooth snake movement using keyboard controls, random fruit generation, and a scoring system that increases as the snake eats fruit. The player uses the W, A, S, and D keys to control the direction of the snake. Each time the snake eats a fruit, its length increases and the score updates accordingly. The game ends when the snake collides with the wall or itself, after which a game over screen is displayed with an option to restart.

The internal logic of the game is handled through React’s state management. The snake is represented as an array of coordinate objects, where each update shifts the snake forward by adding a new head and removing the tail unless the snake has just eaten a fruit. Fruit is generated at random positions within a fixed 16x16 grid. The game loop runs at a constant interval, updating the snake’s position every 100 milliseconds to create continuous motion.

Collision detection plays a key role in the gameplay. The game continuously checks whether the snake has moved outside the grid boundaries or collided with itself. If either condition is met, the game stops and switches to the game over screen. The restart functionality resets all relevant states, including the snake position, score, fruit location, and movement direction, allowing the player to start fresh.

To run the project locally, install the required dependencies using npm and start the development server. Once running, the game can be accessed in a browser, typically at http://localhost:3000. The interface features a retro visual style using the “Press Start 2P” font, giving it a nostalgic arcade feel.

There are several possible improvements that could enhance the game further. These include adding sound effects, implementing mobile-friendly controls such as swipe gestures, increasing the speed of the snake over time for added difficulty, and introducing a high score tracking system. Visual enhancements and performance optimizations could also improve the overall experience.

Overall, this project serves as a great example of how to build a simple game using React while practicing state management, event handling, and rendering dynamic UI elements.
