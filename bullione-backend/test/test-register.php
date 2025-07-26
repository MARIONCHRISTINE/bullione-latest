<?php
// Test page for registration API
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Registration API</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #007cba; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #005a87; }
        .result { margin-top: 20px; padding: 15px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
    </style>
</head>
<body>
    <h1>🧪 Test Registration API</h1>
    
    <div class="info">
        <strong>API Endpoint:</strong> ../api/register.php<br>
        <strong>Method:</strong> POST<br>
        <strong>Content-Type:</strong> application/json
    </div>

    <form id="registrationForm">
        <div class="form-group">
            <label>User Type:</label>
            <select name="userType" required>
                <option value="">Select Type</option>
                <option value="investor">Investor</option>
                <option value="applicant">Applicant</option>
            </select>
        </div>

        <div class="form-group">
            <label>Account Type:</label>
            <select name="accountType" required>
                <option value="">Select Type</option>
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
            </select>
        </div>

        <div class="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" required>
        </div>

        <div class="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" required>
        </div>

        <div class="form-group">
            <label>Email:</label>
            <input type="email" name="email" required>
        </div>

        <div class="form-group">
            <label>Password:</label>
            <input type="password" name="password" required>
        </div>

        <div class="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" required>
        </div>

        <div class="form-group">
            <label>Country:</label>
            <select name="country" required>
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="KE">Kenya</option>
                <option value="NG">Nigeria</option>
                <option value="ZA">South Africa</option>
                <option value="GH">Ghana</option>
                <option value="UG">Uganda</option>
            </select>
        </div>

        <div class="form-group">
            <label>
                <input type="checkbox" name="agreeToTerms" required style="width: auto;">
                I agree to the terms and conditions
            </label>
        </div>

        <button type="submit">Test Registration</button>
    </form>

    <div id="result"></div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {};
            
            // Convert form data to object
            for (let [key, value] of formData.entries()) {
                if (key === 'agreeToTerms') {
                    data[key] = true;
                } else {
                    data[key] = value;
                }
            }
            
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<div class="info">Testing registration...</div>';
            
            try {
                const response = await fetch('../api/register.php', {
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
                            <h3>✅ Registration Successful!</h3>
                            <p><strong>Message:</strong> ${result.message}</p>
                            <p><strong>User ID:</strong> ${result.user_id}</p>
                            <p><strong>User Type:</strong> ${result.user_type}</p>
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = `
                        <div class="error">
                            <h3>❌ Registration Failed</h3>
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
