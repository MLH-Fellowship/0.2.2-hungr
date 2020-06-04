/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
      id
      name
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
      id
      name
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      restaurants {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      current {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      restaurants {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      current {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      restaurants {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      current {
        id
        name
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
