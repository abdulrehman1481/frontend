# AudioStim Pro - React Native Healthcare App

A comprehensive React Native mobile application for managing electrical and audio stimulation therapy with integrated physiological and psychological health tracking.

## 📱 Application Overview

AudioStim Pro is a healthcare monitoring and therapy management system that combines:
- Dual device connectivity (wristband + headset)
- Real-time physiological data tracking
- Psychological assessment tools
- Audio and electrical stimulation control
- User health insights and analytics

## 🎨 Design System

**Color Scheme:**
- Primary Teal: `#5DADE2`
- Dark Teal: `#48A0D4`
- Light Teal: `#A3D9F0`
- Background: `#e0f2fe`

**UI Framework:**
- React Native with Expo (~54.0.0)
- NativeWind (Tailwind CSS for React Native)
- React Navigation 7.x

## 📂 Project Structure

```
src/
├── screens/
│   ├── auth/
│   │   ├── login.tsx                 # Login with Get Started/Sign In
│   │   └── signup.tsx                # User registration
│   ├── onboarding/
│   │   ├── BasicInfo.tsx             # Height/Weight/Sex/Age collection
│   │   └── Questionnaire.tsx         # 6 baseline psychological questions
│   └── main/
│       ├── Home.tsx                  # Dashboard with devices & health metrics
│       ├── PhysiologicalInsight.tsx  # Data visualization & graphs
│       ├── PsychologicalInsight.tsx  # Mental health assessments
│       ├── Stimulation.tsx           # Therapy control panel
│       └── Settings.tsx              # User preferences
└── navigation/
    └── MainTabs.tsx                  # Bottom tab navigator
```

## 🚀 Navigation Flow

### User Journey
```
Login (First Time)
  └─> Get Started Button
      └─> BasicInfo (Height, Weight, Sex, Age)
          └─> Questionnaire (6 Questions)
              └─> MainTabs (5 tabs)

Login (Existing User)
  └─> Sign In Button
      └─> MainTabs (5 tabs)
```

### Main Tabs
1. **Home** - Dashboard hub
2. **Physiological Insight** - Health data visualization
3. **Stimulation** - Therapy controls
4. **Psychological Insight** - Mental wellness
5. **Settings** - User preferences

## 📄 Screen Descriptions

### 1. Login Screen (`auth/login.tsx`)
**Features:**
- AudioStim Pro branding with gradient background
- "Get Started" button → navigates to BasicInfo
- "Sign In" button → navigates to MainTabs
- Email/Password input fields
- Terms & Conditions link
- Language selector (English default)

