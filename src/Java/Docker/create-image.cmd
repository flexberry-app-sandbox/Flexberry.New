docker build --no-cache -f SQL\Dockerfile.PostgreSql -t new-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t new-java/app ../../..
