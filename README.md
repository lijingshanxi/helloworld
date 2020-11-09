# helloworld

```
sam local invoke -e event.json --debug-port 5858 lijingTestHelloWorld
sam local start-api
sam deploy -t template.yaml --stack-name lijing-cicd-test --capabilities CAPABILITY_NAMED_IAM --region eu-central-1 --s3-bucket lijing-test-be
```