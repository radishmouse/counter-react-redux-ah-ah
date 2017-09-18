import React from 'react';

let UndoRedo = ({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
}) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

export default UndoRedo;
