# Campus Companion

Campus Companion is a mobile application designed to help college students navigate campus, discover campus services, and stay informed about campus events—all in one place.

## 📱 Overview

Campus Companion provides students with a centralized way to access useful campus resources and information. The application is being developed as a senior capstone project with a focus on improving the student campus experience.

### Planned Features

* 🗺️ **Interactive Campus Map**

  * View campus buildings and points of interest
  * Find important campus locations
  * View your current location

* 🧭 **Campus Navigation**

  * Get directions to campus buildings and locations
  * Support for navigating between campus locations

* 📅 **Campus Events**

  * Browse upcoming campus events
  * View event details
  * RSVP to events
  * Receive event reminders

* 🍔 **Campus Dining**

  * View available campus dining locations
  * View dining information and menus when available

* 🚌 **Campus Shuttle**

  * View campus shuttle information
  * View shuttle routes and stops
  * Track shuttle information when supported

* 👤 **User Accounts**

  * Create an account
  * Log in and log out
  * Manage user information

## 🛠️ Technologies

### Frontend

* React Native
* Expo
* TypeScript

### Backend

* Java
* Spring Boot
* PostgreSQL

### Development Tools

* Git & GitHub
* Visual Studio Code
* Expo Go

## 📂 Project Structure

```text
CampusCompanionApp/
├── app/                 # Application screens and routes
├── components/          # Reusable React Native components
├── styles/              # Shared application styles
├── assets/              # Images, icons, and other assets
├── services/            # API and backend communication
├── constants/           # Shared constants and configuration
├── package.json
└── README.md
```

> The project structure may change as development continues.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Expo
* Git

You can also install **Expo Go** on a mobile device to test the application during development.

### Installation

Clone the repository:

```bash
git clone https://github.com/Owl-tech-CampusCompanion/CampusCompanionApp.git
```

Navigate into the project:

```bash
cd CampusCompanionApp
```

Install the dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then scan the QR code using Expo Go to run the application on a compatible mobile device.

## 🔧 Development

The project is currently under active development.

The frontend is being developed using React Native with Expo. Backend functionality will be connected through a Spring Boot REST API, with PostgreSQL used for persistent data storage.

## 🏗️ System Architecture

```text
┌──────────────────────┐
│    Mobile Device     │
│   React Native/Expo  │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│     Spring Boot      │
│       Backend        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      PostgreSQL      │
│       Database       │
└──────────────────────┘
```

External services and APIs may also be integrated to provide functionality such as maps, navigation, campus events, and other campus-related information.

## 👥 Team

**Owl-Tech — Campus Companion**

| Team Member   | Role                        |
| ------------- | --------------------------- |
| Robert Humes  | Team Leader / Documentation |
| Kylan Fleming | Developer                   |
| Joseph Dix    | QA Tester / Documentation   |
| Aaron Arroyo  | Developer                   |

## 📚 Project Documentation

Additional project documentation will be added as development progresses.

* Software Requirements Specification (SRS)
* System Architecture
* Detailed System Design
* Testing Documentation
* Project Presentation
* Project Demonstration

## 📌 Project Status

**Status:** In Development 🚧

Current development focuses on establishing the React Native/Expo application structure, designing the user interface, and preparing the application for backend integration.

## 🎓 Academic Project

Campus Companion is being developed as a senior capstone project at Kennesaw State University.

---

**Owl-Tech — Campus Companion**
