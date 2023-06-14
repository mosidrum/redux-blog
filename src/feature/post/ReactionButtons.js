/* eslint-disable */
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
  thumbsUp: '\u{1F44D}',
  wow: '\u{1F633}',
  heart: '\u{1F493}',
  rocket: '\u{1F680}',
  coffee: '\u{1F375}',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
    >
      {emoji}
      {' '}
      {post.reactions[name]}
    </button>
  ));

  return (
    <div>{reactionButtons}</div>
  );
};

export default ReactionButtons;
