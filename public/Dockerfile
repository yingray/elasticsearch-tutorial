FROM docker.elastic.co/elasticsearch/elasticsearch:6.1.3

COPY ./accounts.json .

RUN elasticsearch

RUN curl -H "Content-Type: application/json" -XPOST "localhost:9200/bank/account/_bulk?pretty&refresh" --data-binary "@accounts.json"

EXPOSE 9200
EXPOSE 9300