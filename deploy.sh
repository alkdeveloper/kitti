#!/bin/bash

# Kitti Frontend Deployment Script for EC2
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Kitti Frontend Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
    echo -e "${RED}Please do not run as root${NC}"
    exit 1
fi

# Project directory
PROJECT_DIR="/home/ubuntu/kitti"
cd $PROJECT_DIR

# Pull latest changes
echo -e "${YELLOW}Pulling latest changes from Git...${NC}"
git pull origin main

# Install/update dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm ci --production=false

# Build Next.js application
echo -e "${YELLOW}Building Next.js application...${NC}"
npm run build

# Create logs directory if it doesn't exist
mkdir -p logs

# Restart PM2
echo -e "${YELLOW}Restarting PM2 process...${NC}"
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"

