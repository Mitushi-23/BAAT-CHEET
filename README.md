# BAATचीत - A Chat Application

## Overview
BAATचीत is a cross-platform chat application built using React Native for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. The application provides a seamless chatting experience with features such as text messaging, emojis, and image sharing. It also includes a home page, chat page, and a friend request page for a comprehensive social experience.

## Download and Install the App
   - [Install BAATचीत](https://expo.dev//accounts/mitushi_23/projects/BAAT-CHEET/builds/0c71d58d-103a-42dd-83a0-e74a7cf96a62)

## Tech Stack
- **Frontend:**
  - React Native

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

- **Authentication:**
  - Jwt authentication
  - Bcrypt for password hashing
    
- **Image Upload:**
  - Cloudinary

## Features
- **Home Page:**
  - Displays a list of all users.
  - Allows logged-in users to send friend requests.

- **Chat Page:**
  - Displays list of all friends with the last message.
  - Enables users to chat with friends via text, emojis, and images.

- **Request Received Page:**
  - Displays friend requests received by the user.
  - Provides the option to accept friend requests.

## Screenshots
- **Home Page**
  
  ![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/91d0b723-93b6-4168-ba9f-ee006f6f7a82)
  
- **Login and Register Page**
  
![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/a86126e4-dc23-4fc0-a00a-b17324e8f5dc)
![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/c5095a72-5c67-45b2-a032-d02bae594cdd)

- **Friend Request Page**
  
  ![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/652abe56-7e5a-4ee2-9354-40dc5ad345a9)

- **Chat Screen**

  ![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/db1dadfc-3a3a-4e1d-8a5f-0c027b74dd46)
  ![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/43292370-c4ca-4967-821e-28b8f9a8de36)

- **Profile Page**

![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/ca1cd86a-28a9-4dec-aad6-f2de13374c0d)
![image](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/9ff68dbb-d0ae-416a-913e-6b403420c5dd)

## App Icon
The app comes with a custom icon designed to enhance the overall user experience. 

![icon](https://github.com/Mitushi-23/BAAT-CHEET/assets/83106116/850997c4-67df-4123-965b-b4fbbf56c514)



## Required Environment Variables

VARIABLE | Sample value
---- | ---
JWT_KEY  | sample_key
MONGO_URL  | mongodb://localhost/Shoppieshop
PORT | 8080
CLOUD_NAME | your_cloudinary_cloud_name
API_KEY | your_cloudinary_api_key
API_SECRET_KEY | your_cloudinary_api_secret_key

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Mitushi-23/BAAT-CHEET.git
   ```
2. Install dependencies:
   ```bash
    npm i
   ```
 3. Run backend:
    ```bash
    cd api/
    npm start
    ```

4. Run frontend:
   ```bash
   expo start
   ```


