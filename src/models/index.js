// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Restaurant, Room, User } = initSchema(schema);

export {
  Restaurant,
  Room,
  User
};