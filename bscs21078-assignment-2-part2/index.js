const express = require('express');
const fs = require('fs');
const csv = require('csv-parser'); 
const app = express();

app.use(express.json());

app.get('/hello/talha', (req, res) => {
  res.send("Hello, Talha");
});

app.post('/profile', (req, res) => {
  const profile = req.body;

  const requiredFields = ['Name', 'Title', 'TargetedKeywords', 'Education', 'Certification', 'Contact'];
  const missingFields = requiredFields.filter(field => !profile[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
  }

  fs.readFile('profiles.json', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'Server error while reading file' });
    }

    let profiles = [];
    if (!err) {
      profiles = JSON.parse(data);
    }

    profiles.push(profile); 

    fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Server error while writing file' });
      }
      res.status(201).json({ message: 'Profile saved in JSON successfully' });
    });
  });
});

app.get('/profiles', (req, res) => {
  const profiles = [];

  fs.createReadStream('profiles.csv')
    .pipe(csv()) 
    .on('data', (row) => {
      profiles.push(row);
    })
    .on('end', () => {
      res.json(profiles); 
    })
    .on('error', (err) => {
      res.status(500).json({ error: 'Server error while reading CSV file' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});