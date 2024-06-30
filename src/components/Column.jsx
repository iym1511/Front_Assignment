import React from "react";
import styled from "@emotion/styled";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ column, tasks, draggingTaskId, invalidDrag, selectedTaskIds, toggleSelection }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver} // style지정
          >
            {tasks.map((task, idx) => (
              <Task
                key={task.id}
                task={task}
                index={idx}
                isDragging={task.id === draggingTaskId}
                invalidDrag={invalidDrag}
                isSelected={selectedTaskIds.includes(task.id)}
                toggleSelection={toggleSelection}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 290px;
  height: max-content;
  margin: 10px;
  `;

const Title = styled.h3`
  padding: 18px 25px 10px;
  font-weight: lighter;
  color: #5f5f5f;
  margin-bottom: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "RGB(224, 227, 235)")};
  `;

const TaskList = styled.div`
  padding: 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "RGB(224, 227, 235)")};
`;
