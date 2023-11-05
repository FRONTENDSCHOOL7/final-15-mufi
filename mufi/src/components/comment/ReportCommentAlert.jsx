import React from 'react';
import * as RCA from './ReportCommentAlertStyle';

export default function ReportCommentAlert({ setIsModalOpen }) {
  return (
    <RCA.CompleteReport>
      신고되었습니다.
      <RCA.CancelBtn
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        x
      </RCA.CancelBtn>
    </RCA.CompleteReport>
  );
}
