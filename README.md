# SIMPLE React ToDo App *🧑🏼‍🚀**


## Software and packages used:
<hr/>

`Bussiness Logic`
<br><br>
1.pannellum-react:^1.2.4
2. React Hooks 
<br>
<br>
`Styling`
<br><br>
1.node-sass:6.0.0<br>

## Installation
<hr/>

1. Create `pannellum` folder on your computer.

2. From inside created folder, pull the repository from github:
```console
git clone https://github.com/junidevs/Virtual-Walk .
```
3. At this moment you should to install node_modules
```bash
npm install 
```
4.After that you can run project  via: `npm start`

```bash
npm start 
 
```

7.Regarding to the image I have used one of the images from the IMGUR site in jpg format
As a `"Tags"` on image I have used `"Pannellum Hotspots"` which can be attached in selected place and inform us about something or work like a  redirection or somoething like that
<br></br>

8.Functionalities
```bash 
    1. function longPress => is attached to the document element so you can press whenever you want and meny will open
```
```bash 
    1. function debounce => is attached to the above function to prevent a lot of events , insted of this she will be waiting until the last mouse event
    See : /src/helpers/helpers.js
```
<br>

9.Improvement
```bash
 From my perspective firstly we could try to add preloader until load the main image
    We can catch this event in  Pannallum component with prop  
    function onLoad={() => 
    {
        console.log("panorama loaded complete !");
        Here we can add <Preloader /> componenet which will be active only ultil panorama will be loaded
    }}
```
<br>

```bash
    Also we could add Redux to catch the state and dispatching the action regarding to moon menu but I think in this case this app is to small to implement this 
```
<<<<<<< HEAD
## Views
![Views](https://user-images.githubusercontent.com/52135894/120906685-c555f300-c65b-11eb-901a-60ef3a3d8543.png)
=======

# Thanks for reviewing my code 🥳

