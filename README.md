# SIT737 Task 6.2C - Adding Kubernetes Health Checks to Node.js App

This project enhances the previous Node.js deployment by implementing **Kubernetes health check probes** (`readiness` and `liveness`) to ensure the application's health status is properly monitored within the cluster.

## ✅ Tech Used

- Node.js + Express  
- Docker  
- Kubernetes (Minikube)  
- YAML (Deployment and Service configuration)  
- Kubernetes Probes (Healthcheck: `/healthz`)

## 🩺 Health Check Route

We added a health check endpoint:

```js
// index.js
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});
