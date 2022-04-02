# socket.io
 socket.io middleware for Wyte

# Install
```sh
npm i @wyte/socket.io
```

# Usage
After creating your app, simply add:
```js
app.Stack.use('$socket.io').ready(io => {
    // Now you can use socket.io
    io.on('connection', socket => {
        console.log('Socket connected')
    })
})
```