/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          numOfLikes
          numOfComments
          numOfShares
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          numOfLikes
          numOfComments
          numOfShares
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          numOfLikes
          numOfComments
          numOfShares
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      videoUri
      description
      numOfLikes
      numOfComments
      numOfShares
      userID
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        imageUri
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      videoUri
      description
      numOfLikes
      numOfComments
      numOfShares
      userID
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        imageUri
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      videoUri
      description
      numOfLikes
      numOfComments
      numOfShares
      userID
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        imageUri
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      imageUri
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      imageUri
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      imageUri
      name
      createdAt
      updatedAt
    }
  }
`;