**Design:**
- Teal gradient background (#A3D9F0 to #5DADE2)
- Large logo/icon at top
- Two prominent action buttons

---

### 2. Signup Screen (`auth/signup.tsx`)
**Features:**
- User registration form
- Name, email, password, confirm password fields
- Navigation back to Login

---

### 3. Basic Info Screen (`onboarding/BasicInfo.tsx`)
**Features:**
- Height input (cm)
- Weight input (kg)
- Sex selector dropdown (Male/Female/Other)
- Age input
- Privacy notice explaining data usage for stride length/speed calculations
- Continue button → Questionnaire
- Close button → return to Login

**Data Collection:**
- Physical measurements for health calculations
- Privacy-focused with clear explanations

---

### 4. Questionnaire Screen (`onboarding/Questionnaire.tsx`)
**Features:**
- 6 baseline psychological questions:
  1. General mood (past 2 weeks)
  2. Stress level
  3. Sleep quality
  4. Anxiety frequency
  5. Energy level
  6. Focus/concentration
- Radio button selections (5 options each)
- Progress bar showing completion percentage
- Validation: Complete button disabled until all answered
- Privacy note with lock icon
- Continue button → MainTabs

**Purpose:**
- Establish baseline psychological profile
- Required for personalized therapy recommendations

---

### 5. Home Screen (`main/Home.tsx`)
**Features:**

**Device Connectivity (2 Devices):**
- Wristband (ID: WB-2024-001)
- Headset (ID: HS-2024-002)
- Each shows: Device ID, Bluetooth connection status, Battery level
- Sync button for each device

**Stimulation Progress:**
- Placeholder for active therapy sessions

**Health Metrics Summary (6 metrics in grid):**
- Sleep: 7h 34m
- Stress: xxx
- Steps: xxx
- Heart Rate: xxx
- HRV: xxx
- Temperature: xxx

**Subjective User Input:**
- **Mood Selector**: 5 icons (sad to happy)
  - Sends selection to server when clicked
- **Sleep Quality**: 3 icons (Bad/Average/Good with moon/sunny icons)
  - Sends selection to server when clicked

**Recent Sessions List:**
- Date, stimulator type, duration, status
- "View All" button

**Design:**
- Teal gradient header with greeting
- Card-based layout
- Icons for all metrics

---

### 6. Physiological Insight Screen (`main/PhysiologicalInsight.tsx`)
**Features:**

**Timeline Controls:**
- Day / Week / Month / Year tabs
- Currently only Day view implemented (Week/Month/Year are placeholders)

**Heart Beat Section:**
- Range display: 74—140 bpm
- 24-hour line graph
- Y-axis labels (140, 129, 118)
- X-axis labels (0, 6, 12, 18, 24 hours)
- Legend: Light/Moderate intensity levels

**Heart Variability (HRV):**
- Score: 24 ms (m Schnitt)
- Bar chart with 12 bars
- X-axis: 0, 6, 12, 18 hours
- Legend: Personal range, In range, Out of range

**Sleep Insight:**
- Duration: 7h 34m
- Time range: 11:53 PM — 7:04 AM
- 4 Sleep stages breakdown:
  - Awake: 43 min (9%) - Red
  - REM: 90 min (19%) - Orange
  - Light: 204 min (43%) - Blue
  - Deep: 137 min (29%) - Green
- Visual timeline with proportional colored blocks
- Time markers below timeline

**Activity Insight:**
- Score: X/100
- Dark placeholder graph for daily timeline
- Legend with 4 categories:
  - Sedentary (gray)
  - Light Active (orange)
  - Fair Active (blue)
  - Very Active (green)

**Coming Soon Sections (3):**
- Skin Temperature
- Blood Pressure & SpO2
- Electrodermal Activity

**Design:**
- Each section in teal-bordered cards
- Dark backgrounds for graphs
- Color-coded metrics

---

### 7. Stimulation Screen (`main/Stimulation.tsx`)
**Features:**

**Daily Stimulation Goal:**
- Calendar-style tracker showing 7, 14, 21 day milestones
- Gift icons for completed milestones

**Stimulation Type Section:**
- Toggle switch to enable/disable
- 4 type buttons:
  - Stress Relief
  - Sleep Enhancement
  - Focus Enhancement
  - Adaptive
- Adaptive mode note: "Only in Adaptive mode user can change frequency or Stimulation type"

**Stimulation Settings (4 buttons):**
- Intensity +/-
- Device BLE Connection
- Device Battery
- Electrode Connection

**Sound Type Section:**
- Toggle switch to enable/disable
- Same 4 type buttons as Stimulation
- Note: "For now these audios, we will Add later more"

**Audio Player Controls:**
- Stop button (red square)
- Play/Pause button (large blue circle)
- Forward button

**Key Functionality:**
- Independent toggles for Stimulation and Audio
- User can enable: Only Stimulation, Only Audio, or Both
- Button selections change state (background/text color)
- Disabled state when toggle is off

**Design:**
- Teal header with ear icon
- White cards on teal background
- Yellow-highlighted type buttons (green when completed)

---

### 8. Psychological Insight Screen (`main/PsychologicalInsight.tsx`)
**Features:**

**Instructional Notes (3):**
1. "User need to fill sets of Psychological Questioners"
2. "Psychological Status will be Prepared once the above, Questioners are answered"
3. "The Stress Daily Insight is Calculated based on the Physiological and Psychological Measures"

**Questionnaire Form (7 standard tests):**
- GAD-7 (Generalized anxiety) - Yellow highlight
- PSS-10 (Subjective stress)
- PHQ-9 (Depressive symptoms)
- BAI (Somatic & cognitive Anxiety)
- PCL-5 (PTSD)
- PSQI (Sleep quality)
- BDI-II (Depressive Severity)
- Buttons change to green with checkmark when completed
- Tappable to toggle completion status

**Psychological Status:**
- Locked until all questionnaires completed
- Bar chart with dark background
- 4 metrics: Anxiety, Stress, Depression, Sleep
- Blue and pink colored bars
- Values displayed above bars

**Stress Daily Insight:**

*Daily Timeline Chart:*
- Dark background
- 6 time points (0, 4, 8, 12, 16, 20 hours)
- Bar heights represent stress levels
- Color-coded: Blue (stress), Orange (high stress)
- X-axis labels: 00, 06, 12, 18, 24
- Legend: Stress, Anger, Active, Unmeasurable

*Stress Score Card:*
- Circular score display: 77
- Purple border circle
- 3 progress metrics with bars:
  - Responsiveness: 24/30 (pink)
  - Exertion balance: 32/40 (orange)
  - Sleep patterns: 21/30 (blue)

**Additional Sections (kept from original):**
- Key Insights cards
- Daily Journal
- Recent Entries
- Recommendations

**Algorithm:**
- Combines physiological data (from wristband sensors)
- With psychological measures (from questionnaires)
- Generates comprehensive stress insight score

---

### 9. Settings Screen (`main/Settings.tsx`)
**Features:**

**Profile Section:**
- Avatar icon
- Name: Dr. Sarah
- Email display
- Edit button

**Device Settings:**
- Auto-connect toggle
- Sound enabled toggle

**App Settings:**
- Notifications toggle
- Data sync toggle

**Logout:**
- Red logout button
- Confirmation dialog
- Navigates back to Login screen with reset

**Navigation:**
- Logout resets navigation stack to Login
- All preferences stored locally

## 🔧 Key Technologies

### Dependencies
```json
{
  "@react-navigation/native": "^7.1.20",
  "@react-navigation/native-stack": "^7.6.3",
  "@react-navigation/bottom-tabs": "latest",
  "@react-native-picker/picker": "latest",
  "expo-linear-gradient": "^15.0.7",
  "@expo/vector-icons": "latest",
  "nativewind": "latest",
  "react-native-safe-area-context": "latest"
}
```

### Features
- TypeScript for type safety
- NativeWind for Tailwind CSS styling
- React Navigation for routing
- Ionicons for consistent iconography
- Linear gradients for visual appeal
- Safe area context for device compatibility

## 🎯 Data Flow

### User Input → Server
1. **Mood Selection** (Home screen)
   - User taps mood icon
   - `handleMoodSelect()` logs to console
   - Ready for API integration

2. **Sleep Quality Selection** (Home screen)
   - User taps sleep icon
   - `handleSleepSelect()` logs to console
   - Ready for API integration

3. **Device Sync** (Home screen)
   - User taps Sync button
   - `handleSync()` logs device ID
   - Ready for Bluetooth/API integration

4. **Questionnaire Responses**
   - Stored in state during onboarding
   - Submitted on completion
   - Ready for server persistence

### Server → User Display
1. **Physiological Data**
   - Heart rate, HRV, sleep stages
   - Currently using mock data
   - UI ready for live data binding

2. **Psychological Status**
   - Generated after questionnaires
   - Bar chart visualization
   - Conditional rendering based on completion

3. **Stress Insight**
   - Combines both data sources
   - Algorithm placeholder implemented
   - Visual score display (77/100)

## 🚦 Setup Instructions

### Prerequisites
- Node.js (v18+)
- Expo CLI
- iOS Simulator / Android Emulator

### Installation
```bash
cd d:/job/app/frontend
npm install
```

### Run Development Server
```bash
npx expo start
```

### Run on Device
```bash
# iOS
npx expo start --ios

# Android
npx expo start --android
```

## 📊 Current Status

### ✅ Completed Features
- Complete navigation flow (Login → Onboarding → Main App)
- 9 functional screens
- Bottom tab navigation (5 tabs)
- Dual device connectivity display
- Health metrics dashboard
- Physiological data visualization (Day view)
- Psychological questionnaire system
- Stimulation control panel with toggles
- Audio player interface
- User settings and logout
- Consistent teal color scheme
- TypeScript compilation: 0 errors

### 🚧 Placeholders/Future Work
1. **Server Integration**
   - API endpoints for mood/sleep submissions
   - Device data synchronization
   - Questionnaire result storage
   - User authentication backend

2. **Data Visualization**
   - Week/Month/Year views (tabs exist)
   - Activity timeline graph (placeholder exists)
   - Real-time data updates

3. **Coming Soon Features**
   - Skin Temperature monitoring
   - Blood Pressure & SpO2 tracking
   - Electrodermal Activity measurement

4. **Device Integration**
   - Bluetooth connectivity
   - Real wristband data
   - Real headset data
   - Battery level monitoring

5. **Stimulation Features**
   - Actual audio file playback
   - Frequency adjustment in Adaptive mode
   - Session recording and history

## 🎨 Design Patterns

### Component Structure
- Functional components with hooks
- TypeScript interfaces for type safety
- useState for local state management
- useNavigation for routing

### Styling
- StyleSheet.create for performance
- Consistent spacing and sizing
- Reusable color variables
- Responsive layouts

### Navigation
- Stack navigator for auth flow
- Tab navigator for main app
- Type-safe navigation props
- Reset navigation on logout

## 📝 Code Quality

- Zero TypeScript compilation errors
- Consistent naming conventions
- Proper type definitions
- Clean import structure
- Commented code sections
- Proper error handling

## 🔐 Privacy & Security

- Clear data usage explanations
- Privacy notices in onboarding
- Secure password inputs
- Logout confirmation dialogs
- Local data storage ready

## 📱 Supported Platforms

- iOS (Expo compatible)
- Android (Expo compatible)
- Responsive design for various screen sizes

## 🤝 Contributing

This is a client project. All features implemented per client specifications.

## 📄 License

Proprietary - All rights reserved

---

**Last Updated:** January 6, 2026
**Version:** 1.0.0
**Status:** MVP Complete - Ready for Backend Integration
