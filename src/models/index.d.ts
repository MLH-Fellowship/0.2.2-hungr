import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly rating?: number;
  readonly photo: string;
  constructor(init: ModelInit<Restaurant>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

export declare class Room {
  readonly id: string;
  readonly code?: string;
  readonly size?: number;
  readonly lat?: number;
  readonly long?: number;
  readonly cuisine?: string;
  constructor(init: ModelInit<Room>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

export declare class User {
  readonly id: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}