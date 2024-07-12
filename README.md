The Form Application is deployed at: https://form-submission-test.netlify.app/

The Responses Received by Admin is deployed at: https://form-submission-admin.netlify.app/ 

For Admin Portal: [Email: admin4096@gmail.com, Password: admin4096]


Note: Since, these are free deployments, they might display error due to slow loading and connection with backend, so just wait for few seconds (20 - 30sec) and then refresh.

Feature List:

-   🎃 User Authentication
-   ➕ Add New Admin
-   📝 Form Submission
-   👀 Admin View

### Setup .env file (first make a folder named 'config' in 'backend' folder, in that folder make .env file)

```js
PORT = 4000
COOKIE_EXPIRE = 
FRONTEND_URL_ONE = http://localhost:5173
FRONTEND_URL_TWO = http://localhost:5174
JWT_EXPIRES = 
JWT_SECRET_KEY = 
MONGO_URI = 
```

### Run the application locally

- First 'cd' into each of the folders 'backend' , 'frontend' & 'dashboard' through terminal
```shell
cd folder/
```

and run 

```shell
npm i
```
command which installs all the required npm packages

### Start the app

- 'cd' into each of the folders 'backend' , 'frontend' & 'dashboard' through terminal
```shell
cd folder/
```

and run

```shell
npm run dev
```
