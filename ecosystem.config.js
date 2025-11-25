// PM2 ecosystem configuration for Next.js frontend
module.exports = {
  apps: [{
    name: 'kitti-frontend',
    script: 'npm',
    args: 'start',
    cwd: '/home/ec2-user/kitti',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_API_BASE_URL: 'http://13.53.188.220:8000/api'
    },
    error_file: '/home/ec2-user/kitti/logs/pm2-error.log',
    out_file: '/home/ec2-user/kitti/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    max_memory_restart: '1G'
  }]
};

