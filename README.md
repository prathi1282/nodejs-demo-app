CI/CD Pipeline: Node.js App Deployment on AWS EC2 using GitHub Actions & Docker
📘 Overview

This project demonstrates a complete CI/CD pipeline that automatically builds, tests, and deploys a Node.js web application to an AWS EC2 instance using GitHub Actions, Docker, and DockerHub.

🧰 Tech Stack

Node.js (Express.js) – Web app framework

Docker – Containerization

DockerHub – Image registry

GitHub Actions – CI/CD automation

AWS EC2 (Ubuntu) – Deployment server

⚙️ CI/CD Workflow Summary

Trigger: On every push to the main branch

Actions Pipeline:

Install dependencies

Run tests

Build Docker image

Push image to DockerHub

SSH into EC2 and deploy latest container
