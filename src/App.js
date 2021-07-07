import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Slot from './components/Slot/Slot';
import Sticker from './components/Sticker/Sticker';

import styles from './App.module.scss';

const stickerbook = {
  1: 'available',
  2: 'available',
  3: 'available'
}

const App = () => {
  const [stickerbookStatus, setStickerbookStatus] = useState(stickerbook);

  const onComplete = id => {
    setStickerbookStatus(stickerbookStatus => {
      const newStatus = { ...stickerbookStatus };
      newStatus[id] = 'completed';

      return newStatus
    });
  }

  const onDrag = id => {
    setStickerbookStatus(stickerbookStatus => {
      const newStatus = { ...stickerbookStatus };
      newStatus[id] = 'dragging';

      return newStatus
    });
  }

  const onDragStart = start => {
    if (start.draggableId === 'draggable-3') {
      onDrag(3);
    }
  };

  const onDragEnd = result => {
    if (result.draggableId === 'draggable-3' && result.destination?.droppableId === 'droppable-3') {
      onComplete(3);
    }
  };

  return (
    <div className="App">
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className={styles.stickerbook}>
          <div>
            {Object.keys(stickerbookStatus).map(slot => {
              return <Slot id={slot} completed={stickerbookStatus[slot] === 'completed'} droppable={stickerbookStatus[slot] === 'dragging'} key={slot} />
            })}
          </div>
          <div>
            {Object.keys(stickerbookStatus).map(slot => {
              return stickerbookStatus[slot] !== 'completed' ?
                <Droppable droppableId={`droppable-0${slot}`} type="STICKER" key={slot}>
                  {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <Sticker
                        id={slot}
                        draggable={true}
                      />
                    </div>
                  )}
                </Droppable>
                : ''
            })}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
