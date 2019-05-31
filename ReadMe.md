# ionic-playground

Cross-platform mobile application to test different features of the [Ionic framework](https://ionicframework.com/).

Also I'm testing publishing processes for different Application Stores using this app.

Preview in browser [Ionic Playground](https://karpolan.com/demos/ionic-playground/)

Raw web vesion is also accesible on [Ionic Playground on Netlify](https://ionic-playground.netlify.com/)

## Based on

Default Ionic template for applicaton with menu:

```
ionic start ionic-playground sidemenu
```

Angular edition of Ionic project used.

## Developer Notes

### iOS on MAC

Open _.xcworkspace_ file in **Xcode**, then go to _File -> WorkSpace Settings_, choose **Build System**: _Legacy Build System_

Command line to to run Application in iOS simulator (iPhone 6):

```
ionic cordova emulate ios --livereload --consolelogs --target="iPhone-6,com.apple.CoreSimulator.SimRuntime.iOS-12-2"
```
