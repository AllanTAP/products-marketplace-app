# Marketplace React Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Web3.js](https://img.shields.io/badge/Web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

Next Marketplace App. This project demonstrates the integration of a React.js frontend with a backend API to manage a list of marketplace items, and showcases blockchain integration using Web3.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction

This application is designed to fetch and display a list of products from a backend API and provide a form to add new items to the marketplace. Additionally, it integrates with a blockchain (Ethereum testnet) to display the current blockchain network status and the latest block number.

## Features

- Fetch and display products from the backend API.
- Add new items to the marketplace through a form.
- Display the current blockchain network status (connected/disconnected).
- Show the latest Ethereum block number with regular updates.

## Technologies Used

- [React.js](https://reactjs.org/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Express.js](https://expressjs.com/)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**

   ```sh
   git clone https://github.com/AllanTAP/products-marketplace-app.git
   cd products-marketplace-app
   ```

2. **Install dependencies**

   ```sh
   yarn
   ```

3. **Set up the backend API**

   Ensure you have the backend API running on `http://localhost:3001`.

4. **Start the development server**

   ```sh
   yarn dev
   ```

## Usage

Once the development server is running, you can access the application at `http://localhost:3000`. The main functionalities include:

- **Viewing Products:** The products fetched from the backend API will be displayed on the main page.
- **Adding a Product:** Click the "+" button to display the form, fill in the details, and submit to add a new item to the marketplace.
- **Blockchain Status:** The current connection status to the blockchain and the latest block number are displayed.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── AddProduct.tsx
│   │   ├── ProductsList.tsx
│   │   ├── Web3Connection.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── types
│   │   └── product.ts
│   ├── lib
│   │   └── web3.ts
│   └── ...
├── README.md
├── package.json
└── ...
```

---

For any additional questions or feedback, please contact [your email](allan.depontes@gmail.com).

---

Made by [AllanTAP](https://github.com/AllanTAP)
