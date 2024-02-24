const fs = require('fs');
const path = require('path');

// Read the original JSON file
const originalData = require('../data/quran.json');

// Create the output directory if it doesn't exist
const outputDir = path.resolve(__dirname, '../data/quran');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
} else {
    fs.rmSync(outputDir)
}

// Iterate over each object in the array
originalData.data.forEach((obj, index) => {
    // Convert the object to JSON string
    const jsonData = JSON.stringify(obj, null, 2);
    
    // Write the JSON string to a new file
    const outputFile = path.join(outputDir, `${++index}.json`);
    fs.writeFileSync(outputFile, jsonData);
    
    console.log(`File output_${index}.json created successfully.`);
});
