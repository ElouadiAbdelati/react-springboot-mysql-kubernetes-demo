eval $(minikube docker-env) # Configure environment to use minikube’s Docker daemon

echo "===start building spring application=== "
docker build -t elouadiabdelati/spring ../spring/ 
echo "===build completed==="


echo "===start build react app==="
docker build -t elouadiabdelati/react  ../react/
echo "===build completed==="
# kubectl apply -f . # run all yaml files

kubectl apply -f app-config.yaml
kubectl apply -f app-secret.yaml

kubectl apply -f mysql-deployment.yaml
kubectl rollout status deployment mysql-deployment # this command waits until all of the Pods in the deployment have been started successfully.

kubectl apply -f spring-deployment.yaml
kubectl rollout status deployment spring-deployment

kubectl apply -f react-deployment.yaml
kubectl rollout status deployment react-deployment

kubectl get services  # get all services
minikube service react-service  #  react app will open in the browser 