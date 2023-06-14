import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: '1',
    title:'Learn redux toolkit',
    content: "I've heard good things about redux",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    }
  },
  {
    id: '2',
    title: 'Learn to play drum',
    content: "I've heard good things about drumming",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    }
  }
]

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
    reducer(state, action) {
      state.push(action.payload)
    },
    prepare(title, content, userId) {
      return {
        payload : {
          id: nanoid(),
          title,
          date: new Date().toISOString(),
          content,
          userId,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
        }
      }
    }
  },
  reactionAdded(state, action) {
    const { postId, reaction } = action.payload;
    const existingPost = state.find(post => post.id === postId);
    if (existingPost) {
      existingPost.reactions[reaction]++;
    }
  }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
