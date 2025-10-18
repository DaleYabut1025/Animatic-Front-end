
# Use official Python image
#FROM python:3.12

# Set working directory inside the container
#WORKDIR /api

# Copy dependency file first for caching
#COPY requirements.txt .

# Install dependencies inside the container (not your local venv)
#RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your source code
#COPY . .

# Use official lightweight Python image
FROM python:3.11-slim

# Prevent Python from writing .pyc files and buffering stdout
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies required by OpenCV and MediaPipe
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy your app code
COPY . .

# Run the app
CMD ["python", "main.py"]

