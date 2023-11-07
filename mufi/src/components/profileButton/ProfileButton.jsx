import React from 'react';
import * as PB from './ProfileButtonStyle';

export default function ProfileButton({
  content,
  background,
  color,
  onClick,
  border,
}) {
  return (
    <PB.ProfileButton
      background={background}
      color={color}
      onClick={onClick}
      border={border}
    >
      {content}
    </PB.ProfileButton>
  );
}
