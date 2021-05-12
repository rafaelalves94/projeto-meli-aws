cd c:\
mkdir downloads-s3
cd \downloads-s3
aws s3 cp s3://meli-project-rafael/arquivos-a-serem-analisados c:\downloads-s3 --recursive