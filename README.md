# FotoFinder

**FotoFinder** is a React application that allows users to search for photos and view the results in a visually appealing layout. Built with Material-UI (MUI), the app provides a modern and responsive user interface with a focus on simplicity and usability.

## Technologies

- **React:** Frontend library for building user interfaces.
- **Material-UI (MUI):** UI framework for styling and layout.
- **Axios:** HTTP client for making API requests.
- **External API:** Fetches photos based on search queries.

## Challenges Faced

- Making the api access key accessible using environment variables
- In Vite
  Declartaion : VITE_REACT_APP_API_ACCESSKEY = accesskey
  Usage : const accessKey = import.meta.env.VITE_REACT_APP_API_ACCESSKEY;
