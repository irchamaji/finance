import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow local browser sessions opened via either localhost or 127.0.0.1 to load Next dev assets.
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

export default nextConfig
