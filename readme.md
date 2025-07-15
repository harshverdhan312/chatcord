# 💬 ChatCord — Real-time Topic-Based Chat Rooms

ChatCord is a real-time chat application where users can create or join discussion rooms based on technology topics and chat with others live.

---

## 🚀 Features

- 🔹 Create a new room or join existing ones  
- 🔹 Real-time messaging with **Socket.IO**  
- 🔹 Redis-based scalable WebSocket connections  
- 🔹 User list displayed per room  
- 🔹 Simple UI with mobile responsiveness  

---

## 📦 Tech Stack

- **Node.js**  
- **Express.js**  
- **Socket.IO**  
- **Redis**  
- **HTML + CSS + JavaScript (Frontend)**  

---

## 🖥️ Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/chatcord.git
cd chatcord



### 2. Install Dependencies

npm install

### 3. Start Redis Server

Make sure Redis is installed and running:

redis-server


### 4. Run the App

npm run dev



Then open your browser and visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Folder Structure

chatcord/
├── controllers/
│ └── chatController.js
├── models/
│ ├── userModel.js
│ └── messageModel.js
├── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── main.js
│ ├── index.html
│ └── chat.html
├── routes/
│ └── topicRoutes.js
├── utils/
│ └── redisClient.js
├── app.js
├── server.js
├── socket.js
├── .gitignore
└── README.md


---

## 📌 Future Prospects

These features are planned for future updates:

- 🎙️ Voice & Video Calling using WebRTC  
- 🤖 Dynamic topic suggestions via Gemini AI  
- 📈 Admin dashboard with analytics  
- 💾 Chat history and export options  

---

## 🙋 Contributing

Have ideas or found a bug?  
Feel free to open an issue or submit a pull request!

---

## 📄 License

MIT License © 2025 Harsh Verdhan Singh