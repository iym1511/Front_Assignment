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
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 210px;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
  margin-bottom: 0;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
`;
