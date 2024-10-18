This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Setting up the API
This project is using an API from Together AI. In order to run it you need to create an account at https://api.together.xyz/signin. You can find your API key in your profile settings.

Create the following directory in your project:
```bash
/src/app/secrets
```

Inside the directory create a file called 'api_key.ts' with the following content:
```bash
const apiKey =
  'YOUR_API_KEY';

export default apiKey;

```

### Installing the dependencies
```bash
npm install
```

### Running the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Building & running the app
```bash
npm run build
# then
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
