const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // serve HTML

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login Page</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; display: flex; justify-content: center; align-items: center; height: 100vh; }
          .login-box { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          h2 { margin-bottom: 20px; color: #333; }
          input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; }
          button { width: 100%; padding: 10px; background: #0078d7; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
          button:hover { background: #005a9e; }
        </style>
      </head>
      <body>
        <div class="login-box">
          <h2>Login</h2>
          <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
