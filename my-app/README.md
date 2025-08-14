# BiteBuddy App

A React Native app built with Expo Router for managing children's nutrition and health information.

## Features

- **Authentication**: Login, signup, and password recovery
- **Onboarding Flow**: Multi-step setup process for child information
- **Child Metrics**: Input and calculate BMI for children
- **Dietary Preferences**: Manage dietary restrictions and allergies
- **Health Conditions**: Track health problems and conditions
- **Summary Screen**: Review all entered information

## Tech Stack

- **React Native** with Expo
- **Expo Router** for navigation (file-based routing)
- **TypeScript** for type safety
- **React Native Reanimated** for animations

## Project Structure

```
app/
├── _layout.tsx          # Root layout with navigation stack
├── index.tsx            # Splash screen
├── login.tsx            # Login screen
├── signup.tsx           # Sign up screen
├── forgot-password.tsx  # Password recovery screen
├── onboarding.tsx       # Welcome and introduction
├── gender.tsx           # Gender selection
├── child-metrics.tsx    # Child information input
├── dietary.tsx          # Dietary restrictions
├── health.tsx           # Health conditions
├── summary.tsx          # Information review
└── +not-found.tsx      # 404 error page
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on your preferred platform:
   ```bash
   npm run android    # Android
   npm run ios        # iOS
   npm run web        # Web
   ```

## Navigation Flow

This app uses **Expo Router** for file-based navigation. The complete user flow is:

### Authentication Flow
- `/` → Splash screen
- `/login` → Login screen
- `/signup` → Sign up screen  
- `/forgot-password` → Password recovery

### Onboarding Flow
- `/onboarding` → Welcome screen
- `/gender` → Gender selection
- `/child-metrics` → Child information input
- `/dietary` → Dietary preferences
- `/health` → Health conditions
- `/summary` → Information review

## Key Components

- **useRouter()**: Hook for navigation between screens
- **Stack.Screen**: Defines screens in the navigation stack
- **router.push()**: Navigate to a specific route
- **router.back()**: Go back to previous screen

## Authentication Features

- **Login**: Email and password authentication
- **Sign Up**: Full name, email, password with confirmation
- **Password Recovery**: Email-based password reset
- **Form Validation**: Input validation and error handling
- **Terms Agreement**: Checkbox for terms of service

## Dependencies

- `expo-router`: File-based routing for Expo
- `react-native-reanimated`: Animations
- `react-native-gesture-handler`: Touch handling
- `react-native-safe-area-context`: Safe area handling
- `react-native-screens`: Native navigation primitives

## Development Notes

- All navigation is handled through Expo Router
- No React Navigation dependencies required
- File-based routing makes navigation structure clear
- TypeScript provides type safety for navigation
- Authentication screens are fully integrated with the onboarding flow
