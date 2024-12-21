Blog Project

A professional blogging platform designed for seamless content creation and sharing. This project provides an interactive user experience with authentication, user roles, and rich text editing.

Live Demo

Check out the live version of the application:blog-project-seven-gold.vercel.app

Features

1.User Authentication: Secure login and registration system.

2.Role-Based Access Control: Admin and user roles with different permissions.

3.Create and Manage Posts: Full-featured text editor for creating, updating, and managing blog posts.

4.Responsive Design: Mobile-friendly and optimized for all devices.

5.Comment System: Engage with readers through a built-in commenting feature.

6.Search and Filter: Easily search and filter blog posts.

7.SEO Optimization: Built-in SEO-friendly structure to boost visibility.




Technologies Used

Frontend:

1.React.js

2.Next.js

3.Tailwind CSS

Backend:

1.Node.js

2.Express.js

3.MongoDB (Mongoose ORM)

Other Tools:

1.JWT for authentication

2.bcrypt for password hashing

3.Cloudinary for image hosting

.........Setup Instructions.....

Prerequisites

Node.js (>= 14.x)

MongoDB Database

Cloudinary Account (optional for image hosting)


Installation

1.Clone the Repository:

git clone https://github.com/your-repo/blog-project.git
cd blog-project

2.Install Dependencies:
npm install

3.Configure Environment Variables:
Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4.Run the Application:

npm run dev

The application will be available at http://localhost:5000

Folder Structure..........

├── src
│   ├── app
│   │   ├── module
│   │   │   ├── auth
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.routes.ts
│   │   │   ├── posts
│   │   │   │   └── post.module.ts
│   │   │   └── ...
│   ├── config
│   ├── middleware
│   ├── utils
│   └── ...
├── public
├── views
├── package.json
└── README.md


Contribution Guidelines

We welcome contributions! To contribute:

1.Fork the repository.

2.Create a feature branch:
git checkout -b feature-name

3.Commit your changes:
git commit -m "Add a brief description of your feature"

4.Push to the branch:
git push origin feature-name

Contact....

For questions or feedback, contact us at
github:https://github.com/mdnaeemmiah