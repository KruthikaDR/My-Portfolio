#!/bin/bash

# Create virtual environment using Python's built-in venv instead of uv
python3 -m venv .venv
source .venv/bin/activate

# Install requirements using pip instead of uv
pip install -r requirements.txt
