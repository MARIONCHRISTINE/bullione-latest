<?php
// Test page for login API
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Login API</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #218838; }
        .result { margin-top: 20px; padding: 15px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
    </style>
</head>
<body>
    <h1>🔐 Test Login API</h1>
    
    <div class="info">
        <strong>API Endpoint:</strong> ../api/login.php<br>
        <strong>Method:</strong> POST<br>
        <strong>Content-Type:</strong> application/json
    </div>

    <form id="loginForm">
        <div class="form-group">
            <label>Email:</label>
            <input type="email" name="email" required placeholder="Enter your email">
        </div>

        <div class="form-group">
            <label>Password:</label>
            <input type="password" name="password" required placeholder="Enter your password">
        </div>

        <button type="submit">Test Login</button>
    </form>

    <div id="result"></div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {};
            
            // Convert form data to object
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<div class="info">Testing login...</div>';
            
            try {
                const response = await fetch('../api/login.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    resultDiv.innerHTML = `
                        <div class="success">
                            <h3>✅ Login Successful!</h3>
                            <p><strong>Message:</strong> ${result.message}</p>
                            <p><strong>User ID:</strong> ${result.user.id}</p>
                            <p><strong>Name:</strong> ${result.user.first_name} ${result.user.last_name}</p>
                            <p><strong>Email:</strong> ${result.user.email}</p>
                            <p><strong>User Type:</strong> ${result.user.user_type}</p>
                            <p><strong>Account Type:</strong> ${result.user.account_type}</p>
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = `
                        <div class="error">
                            <h3>❌ Login Failed</h3>
                            <p><strong>Error:</strong> ${result.error}</p>
                            <p><strong>Status:</strong> ${response.status}</p>
                        </div>
                    `;
                }
            } catch (error) {
                resultDiv.innerHTML = `
                    <div class="error">
                        <h3>❌ Network Error</h3>
                        <p><strong>Error:</strong> ${error.message}</p>
                        <p>Make sure XAMPP is running and the API endpoint is accessible.</p>
                    </div>
                `;
            }
        });
    </script>
</body>
</html>
