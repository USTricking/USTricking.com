# US Tricking

USTricking.com will be the homepage for the tricking organization US Tricking.
While this code is public, we ask that you do not directly copy and/or publish any of the contents of this project.

## Development

1. Clone the repo:

   ```bash
   git clone https://github.com/USTricking/USTricking.com.git
   ```

2. Install [Node Version Manager for Linux/MacOS](https://github.com/nvm-sh/nvm) or [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows)

   **Linux/MacOS** (pick either method)

   a. Homebrew:

   Install [Homebrew](https://brew.sh/), and:

   ```bash
   brew bundle
   ```

   b. Plain bash:

   ```bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
   ```

   **Windows**:

   Install [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows) using its installer.

3. Install Node via nvm:

   ```bash
   nvm install
   ```

4. Install [Yarn](https://classic.yarnpkg.com/en/docs/install) - follow their installation guide

5. Install JS Dependencies:
   ```bash
   yarn
   ```
   or
   ```bash
   yarn install
   ```

6. Start the app:
   ```bash
   yarn run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   You can start editing pages by modifying `pages/index.js`. The page auto-updates as you edit the file.
## Further Setup Questions

If you have any trouble running the application just message Mikael or anyone else who has properly set up the application :blush:

## Contribution Guidelines

Contributions and feature requests are encouraged! Any questions in regards to new features and issues should be directed to Mikael.

Before raising a pull-request make sure all tests run properly via
```bash
yarn run test
```
any breaking tests must be address before your branch can be approved and merged into main.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Learn More

This app was started using Next.js! To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
