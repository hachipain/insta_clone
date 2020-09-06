# back
`django==3.0.7`  
`djangorestframework==3.10`  
`djangorestframework-simplejwt==4.1.2`  
`djoser`  
`django-cors-headers`  
`Pillow`

# front
`react`  
`react-modal` 
`redux-toolkit` 
`typescript`
`material-ui`  
`formik`
`yup`

# docker  
## コンテナ起動  
```bash
docker-compose up -d
```

## rest_api起動
```bash
docker container exec -it rest_api python manage.py runserver 0:8000
```

## webサーバ起動
```bash
docker container exec -it front yarn start
```

## コンテナ終了
```bash
docker-compose down
```