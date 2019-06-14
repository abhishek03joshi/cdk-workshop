import sns = require('@aws-cdk/aws-sns');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway');

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Define an AWS lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('lambda'),
      handler: 'hello.handler'
    });

    //Defines API Gateway REST API resource backed by our "hello" function
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}
