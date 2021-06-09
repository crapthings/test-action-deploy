module.exports = {
  deploy : {
    cube : {
      ...getDefaultDeployInfo(),
    }
  }
}

function getDefaultDeployInfo () {
  return {
    user: 'ubuntu',
    host: '43.129.90.40',
    ref : 'origin/main',
    repo: 'git@github.com:crapthings/test-action-deploy.git',
    path: '/home/ubuntu/app/test-action-deploy',
    'pre-setup': 'rm -rf /home/ubuntu/app/test-action-deploy/source',
    'post-deploy': 'npm i && pm2 reload pm2.json --update-env',
    'pre-deploy-local': 'scp .env ubuntu@43.129.90.40:/home/ubuntu/app/test-action-deploy/source/.',
    ssh_options: 'StrictHostKeyChecking=no',
  }
}
