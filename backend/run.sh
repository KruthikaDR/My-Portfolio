#!/bin/bash

# Activate the virtual environment
source .venv/bin/activate

# Run the FastAPI server with uvicorn
uvicorn main:app --reload
