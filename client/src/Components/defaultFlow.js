// @flow
export type Comment = {|
  username: string,
  text: string,
|};

export type PostObj = {|
  username: string,
  timestamp: string,
  thumbnailUrl: string,
  imageUrl: string,
  comments: Array<Object>,
  likes: number,
|};
