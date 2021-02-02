# Just a quick api test run through.

I saw a post on the NextJS Discord for a job listing. They had a quick code challenge accompanying it, and I thought it would be a fun test. This is the result of that. ...minus the whole TypeScript thing. Still getting my head into that space.

## Original test:

- Start a NextJS project.
- Create a GET route on /api/greetings with a first_name parameter that returns a simple "Hello ${first_name}!" in the payload key of a JSON object.
- Create a POST route on /api/create_user that takes a JSON object with a firstName and a lastName keys and returns those keys and the values fully capitalized into the payload key of a JSON object. Your API needs to return usable errors for everything that could go wrong missing parameters, not found route, wrong method...
- Write a small series of tests. Choose your weapon for the tests.