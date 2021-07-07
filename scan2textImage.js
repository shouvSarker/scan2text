// Imports the Google Cloud client libraries.
const vision = require('@google-cloud/vision');
const fs = require('fs');

/**
 * Extracts text from an image.
 * 
 * @param fileName File name (with path if not located in this directory) of the image.
 * @param outputFileName The output file (with path if not intended to be located in this directory) where the text will be saved.
 */
async function detectText(fileName, outputFileName) {
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    
    // Performs text detection on the provided file.
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    
    // The first array element's description contains the entire extracted text with line breaks.
    fs.writeFileSync(outputFileName, detections[0].description);
}


// First arg is the filename, second is the output file name.
// With node, the first two in process args are node and the filename, hence we need to start from the third one.
const fileName = process.argv[2];
const outputFileName = process.argv[3];

detectText(fileName, outputFileName);