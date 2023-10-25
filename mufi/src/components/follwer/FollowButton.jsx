import React from 'react';
import * as FB from './FollowButtonStyle';

export default function FollowButton({
  content,
  background,
  color,
  onClick,
  border,
}) {
  return (
    <FB.FollowButton
      background={background}
      color={color}
      onClick={onClick}
      border={border}
    >
      {content}
    </FB.FollowButton>
  );
}
