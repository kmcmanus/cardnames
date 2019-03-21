#!/bin/sh

google-chrome "http://localhost:8000/?lotr-easy.json"
python -m SimpleHTTPServer 8000
