# Desuarchive Downloader

Note that this userscript is currently broken and will save images as blank files.

This is because the cross origin resources (CORS) cannot be accessed from within desuarchive itself.

The only alternatives are:

1. Copy the filename to use for the image filename instead and manually punch it in when saving the file.

2. Have the userscript launch an external app via a custom protocol to download the image separately.
