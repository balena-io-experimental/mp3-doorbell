# A simple mp3 doorbell

## Detail
So, this is project that uses resin.io, a hack Friday and a couple of bits of old hardware I had knocking around to 
link a button push (specifically doorbell in my instance) with playing a random track from a library
(Trans-Siberian Orchestra in my instance, it was just before Christmas after all).

## Installation
1. Fork this repo
2. Put some mp3 files in a subdirectory of music
3. Grab yourself a resin.io application
4. Grab yourself a RPi and a 3.5mm amp
5. Get your RPi connected to the application
6. Put the subdirectory name into the environment variables as `LIBRARY`
7. Put a 3.3v high/low onto pin 13
8. Push your repo to the resin.io application
