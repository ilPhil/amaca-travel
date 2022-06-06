/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key: "pk.eyJ1IjoibXJjYWxhdmVyYSIsImEiOiJjbDN0eWR4cGYwaGVjM2NyeDhqcjlzZHpqIn0.Mpd4SSFYoJNt4Vb7j8tYEA"
  },
  images:{
  domains: ['s3-us-west-2.amazonaws.com','imgur.com', 'images.musement.com']
  }
} 

module.exports = nextConfig