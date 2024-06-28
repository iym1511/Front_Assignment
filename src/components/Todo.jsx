import React, { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import Column from "./Column";
import initialData from "../../initialData";

const Todo = () => {
  const [data, setData] = useState(initialData); // 초기 데이터 상태
  const [selectedTaskIds, setSelectedTaskIds] = useState([]); // 선택된 태스크 ID 배열 상태
  const [draggingTaskId, setDraggingTaskId] = useState(null); // 드래깅 중인 태스크 ID 상태
  const [invalidDrag, setInvalidDrag] = useState(false); // 유효하지 않은 드래그 상태

  // 드래그 시작 시 호출되는 콜백 함수
  const onDragStart = useCallback((start) => {
    const id = start.draggableId;
    // 선택된 태스크가 드래깅되는 태스크에 포함되지 않으면 선택을 업데이트
    if (!selectedTaskIds.includes(id)) {
      setSelectedTaskIds([id]);
    }
    // 현재 드래깅 중인 태스크 ID 설정
    setDraggingTaskId(id);
    console.log(start);
  }, [selectedTaskIds]);



  // 드래그 중 업데이트 시 호출되는 콜백 함수
  const onDragUpdate = useCallback((update) => {
    const { destination, source, draggableId } = update;
    // 목적지가 없는 경우, 즉 드롭이 가능한 영역이 아닌 경우 유효하지 않은 드래그로 설정
    if (!destination) {
      setInvalidDrag(true);
      return;
    }
    // 첫 번째 칼럼에서 세 번째 칼럼으로 이동하려는 경우 유효하지 않은 드래그로 설정
    if (source.droppableId === "column-1" && destination.droppableId === "column-3") {
      setInvalidDrag(true);
      return;
    }
    // 짝수 항목이 다른 짝수 항목 앞으로 이동하려는 경우 유효하지 않은 드래그로 설정
    const isDraggingItemEven = parseInt(draggableId.split("-")[1]) % 2 === 0;
    const isDestinationItemEven =
      destination &&
      parseInt(data.columns[destination.droppableId].taskIds[destination.index]?.split("-")[1]) % 2 === 0;
    console.log(destination.droppableId, destination.index, isDestinationItemEven)
    if (isDraggingItemEven && isDestinationItemEven) {
      setInvalidDrag(true);
      return;
    }

    // 위의 조건에 해당되지 않으면 유효한 드래그로 설정
    setInvalidDrag(false);
  }, [data]);



  // 드래그 종료 시 호출되는 콜백 함수
  const onDragEnd = useCallback((result) => {
    // source : 이전 목적지
    // destination : 목적지
    const { destination, source, draggableId } = result;

    // 드래그 상태 초기화
    setDraggingTaskId(null);
    setInvalidDrag(false);

    // 목적지가 없는 경우 함수 종료
    if (!destination) return;

    // 같은 위치로 이동한 경우 함수 종료 (이름과 index가 일치하면)
    if (destination.droppableId === source.droppableId && source.index === destination.index) return;


    // 짝수 항목이 다른 짝수 항목 앞으로 이동하려는 경우 함수 종료
    const isDraggingItemEven = parseInt(draggableId.split("-")[1]) % 2 === 0; // 홀,짝
    const isDestinationItemEven =
      destination &&
      parseInt(data.columns[destination.droppableId].taskIds[destination.index]?.split("-")[1]) % 2 === 0;
    
    // 선택한 task가 짝수이고 목적지가 짝수 (드래그로 밀려나기 때문에 앞쪽이 짝수인것처럼 보임)
    if (isDraggingItemEven && isDestinationItemEven) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

    // 같은 칼럼 내에서 이동하는 경우
    if (startColumn === finishColumn) {
      let newStartTaskIds = Array.from(startColumn.taskIds);
      selectedTaskIds.forEach((id) => {
        const taskIndex = newStartTaskIds.indexOf(id);
        if (taskIndex > -1) newStartTaskIds.splice(taskIndex, 1);
      });

      let newFinishTaskIds = newStartTaskIds;
      selectedTaskIds.forEach((id, index) => {
        newFinishTaskIds.splice(destination.index + index, 0, id);
      });

      const newColumn = {
        ...startColumn,
        taskIds: newFinishTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
    } else {
      // 다른 칼럼으로 이동하는 경우
      let newStartTaskIds = Array.from(startColumn.taskIds);
      let newFinishTaskIds = Array.from(finishColumn.taskIds);

      selectedTaskIds.forEach((id) => {
        const taskIndex = newStartTaskIds.indexOf(id);
        if (taskIndex > -1) newStartTaskIds.splice(taskIndex, 1);
      });

      selectedTaskIds.forEach((id, index) => {
        newFinishTaskIds.splice(destination.index + index, 0, id);
      });

      const newStartColumn = {
        ...startColumn,
        taskIds: newStartTaskIds,
      };

      const newFinishColumn = {
        ...finishColumn,
        taskIds: newFinishTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn,
        },
      };

      setData(newData);
    }
    console.log("뉴 데이터 : ", data)
    // 선택된 태스크 초기화
    setSelectedTaskIds([]);
  }, [data, selectedTaskIds]);

  // 태스크 선택/해제 토글 함수
  const toggleSelection = (taskId) => {
    setSelectedTaskIds((prevSelected) => {
      if (prevSelected.includes(taskId)) {
        return prevSelected.filter((id) => id !== taskId);
      }
      return [...prevSelected, taskId];
    });
  };

  return (
    <div>
      <header className="App-header">
        <DragDropContext
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {data.columnOrder.map((columnId, index) => {
                  const column = data.columns[columnId]; // 칼럼 별 객체 
                  const tasks = column.taskIds.map((taskId) => data.tasks[taskId]); // 칼럼별 배열 내용
                  return (
                    <Column
                      column={column}
                      tasks={tasks}
                      key={column.id}
                      index={index}
                      draggingTaskId={draggingTaskId}
                      invalidDrag={invalidDrag}
                      selectedTaskIds={selectedTaskIds}
                      toggleSelection={toggleSelection}
                    />
                  );
                })}
                {provided.placeholder}
                {console.log(provided)}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
`;
