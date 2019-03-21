#!/bin/sh

google-chrome "http://localhost:8000/?lotr-less.json"
python -m SimpleHTTPServer 8000
