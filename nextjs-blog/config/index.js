const dev = process.env.NODE_ENV !== 'production';
// LOCAL & PROD DOMAINS
export const server = dev ?
'http://localhost:3000' :
'https://carstal.com';