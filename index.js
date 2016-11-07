exports.handler = function(event, context, callback) {

  if(event.headers.Authorization != 'Basic '+ event.stageVariables.Basic_base64) {
    callback(null, {
      "statusCode": 401,
      "headers": {},
      "body": JSON.stringify({message:'Not authorized - method Basic.'})
    });
    return;
  }
  
  JSON.parse(event.body).map(function(sgEvent) {
    console.log(sgEvent);
  });
  
  callback(null, {
    "statusCode": 200,
    "headers": {},
    "body": JSON.stringify({message:'Event(s) logged successfully'})
  });
};