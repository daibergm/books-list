# Books List

## Introduction

This is a basic books list app using ReactNative and TypeScript

## Requirements

  - Git
  - Node Lts
  - Yarn or Npm
  - [Setting up your environment](https://reactnative.dev/docs/environment-setup)

## Installation

  - Clone the project:
    ```
    git clone https://github.com/daibergm/books-list.git
    ```
  - Move to the project dir:
    ```
    cd books-list
    ```
  - Install dependencies:
    ```
    yarn
    # or
    npm i
    ```

### Android

  - Clean project:
    ```
    yarn clean:android
    # or
    npm run clean:android
    ```
  - Start metro:
    ```
    yarn start
    # or
    npm run start
    ```
  - Connect your device or use an android emulator
  - Build debug:
    ```
    yarn android
    # or
    npm run android
    ```

### IOS

  - Clean project:
    ```
    yarn clean:ios
    # or
    npm run clean:ios
    ```
  - Start metro:
    ```
    yarn start
    # or
    npm run start
    ```
  - Connect your device or use a IOS simulator
  - Build debug(by default this command build the app to the iPhone X, you can change that in the package.json):
    ```
    yarn ios
    # or
    npm run ios
    ```

## Commands

  - To create a release apk:
    ```
    yarn android-release
    # or
    npm run android-release
    ```
  - To check lint errors:
    ```
    yarn lint
    # or
    npm run lint
    ```
  - To run tests:
    ```
    yarn test
    # or
    npm run test
    ```
  - To check coverage:
    ```
    yarn coverage
    # or
    npm run coverage
    ```
  - To start metro without cache:
    ```
    yarn start-clean
    # or
    npm run start-clean
    ```