# API

### Prerequisite files

* `.env`file.

```shell
ENV_VAR_1=<value>
ENV_VAR_2=<value>
```
These variables are used when setting up authentication for Nodemailer.

* `hubconf.json` file. It contains credentials for the service account for GCP Authentication.

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
