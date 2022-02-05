module.exports = {
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
        return [
            {
                destination: "http://localhost:5000/:path*",
                source: "/api/:path*",
            }
        ];
    }
  },
}
