# API

### Prerequisite files
1. `.env`file. It contains two variables `HUB_MAIL_USERNAME` and `HUB_MAIL_PASSWORD` used for authentication when setting up Nodemailer in the `email.js` file.

2. `hubconf.json` file. It contains credentials for the service account for GCP Authentication.

If you need the credentials contained in the files above, please contact @asynchroza

### Development
Start app by running `npm run dev`

### E2E Overview

1. A user sign ups by entering their data on the frontend
2. POST request is being made to `/api/signup`:
```
{
"fullName": <>,
"email": <>,
"school": <>
}
```
3. Data is appended to a Google Sheet document
4. On success, a personalized email is being sent back to the user