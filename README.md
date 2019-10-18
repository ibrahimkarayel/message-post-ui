# MessagePostUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.



## Pre Requisites

Make sure your api is working . check env files

`export const environment = {
   baseUrl : 'http://localhost:8080/api/', 
   ..
  }
`
also update firebase apiKey and other details
  
    firebase: {
      apiKey: 'yourKey',
      authDomain: 'your-app-name.firebaseapp.com',
      databaseURL: 'https://your-app-name.firebaseio.com',
      projectId: 'your-app-name',
      storageBucket: 'your-app-name.appspot.com',
      messagingSenderId: 'id'
    }
    
#Docker
docker build -t message-post .
docker run -p 80:80 -p 443:443 -it message-post


#### Watch Courses
[![course_video](https://youtu.be/8FBsvpHUsxA)](https://youtu.be/8FBsvpHUsxA)
