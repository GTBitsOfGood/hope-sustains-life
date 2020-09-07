# hope-sustains-life
Our team is building a comprehensive donation website for Hope Sustains Life so that they can raise money more effectively, and provide assistance for the refugee populations. 

## Stack
* React.js: Front-end
* Next.js: API routes and server-side rendering
* MongoDB: Permanently storing info
* Stripe: Payment processing
* eslint: Automatically identifying and fixing code errors
* prettier: Setting a common code style and fixing any issues

## Running

### Development
To understand this code better, read the [Code Tour](/CODETOUR.md).
1. Run `npm install`
2. Setup development environment variables by running `npm run secrets`
  - You will be prompted for a password. Ask your EM to send it to you.
  - **NOTE**: Windows users need to run `npm run secrets:login` and `npm run secrets:sync` instead
3. Run `npm run dev`

### Production
1. Setup your host/vm and the necessary env vars
2. Run `npm install`
3. Run `npm run start`

## Other Info

### Styling
- By default, this repository uses Next `^9.2.0` for styles, which includes native support for global CSS and CSS modules
- However, this version only allows global css to be in `pages/_app.js`, which can cause issues with external packages
- If you face this error, the solution is installing [`@zeit/next-css` and adding it to `next.config.js`](https://github.com/zeit/next-plugins/tree/master/packages/next-css), however you cannot use css modules and global css together with this package (and it defaults to global).