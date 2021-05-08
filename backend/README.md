This is a simple REST api for storing and retrieving user data.

#Usage

##Adding a user:
####Curl:
```
curl -H "Content-Type: application/json" -X POST -d "{[key]:[value], ...}" http://localhost:5000/api/users
```
####Python:
```python 
from requests import post

print(post("http://localhost:5000/api/users", data = {[key]:[value], ...}))
```


##Deleting a user:
####Curl:
```
curl -X DELETE http://localhost:5000/api/users/[user_id]
```
####Python:
```python 
from requests import delete

print(delete("http://localhost:5000/api/users/[user_id]")
```

##Updating a user:
####Curl:
```
curl -H "Content-Type: application/json" -X PUT -d "{[key]:[value]}" http://localhost:5000/api/users/[user_id]
```
####Python:
```python 
from requests import put

print(put("http://localhost:5000/api/users/[user_id]", data={[key]:[value], ...}))
```

##Get all users:
####Curl:
``` 
curl -X GET http://localhost:5000/api/users
```
####Python:
``` 
from requests import get
print(get("http://localhost:5000/api/users"))
```