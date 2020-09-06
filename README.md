# OJOS
![https://vercel.com](https://res.cloudinary.com/anuraghazra/image/upload/v1597827714/powered-by-vercel_1_ug4uro.svg)

### Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design Process](#design-process)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Learning Outcomes](#learning-outcomes)
- [Next Steps](#next-steps)

### About 
OJOS is an eCommerce project created for a small Toronto-based business that sells handmade one of a kind pieces made from deadstock materials. Supporting others creative visions and helping them make them reality is what being a developer is about to me and building things that help others make their ideas real. As one of the first real projects it could have not embodied my values and interests more especially as a lover of fashion and supporter of sustainability and a deep respect for small business owners with unique visions. 

> OJOS is currently preparing for product drops and public release, current content is still placeholder 

This was my first eCommerce project and while it may not be perfect, I learned a lot, took on many challenges  and will continue to improve it. 

<!--- I think being able to give these individuals the ability to showcase their unique ideas is what propels our society towards something great.--->   

- Worked closely with client think up design and functionality needed
- Used figma to gain feedback on designs through comments

### Learning Outcomes
During the process of desiging and building this project, I learned a lot. Specifically...
  - Collaborating on design process through wireframing with Figma
  - Using React context hooks in order to share state among components rather than prop drilling
  - Using Next.js for server side rendering and built in API routes 
  - Understanding the purpose and use cases for headless CMS softwares 

### Features
- The owner is able to update content/products from Sanity and Shopify admin dashboard for easier management and giving more independence to the owner, also gives the ability to scale if need be 
- Customers can view products based on categories, add them to a cart and checkout with Shopify
- The cart is stored in local storage for better UX 

### Tech Stack
- HTML + CSS
- Javascript
- Next.js/React
- Bootstrap
- Shopify JS Buy SDK
- Sanity.io 
- Instagram API
- Mailchimp & EmailJS

### Design Process
- [Figma Wireframes & Prototype](https://www.figma.com/file/Tcwbu0SNd8V8mFCPEImZLe/v1)
  - The design process included ongoing collaboration with the owner, it began with looking at other ecommerce sites she liked based on design and functionality
  - Based on specifications and inspiration, I put together an initial wireframe on Figma, shared it with the owner and feedback through comments were taken into consideration in a second iteration
  - Finally I put together a minimal interative prototype to show the owner how the flow of the site would be

### Screenshots
<img src="" caption=""/>

### Getting Started 
Click [here](https://ojos.vercel.app) for a demo - when OJOS goes live you can find it [here]()

### Next Steps
- Connect Sanity and Shopify to sync product data with webhooks in order to provide seamless management of products for client (not sure how to do this, but will find out)
- Function to see if an item is already in the cart, if so disable button and show message saying the item is already in your cart (since there is only a quantity of one per product)
- Add ability to view how many things are in the cart for better UX (right now just have a toast everytime a visitor adds an item to their cart)
- ~~Search page~~
- Add ability to click outside of the dropdown to trigger dropdown close for better UX 
- Newsletter with Mailchimp
- Contact + custom orders form with EmailJS
- Reorganize CSS (possibly transfer to styled components) + understand better project structure for Next.js + organization
- Remove all hardcoded info and transfer to Sanity CMS to allow client flexibility of updating content (Policy and About pages)
- Add better accessibility, only on certain elements now
- Add ability to filter on pages - Newest etc. Price low-high 
- Ability to display multiple photos of details page in a carousel 
