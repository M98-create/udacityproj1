This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles 

## Installation
you should be  sure that Node and npm are installed from the terminal.
```
node -v
npm -v
```
`
1. Install npm
```
npm install
```
2. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

3. Configure environment variables using dotenv package
    
   ```
    1. Create a new `.env` file in the root of your project
    2. Fill the `.env` file with your API key like this:
   ```
   Key=**************************
   ```
4. finally Start the project


- cd into your new folder and run in prod mode

- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8081`


5. Open browser at http://localhost:8080/
