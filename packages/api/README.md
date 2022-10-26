# API

### Prerequisite files

* `.env`file:

```shell
ENV_VAR_1=<value>
ENV_VAR_2=<value>
```

These variables are needed for sending emails through Nodemailer.

* `hubconf.json` - GCP service account.

If you need the credentials contained in the files above, please contact @asynchroza

### Development
Start the app by running `npm run dev` (port 8080 for local development)

### E2E Overview

1. A user signs up by entering their data on the frontend
2. POST request is being made to `/api/signup`:
```
{
"fullName": <>,
"email": <>,
"school": <>
}
```
3. On success, passed data is appended to a Google Sheet document and a personalized email is being sent back to the user.
