## Timestamp Microservice

A timestamp microservice, built using NodeJS/Express

**User Story**: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

**User Story**: If it does, it returns both the Unix timestamp and the natural language form of that date.

**User Story**: If it does not contain a date or Unix timestamp, it returns null for those properties.

The API endpoint is GET `[project_url]/api/timestamp/:date_string?`


