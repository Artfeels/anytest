const security = require('../security');
const event = require('./event.json');

test('validate slack request', ()=> {
  const signature = event['headers']['x-slack-signature'];
  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  console.log(signingSecret);
  expect(security.validateSlackRequest(event, signingSecret)).toBe(true);
});