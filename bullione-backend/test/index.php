<?php
// Main test page for all APIs
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bullione API Test Suite</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .test-card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: #f9f9f9; }
        .test-card h3 { margin-top: 0; color: #333; }
        .btn { display: inline-block; padding: 10px 20px; margin: 5px; text-decoration: none; border-radius: 4px; font-weight: bold; }
        .btn-primary { background: #007cba; color: white; }
        .btn-success { background: #28a745; color: white; }
        .btn-info { background: #17a2b8; color: white; }
        .btn-warning { background: #ffc107; color: black; }
        .status { padding: 10px; border-radius: 4px; margin: 10px 0; }
        .status-success { background: #d4edda; color: #155724; }
        .status-error { background: #f8d7da; color: #721c24; }
        .status-info { background: #d1ecf1; color: #0c5460; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 Bullione API Test Suite</h1>
        <p>Test all your backend APIs from one place</p>
    </div>

    <div class="test-grid">
        <!-- Database Connection Test -->
        <div class="test-card">
            <h3>🔗 Database Connection</h3>
            <p>Test if the database connection is working properly.</p>
            <a href="../api/test-connection.php" class="btn btn-info" target="_blank">Test Connection</a>
            <div id="db-status" class="status status-info">Click to test database connection</div>
        </div>

        <!-- Registration Test -->
        <div class="test-card">
            <h3>📝 User Registration</h3>
            <p>Test user registration with form data.</p>
            <a href="test-register.php" class="btn btn-primary" target="_blank">Test Registration</a>
            <div class="status status-info">Test creating new user accounts</div>
        </div>

        <!-- Login Test -->
        <div class="test-card">
            <h3>🔐 User Login</h3>
            <p>Test user authentication and login.</p>
            <a href="test-login.php" class="btn btn-success" target="_blank">Test Login</a>
            <div class="status status-info">Test user authentication</div>
        </div>

        <!-- Reset Password Test -->
        <div class="test-card">
            <h3>🔑 Password Reset</h3>
            <p>Test password reset functionality.</p>
            <a href="test-reset-password.php" class="btn btn-warning" target="_blank">Test Reset</a>
            <div class="status status-info">Test password reset flow</div>
        </div>

        <!-- Database Setup -->
        <div class="test-card">
            <h3>⚙️ Database Setup</h3>
            <p>Run database setup and initialization.</p>
            <a href="../setup/database-setup.php" class="btn btn-info" target="_blank">Setup Database</a>
            <div class="status status-info">Initialize database tables</div>
        </div>

        <!-- API Status -->
        <div class="test-card">
            <h3>📊 API Status</h3>
            <p>Check overall API health and status.</p>
            <button onclick="checkAllAPIs()" class="btn btn-info">Check All APIs</button>
            <div id="api-status" class="status status-info">Click to check all API endpoints</div>
        </div>
    </div>

    <script>
        async function checkAllAPIs() {
            const statusDiv = document.getElementById('api-status');
            statusDiv.innerHTML = 'Checking APIs...';
            statusDiv.className = 'status status-info';
            
            const apis = [
                { name: 'Database Connection', url: '../api/test-connection.php' },
                { name: 'Registration', url: '../api/register.php', method: 'POST' },
                { name: 'Login', url: '../api/login.php', method: 'POST' },
                { name: 'Reset Password', url: '../api/reset-password.php', method: 'POST' }
            ];
            
            let results = [];
            
            for (let api of apis) {
                try {
                    if (api.method === 'POST') {
                        // For POST endpoints, just check if they respond to OPTIONS
                        const response = await fetch(api.url, { method: 'OPTIONS' });
                        results.push(`✅ ${api.name}: Available (${response.status})`);
                    } else {
                        // For GET endpoints, check normally
                        const response = await fetch(api.url);
                        results.push(`✅ ${api.name}: Available (${response.status})`);
                    }
                } catch (error) {
                    results.push(`❌ ${api.name}: Error - ${error.message}`);
                }
            }
            
            statusDiv.innerHTML = results.join('<br>');
            statusDiv.className = 'status status-success';
        }
    </script>
</body>
</html>
