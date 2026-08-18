import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "tridente-server.tail814f21.ts.net",
    "*.ts.net",
  ],
};

export default nextConfig;
