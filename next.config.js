/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname:
          "/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
      },

      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        // pathname: "1/rms-diego/*",
      },
    ],
  },
};

// http://localhost:3000/(https://opengraph.githubassets.com/1/rms-diego/portfolio)

module.exports = nextConfig;
