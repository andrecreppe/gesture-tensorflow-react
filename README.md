# gesture-tensorflow-react

Real Time Sign Language Detection App with ReactJS and TensorflowJS. [Try it!](https://tensorflow-recognition.web.app/)

![Execution example](https://github.com/andrecreppe/gesture-tensorflow-react/blob/main/images/example.png?raw=true)

## 📦 Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In order to run it, is necessary to install all of the used dependencies/packages using npm:

```bash
$ npm install
```

No ordinary installation is also required.

## 📐 Developing

In order to run the application in development mode, start the application using:

```bash
$ npm start
```

Once compiled, it should open a new tab at [http://localhost:3000](http://localhost:3000) in the default browser. This page will reload if you edit the code and also warn about any lint errors in the console.

### Recognition graph model 

This application uses a *model.json* file that represents a exported trained model hosted in a online serve.

All the export information necessary to upload and make this file available can be found in the [gesture-tensorflow](https://github.com/andrecreppe/gesture-tensorflow) project repository.

If you have your own model, simply change the `modelURL` variable to your needs inside `src/App.js` file.

## 🚀 Building

Once the application is ready, you can make a build to distribuite it using this command:

```bash
$ npm run build
```

It Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🔥 Deploy with Firebase Hosting

This project was deployed using Firebase Hosting. To do that you first need to have installed the [Firebase CLI](https://firebase.google.com/docs/cli) to run the Firebase commands. You can do that using:

```bash
$ npm install -g firebase-tools
```

After the installation, you need to sign in via cmd using your Firebase account credentials:

```bash
$ firebase login
```

Now is the time to initialize the CLI in your project. In the root folder, initiate the firebase:

```bash
$ firebase init
```

Doing so, now you will need to answer a few questions about your deploy configuration. For this project (React) was used:
- `Firebase CLI features` > Hosting
- `Database rules file` > (Just press enter and accept it)
- `Public directory` > build
- `Configure as single-page app` > Yes
- `Overwrite index.html` > No

After configuring your app, to upload into the Firebase servers just run the following:

```bash
$ firebase deploy
``` 

If no errors were shown, your website is now online and you can check the link shown by the cmd. For updates in this project, just rebuild the application and run the deploy command.

## 📚 Source

This code was based from the follwing **Nicholas Renotte** tutorial on YouTube:
- [Building a Real Time Sign Language Detection App with React.JS and Tensorflow.JS | Deep Learning](https://youtu.be/ZTSRZt04JkY)
