const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "task-1" },
    "task-2": { id: "task-2", content: "task-2" },
    "task-3": { id: "task-3", content: "task-3" },
    "task-4": { id: "task-4", content: "task-4" },
    "task-5": { id: "task-5", content: "task-5" },
    "task-6": { id: "task-6", content: "task-6" },
    "task-7": { id: "task-7", content: "task-7" },
    "task-8": { id: "task-8", content: "task-8" },
    "task-9": { id: "task-9", content: "task-9" },
    "task-10": { id: "task-10", content: "task-10" },
    "task-11": { id: "task-11", content: "task-11" },
    "task-12": { id: "task-12", content: "task-12" },
    "task-13": { id: "task-13", content: "task-13" },
    "task-14": { id: "task-14", content: "task-14" },
    "task-15": { id: "task-15", content: "task-15" },
    "task-16": { id: "task-16", content: "task-16" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "column-1",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "column-2",
      taskIds: ["task-5", "task-6", "task-7", "task-8"],
    },
    "column-3": {
      id: "column-3",
      title: "column-3",
      taskIds: ["task-9", "task-10", "task-11", "task-12"],
    },
    "column-4": {
      id: "column-4",
      title: "column-4",
      taskIds: ["task-13", "task-14", "task-15", "task-16"],
    },
  },
  
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;