# Paradise Nursery Shopping Cart
## Project Overview
Paradise Nursery is an e-commerce React application focused on plants. It allows users to browse plant products, add them to a shopping cart, and manage their cart with dynamic, interactive features.
---
# Features
 - Landing Page: A welcoming page with a button linking to the product listing.
 - Navigation Bar: Links to Landing, Product Listing, and Shopping Cart pages. The cart icon dynamically displays the number of items.
 - Product Listing: Displays plants in categorized sections (e.g., Aromatic Plants, Medicinal Plants). Each plant card shows an image, name, description, cost, and an Add to Cart button.
 - Shopping Cart: Shows the selected plants with thumbnail, unit cost, total cost per plant type, and buttons to increase, decrease quantity or delete items.
 - Cart Controls: Continue Shopping and Checkout buttons for user convenience.
 - Dynamic Updates: Quantity changes update the total cost and cart icon in real-time.
---
# Technologies Used
* React (Function components)
* React Hooks (useState, useEffect)
* Redux (Actions, Reducers, Store)
  - Actions: Define what changes should happen (e.g., adding or removing items from the cart).
  - Reducers: Specify how the state changes in response to actions.
  - Store: Holds the entire application state and allows components to access or update it.
* JavaScript ES6+
*  CSS for styling

---

# Implementation Details
- Components are composed and nested to create a modular UI.
- State management is handled via React Hooks at the component level and Redux globally.
- Data is dynamically rendered by mapping over arrays of plant objects.
- User events such as adding/removing items from the cart trigger Redux actions.
- The application demonstrates dynamic UI updates based on state changes.
---
#  Started
- Clone the repository.
- Run npm install to install dependencies.
- Run npm start to launch the application.
- Explore products, add items to your cart, and enjoy the interactive shopping experience!
