# Education Mockup App

This is a React Native app that uses tailwindcss, cocoapods, and metro bundler.

## Installation

To install the required dependencies, run the following commands in the project root:

## Install node modules

```
npm install
```

## Install project gems, including cocoapods, using bundler

```
bundle install
```

## Install iOS pods

```
npm run pod-install
```

## Running the app

To run the app on iOS or Android, you need to start the metro server, the tailwindcss dev server, and the react-native CLI. You can use the following commands in separate terminals:

### Start the metro server with cache reset

```
npm start -- --reset-cache
```

### Start the tailwindcss dev server

```
npm run dev:tailwind
```

### Run the app on iOS simulator or device

```
npm run ios
```

### Run the app on Android emulator or device

```
npm run android
```
