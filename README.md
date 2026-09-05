# Unit Bench — Number / Unit Converter

A small, dependency-light web app that converts numbers between units —
length, weight, temperature, volume, area, speed, time, and digital
storage — packaged as a Docker container.

![Python](https://img.shields.io/badge/Python-3.11-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.3-green)


<img width="1267" height="864" alt="Screenshot 2026-09-05 005911" src="https://github.com/user-attachments/assets/cbc7e604-65d2-4eca-b862-7026a3bcbb8a" />


## 1. What's inside

| Piece | Purpose |
|---|---|
| `app.py` | Tiny Flask backend. Its only job is to serve the frontend page. |
| `templates/index.html` | The converter page markup. |
| `static/style.css` | All visual styling. |
| `static/script.js` | Conversion data (unit factors) and all interaction logic — runs entirely in the browser. |
| `requirements.txt` | Python dependencies. |
| `Dockerfile` | Builds the container image. |

All the actual math (the conversions) happens client-side in JavaScript.
The Flask server exists only to serve the page — this keeps the backend
intentionally small and easy to read for a first Docker project.

## 2. Running it without Docker (optional, for local dev)

```bash
pip install -r requirements.txt
python app.py
```

Then open in a browser.

```bash
http://localhost:5000
```

## 3. Base image

The image is built from **`python:3.11-slim`**:
- small footprint compared to the full `python:3.11` image
- ships pip and a complete Python runtime, so no extra tooling is needed
- widely used and well maintained, a sensible default for a small Flask app

## 4. Building the Docker image

From the project folder (the one containing the `Dockerfile`):

```bash
docker build -t unit-bench:latest .
```

What happens during the build (see the `Dockerfile` for the exact steps):
1. Starts from `python:3.11-slim`.
2. Sets `/app` as the working directory.
3. Copies `requirements.txt` first and installs dependencies — this is
   ordered before copying the rest of the code so Docker can reuse the
   cached dependency layer when only the app code changes.
4. Copies `app.py`, `templates/`, and `static/` into the image.
5. Creates and switches to a non-root user (`appuser`) to run the app —
   good practice so the container doesn't run as root.
6. Declares port `5000` with `EXPOSE`.
7. Adds a `HEALTHCHECK` that pings `/healthz`.
8. Sets the startup command: `python app.py`.

## 5. Running the container

```bash
docker run -d -p 5000:5000 --name unit-bench-app unit-bench:latest
```

- `-d` — run in the background (detached)
- `-p 5000:5000` — map container port 5000 to host port 5000
- `--name unit-bench-app` — a friendly name so later commands are easy to type

Then open **http://localhost:5000** in a browser — the app running
inside the container is now reachable from the host machine.

To run on a different host port (e.g. if 5000 is already taken):

```bash
docker run -d -p 8080:5000 --name unit-bench-app unit-bench:latest
# now visit http://localhost:8080
```

## 6. Basic container management commands

```bash
# List running containers
docker ps

# List all containers, including stopped ones
docker ps -a

# View the app's logs
docker logs unit-bench-app

# Follow logs live
docker logs -f unit-bench-app

# Check the container's health status
docker inspect --format='{{.State.Health.Status}}' unit-bench-app

# Open a shell inside the running container (for debugging)
docker exec -it unit-bench-app /bin/bash

# Stop the container
docker stop unit-bench-app

# Start it again later
docker start unit-bench-app

# Restart it
docker restart unit-bench-app

# Remove the container (must be stopped first)
docker rm unit-bench-app

# Remove the image
docker rmi unit-bench:latest

# See image size / details
docker images unit-bench
```

## 7. Rebuilding after a code change

```bash
docker stop unit-bench-app && docker rm unit-bench-app
docker build -t unit-bench:latest .
docker run -d -p 5000:5000 --name unit-bench-app unit-bench:latest
```

## 8. Verifying it's isolated and consistent

To prove the app runs the same way regardless of the host machine's
Python setup, this is the core Docker value demonstrated here:

- The host machine does **not** need Python or Flask installed at all —
  only Docker.
- Removing the image and rebuilding it (`docker build`) reproduces the
  exact same environment every time, since all dependencies are pinned
  in `requirements.txt` and installed inside the image.
- The container can be stopped, removed, and recreated from the same
  image without losing functionality — nothing about the app depends on
  state stored on the host.

## 9. Categories supported

Length, Weight, Temperature, Volume, Area, Speed, Time, and Digital
storage — each with common units (e.g. meters/feet/miles, °C/°F/K,
liters/gallons, MB/GB, etc.). All conversions run in the browser, so
no data is sent anywhere once the page has loaded.
