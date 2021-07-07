import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Sticker from '../Sticker/Sticker';

import styles from './Slot.module.scss';

const Slot = ({ id, completed, droppable }) => {

  return(
    <Droppable droppableId={`droppable-${id}`} type="STICKER" isDropDisabled={!droppable}>
      {(provided, snapshot) => (
        <div
          className={styles.Slot}
          ref={provided.innerRef}
          style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
          {...provided.droppableProps}
        >
          {completed
            ? <Sticker id={id} draggable={false} />
            : id
          }
        </div>
      )}
    </Droppable>
  )
}

export default Slot;