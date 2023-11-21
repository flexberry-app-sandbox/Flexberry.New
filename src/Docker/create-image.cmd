docker build --no-cache -f SQL\Dockerfile.PostgreSql -t new/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t new/app ../..
