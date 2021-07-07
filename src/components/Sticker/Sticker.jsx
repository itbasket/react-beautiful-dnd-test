import React from 'react';

import styles from './Sticker.module.scss';
import {Draggable} from 'react-beautiful-dnd';

const Sticker = ({ id, draggable, onDrag, onDragCancel }) => {

  return(
    <Draggable draggableId={`draggable-${id}`} index={id} isDragDisabled={!draggable}>
      {(provided, snapshot) => (
          <div
            className={styles.Sticker}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {id}
          </div>
      )}
    </Draggable>
  );
}

export default Sticker;