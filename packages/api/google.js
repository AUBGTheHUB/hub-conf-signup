const {google} = require("googleapis");

     //Auth client Object
     const authClientObject = await auth.getClient();

 const appendGoogleSheet = (obj) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "hubconf-sign-up-702b654f655b.json", //the key file
        //url to spreadsheets API
        scopes: "https://www.googleapis.com/auth/spreadsheets", 
    });
    

    
     //Google sheets instance
     const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
    
    //Storage Spreadsheet ID
     const spreadsheetId = "1bb_nrUBhvkBVrZih1PyoyjeqfWrNueqYFAuV-oxwSxw";

     //write data into the google sheets
    googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: "Sheet1!A:B", //sheet name and range of cells
    valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    resource: {
        values: [[obj.fullName, obj.email]],    
    },
    });
 }

 obj = {"name": "sami", "email": "email@email.com"}
 appendGoogleSheet(obj)