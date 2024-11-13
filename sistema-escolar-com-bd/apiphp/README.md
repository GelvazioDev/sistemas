# Configuração do php.ini
Abrir o arquivo php.ini, e no final do arquivo adicionar o seguinte codigo

error_reporting=E_COMPILE_ERROR|E_RECOVERABLE_ERROR|E_ERROR|E_CORE_ERROR|E_STRICT

salvar e reiniciar o xampp

# apiphp - v1
apiphp
# Instalar o Slim na versao 3 com composer e PHP 7.0.33
composer require slim/slim:3.*

# Ping local
http://localhost/apiphp/api/api.php/ping

# Ping Docker 
http://localhost:8000/api/api.php/ping

# FAZER DEPLOY NO FLY.IO
* 1 - SELECIONAR ARQUIVO POM.XML NO "INTELIJ"
* 2 - IR DO LADO DIREITO EM MAVEM E IR NA OPÇÃO "Execute Maven Goal" e selecionar "mvn deploy"
* 2.1 - Se for uma atualização, rodar "mvn clean" antes de "mvn deploy"
* 3 - Nome do app no fly, vai ser o nome que esta no arquivo fly.toml
* 4 - Fazer login no fly, usando o comando "fly auth login"
* 5 - Se for a primeira vez que vai fazer deploy, usar o comando abaixo
* ``` fly launch --now```
* 6 - Se for uma atualizacao, usar o comando abaixo:
* ``` fly deploy `

```
sistemas de cantinas
https://www.nutrebem.com.br/responsaveisealunos
https://ischolar.com.br/blog/cantina-escolar
https://iuupi.com.br/

# Configuracao Slim
# apiphpvercel
apislimphp

# Versoes PHP - Slim 
vercel-php@0.6.1 - Node 18.x / PHP 8.2.x (https://example-php-8-2.vercel.app)
vercel-php@0.5.4 - Node 18.x / PHP 8.1.x (https://example-php-8-1.vercel.app)
vercel-php@0.4.3 - Node 18.x / PHP 8.0.x (https://example-php-8-0.vercel.app)
vercel-php@0.3.5 - Node 18.x / PHP 7.4.x (https://example-php-7-4.vercel.app)

# Mudar a versao do node para 18.0.0 direto na vercel!!!

# Versao do PHP: 7.4.30 para versao vercel.json:vercel-php@0.3.5

