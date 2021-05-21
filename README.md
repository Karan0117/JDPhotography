# Readme for JDPhotography

# John Doe Photography - Event Manager and more

This application is a portfolio website for an event management firm that specializes in various services like photography, videography, music bands, choreographers and more. It uses an API from [Unsplash][unsplash]
It consists of 5 main pages -

1. Home
2. Portfolio (for photography)
3. Film (for videography)
4. Services
5. Contact

Demo - 🖥
![demo][demodesktop]

And, this is also **responsive**.📲
Demo (mobile view) -
![mobile view][demomobile]

## Prerequisites

### Getting Started

1. Fork this repository
2. Clone the repository

### Installing Node.js

You need a package manager `npm` to install libraries and run the React application. You can download it by installing [Node.js][nodejs] on your machine.

### Installing the Libraries

I have used a couple of Javascript libraries in this project to make my work smoother and easier. Here is a list of all the libraries used -

- styled-components
- framer-motion
- axios
- react-router-dom
- react-intersection-observer
- redux
- react-redux
- redux-thunk

All the libraries and their versions are present in the file package.json in the root folder

```
package.json
```

To automatically install all the libraries, run the following command at the root location in your terminal -

```terminal
npm install
```

This application will need an API_KEY🔑 from [Unsplash][unsplash] which could be generated [here][developer].

1. Visit the above link and click on the button **Register as a developer**.
2. Create an account and fill in some details about your application.
3. After registering your application, Unsplash will generate **Keys** for you. _(**Note:** The keys generated must reamin confidential.)_
4. Two keys will be generated here - Access Key and Secret Key. We will be using the **Access Key** in the project.
5. Navigate to the file - api.js

```
/src
  api.js
```

6. On line 4, enter your **Access Key** insdie the double quotes -

```javascript
const API_KEY = "your Access_Key";
```

## Execute

To run the React application on your machine, follow these steps -

1. Open Terminal/Command Prompt.
2. Navigate to the directory where your project is stored.
3. Run the following command

```terminal
npm start
```

## Changes and Modifications

### Portfolio Gallery

I have set the portfolio cards to just 8 options (_Mountains, Night Sky, Weddings, Foods, Lifestyle, Monochrome, Candids and Beaches_). You can add more if you want. To add/edit the portfolio genres, follow these steps -

1. Navigate ot the `setPortfolioReducer.js` file.

```
/src
  /reducers
    setPortfolioReducer.js
```

2.  I have set a variable `initState` which holds an array of objects with two properties, `name` and `img`.
3.  Edit the `name` to anything of your choice (**\*Note**: these names are used in the API calls. Before you decide a name for your genre, try searching for images by putting that name in the search bar on [Unsplash][unsplash]. If the image results are desirable, use that name.\*)
4.  The `img` property has been set static and have been imported from the media folder.

```
/src
  /media
    /images
      /portfolio
```

You can add/replace images to that folder as per your desire. (**\*Note**: Make sure to use image files with smaller sizes or pass them through an image compressor. Larger image files will slow down the load speeds.\*)

### FAQ section

The answers to the FAQs are filled with Lorem Ipsum values. Feel free to add your own questions and answers to them.

### SVGs

I have used various SVGs throughout the project. You can replaces those SVGs with your own images or SVGs. The SVGs I used to can be found at [unDraw.co](https://undraw.co/illustrations).

## Useful Links

Here are the link that might come in handy to understand and modify the application according to your needs

1. Animations - [Framer Motion](https://www.framer.com/motion/)
2. Styling - [Styled Components](https://styled-components.com)

---

Feel free to customize this application and make it adjust to your needs. 🙌

For collaborations, contact me [here][email].

[unsplash]: https://unsplash.com
[developer]: https://unsplash.com/developers
[nodejs]: https://nodejs.org/en/
[demodesktop]: http://g.recordit.co/AXsSYGHiLH.gif
[demomobile]: http://g.recordit.co/OlmdNMQcNU.gif
[email]: mailto:karan.010896@gmail.com
