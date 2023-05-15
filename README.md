## Lessons
1. Create Angular APP
    1. Create Project's folder
    2. Install @angular/cli
    3. Create App as frontend
2. Add Header
    1. Generate Componenet
    2. Add html
    3. Add CSS
3. List Product
    1. Create Product model
    2. Create data.ts
        1. Add sample product
    3. Add image to assets
    4. Create Product service
    5. Create Home Component
        1. Add ts
        2. Add html
        3. Add css
4. Search
    1. Add method to product service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add CSS
    5. Generate upload component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add CSS
5. Tags Bar
    1. Create Tag model
    2. Add sample tag to data.ts
    3. Product service
        1. Add get all tags method
        2. Add get all product by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add CSS
6. Product Page
    1. Add method to product service
    2. Generate product page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add CSS
7. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to Cart Button in Product Page
    5. Generate Cart PAge component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add CSS
8. Not Found!
    1. Generate Component
        1. Add ts
        2. Add html
        3. Add css
    2. Add to pages
        1. Home page
        2. Product page
        3. Cart Page
9. Connect to BackEnd
    1. Create backend folder
    2. npm init
    3. npm install typescirpt
    4. create tsconfig.json
    5. create .gitignore
    6. copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. intall @types
        2. add apis
    9. npm install nodemon ts-node --save-dev
    10. add urs.ts to frontend
    11. add httpclient module
    12. update product service
10. Login page
    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add html
            1. Import Reactive Forms Module
        4. Add css
    2. Add login Api
        1. Use json
        2. Add jsonwebtocken
        3. Test using postman
    3. Generate User Service
        1. Generate USer Model
        2. Add user subject
        3. Add login method
            1. Add user urls
            2. Generate IUserLogin interface
            3. Add ngx-toaster
                1. Import module
                2. Import BrowserAnimationModule
                3. Add styles in angular.json
            4. Add to header
        4. Add local storage methods
        5. Add logout method
            1. Add to header
11. Connect login api to MongoDB Atlas
    1. Moving apis to routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. express-async-handler
    5. Connect to MongoDB Atlas
    6. User MongoDB instead of data.ts in apis
12. Register User
    1. Add register api
    2. Add register service method
    3. Add register link
    4. Add resgiter component
13. Loading
    1. Add image
    2. Add component
    3. Add service
    4. Add interseptor
14. Checkout page
    1. Create order model
    2. Create checkout page component
        1. Add to router
    3. Add user to user service
    4. Add cart to cart service
    5. Create order item list component