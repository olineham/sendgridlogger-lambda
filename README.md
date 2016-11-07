# sendgridlogger-lambda
Simple AWS Lambda function to log all SendGrid events to CloudWatch Logs

Just uses console.log() for now, so the CloudWatch log group is a bit cluttered with other lambda logs.

Expects API Gateway configuration:
* Integration Request set to Lambda Proxy for full header support.
* Stage Variable `Basic_base64` to contain the base64 portion of the basic auth Authorization header

SendGrid webhooks only support basic auth, and doing it this way is quicker/easier than a separate lambda function defining a custom authorizer just for one client.