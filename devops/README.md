# Setup Implementation

Using an AWS t2.micro instance

Open tcp ingress access for ssh, http and https

Install nginx and configure nginx using the [config](nginx.conf)

Install certbot and provision SSL certification

# Setup Docker and Docker compose

[frontend](../frontend/Dockerfile)
[backend](../Backend/Dockerfile)
[docker compose](../docker-compose.yml)

# Automation

[CI/CD](../.github/workflows/deploy.yml)

