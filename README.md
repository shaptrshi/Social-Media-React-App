## Responsive social media platform  

Welcome to the README for the Social Media application using MERN stack!

This application is a simple social media platform that allows users to create profiles, share posts, and connect with each other. It is built using the MERN stack, which includes MongoDB, Express, React, and Node.js.

## Some information about MERN stack :

MongoDB is a NoSQL database that allows for flexible data storage and retrieval. It is a document-oriented database that uses JSON-like documents with schema. 

Express is a web application framework for Node.js that simplifies the creation of server-side applications. It provides a set of features for web and mobile applications such as routing, middleware, and templating.

React is a JavaScript library for building user interfaces. It allows for building reusable UI components and makes it easy to update and render components efficiently.

Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to use JavaScript for server-side scripting, enabling the use of a single language for both client-side and server-side development.

## In social media frontend part:

1. ## Formik + Yup

FORMIK is an open-source library for building forms in React. It provides a set of reusable components and hooks that make it easy to manage forms state and handle form submission.

Yup, on the other hand, is a JavaScript schema validation library. It allows you to define a schema for your data and then validate that data against that schema. Yup is commonly used in combination with FORMIK to provide validation for the form fields.

Together, FORMIK and Yup can help you build robust, validated forms in React. FROMIK provides the infrastructure for managing form state and handling form submission, while Yup provides the validation schema and tools for validating the form data.

To use Yup with FORMIK, you can define a validation schema using the Yup API and then use the ‘validate’ prop of the FORMIK ‘Formik’ components to validate the form data.

2. ## Redux Toolkit

Redux Toolkit is a set of opinionated tools and utilities built on top of the Redux library, which provides a more efficient and convenient way to write Redux code. It includes several packages, such as `@reduxjs/toolkit`, `@reduxjs/toolkit-rtk-query`,and `@reduxjs/toolkit-immer` , which simplify common Redux use cases and improve development experience.

One of the main benefits of using Redux Toolkit is that it reduces the amount of boilerplate code needed to set up a Redux store and manage state. It provides a standardized way to define reducers, actions, and selectors, and allows developers to write cleaner and more concise code.

In addition, Redux Toolkit includes several built-in features, such as a `configureStore()` function that automatically sets up the store with commonly used middleware, and a `createSlice()` function that generates Redux slice reducers with less code. The `createAsyncThunk()` function is also included, which makes it easier to handle asynchronous actions in Redux.

3. ## React 

ReactJS is a popular JavaScript library used for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies. ReactJS allows developers to build reusable UI components and manage their state, making it easier to build complex and interactive applications.

ReactJS uses a declarative approach to programming, which means that developers describe the desired outcome of their code, rather than the step-by-step instructions for how to achieve that outcome. This makes it easier to reason about the code and reduces the chances of errors

One of the key features of ReactJS is its ability to render components on both the client and server side, which improves performance and makes it easier to build scalable applications. ReactJS also integrates well with other libraries and frameworks, such as Redux, GraphQL, and Next.js, making it a versatile tool for building web applications.


## In social media backend part: 

4. ## NodeJs

Node.js is a popular JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, on the server-side, and create scalable, fast, and efficient network applications. Node.js provides an event-driven, non-blocking I/O model, which makes it suitable for building real-time applications that can handle a large number of concurrent connections. It has a rich ecosystem of libraries and modules that can be easily installed through its package manager, npm. Node.js is cross-platform and can be run on various operating systems, including Windows, Linux, and macOS.

5. ## ExpressJs

Express.js is a popular and widely-used web framework for Node.js. It provides a set of features and tools for building web applications and APIs quickly and easily. Express.js is minimal and unopinionated, allowing developers to structure their applications in any way they see fit. It provides a robust set of HTTP utility methods and middleware for handling requests and responses, as well as features for templating engines, routing, error handling, and more. Express.js also has a large and active community of developers who contribute to its development, create plugins and middleware, and share their knowledge and experience through online resources. Overall, Express.js is a powerful and flexible framework that makes it easy to create scalable and robust web applications using Node.js.

6. ## Mongoose

Mongoose is a popular object modeling tool for Node.js that provides a way to work with MongoDB databases. It provides a schema-based solution for modeling and mapping documents from MongoDB to JavaScript objects, allowing developers to interact with their data in a more structured and consistent manner. Mongoose supports advanced querying, validation, middleware, and other features that simplify the process of working with MongoDB databases. It also integrates with Express.js, allowing developers to easily create RESTful APIs that interact with MongoDB. Mongoose has a large and active community of developers who contribute to its development, create plugins and middleware, and share their knowledge and experience through online resources. Overall, Mongoose is a powerful and flexible tool for working with MongoDB in Node.js applications.

