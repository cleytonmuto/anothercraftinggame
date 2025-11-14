# ⚒️ Crafting Game

A browser-based crafting game where players mine materials, refine them, and craft epic weapons and items. Built with React, TypeScript, and Firebase for persistence.

## Features

- **Mining System**: Collect raw materials from various mining nodes
- **Refining System**: Process raw materials into refined components
- **Crafting System**: Combine materials to create weapons, armor, and tools
- **Progression**: Level up and unlock new recipes as you play
- **Firebase Persistence**: Your progress is saved to the cloud
- **Google OAuth2**: Sign in with your Google account

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Google" as a sign-in provider
3. Create a Firestore Database:
   - Go to Firestore Database
   - Create database in production mode
   - Set up security rules (see below)
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" and add a web app if you haven't already
   - Copy the Firebase configuration values

### 3. Environment Variables

Create a `.env` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Note**: The `.env` file is already in `.gitignore` to keep your credentials secure.

### 4. Firestore Security Rules

Set up these security rules in Firestore to allow users to read/write only their own game state:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /gameStates/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 5. Run the Development Server

```bash
npm run dev
```

The game will be available at `http://localhost:5173` (or the port shown in the terminal).

## Gameplay

1. **Sign In**: Use your Google account to sign in and save your progress
2. **Mine Materials**: Click on mining nodes to collect raw materials
3. **Refine Materials**: Process raw materials into refined components
4. **Craft Items**: Combine materials to create weapons, armor, and tools
5. **Level Up**: Gain experience to unlock higher-tier recipes

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Technologies Used

- React 19
- TypeScript
- Vite
- Firebase (Authentication & Firestore)
- CSS3 (Gradients & Animations)

## License

MIT
