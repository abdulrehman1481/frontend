# App Structure Summary

## Navigation Flow
```
Login Page → 5 Main Pages (Bottom Tab Navigation)
```

## 5 Main Pages

### 1. 🏠 Home
- **Icon**: Home (house icon)
- **Color**: #5DADE2 (Teal)
- **Features**:
  - Quick stats (sessions, average duration)
  - Recent activity feed
  - Quick action buttons

### 2. 📊 Physiological Insight
- **Icon**: Stats Chart
- **Color**: #5DADE2 (Teal)
- **Features**:
  - Real-time health metrics (Heart Rate, Blood Pressure, Temperature, Oxygen Level)
  - Health summary card
  - Recent measurements history

### 3. 👂 Stimulation
- **Icon**: Ear
- **Color**: #5DADE2 (Teal)
- **Features**:
  - Electrical stimulation control with intensity levels (1-5)
  - Audio stimulation control with different audio types
  - Device connection status
  - Session controls (Start/Stop)
  - Recent sessions list

### 4. 🧠 Psychological Insight
- **Icon**: Happy Face
- **Color**: #5DADE2 (Teal)
- **Features**:
  - Weekly mood trend chart
  - Key insights (Stress Level, Sleep Quality, Mood Stability)
  - Daily journal entry
  - Recent journal entries
  - Personalized recommendations

### 5. ⚙️ Settings
- **Icon**: Settings (gear icon)
- **Color**: #5DADE2 (Teal)
- **Features**:
  - Profile information
  - Device settings (Auto-connect, Sound Effects)
  - App settings (Notifications, Data Sync)
  - Logout button

## Design System

### Color Palette
- **Primary Teal**: `#5DADE2` - Main brand color used for icons and active states
- **Dark Teal**: `#48A0D4` - Used in gradients
- **Light Teal**: `#A3D9F0` - Available for lighter elements
- **Background**: `#e0f2fe` - Light teal background for icon containers
- **Text Primary**: `#1e293b` - Dark slate for headings
- **Text Secondary**: `#64748b` - Medium slate for descriptions

### Design Principles
1. **Simple & Clean**: Minimal design with focus on content
2. **Consistent Colors**: Teal (#5DADE2) used throughout for icons and active states
3. **Clear Hierarchy**: Large headers, clear section titles, easy-to-read content
4. **Accessible Navigation**: Bottom tab bar with labeled icons

## Key Changes Made

1. ✅ Simplified navigation from 15+ screens to 5 main pages
2. ✅ Implemented bottom tab navigation for easy access
3. ✅ Applied consistent teal color scheme (#5DADE2)
4. ✅ Updated Login and Signup pages with client's color scheme
5. ✅ Removed welcome/landing pages - direct to login
6. ✅ Created new screens: Home, PhysiologicalInsight, Stimulation, PsychologicalInsight
7. ✅ Updated Settings screen with simplified, clean design
8. ✅ All screens use the same design language and color palette
