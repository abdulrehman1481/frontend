# AudioStim Pro - Frontend Screens Documentation
**Client-Facing Product Overview**

---

## Table of Contents
1. [Welcome & Onboarding Screens](#1-welcome--onboarding-screens)
2. [Authentication Screens](#2-authentication-screens)
3. [Dashboard Screen](#3-dashboard-screen)
4. [Device Management Screens](#4-device-management-screens)
5. [Session Management Screens](#5-session-management-screens)
6. [History & Analytics Screens](#6-history--analytics-screens)
7. [Settings Screen](#7-settings-screen)

---

## 1. Welcome & Onboarding Screens

### 1.1 Landing Page
**Purpose:** First screen users see when opening the app. Introduces the product and guides users to sign up or sign in.

**[📸 Screenshot Placeholder]**

**Key Features:**
- **Professional Branding:** Displays "AudioStim Pro" logo with lightning bolt icon
- **Hero Title:** "Professional Audio Stimulation Therapy" headline
- **Device Mockup:** Visual preview showing live session waveform
- **Feature Highlights:**
  - 🔷 Precision Control - Medical-grade accuracy for stimulation parameters
  - 📊 Real-Time Monitoring - Live telemetry and analytics tracking
  - 🔐 Safety First - Built-in safety protocols and automatic monitoring
  - 📱 Seamless Connection - Quick Bluetooth pairing
- **Statistics Showcase:**
  - 10,000+ Active Users
  - 98% Satisfaction Rate
  - 50,000+ Sessions Completed
- **Call-to-Action Buttons:**
  - "Get Started" (Primary) - Takes users to signup
  - "Sign In" (Secondary) - For returning users

**What Users Can Do:**
- Review product features and benefits
- View trust indicators (stats, testimonials)
- Navigate to signup or login

---

### 1.2 Welcome Screen
**Purpose:** Simplified welcome page for users who've already installed the app. Quick access to authentication.

**[📸 Screenshot Placeholder]**

**Key Features:**
- **App Icon:** Large headset icon with blue gradient background
- **Welcome Message:** "Welcome to Audio Stimulator" with subtitle about personalized audio stimulation
- **Simple Navigation:**
  - "Sign Up" button (blue gradient)
  - "Log In" button (white with border)

**What Users Can Do:**
- Choose to create account or sign in
- See brief value proposition

---

## 2. Authentication Screens

### 2.1 Login Screen
**Purpose:** Allows returning users to access their account.

**[📸 Screenshot Placeholder]**

**Key Features:**
- **Login Icon:** Blue gradient circle with login symbol
- **Input Fields:**
  - Email address (with email keyboard)
  - Password (masked entry)
- **Login Button:** Blue gradient button
- **Sign Up Link:** "Don't have an account? Sign Up" text link

**What Users Can Do:**
- Enter email and password
- Access their account
- Navigate to signup if they're new

**Sample Data:** None (user enters their credentials)

---

### 2.2 Signup Screen
**Purpose:** New user registration and account creation.

**[📸 Screenshot Placeholder]**

**Key Features:**
- **Signup Icon:** Green gradient circle with person-add symbol
- **Input Fields:**
  - Email address
  - Password
  - Confirm Password (validates match)
- **Signup Button:** Green gradient button
- **Login Link:** "Already have an account? Log In" text link

**What Users Can Do:**
- Create new account
- Validate password matching
- Navigate to login if already registered

**Sample Data:** None (user creates account)

---

## 3. Dashboard Screen

### 3.1 Dashboard (Home Screen)
**Purpose:** Main hub after login. Shows overview of activity, quick actions, and recent sessions.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Header Section:**
- **Greeting:** "Welcome back, Dr. Sarah"
- **Connection Status Badge:** 
  - Shows "connected," "connecting," or "disconnected" with color-coded dot
  - Green = Connected
  - Yellow = Connecting
  - Gray = Disconnected
- **Settings Icon:** Access to app settings

**Quick Action Cards:**
1. **Connect Device** (Blue gradient)
   - Bluetooth icon
   - "Scan for nearby devices"
   - Takes user to Device Scan
2. **Start Session** (Green gradient)
   - Play icon
   - "Begin a new stimulation session"
   - Opens Session List

**Health Metrics Cards:**
- **Sessions Today:** 2 sessions (+15% trend indicator)
- **Avg Duration:** 27 min (+8% trend)
- **Device Battery:** 85% (-5% trend)

**Recent Sessions List:**
Shows 3 most recent sessions with:
- Date (e.g., 2025-11-15)
- Duration (e.g., 30 min)
- Device name (e.g., Stimulator-A1)
- Status badge (Completed/Stopped)
- Checkmark or stop icon based on status

**Usage Trends Chart:**
- Placeholder for analytics visualization
- Shows "Chart visualization" with trending icon

**What Users Can Do:**
- View connection status at a glance
- Quickly connect to devices
- Start new sessions
- Monitor health metrics and trends
- Review recent session history
- Access settings

**Sample/Dummy Data:**
- User: "Dr. Sarah"
- Recent Sessions:
  - Nov 15, 2025: 30 min, Stimulator-A1, Completed
  - Nov 14, 2025: 25 min, Stimulator-A1, Completed
  - Nov 13, 2025: 20 min, Stimulator-B2, Stopped
- Metrics:
  - Sessions Today: 2
  - Average Duration: 27 min
  - Device Battery: 85%

---

## 4. Device Management Screens

### 4.1 Device Scan Screen
**Purpose:** Find and discover nearby Bluetooth audio stimulation devices.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Scan Section:**
- **"Start Scan" Button:** Blue gradient button with Bluetooth icon
- **Scanning State:** Button changes to gray "Scanning..." with radio icon while active

**Found Devices List:**
Each device card shows:
- Bluetooth icon (blue)
- Device name (e.g., "Stimulator-A1")
- Device type (e.g., "Audio Stimulator")
- Signal strength (e.g., "-45 dBm")
- Forward arrow to view details

**Connection Tips:**
- ✓ Ensure Bluetooth is enabled
- ✓ Location services help find nearby devices
- ✓ Keep devices charged for best performance

**What Users Can Do:**
- Scan for available Bluetooth devices
- View signal strength for each device
- Tap device to view details and connect
- See helpful connection tips

**Sample/Dummy Data:**
- Device 1: Stimulator-A1, Audio Stimulator, -45 dBm
- Device 2: Stimulator-B2, Neuro Stimulator, -52 dBm
- Device 3: Stimulator-C3, Audio Stimulator, -38 dBm

---

### 4.2 Device Details Screen
**Purpose:** View comprehensive information about a selected device before connecting.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Device Overview:**
- Large Bluetooth icon
- Device name (e.g., "Stimulator-A1")
- Device type
- Status badge (Available/Connected)

**Device Information:**
- **Firmware Version:** v2.1.4
- **Battery Level:** 85% (with visual battery bar)
- **Last Connected:** 2 hours ago

**Features List:**
- ✓ Audio Stimulation
- ✓ Neuro Feedback
- ✓ Real-time Monitoring

**Connection Tips:**
- Ensure stable Bluetooth connection
- Charge device before long sessions
- Keep firmware updated

**Connect Button:** Green gradient "Connect Device" button (changes to gray "Connecting..." during process)

**What Users Can Do:**
- Review device specifications
- Check battery level
- See available features
- Connect to the device
- View connection tips

**Sample/Dummy Data:**
- Device: Stimulator-A1
- Type: Audio Stimulator
- Firmware: v2.1.4
- Battery: 85%
- Last Connected: 2 hours ago
- Features: Audio Stimulation, Neuro Feedback, Real-time Monitoring

---

### 4.3 Device Connected Screen
**Purpose:** Confirmation screen after successful device connection with status and quick actions.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Connection Confirmation:**
- Large green Bluetooth icon
- "Successfully Connected" message
- "Your audio stimulator is ready for use"
- Device ID displayed
- Connection timestamp

**Device Status Cards:**
- **Battery:** 85% (full battery icon, green)
- **Signal:** Strong (radio icon, green)
- **Temperature:** Normal (thermometer icon, green)

**Quick Actions:**
- **Start New Session** (Blue gradient button with play icon)
- **View Saved Sessions** (White button with list icon)

**Connection Information:**
- Bluetooth Low Energy (BLE)
- Real-time data streaming
- Secure encrypted connection

**Disconnect Button:** Red text button at bottom

**What Users Can Do:**
- Confirm successful connection
- View real-time device status
- Start a new session immediately
- Browse saved sessions
- View connection details
- Disconnect device

**Sample/Dummy Data:**
- Device ID: (from previous screen)
- Battery: 85%
- Signal: Strong
- Temperature: Normal
- Connection time: Just now

---

## 5. Session Management Screens

### 5.1 Session List Screen
**Purpose:** Browse, select, and manage saved session templates and presets.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Create New Session Card:**
- Blue gradient banner with add icon
- "Create New Session"
- "Customize your audio stimulation"

**Saved Sessions:**
Each session card displays:
- Type badge (color-coded: Relaxation=Green, Focus=Blue, Sleep=Purple, Energy=Orange)
- Session name
- Description
- Duration
- Last used date

**Quick Start Section:**
Three quick-launch cards:
- **Quick Relax** (5 min) - Leaf icon, green
- **Quick Focus** (10 min) - Bulb icon, blue
- **Quick Energy** (5 min) - Flash icon, orange

**What Users Can Do:**
- Create custom sessions
- Browse saved session templates
- View session details (duration, type, last used)
- Start any saved session
- Use quick-start presets

**Sample/Dummy Data:**
Saved Sessions:
1. **Morning Relaxation** - Gentle audio stimulation, 15 min, Relaxation, Used yesterday
2. **Focus Enhancement** - High-frequency stimulation, 30 min, Focus, Used 3 days ago
3. **Sleep Preparation** - Low-frequency waves, 20 min, Sleep, Used 1 week ago
4. **Energy Boost** - Stimulating frequencies, 10 min, Energy, Used 2 weeks ago

Quick Start:
- Quick Relax: 5 min
- Quick Focus: 10 min
- Quick Energy: 5 min

---

### 5.2 Create Session Screen
**Purpose:** Build and customize a new stimulation session with specific parameters.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Session Details:**
- Session Name input field

**Session Type Selector:**
Choose from pill buttons:
- Relaxation
- Focus
- Sleep
- Energy
- Custom

**Parameters (with +/- controls):**
1. **Duration:** 5-60 minutes (slider)
   - Shows current value (e.g., "15 min")
2. **Frequency:** 1-200 Hz (slider)
   - Shows current value (e.g., "40 Hz")
3. **Intensity:** 0-100% (slider)
   - Shows current value (e.g., "50%")

**Auto-Fill Feature:**
Selecting a session type automatically adjusts parameters:
- Relaxation: 40 Hz, 30%
- Focus: 80 Hz, 60%
- Sleep: 10 Hz, 20%
- Energy: 100 Hz, 70%

**Session Preview:**
Shows selected parameters summary

**Start Session Button:** Green gradient at bottom

**What Users Can Do:**
- Name custom sessions
- Select session type (or create custom)
- Adjust duration (5-60 min)
- Set frequency (1-200 Hz)
- Control intensity (0-100%)
- Preview session settings
- Start session immediately

**Sample/Dummy Data (Defaults):**
- Session Name: (blank)
- Duration: 15 min
- Frequency: 40 Hz
- Intensity: 50%
- Type: Relaxation

---

### 5.3 Session Running Screen
**Purpose:** Active session control and monitoring while a stimulation session is in progress.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Session Info Card:**
- Session name: "Morning Relaxation"
- Session type badge
- **Time Display:**
  - Current time elapsed: 00:00
  - Total time: 15:00
- **Progress Bar:** Visual indicator of session completion

**Playback Controls:**
Three large circular buttons:
- **Stop** (red icon, left)
- **Play/Pause** (blue gradient, center, largest)
- **View Telemetry** (blue icon, right)

**Current Parameters:**
- **Frequency:** 40 Hz (radio icon)
- **Intensity:** 50% (with +/- adjustment buttons)
- **Waveform:** Sine Wave (pulse icon)

**Device Status Indicators:**
- ✓ Device Connected (green dot)
- ✓ Signal Strong (green dot)
- ⚠ Battery 75% (yellow dot)

**Quick Actions:**
- Save session
- Adjust settings
- View history

**What Users Can Do:**
- Start/pause/stop session
- Monitor elapsed time
- See progress percentage
- Adjust intensity during session (+/-10%)
- View live telemetry
- Check device status
- Access quick actions

**Sample/Dummy Data:**
- Session: Morning Relaxation (Relaxation type)
- Current Time: 00:00 (starts at zero, counts up)
- Total Time: 15:00
- Frequency: 40 Hz
- Intensity: 50% (adjustable)
- Waveform: Sine Wave
- Battery: 75%

---

### 5.4 Live Telemetry Screen
**Purpose:** Real-time biometric data and session analytics during an active session.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Real-time Metrics Cards:**
1. **Heart Rate**
   - Red heart icon
   - Value: 72 BPM
   - Updates every second
2. **Stress Level**
   - Orange thermometer icon
   - Value: 35%
   - Shows stress percentage
3. **Focus Level**
   - Green bulb icon
   - Value: 68%
   - Indicates concentration level

**Brainwave Activity Chart:**
- Live animated line graph
- Shows brainwave patterns over last 50 seconds
- Blue waveform visualization
- X-axis: Time (0s to 50s)
- Y-axis: Activity level

**Session Statistics:**
- Session Duration: 12:34
- Average Heart Rate: 74 BPM
- Peak Focus: 89%
- Data Points: 742

**Device Status:**
- ✓ Connected (green indicator)
- Battery: 78% (with visual bar)
- Signal: Excellent (green indicator)

**Export Data Button:** Blue gradient button to export telemetry

**What Users Can Do:**
- Monitor heart rate in real-time
- Track stress levels
- See focus/concentration levels
- View brainwave activity patterns
- Check cumulative session stats
- Monitor device status
- Export data for analysis

**Sample/Dummy Data (Dynamic):**
- Heart Rate: 72 BPM (varies 60-100)
- Stress Level: 35% (varies dynamically)
- Focus Level: 68% (varies dynamically)
- Brainwave data: Sine wave pattern (animated)
- Duration: 12:34
- Avg Heart Rate: 74 BPM
- Peak Focus: 89%
- Data Points: 742
- Battery: 78%

---

## 6. History & Analytics Screens

### 6.1 History Screen
**Purpose:** Review past session history with performance metrics and trends.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Weekly Summary Stats:**
Three stat cards showing:
- **Sessions:** 5 total sessions this week
- **Total Time:** 2h 40m accumulated
- **Avg Effectiveness:** 84% average rating

**Recent Sessions List:**
Each session card shows:
- Type badge (color-coded by session type)
- Session name
- Date and time (e.g., "2024-01-15 at 08:30")
- Duration
- Effectiveness percentage (color-coded: Green ≥85%, Orange ≥70%, Red <70%)
- Forward arrow to view details

**Export All Data Button:** Blue gradient button at bottom

**What Users Can Do:**
- Review weekly activity summary
- Browse all past sessions
- See effectiveness ratings
- Filter by type/date
- Tap session for full details
- Export all historical data

**Sample/Dummy Data:**
Weekly Stats:
- 5 Sessions
- 2h 40m Total Time
- 84% Average Effectiveness

Recent Sessions:
1. **Morning Relaxation** - Jan 15 at 08:30, 15 min, Relaxation, 85% effective
2. **Focus Enhancement** - Jan 14 at 14:00, 30 min, Focus, 92% effective
3. **Sleep Preparation** - Jan 13 at 22:00, 20 min, Sleep, 78% effective
4. **Energy Boost** - Jan 12 at 07:15, 10 min, Energy, 88% effective
5. **Stress Relief** - Jan 11 at 19:45, 25 min, Relaxation, 76% effective

---

### 6.2 History Detail Screen
**Purpose:** Comprehensive analytics and data for a completed session.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Session Overview Card:**
- Session name
- Date and time
- Duration (full time)
- Effectiveness rating with color-coded star

**Session Parameters:**
Shows exact settings used:
- Frequency: 40 Hz
- Intensity: 30%
- Waveform: Sine Wave

**Session Metrics (4 cards):**
1. **Avg Heart Rate:** 72 BPM (red heart icon)
2. **Avg Stress:** 25% (orange thermometer)
3. **Avg Focus:** 78% (green bulb icon)
4. **Peak Focus:** 89% (purple trending icon)

**Brainwave Activity Chart:**
- Historical waveform graph
- Shows complete session data
- Blue line visualization
- Timeline from 0s to session end

**Session Notes:**
User's written notes about the session (e.g., "Felt very relaxed and focused after the session. Good start to the day.")

**Actions:**
- Repeat Session (blue button)
- Share Results
- Export Data

**What Users Can Do:**
- Review complete session details
- See all parameters used
- Analyze biometric data
- View brainwave patterns
- Read/add session notes
- Repeat successful sessions
- Export or share results

**Sample/Dummy Data:**
- Session: Morning Relaxation
- Date: Jan 15, 2024 at 08:30
- Duration: 15:00
- Effectiveness: 85%
- Parameters:
  - Frequency: 40 Hz
  - Intensity: 30%
  - Waveform: Sine Wave
- Metrics:
  - Avg Heart Rate: 72 BPM
  - Avg Stress: 25%
  - Avg Focus: 78%
  - Peak Focus: 89%
- Brainwave Data: 10 sample points (45, 52, 48, 55, 50, 47, 53, 49, 46, 51)
- Notes: "Felt very relaxed and focused after the session. Good start to the day."

---

## 7. Settings Screen

### 7.1 Settings Screen
**Purpose:** Configure app preferences, manage account, and control device settings.

**[📸 Screenshot Placeholder]**

**Key Features:**

**Profile Section:**
- Profile avatar (person icon in blue circle)
- Name: "John Doe"
- Email: "john.doe@example.com"
- Edit button (pencil icon)

**Device Settings:**
1. **Auto-connect** (toggle switch)
   - Bluetooth icon
   - "Automatically connect to last device"
   - Default: OFF
2. **Sound Effects** (toggle switch)
   - Volume icon
   - "Play sounds during sessions"
   - Default: ON

**App Settings:**
1. **Notifications** (toggle switch)
   - Bell icon
   - "Session reminders and updates"
   - Default: ON
2. **Data Sync** (toggle switch)
   - Cloud icon
   - "Sync data across devices"
   - Default: ON

**Data Management:**
- **Export All Data** (download icon, blue)
- **Backup to Cloud** (cloud-upload icon, green)
- **Reset All Data** (trash icon, red - with confirmation)

**About Section:**
- Version: 1.0.0
- Privacy Policy link
- Terms of Service link
- Support/Help link

**Logout Button:** Red text button at bottom

**What Users Can Do:**
- Edit profile information
- Toggle auto-connect to devices
- Enable/disable sound effects
- Manage notifications
- Control data sync
- Export session data
- Backup data to cloud
- Reset all data (destructive action)
- View app version
- Access legal documents
- Contact support
- Logout of account

**Sample/Dummy Data:**
- User Profile:
  - Name: John Doe
  - Email: john.doe@example.com
- Settings:
  - Auto-connect: OFF
  - Sound Effects: ON
  - Notifications: ON
  - Data Sync: ON
- App Version: 1.0.0

---

## Summary of All Screens

**Total Screens: 15**

1. **Landing Page** - Product introduction and marketing
2. **Welcome** - Simple authentication gateway
3. **Login** - User authentication
4. **Signup** - New user registration
5. **Dashboard** - Main home screen with overview
6. **Device Scan** - Bluetooth device discovery
7. **Device Details** - Device information before connection
8. **Device Connected** - Post-connection confirmation
9. **Session List** - Browse and select sessions
10. **Create Session** - Build custom sessions
11. **Session Running** - Active session controls
12. **Live Telemetry** - Real-time biometric monitoring
13. **History** - Past sessions overview
14. **History Detail** - Individual session analytics
15. **Settings** - App configuration and account management

---

## Dummy/Sample Data Summary

### Devices:
- Stimulator-A1 (Audio Stimulator, -45 dBm, Firmware v2.1.4, 85% battery)
- Stimulator-B2 (Neuro Stimulator, -52 dBm)
- Stimulator-C3 (Audio Stimulator, -38 dBm)

### Users:
- Dr. Sarah (Dashboard greeting)
- John Doe (Settings profile, john.doe@example.com)

### Session Templates:
- Morning Relaxation (15 min, Relaxation, 40 Hz, 30%)
- Focus Enhancement (30 min, Focus, 80 Hz, 60%)
- Sleep Preparation (20 min, Sleep, 10 Hz, 20%)
- Energy Boost (10 min, Energy, 100 Hz, 70%)

### Metrics (Sample Values):
- Heart Rate: 72 BPM (varies 60-100)
- Stress Level: 25-35%
- Focus Level: 68-89%
- Battery: 75-85%
- Signal Strength: -38 to -52 dBm

### Historical Sessions (Demo Data):
- Jan 15, 2024: Morning Relaxation, 15 min, 85% effective
- Jan 14, 2024: Focus Enhancement, 30 min, 92% effective
- Jan 13, 2024: Sleep Preparation, 20 min, 78% effective
- Jan 12, 2024: Energy Boost, 10 min, 88% effective
- Jan 11, 2024: Stress Relief, 25 min, 76% effective

---

## Notes for Screenshots

Each screen has a **[📸 Screenshot Placeholder]** marker where you can insert actual screenshots from the app. This will help clients visualize the user interface and user experience.

---

## Color Coding System

**Session Types:**
- 🟢 Relaxation: Green (#10b981)
- 🔵 Focus: Blue (#3b82f6)
- 🟣 Sleep: Purple (#8b5cf6)
- 🟠 Energy: Orange (#f59e0b)

**Status Indicators:**
- 🟢 Connected/Good: Green
- 🟡 Connecting/Warning: Yellow/Orange
- 🔴 Disconnected/Error: Red
- ⚪ Neutral/Inactive: Gray

**UI Gradients:**
- Primary Actions: Blue gradient (#3b82f6 to #2563eb)
- Success/Start: Green gradient (#10b981 to #059669)
- Background: Light gray gradient (#f8fafc to #e2e8f0)

---

**Document Version:** 1.0  
**Last Updated:** November 2025  
**App Version:** 1.0.0
