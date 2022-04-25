# Testing API calls in React with the Studio Ghibli API

## Introduction

This project uses Mock Service Worker Library (msw) to mock calls to the Studio Ghibli api

## The Brief

Display the title of the first film returned from the Studio Ghibli API: Castle in the Sky

Use msw to stub the api response, then write a test to check that the first film title has been rendered correctly

Write additional tests to check that the appropriate error message is rendered for api errors 500 and 418

## Installation

First clone this repository

In the project directory, install the dependencies using the command:

    npm install
  
In the project directory, run

    npm start
  
to run the app.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To run the tests, run:

     npm test

## Resources

React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/example-intro#full-example

Mock Service Worker Library: https://mswjs.io/

Studio Ghibli API docs: https://ghibliapi.herokuapp.com/
