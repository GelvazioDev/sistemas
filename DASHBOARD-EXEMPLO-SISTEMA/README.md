# Finanças
# Passos Iniciais neste Projeto

# Criando a máquina virtual
```bash
$ python -m venv ./venv
```

# Comando para ativar a venv no pycharm com cmd
```bash
$ venv\Scripts\activate
```

# Comando para desativar a venv
```bash
$ venv\Scripts\deactivate.bat
```

# Instalando o django
```bash
$ pip install django
```

# Criando o projeto django
```bash
$ django-admin startproject setup .
```

# Instalando a lib de banco de dados postgresql
```bash
$ pip install psycopg2
```

# Criando o app 'despesa'
```bash
$ python manage.py startapp despesa
```

# Instalando as requirements
```bash
$ pip install -r requirements.txt
```

# Atualizando as requirements
```bash
$ pip freeze > requirements.txt
```

# Depois rodar o comando abaixo para coletar os arquivos estáticos
```bash
$ python manage.py collectstatic
```

# Toda vez que mexer no model, precisa reexecutar as Migrations
```bash
$ python manage.py makemigrations
```

# Aplica as migrations no banco de dados
```bash
$ python manage.py migrate
```

# Criando o super usuario
```bash
$ python manage.py createsuperuser --username admin
```
# Dados Usuario
    * Usuario:admin
    * Senha:12345678

# Rodando o projeto
```bash
$ python manage.py runserver
```

###############################################################
# Criando o app 'receita'
```bash
$ python manage.py startapp receita
```
###############################################################

###############################################################
# Criando o app 'musica'
```bash
$ python manage.py startapp musica
```

# Instalando pytube
```bash
$ python -m pip install pytube
```


###############################################################

###############################################################
# Publicar o projeto no fly - roda o docker na nuvem e publica o projeto no link abaixo:
https://financas.fly.dev/

// LANCA SEMPRE UMA NOVA VERSAO DO APP COM O COMANDO "LAUNCH"

```bash
C:\Users\gelvazio\.fly\bin\flyctl.exe launch --now
```
#tempo de atualizacao = 17 segundos build do docker
tempo para push da imagem=1 minuto

https://fly.io/docs/hands-on/install-flyctl/

# site do deploy do app
https://financas.fly.dev/despesas
###############################################################

# lanca alteracoes - 
fly deploy


# Login com github - Local
http://localhost:8000/authenticate/callback

# Login com github - Online 
https://financas.fly.dev/authenticate/callback

github client secret:

retorno temporario do github:
{
	"access_token": "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",
	"token_type": "bearer",
	"scope": ""
}

# dados retornados do github:
{
	"login": "Gelvazio",
	"id": 5419445,
	"node_id": "MDQ6VXNlcjU0MTk0NDU=",
	"avatar_url": "https://avatars.githubusercontent.com/u/5419445?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/Gelvazio",
	"html_url": "https://github.com/Gelvazio",
	"followers_url": "https://api.github.com/users/Gelvazio/followers",
	"following_url": "https://api.github.com/users/Gelvazio/following{/other_user}",
	"gists_url": "https://api.github.com/users/Gelvazio/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/Gelvazio/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/Gelvazio/subscriptions",
	"organizations_url": "https://api.github.com/users/Gelvazio/orgs",
	"repos_url": "https://api.github.com/users/Gelvazio/repos",
	"events_url": "https://api.github.com/users/Gelvazio/events{/privacy}",
	"received_events_url": "https://api.github.com/users/Gelvazio/received_events",
	"type": "User",
	"site_admin": false,
	"name": "Gelvazio Camargo",
	"company": "Tidas Tecnologia",
	"blog": "https://gelvazio.github.io/",
	"location": "Rio do Sul,Santa Catarina,Brasil",
	"email": "gelvazio@hotmail.com",
	"hireable": null,
	"bio": "Developer Fullstack\r\nEducador PHP, HTML, CSS, JAVASCRIPT, JAVA",
	"twitter_username": null,
	"public_repos": 22,
	"public_gists": 4,
	"followers": 37,
	"following": 75,
	"created_at": "2013-09-09T15:35:38Z",
	"updated_at": "2023-08-18T19:18:37Z"
}__

update branch

# Usuario e senha database:
banco=financas
senha=mB9C@SywfzkJzmS
senha2=1jzuUyFOVupLDhIG

