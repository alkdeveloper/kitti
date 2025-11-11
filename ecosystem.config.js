// PM2 ecosystem configuration for Next.js frontend
module.exports = {
  apps: [{
    name: 'kitti-frontend',
    script: 'npm',
    args: 'start',
    cwd: '/home/ubuntu/kitti',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_API_BASE_URL: 'https://api.yourdomain.com/api'
    },
    error_file: '/home/ubuntu/kitti/logs/pm2-error.log',
    out_file: '/home/ubuntu/kitti/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    max_memory_restart: '1G'
  }]
};

