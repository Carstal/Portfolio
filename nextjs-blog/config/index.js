const dev = process.env.NODE_ENV !== 'production';

export const server = dev ?
'http://localhost:3000' :
'https://dancing-pudding-2c1c18.netlify.app';