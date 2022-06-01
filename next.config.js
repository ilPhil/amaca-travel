/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key: "pk.eyJ1IjoibXJjYWxhdmVyYSIsImEiOiJjbDN0eWR4cGYwaGVjM2NyeDhqcjlzZHpqIn0.Mpd4SSFYoJNt4Vb7j8tYEA"
  },
  images: {
    domains: ['i0.wp.com'],
  },
}

module.exports = nextConfig
