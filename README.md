# OJOS

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Planning & Design](#planning-design)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Next Steps](#next-steps)
- [Contributors](#contributors)
- [Installations](#installation)

## About 
- Worked closely with client think up design and functionality needed
- Used figma to gain feedback on designs through comments

## Features
- Used shopify and sanity for backend and headless CMS so that easier management for client and ability to scale if need be

## Tech Stack
- HTML + CSS
- Javascript
- Next.js/React
- Bootstrap
- Shopify JS Buy SDK
- Sanity.io 
- Instagram API
- Mailchimp & EmailJS

## Planning & Design
- [Figma Wireframes & Prototype](https://www.figma.com/file/Tcwbu0SNd8V8mFCPEImZLe/v1)

## Screenshots
<img src="" caption=""/>
<img src="" caption=""/>
<img src="" caption=""/>
<img src="" caption=""/>
<img src="" caption=""/>
<img src="" caption=""/>


## Getting Started 
Click [here]()


## Next Steps
- Connect Sanity and Shopify to sync product data with webhooks/lambda functions in order to provide seamless management of products for client (not sure how to do this, but will find out)
- Function to see if an item is already in the cart, if so disable button and show message saying the item is already in your cart (since there is only one quantity) - this should be automatically disabled, not sure why the SDK allows you to continue adding items when quantity = 1
- Add ability to view how many things are in the cart for better UX (right now just have a toast)
- Search page
- Newsletter
- Contact + custom orders form
- Reorganize CSS (possibly transfer to styled components) + understand better project structure for Next.js + organization
- Remove all hardcoded info and transfer to Sanity CMS to allow client flexibility of updating content 
- Add better accessibility, only on certain elements now
- Add ability to filter on pages - Newest etc. Price low-high 
- Ability to display multiple photos of details page in a carousel 
