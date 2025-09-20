# CryptoStreamLite

A simplified real-time cryptocurrency market dashboard with a **C++ backend** and a **React + Tailwind frontend**.  
It connects to live market data streams (e.g., Binance WebSocket), stores data in **Redis** and **PostgreSQL**,  
and visualizes trades in a modern dashboard.

---

## Features
- WebSocket integration for real-time BTC/USDT trade data  
- Live updating chart for BTC/USDT price  
- Table of recent trades with price, quantity, and timestamp  
- Redis + PostgreSQL storage for fast + persistent access  
- Built with React, Tailwind CSS, and ShadCN UI for a clean, responsive frontend  

---

## Tech Stack

### Backend
- C++ (WebSocket client, Redis, PostgreSQL)  
- Dockerized for portability  

### Frontend
- React + Vite  
- Tailwind CSS + ShadCN UI  
- WebSocket client for live updates  

### Infrastructure
- Redis (real-time cache)  
- PostgreSQL (historical persistence)  
- Docker + Docker Compose  

