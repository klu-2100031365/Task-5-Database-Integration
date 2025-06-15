const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    db.query(sql, [name, email, age], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('✅ User added successfully');
    });
});
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.put('/users/:id', (req, res) => {
    const { name, email, age } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
    db.query(sql, [name, email, age, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('✏️ User updated successfully');
    });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('❌ User deleted successfully');



        
    });
});

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});

