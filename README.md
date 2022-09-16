# Project: Work Week

## Description

This project is called Work Week. It is made to assist review of weekly activities in a construction project. 

This project is scaffolded so that you can build a React frontend and Rails
backend together, and easily deploy them to Heroku.

The app is created used a rails server and react frontend. 

## Getting Started

After cloning, to setup the rails server run:

```bash
rails s
```

and to setup the react server run:

```bash
npm start --prefix client
```

There is some code in db/seed.rb file to start. Run the migrations and seed files:

```bash
rails db:migrate db:seed
```
## Features:


## View Page:

This page allows the user to view and search the Cost Code, Activity, or Work Week tables. Select one of the three options and type in the search bar to filter.


## Upload/Review Page:

This page is where users can upload the week of activities. This takes xlsx files in a specific format to convert into Activity and Cost objects.

## Enter Quantities Page:

Users can submit completed units in this page and also see information about their production. Submitted units can be updated by making more submissions to the same cost code. After submission each code displays cost information.

## Weekly Report Page:

This page is an overview of the work from the week. It compares hours completed and units completed to determine if money was made or lost.
