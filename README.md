# Project: Work Week

## Description

This project is called Work Week. It is made to assist review of weekly activities in a construction project. 

The app is created used a rails server and react frontend.

See this app deployed through Render: https://hard-hat-manager.onrender.com/

## Getting Started

After cloning, cd into the phase-5-project folder. 

There is some code in db/seed.rb file to start. Run the migrations and seed files to set up database:

```bash
rails db:migrate db:seed
```

Install ruby and javascript dependencies

```bash
bundle install
npm install --prefix client
```
Then, to setup the rails server run:

```bash
rails s
```
and to setup the react server run:

```bash
npm start --prefix client
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
