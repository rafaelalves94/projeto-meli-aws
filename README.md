Projeto-meli-aws
Script para upload de arquivos no Amazon AWS S3
Script em NodeJS faz o upload automático no AWS S3. Além disso, abaixo estão as instruções de como enviar os arquivos do bucket da AWS S3 para uma instância do EC2, enviar de uma instância do EC2 para o bucket do AWS S3, e também está anexado ao projeto um script que será rodado na máquina local, para que os arquivos do bucket do AWS S3 sejam baixados na máquina local.

Features
 Upload para um bucket no AWS S3
 Envio de arquivos do bucket S3 para uma instância do EC2 (via aws-cli)
 Envio de arquivos de uma instância do EC2 para um bucket S3 (via aws-cli)
 Download de arquivos de um bucket S3 (via aws-cli)
Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js, Node.js Além disto é bom ter um editor para trabalhar com o código como VSCode

🎲 Rodando o Back End (servidor)
# Clone este repositório
$ git clone <https://github.com/rafaelalves94/projeto-meli-aws>

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto-meli-aws

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm index.js

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

Node.js
AWS S3, EC2, IAM
AWS CLI
Como usar
Upload de arquivos para o bucket S3
Para o upload de arquivos para o S3, é necessário configurar as credenciais AWS em index.js:

aws.config.update({
    accessKeyId: <'seuAccessKey'>,
    secretAccessKey: 'seuSecretKey',
    region:'seuCodigoDeRegiao'
})
Somente é necessário acessar http://localhost:3333, e fazer o upload dos arquivos desejados. Após fazer o upload, verá que os arquivos se encontram em: s3://meli-project-rafael/arquivos-utilitarios/

Envio da pasta 'arquivos-utilitarios' para uma instância EC2:
Após iniciar a instância, é necessário configurar o pacote aws-cli.

$ aws configure

AWS Access Key ID [None]: <seuAccessKey>
AWS Secret Access Key [None]: <seuSecretKey>
Default region name [None]: <seuCodigoDeRegiao>
Default output format [None]: json
Acessar a pasta 'arquivos-utilitarios'

$ cd arquivos-utilitarios
Comando para baixar arquivos do Bucket S3:

$ aws s3 cp s3://meli-project-rafael/arquivos-utilitarios . --recursive
Envio da pasta 'arquivos-a-serem-analisados em uma instância EC2, para o bucket S3
Acessar a pasta 'arquivos-a-serem-analisados'

$ cd arquivos-a-serem-analisados
Comando para enviar para o Bucket S3

$ aws s3 sync . s3://meli-project-rafael/arquivos-a-serem-analisados
Download de arquivos do bucket S3 (pasta 'arquivos-a-serem-analisados')
Configurar o AWS CLI na máquina local;

Acessar a pasta do projeto e executar o .bat: projeto-meli-aws/downloadfromS3.bat

Os arquivos serão baixados em C:\downloads-s3

Considerações
Devido a minha falta de experiência com desenvolvimento de aplicações, principalmente com os serviços AWS, não foi possível desenvolver todas as partes do script no tempo determinado. Somente consegui fazer com que os arquivos da máquina local sejam upados no bucket do s3, e os outros processos (baixar no EC2, upar do EC2 para o S3, download do S3 na máquina local), só consegui fazer através da linha de comando. De qualquer forma, já foi de grande valia para mim esse curto período de tempo estudando e aprendendo sobre essas tecnologias e diversas implementeções. Desde já agradeço pela oportunidade!