7. ## JSON Webtoken (JWT)
 
JSON Web Token (JWT) is a standard used for securely transmitting information between parties in a JSON format. JWTs are commonly used for authentication and authorization purposes in web applications. 

A JWT consists of three parts: a header, a payload, and a signature. The header contains metadata about the token, such as its type and the algorithm used to sign it. The payload contains the actual data being transmitted, such as user information or authorization claims. The signature is used to verify the integrity of the token and ensure that it has not been tampered with.

JWTs are often used in web applications to provide a stateless authentication mechanism. When a user logs in, the server generates a JWT and sends it to the client, which stores it and sends it back to the server with subsequent requests. The server can then verify the JWT to ensure that the user is authenticated and has the necessary permissions to access the requested resource. 

JWTs are widely supported by many programming languages and frameworks, and there are many libraries available for generating and verifying JWTs.

8. ## Nodejs + Multer

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser on the server-side. 

Multer is a middleware for handling `multipart/form-data` (e.g. files, images, etc.) used in HTTP requests. It simplifies the process of handling file uploads in Node.js by providing an easy-to-use API and a set of options for customizing the behavior of file handling.

When used together, Node.js and Multer allow developers to easily create server-side applications that can handle file uploads. Node.js provides a robust runtime environment, while Multer simplifies the process of handling multipart/form-data in HTTP requests. This can be useful in a variety of applications, such as social media sites, content management systems, or any other application that requires file uploads.

## Installation

To get started, follow these steps:

The MERN stack stands for MongoDB, Express.js, React.js, and Node.js, and is a popular full-stack web development framework for building dynamic and scalable web applications. Formik, Yup, Multer, and JWT are additional libraries that can be used with the MERN stack for form handling, validation, file upload, and authentication respectively. Here are the installation steps for each:

1. Install MongoDB: 
   - Download and install MongoDB Community Server from the official website.
   - Follow the installation instructions for your operating system.
   
2. Install Node.js:
   - Download and install Node.js from the official website.
   - Follow the installation instructions for your operating system.

3. Create a new React.js project:
   - Open a terminal window and run the following command:
     ```
     "npx create-react-app my-app"
     ```
   - Replace `my-app` with the name of your project.

4. Install Express.js and other required packages:
   - In the terminal window, navigate to the root directory of your project.
   - Run the following command to install Express.js and other required packages:
     ```
     "npm install express cors body-parser mongoose"
     ```

5. Install Formik and Yup:
   - In the terminal window, navigate to the root directory of your project.
   - Run the following command to install Formik and Yup:
     ```
     "npm install formik yup"
     ```

6. Install Multer:
   - In the terminal window, navigate to the root directory of your project.
   - Run the following command to install Multer:
     ```
     "npm install multer"
     ```

7. Install JWT:
   - In the terminal window, navigate to the root directory of your project.
   - Run the following command to install JWT:
     ```
     "npm install jsonwebtoken"
     ```

Once you have completed these steps, you will have a basic MERN stack project set up with the Formik, Yup, Multer, and JWT libraries installed and ready to use. You can start building your web application by adding components, routes, and server-side functionality as needed.

## Configuration

Before running the application, you will need to configure some environment variables. Create a `.env` file in the root directory and add the following:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

Replace `<your-mongodb-uri>` with the URI for your MongoDB database, and `<your-jwt-secret>` with a secret key for JSON Web Tokens.

## Running the Application

To run the application, follow these steps:

1. In the root directory, run `npm start` to start the server.
2. In another terminal window, navigate to the client directory using `cd client`.
3. Run `npm start` to start the client.
4. Open your browser and navigate to `http://localhost:3000`.

## Features

This application includes the following features:

- User authentication and authorization using JSON Web Tokens
- User profile creation and editing
- Ability to create, view, edit, and delete posts
- Ability to like and comment on posts
- Ability to view other users' profiles and posts
- Real-time updates using web sockets

## Credits

This application was created by My team [Satyam Jha, Shaptrshi Kaushal, Vedika Mishra, Kriti Omar, Anubhav Gupta, Medhavi Mishra].

THANK YOU :-)