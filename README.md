## Deploy the Data tier
1. Right-click and select Publish
2. Enter conection and type the DatabaseName then click to publish to the machine of the Data tier


## Deploy the Application tier
1. Open appsettings.json
3. Update your connection string to the deployed database
4. Update your CORS value for the deployed Presentation tier (You can update after deploy the Presentation tier by replace value of CORS then restart the site)
5. Deploy the code to the machine of the Application tier
## Deploy Presentation tier
1. run "npm install"
2. Open environment.prod.ts, update baseUrl to hosted address of Application tier
3. run "npm run build"
4. Go to dist folder and copy all Code
5. Deploy the code to the machine of Presentation tier