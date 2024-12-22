personal-trainer-website
├── client/                          # React Frontend
│   ├── public/                      # Public Assets
│   │   ├── index.html               # Main HTML file
│   │   ├── favicon.ico              # Favicon
│   │   └── assets/                  # Static files (images, videos, etc.)
│   │       ├── images/             
│   │       └── videos/
│   ├── src/                         # Source files
│   │   ├── components/              # Reusable components
│   │   │   ├── common/              # Common components (Buttons, Inputs, etc.)
│   │   │   ├── Home/                # Components for the Home page
│   │   │   ├── Feed/                # Components for the Feed page
│   │   │   ├── Pricing/             # Components for Plans & Pricing
│   │   │   ├── Account/             # Components for User Account
│   │   │   └── Admin/               # Components for Admin Dashboard
│   │   ├── pages/                   # Main pages of the app
│   │   │   ├── HomePage.js          # Homepage
│   │   │   ├── FeedPage.js          # Feed Page
│   │   │   ├── PricingPage.js       # Pricing & Plans
│   │   │   ├── AccountPage.js       # User Account
│   │   │   ├── ContactPage.js       # Contact Us
│   │   │   └── AdminPage.js         # Admin Dashboard
│   │   ├── App.js                   # Main App Component
│   │   ├── index.js                 # Entry Point
│   │   ├── styles/                  # Global & Component Styles
│   │   │   ├── global.css           
│   │   │   └── theme.css
│   │   ├── utils/                   # Utility Functions
│   │   └── services/                # API Calls
│   │       └── api.js
│   └── package.json                 # Frontend Dependencies
├── server/                          # Node.js Backend
│   ├── config/                      # Configurations
│   │   ├── db.js                    # Database Connection
│   │   ├── jwtConfig.js             # JWT Config
│   │   └── stripeConfig.js          # Payment Config
│   ├── controllers/                 # Route Handlers
│   │   ├── authController.js        # User Authentication
│   │   ├── userController.js        # User-related logic
│   │   ├── classController.js       # Class-related logic
│   │   └── adminController.js       # Admin-related logic
│   ├── models/                      # Mongoose Models
│   │   ├── User.js                  # User Model
│   │   ├── Subscription.js          # Subscription Model
│   │   ├── Class.js                 # Class Model
│   │   ├── Post.js                  # Feed Post Model
│   │   └── Payment.js               # Payment Model
│   ├── routes/                      # API Routes
│   │   ├── authRoutes.js            # Authentication Routes
│   │   ├── userRoutes.js            # User Routes
│   │   ├── classRoutes.js           # Class Routes
│   │   └── adminRoutes.js           # Admin Routes
│   ├── middlewares/                 # Middleware Functions
│   │   ├── authMiddleware.js        # JWT Authentication
│   │   └── errorMiddleware.js       # Error Handling
│   ├── utils/                       # Utility Functions
│   │   ├── logger.js                # Logging
│   │   └── email.js                 # Email Notifications
│   ├── server.js                    # Main Server File
│   └── package.json                 # Backend Dependencies
├── README.md                        # Project Documentation
├── .env                             # Environment Variables
├── .gitignore                       # Git Ignore File
└── package.json                     # Project Dependencies

