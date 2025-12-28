# AudioStim Pro - Complete User Journey Protocol
**Client Priority Document - Mobile App Workflow**

---

## Executive Summary

This document outlines the complete User Journey workflow for the AudioStim Pro mobile app, ensuring seamless integration between the mobile application, audio stimulation devices, and biometric monitoring wristbands. The protocol covers the full user experience from app launch to session completion, including all technical commands, safety protocols, and data flows.

**Priority Status:** HIGH - Client requires completion before further development to avoid rework and timeline delays.

---

## Table of Contents

1. [User Journey Overview](#1-user-journey-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [Detailed User Flow Diagrams](#3-detailed-user-flow-diagrams)
4. [Command Mapping Protocol](#4-command-mapping-protocol)
5. [Device Communication Specifications](#5-device-communication-specifications)
6. [Safety & Monitoring Protocols](#6-safety--monitoring-protocols)
7. [Error Handling & Recovery](#7-error-handling--recovery)
8. [Data Flow & Storage](#8-data-flow--storage)
9. [Performance Requirements](#9-performance-requirements)
10. [Testing & Validation](#10-testing--validation)
11. [Approval Checklist](#11-approval-checklist)

---

## 1. User Journey Overview

### Primary User Journey Flow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   App Launch    │ -> │ Auto-Connection │ -> │Device Readiness │ -> │Session Selection│
│                 │    │   & Pairing    │    │     Check       │    │   & Config     │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │                       │
         ▼                       ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│Session Execution│ -> │ Live Monitoring │ -> │ Session Complete│ -> │  Data Sync &   │
│   & Control     │    │   & Telemetry   │    │   & Summary     │    │   Summary      │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Journey Milestones

1. **App Launch & Authentication** (0-5 seconds)
2. **Auto-Discovery & Connection** (5-15 seconds)
3. **Device Readiness Validation** (15-30 seconds)
4. **Session Configuration** (30-60 seconds)
5. **Session Execution** (1-60 minutes)
6. **Real-time Monitoring** (Throughout session)
7. **Session Completion & Data Save** (End of session)
8. **Results Summary & Optional Sync** (Post-session)

---

## 2. Technical Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                    Mobile Application                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ UI Layer: React Native Screens                     │    │
│  │ - Dashboard, Session Controls, Telemetry Display   │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Business Logic Layer                               │    │
│  │ - Session Management, Device Control, Data Processing│   │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Communication Layer                                │    │
│  │ - Bluetooth LE, WebSocket, REST API                │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
               │                        │
               ▼                        ▼
┌─────────────────────────────────────────────────────────────┐
│              Hardware Devices                              │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │ Audio Stimulator│    │Biometric Wristband│               │
│  │ - BLE Peripheral│    │- BLE Peripheral  │               │
│  │ - Audio Output  │    │- Heart Rate      │               │
│  │ - Stimulation   │    │- GSR Sensors     │               │
│  │ - Safety Circuit│    │- Accelerometer   │               │
│  └─────────────────┘    └─────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
               │                        │
               ▼                        ▼
┌─────────────────────────────────────────────────────────────┐
│              Cloud Services                                │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │ Session Data    │    │ User Analytics  │               │
│  │ Storage         │    │ & Reporting     │               │
│  └─────────────────┘    └─────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
```

### Communication Protocols

- **Primary:** Bluetooth Low Energy (BLE) 4.2+
- **Backup:** WiFi Direct (for high-bandwidth data)
- **Cloud:** HTTPS REST API with JWT authentication
- **Real-time:** WebSocket for live telemetry

---

## 3. Detailed User Flow Diagrams

### 3.1 Complete User Journey Flowchart

```
START: User Opens App
    │
    ├─► Check Authentication Status
    │   ├──► Not Authenticated ──► Login/Signup Flow ──► Dashboard
    │   └──► Authenticated ─────► Dashboard
    │
    ▼
DASHBOARD: Main Hub
    │
    ├─► Auto-Device Discovery (Background)
    │   ├──► Devices Found ──► Connection Status: "Available"
    │   └──► No Devices ───► Connection Status: "Disconnected"
    │
    ├─► Quick Actions Available:
    │   ├──► "Connect Device" ──► Device Scan Screen
    │   └──► "Start Session" ──► Session List Screen
    │
    ▼
DEVICE CONNECTION PHASE
    │
    ├─► Device Scan Initiated
    │   ├──► BLE Scan Command Sent
    │   ├──► Device List Populated
    │   └──► User Selects Device
    │
    ├─► Device Details Screen
    │   ├──► Device Info Retrieved
    │   ├──► Battery Check (>20% required)
    │   ├──► Firmware Version Check
    │   └──► Connect Button Pressed
    │
    ├─► Connection Establishment
    │   ├──► BLE Pairing Handshake
    │   ├──► Device Authentication
    │   ├──► Service Discovery
    │   └──► Characteristic Mapping
    │
    ├─► Device Connected Screen
    │   ├──► Connection Confirmation
    │   ├──► Device Status Display
    │   └──► Ready for Session
    │
    ▼
SESSION CONFIGURATION PHASE
    │
    ├─► Session List Screen
    │   ├──► Predefined Sessions Available
    │   ├──► Quick Start Options
    │   └──► Create New Session Option
    │
    ├─► Session Selection/Create
    │   ├──► Session Type Selected (Relaxation/Focus/Sleep/Energy)
    │   ├──► Parameters Auto-filled or Manual Entry
    │   ├──► Duration: 5-60 minutes
    │   ├──► Frequency: 1-200 Hz
    │   ├──► Intensity: 0-100%
    │   └──► Waveform: Sine/Square/Triangle
    │
    ▼
SESSION EXECUTION PHASE
    │
    ├─► Session Running Screen
    │   ├──► Pre-flight Safety Checks
    │   │   ├──► Device Connection Verified
    │   │   ├──► Battery Level >15%
    │   │   ├──► Impedance Check (if applicable)
    │   │   └──► Emergency Stop Available
    │   │
    │   ├──► Session Start Command
    │   │   ├──► Audio Playback Begins
    │   │   ├──► Stimulation Signal Starts
    │   │   ├──► Timer Initiates
    │   │   └──► Telemetry Collection Starts
    │   │
    │   ├──► Live Session Controls
    │   │   ├──► Play/Pause Toggle
    │   │   ├──► Stop Session
    │   │   ├──► Intensity Adjustment (+/-10%)
    │   │   └──► View Live Telemetry
    │   │
    │   └──► Real-time Monitoring
    │       ├──► Heart Rate Tracking
    │       ├──► Stress Level Monitoring
    │       ├──► Focus Level Analysis
    │       ├──► Brainwave Visualization
    │       ├──► Device Status Checks
    │       └──► Safety Threshold Monitoring
    │
    ▼
SESSION COMPLETION PHASE
    │
    ├─► Session End Triggers
    │   ├──► Timer Reaches Zero
    │   ├──► Manual Stop
    │   ├──► Safety Threshold Exceeded
    │   └──► Device Disconnection
    │
    ├─► Post-Session Processing
    │   ├──► Stimulation Signal Stops
    │   ├──► Audio Playback Fades
    │   ├──► Final Data Collection
    │   ├──► Session Summary Generated
    │   └──► Data Save Initiated
    │
    ├─► Results Summary Screen
    │   ├──► Session Statistics
    │   ├──► Effectiveness Rating
    │   ├──► Biometric Trends
    │   ├──► User Notes Input
    │   └──► Export/Share Options
    │
    ▼
DATA MANAGEMENT PHASE
    │
    ├─► Local Data Storage
    │   ├──► Session Data Saved
    │   ├──► Telemetry Data Archived
    │   └──► User Preferences Updated
    │
    ├─► Optional Cloud Sync
    │   ├──► User Permission Requested
    │   ├──► Data Encryption Applied
    │   ├──► Upload to Cloud Storage
    │   └──► Sync Confirmation
    │
    ▼
SESSION HISTORY & ANALYTICS
    │
    ├─► History Screen Access
    │   ├──► Session List Displayed
    │   ├──► Effectiveness Ratings Shown
    │   ├──► Weekly Statistics Calculated
    │   └──► Detailed Session View Available
    │
    └─► History Detail Screen
        ├──► Complete Session Analytics
        ├──► Parameter Review
        ├──► Biometric Data Visualization
        ├──► User Notes Display
        └──► Repeat Session Option

END: User Journey Complete
```

### 3.2 Device Connection Sequence Diagram

```
Mobile App                    BLE Central                    Stimulator Device
    │                              │                              │
    │  1. Start BLE Scan           │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │  2. Advertising Packet      │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │  3. Device Discovered        │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
    │  4. Connect Request          │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │  5. Connection Established  │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │  6. Service Discovery        │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │  7. Services Listed         │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │  8. Characteristic Discovery │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │  9. Characteristics Listed  │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │ 10. Authentication Challenge │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │ 11. Auth Response           │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │ 12. Connection Ready         │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
```

### 3.3 Session Execution Flow

```
User Action                  Mobile App                    Device Control
    │                              │                              │
    │  1. Start Session           │                              │
    │ ─────────────────────────────>                              │
    │                              │                              │
    │                              │  2. Pre-flight Checks       │
    │                              │ ─────────────────────────────>
    │                              │                              │
    │                              │  3. Safety Confirmation     │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │                              │  4. Session Parameters      │
    │                              │ ─────────────────────────────>
    │                              │                              │
    │                              │  5. Parameter Acknowledged  │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │                              │  6. Start Command           │
    │                              │ ─────────────────────────────>
    │                              │                              │
    │                              │  7. Audio + Stimulation Start│
    │                              │ <──────────────────────────── │
    │                              │                              │
    │  8. Session Started          │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
    │  Loop: Telemetry Collection  │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
    │  9. Session Complete         │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
    │                              │ 10. Stop Commands           │
    │                              │ ─────────────────────────────>
    │                              │                              │
    │                              │ 11. Confirmation            │
    │                              │ <──────────────────────────── │
    │                              │                              │
    │ 12. Data Save Initiated      │                              │
    │ <──────────────────────────── │                              │
    │                              │                              │
```

---

## 4. Command Mapping Protocol

### 4.1 BLE Command Structure

All BLE commands follow this format:
```
Command Packet Structure:
┌─────────────────────────────────────────────────────────────┐
│ Header (4 bytes) │ Command ID (2 bytes) │ Payload (variable) │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Magic: 0xA55A   │ Operation Code      │ Command Data        │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Device Control Commands

#### Connection & Setup Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x0001 | CONNECT_REQUEST | App → Device | Device ID (8 bytes) | ACK/NACK |
| 0x0002 | AUTH_CHALLENGE | Device → App | Challenge (16 bytes) | Auth Response |
| 0x0003 | AUTH_RESPONSE | App → Device | Signed Challenge | ACK/NACK |
| 0x0004 | SERVICE_DISCOVERY | App → Device | None | Service List |
| 0x0005 | READY_STATUS | Device → App | Status Flags | None |

#### Session Control Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x1001 | SESSION_START | App → Device | Session Config (32 bytes) | ACK/ERROR |
| 0x1002 | SESSION_PAUSE | App → Device | None | ACK |
| 0x1003 | SESSION_RESUME | App → Device | None | ACK |
| 0x1004 | SESSION_STOP | App → Device | Stop Reason (1 byte) | ACK |
| 0x1005 | PARAMETER_UPDATE | App → Device | Param ID + Value (6 bytes) | ACK |
| 0x1006 | EMERGENCY_STOP | App → Device | Emergency Code (2 bytes) | ACK |

#### Audio Control Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x2001 | AUDIO_LOAD | App → Device | Audio Data (variable) | ACK |
| 0x2002 | AUDIO_START | App → Device | Start Offset (4 bytes) | ACK |
| 0x2003 | AUDIO_PAUSE | App → Device | None | ACK |
| 0x2004 | AUDIO_STOP | App → Device | Fade Time (2 bytes) | ACK |
| 0x2005 | VOLUME_SET | App → Device | Volume Level (1 byte) | ACK |

#### Stimulation Control Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x3001 | STIM_CONFIG | App → Device | Stim Parameters (16 bytes) | ACK |
| 0x3002 | STIM_START | App → Device | None | ACK |
| 0x3003 | STIM_STOP | App → Device | Stop Mode (1 byte) | ACK |
| 0x3004 | INTENSITY_SET | App → Device | Intensity % (1 byte) | ACK |
| 0x3005 | FREQUENCY_SET | App → Device | Frequency Hz (2 bytes) | ACK |
| 0x3006 | WAVEFORM_SET | App → Device | Waveform Type (1 byte) | ACK |

#### Telemetry Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x4001 | TELEMETRY_START | App → Device | Sample Rate (2 bytes) | ACK |
| 0x4002 | TELEMETRY_STOP | App → Device | None | ACK |
| 0x4003 | TELEMETRY_DATA | Device → App | Data Packet (variable) | None |
| 0x4004 | HEART_RATE_DATA | Wristband → App | BPM Value (2 bytes) | None |
| 0x4005 | BIO_DATA | Wristband → App | Bio Metrics (12 bytes) | None |

#### Safety & Monitoring Commands

| Command ID | Name | Direction | Payload | Response |
|------------|------|-----------|---------|----------|
| 0x5001 | SAFETY_CHECK | App → Device | Check Type (1 byte) | Status |
| 0x5002 | BATTERY_STATUS | Device → App | Battery % (1 byte) | None |
| 0x5003 | TEMPERATURE_ALERT | Device → App | Temp °C (2 bytes) | None |
| 0x5004 | IMPEDANCE_CHECK | App → Device | Electrode Pair (1 byte) | Impedance |
| 0x5005 | FAULT_REPORT | Device → App | Fault Code (2 bytes) | None |

### 4.3 Session Configuration Payload Structure

```
Session Config Payload (32 bytes):
┌─────────────────────────────────────────────────────────────────┐
│ Duration (4) │ Frequency (4) │ Intensity (4) │ Waveform (4) │ ... │
├─────────────┼───────────────┼───────────────┼───────────────┼─────┤
│ Reserved (16 bytes)                                             │
└─────────────────────────────────────────────────────────────────┘

Duration: uint32_t (seconds)
Frequency: uint32_t (Hz * 100, e.g., 4000 = 40.00 Hz)
Intensity: uint32_t (percentage * 100, e.g., 5000 = 50.00%)
Waveform: uint32_t (0=Sine, 1=Square, 2=Triangle, 3=Sawtooth)
```

### 4.4 Telemetry Data Packet Structure

```
Telemetry Packet (variable length):
┌─────────────────────────────────────────────────────────────┐
│ Timestamp (8) │ Heart Rate (2) │ Stress (2) │ Focus (2) │ ... │
├──────────────┼────────────────┼────────────┼────────────┼─────┤
│ Brainwave Data (variable)                                   │
└─────────────────────────────────────────────────────────────┘

Timestamp: uint64_t (milliseconds since session start)
Heart Rate: uint16_t (BPM)
Stress Level: uint16_t (percentage * 100)
Focus Level: uint16_t (percentage * 100)
Brainwave Data: Array of uint16_t values (µV)
```

---

## 5. Device Communication Specifications

### 5.1 BLE Service Definitions

#### Primary Service: AudioStim Control (UUID: 12345678-1234-1234-1234-123456789ABC)
- **Characteristic: Command** (UUID: 12345678-1234-1234-1234-123456789ABD)
  - Write: Commands from app to device
  - Notify: Command responses and status updates
- **Characteristic: Telemetry** (UUID: 12345678-1234-1234-1234-123456789ABE)
  - Notify: Real-time telemetry data
- **Characteristic: Status** (UUID: 12345678-1234-1234-1234-123456789ABF)
  - Read: Device status and battery level
  - Notify: Status changes

#### Secondary Service: Audio Streaming (UUID: 87654321-4321-4321-4321-ABCDEF123456)
- **Characteristic: Audio Data** (UUID: 87654321-4321-4321-4321-ABCDEF123457)
  - Write: Audio file chunks
- **Characteristic: Audio Control** (UUID: 87654321-4321-4321-4321-ABCDEF123458)
  - Write: Playback commands
  - Notify: Playback status

### 5.2 Connection Parameters

- **Connection Interval:** 20ms - 40ms (balanced for real-time control)
- **Slave Latency:** 0 (required for real-time telemetry)
- **Supervision Timeout:** 5000ms
- **MTU Size:** 247 bytes (maximum for BLE 4.2)
- **Connection Priority:** High for active sessions

### 5.3 Data Transmission Rates

- **Command Response:** <50ms latency
- **Telemetry Data:** 10Hz (100ms intervals)
- **Audio Streaming:** 44.1kHz sample rate (when required)
- **Status Updates:** 1Hz during sessions

---

## 6. Safety & Monitoring Protocols

### 6.1 Pre-Session Safety Checks

#### Mandatory Checks (All Must Pass)
1. **Device Connection:** BLE connection established and authenticated
2. **Battery Level:** >15% remaining capacity
3. **Firmware Version:** Compatible with app version
4. **Device Temperature:** <45°C operating temperature
5. **Impedance Check:** Electrode-skin contact verified (<10kΩ)
6. **Emergency Stop:** Hardware emergency button functional

#### Warning Checks (User Can Override)
1. **Battery Level:** 15-25% (warning displayed)
2. **Signal Strength:** <-70dBm (connection may be unstable)
3. **Previous Session:** Within last 2 hours (rest period recommended)

### 6.2 Real-Time Safety Monitoring

#### Continuous Monitoring Parameters
- **Heart Rate:** 40-180 BPM acceptable range
- **Device Temperature:** <50°C maximum
- **Stimulation Current:** Within programmed limits
- **Battery Voltage:** >3.0V minimum
- **BLE Connection:** RSSI >-85dBm

#### Automatic Safety Responses

| Condition | Threshold | Response | User Notification |
|-----------|-----------|----------|-------------------|
| Heart Rate High | >180 BPM | Pause stimulation | "High heart rate detected. Session paused." |
| Heart Rate Low | <40 BPM | Emergency stop | "Abnormal heart rate. Session stopped." |
| Temperature High | >50°C | Emergency stop | "Device overheating. Session stopped." |
| Battery Critical | <3.0V | Emergency stop | "Battery critical. Session stopped." |
| Connection Lost | >5 seconds | Emergency stop | "Device disconnected. Session stopped." |
| Impedance High | >50kΩ | Pause stimulation | "Poor electrode contact. Check placement." |

### 6.3 Emergency Stop Protocol

```
Emergency Stop Sequence:
1. User presses emergency stop OR
   Safety threshold exceeded
      │
      ▼
2. Immediate stimulation cessation
      │
      ▼
3. Audio fade-out (500ms)
      │
      ▼
4. Device status check
      │
      ▼
5. Emergency screen display
      │
      ▼
6. Data save with emergency flag
      │
      ▼
7. User guidance for next steps
```

---

## 7. Error Handling & Recovery

### 7.1 Connection Error Recovery

```
Connection Error Detected
        │
        ├─► Attempt Reconnection (3 tries, 2s intervals)
        │   ├──► Success ──► Resume Session
        │   └──► Failed ──► Emergency Stop
        │
        └─► Check Device Status
            ├──► Device OK ──► Manual Reconnect
            └──► Device Error ──► Error Screen
```

### 7.2 Session Error Recovery

| Error Type | Recovery Action | User Message |
|------------|-----------------|--------------|
| Device Disconnect | Auto-reconnect (10s timeout) | "Reconnecting to device..." |
| Battery Low | Warning → Auto-stop at 5% | "Battery low. Session will stop soon." |
| Parameter Error | Revert to safe defaults | "Parameter error. Using safe settings." |
| Telemetry Loss | Continue session, flag data | "Telemetry interrupted. Session continuing." |
| Audio Buffer Underrun | Skip/repeat audio segment | "Audio glitch detected. Continuing..." |

### 7.3 Data Recovery Protocols

- **Session Data:** Auto-save every 30 seconds during session
- **Telemetry Data:** Buffered locally, uploaded on reconnection
- **Crash Recovery:** Resume from last saved checkpoint
- **Cloud Sync:** Retry failed uploads with exponential backoff

---

## 8. Data Flow & Storage

### 8.1 Session Data Structure

```json
{
  "sessionId": "sess_20241210_143022_001",
  "userId": "user_12345",
  "deviceId": "stim_A1_v2",
  "startTime": "2024-12-10T14:30:22Z",
  "endTime": "2024-12-10T14:45:22Z",
  "duration": 900,
  "parameters": {
    "frequency": 40.0,
    "intensity": 30.0,
    "waveform": "sine",
    "duration": 15
  },
  "telemetry": {
    "sampleRate": 10,
    "heartRate": [72, 74, 71, 73, ...],
    "stressLevel": [25, 28, 22, 30, ...],
    "focusLevel": [78, 82, 75, 85, ...],
    "brainwaves": [[45, 52, 48, ...], ...]
  },
  "effectiveness": 85,
  "notes": "Felt very relaxed and focused",
  "safetyEvents": [],
  "syncStatus": "completed"
}
```

### 8.2 Data Storage Hierarchy

```
Local Storage (SQLite)
├── User Profiles
│   ├── Authentication Data
│   ├── Preferences
│   └── Device History
├── Session Data
│   ├── Active Sessions
│   ├── Completed Sessions
│   └── Session Templates
└── Telemetry Cache
    ├── Real-time Buffer
    ├── Historical Data
    └── Export Queue

Cloud Storage (AWS S3 + DynamoDB)
├── User Data
│   ├── Profile Information
│   └── Preferences
├── Session Archives
│   ├── Complete Sessions
│   └── Analytics Data
└── Telemetry Warehouse
    ├── Raw Data
    ├── Processed Analytics
    └── Research Data Sets
```

### 8.3 Data Synchronization Flow

```
Local Session Complete
        │
        ▼
Data Validation & Compression
        │
        ▼
Local Storage Save
        │
        ▼
User Permission Check
        │
        ├─► Permission Denied ──► Skip Sync
        │
        └─► Permission Granted
                │
                ▼
Data Encryption (AES-256)
                │
                ▼
Cloud Upload Queue
                │
                ▼
Retry Logic (3 attempts)
                │
                ├─► Success ──► Sync Confirmation
                │
                └─► Failed ──► Offline Queue
```

---

## 9. Performance Requirements

### 9.1 Timing Requirements

| Operation | Maximum Latency | User Experience Impact |
|-----------|-----------------|-------------------------|
| App Launch | 3 seconds | Initial loading |
| Device Discovery | 5 seconds | Connection setup |
| Session Start | 2 seconds | User interaction |
| Command Response | 100ms | Real-time control |
| Telemetry Update | 100ms | Live monitoring |
| Screen Transition | 300ms | UI responsiveness |

### 9.2 Resource Requirements

- **Memory Usage:** <200MB during active session
- **CPU Usage:** <30% during normal operation
- **Battery Impact:** <15% per hour of use
- **Network Usage:** <50MB per session (with telemetry)
- **Storage Usage:** <1GB for 100 sessions

### 9.3 Reliability Targets

- **Connection Success Rate:** >98% in optimal conditions
- **Session Completion Rate:** >99% (non-safety related)
- **Data Loss Rate:** <0.1% for completed sessions
- **Emergency Stop Response:** <500ms

---

## 10. Testing & Validation

### 10.1 Test Scenarios

#### Unit Testing
- Command encoding/decoding
- Data validation functions
- Safety threshold calculations
- UI state management

#### Integration Testing
- BLE communication protocols
- Device pairing sequences
- Session parameter validation
- Data synchronization flows

#### User Journey Testing
1. **Happy Path:** Complete session from start to finish
2. **Error Recovery:** Device disconnection during session
3. **Safety Triggers:** Heart rate threshold exceeded
4. **Performance:** Extended session (60 minutes)
5. **Edge Cases:** Battery critical, poor connection

### 10.2 Validation Checkpoints

- [ ] All BLE commands implemented and tested
- [ ] Safety protocols functional
- [ ] Error recovery working
- [ ] Data persistence verified
- [ ] Performance requirements met
- [ ] User interface flows complete
- [ ] Device compatibility confirmed

---

## 11. Approval Checklist

### Technical Implementation
- [ ] BLE service definitions implemented
- [ ] Command mapping protocol coded
- [ ] Safety monitoring active
- [ ] Data storage and sync working
- [ ] Error handling comprehensive
- [ ] Performance requirements met

### User Experience
- [ ] Complete journey flow tested
- [ ] All screens functional
- [ ] Real-time feedback working
- [ ] Emergency stops functional
- [ ] Data visualization accurate

### Safety & Compliance
- [ ] Pre-session checks implemented
- [ ] Real-time monitoring active
- [ ] Emergency protocols tested
- [ ] Data privacy maintained
- [ ] Medical device standards met

### Documentation
- [ ] User journey documented
- [ ] Command protocols defined
- [ ] Error handling specified
- [ ] Testing procedures complete
- [ ] Maintenance guides created

---

**Document Status:** Ready for Client Review and Approval

**Prepared By:** AI Assistant  
**Date:** December 10, 2025  
**Version:** 1.0 - Complete User Journey Protocol

**Next Steps:**
1. Client review and feedback
2. Technical implementation approval
3. Development timeline confirmation
4. Testing phase initiation

---

*This document represents the complete technical specification for the AudioStim Pro mobile app user journey. All protocols, commands, and safety measures are defined to ensure a seamless, safe, and reliable user experience.*</content>
<parameter name="filePath">d:\job\app\frontend\USER_JOURNEY_PROTOCOL.md