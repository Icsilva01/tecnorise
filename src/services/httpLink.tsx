import { createHttpLink } from "@apollo/client";

export const httpLink = createHttpLink({
  uri: 'http://dev.gear-tecnorise.com:4000/api',
});