import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index, invalidDrag, isSelected, toggleSelection }) => {
  const handleClick = (e) => {
    // Shift 키를 누르면 태스크 선택/해제 토글
    if (e.shiftKey) {
      toggleSelection(task.id);
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        // 콘텐츠 내용
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          invalidDrag={invalidDrag}
          isSelected={isSelected}
          onClick={handleClick}
        >
          <TaskTitle>{truncate(task.content.taskTitle, 18)}</TaskTitle>
          <TaskExplanation>{task.content.explanation}</TaskExplanation>
          {console.log(invalidDrag)}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;

const Container = styled.div`
  width: 90%;
  margin : ${(props) => props.isDragging ? "0px 0px 0px 13px" : "auto"};
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => props.isDragDisabled ? "lightgrey" : props.isDragging
      ? props.invalidDrag ? "red" : "lightgreen" : props.isSelected
      ? "lightblue"
      : "white"};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
`;

const TaskTitle = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 15px;
  font-size: 15px;
  font-weight: bolder;
`;
const TaskExplanation = styled.div`
  padding: 15px;
  font-size: 13px;
`;
