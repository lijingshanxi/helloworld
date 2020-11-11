## start

```
sam local start-api
```

## debug 
```
sam local invoke -e event.json --debug-port 5858 --docker-network host glasswall-be-js-api
```

## create table
```
aws dynamodb create-table \
--table-name sumTable \
--attribute-definitions \
    AttributeName=Test_Site,AttributeType=S \
    AttributeName=Test_Stage,AttributeType=S \
--key-schema \
    AttributeName=Test_Site,KeyType=HASH \
    AttributeName=Test_Stage,KeyType=RANGE \
--provisioned-throughput \
    ReadCapacityUnits=10,WriteCapacityUnits=5 \
--endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name sumTable \
    --item \
    '{"Test_Site": {"S": "TSMC"},"Test_Stage": {"S": "Wafer FE"}, "Test_Date": {"N": "1603768683152"}, "Units_Count": {"N": "25"},"Test_Units": {"SS": "1,2,3"},"Cycle_Week": {"N": "25"},"Actual_Cycle": {"N": "25"},"Yield": {"N": "25"},"Actual_Yield": {"N": "25"}, "Price_Single_Unit": {"N": "10"}, "Price_Accumulate": {"N": "10"} }'\
    --endpoint-url http://localhost:8000

aws dynamodb scan \
    --table-name sumTable \
    --endpoint-url http://localhost:8000
```
