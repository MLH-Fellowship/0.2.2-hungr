import { DataStore } from '@aws-amplify/datastore';
import { Restaurant, Room } from '../models';

class Database {
    /* Creates a room with an auto-generated ID, returns the ID */
    async createRoom(user) {
        let id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        await DataStore.save(new Room({
            code: id,
            restaurants: [],
            users: [user],
            current: null,
        }));
        return id;
    }

    /* Adds user to room with given code */
    async joinRoom(user, code) {
        //Dumb syntax
        const old = (await DataStore.query(Room, room => room.code("eq", code)))[0];
        console.log(old);
        await DataStore.save(
            Room.copyOf(old, updated => {
                //more dumb syntax
                updated.users = old.users.concat([user]);
                updated.size = old.size + 1;
            })
        );
    }

    /* Removes user from room with given code */
    async leaveRoom(user, code) {
        //Dumb syntax
        const old = (await DataStore.query(Room, room => room.code("eq", code)))[0];
        console.log(old);
        await DataStore.save(
            Room.copyOf(old, updated => {
                // Filter the old array and keep all users not equal to the user we want to remove
                updated.users = old.users.filter(u => u != user);
                updated.size = old.size - 1;
            })
        );
    }

    /* Deletes all rooms with no users */
    async purgeRooms() {
        await DataStore.delete(Room, room => room.size("eq", 0));
    }

    /* Gets a room's data based on the code */
    async getRoom(code) {
        //Dumb syntax
        return (await DataStore.query(Room, room => room.code("eq", code)))[0];
    }

    /* Populate list of restaurants in a given room */
    async populateRestaurants(code, list) {
        const old = (await DataStore.query(Room, room => room.id("eq", code)))[0];
        await DataStore.save(
            Room.copyOf(old, updated => {
                updated.id = original.id,
                    updated.restaurants = list,
                    current = list[0]
            })
        );
    }
}

export {Database};
