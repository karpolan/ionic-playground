# ionic-playground
Cross-platform mobile application to test different features of the [Ionic framework](https://ionicframework.com/).

Also I'm testing publishing processes for differt Application Stores using this app. 

## Based on
Default Ionic template for applicaton with menu: 
```
ionic start ionic-playground sidemenu
```
Angular edition of Ionic project used.


## Developer Notes

### iOS on MAC 

Open *.xcworkspace* file in **Xcode**, then go to *File -> WorkSpace Settings*, choose **Build System**: *Legacy Build System*

Command line to to run Application in iOS simulator (iPhone 6):
```
ionic cordova emulate ios --livereload --consolelogs --target="iPhone-6,com.apple.CoreSimulator.SimRuntime.iOS-12-2"
```