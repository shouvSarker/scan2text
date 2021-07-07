# Extracting text from image and pdf using Google Cloud API

First, [create a project, set up authentication and enable the Google Cloud API](https://cloud.google.com/vision/docs/setup) from your google cloud account.

Don't forget to set the [service key json](https://cloud.google.com/vision/docs/setup#sa-create) as an environment variable on the command line.

`export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"`

Load node version and install packages.

`nvm use`  
`npm install`

To extract text from an image, run the following command. It will create a text file in your local directory with line breaks as seen in the image.

`node scan2textImage.js /path/to/image path/to/output/text`

To extract text from a pdf, run the following command. It will save the extracted text in a json file (with additional styling and positioning information as seen in the pdf, alongside perceived accuracy) in a folder in your google cloud storage.

`node scan2textPdf.js bucketname filename outputfolder`

`scan2textPdf.js` only works for a file located in google cloud storage and is much more precise than image extraction from a text (`scan2textImage.js`). However, interpreting the json file requires a bit of heavy lifting and thus not suitable for quick and dirty text extracting. Text extraction from an image is quite functional, even for documents scanned and converted to image the results are fairly accurate and gives chunks of text as output. For general purpose use, Image text extraction may be more suitable for most use cases.