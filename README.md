🐍 Snake Game (React)

A simple and fun Snake Game built using React.js. Control the snake using your keyboard, eat fruits to grow longer, and try to achieve the highest score without colliding with yourself or the walls.

🎮 Features
Classic Snake gameplay
Keyboard controls (W, A, S, D)
Score tracking system
Game over screen with restart option
Dynamic snake growth
Random fruit generation
Retro-style font (Press Start 2P)
🚀 Demo

(Add your deployed link here if available — e.g., Vercel / Netlify)

🕹️ Controls
Key	Action
W	Move Up
S	Move Down
A	Move Left
D	Move Right
🛠️ Tech Stack
React.js
JavaScript (ES6+)
CSS
@fontsource/press-start-2p
📦 Installation
Clone the repository:
git clone https://github.com/your-username/snake-game.git
Navigate to the project folder:
cd snake-game
Install dependencies:
npm install
Start the development server:
npm start
📁 Project Structure
src/
│── App.js        # Main game logic
│── App.css       # Styling
│── index.js      # Entry point
│── assets/       # Images (if any)
⚙️ How It Works
The game uses a 16x16 grid
Snake position is managed using React useState
Movement direction is controlled via useRef
Game loop runs using setInterval
Collision detection:
Wall collision
Self collision
Fruit spawning is randomized within grid bounds
🔄 Game Logic Overview
Snake moves every 100ms
Eating fruit:
Increases score
Extends snake length
Game ends when:
Snake hits wall
Snake collides with itself
🧠 Future Improvements
Add mobile touch controls 📱
Add difficulty levels
Add sound effects 🎵
Store high scores (localStorage)
Pause/Resume feature
Better UI/animations
🐞 Known Issues
Fruit may rarely spawn on the snake body
Initial fruit spawn logic can be improved
🤝 Contributing

Contributions are welcome!

Fork the repo
Create a new branch
Make your changes
Submit a pull request
