# API

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


