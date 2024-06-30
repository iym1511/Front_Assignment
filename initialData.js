const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: {
      taskTitle : "Handmade Wooden Crafted",
      explanation : "This is a description of the task 1."
    }},
    "task-2": { id: "task-2", content: {
      taskTitle : "Antique Bronze Jewelry",
      explanation : "This is a description of the task 2."
    }},
    "task-3": { id: "task-3", content: {
      taskTitle : "Artisan Silver Pendant",
      explanation : "This is a description of the task 3."
    }},
    "task-4": { id: "task-4", content: {
      taskTitle : "Handcrafted Leather Bag",
      explanation : "This is a description of the task 4."
    }},
    "task-5": { id: "task-5", content: {
      taskTitle : "Hand-painted Ceramic Plate",
      explanation : "This is a description of the task 5."
    }},
    "task-6": { id: "task-6", content: {
      taskTitle : "Vintage Crystal Vase",
      explanation : "This is a description of the task 6."
    }},
    "task-7": { id: "task-7", content: {
      taskTitle : "Handmade Wooden Chess Set",
      explanation : "This is a description of the task 7."
    }},
    "task-8": { id: "task-8", content: {
      taskTitle : "Artisan Glass Sculpture",
      explanation : "This is a description of the task 8."
    }},
    "task-9": { id: "task-9", content: {
      taskTitle : "Handcrafted Leather Wallet",
      explanation : "This is a description of the task 9."
    }},
    "task-10": { id: "task-10", content: {
      taskTitle : "Hand-woven Silk Scarf",
      explanation : "This is a description of the task 10."
    }},
    "task-11": { id: "task-11", content: {
      taskTitle : "Artisan Ceramic Bowl",
      explanation : "This is a description of the task 11."
    }},
    "task-12": { id: "task-12", content: {
      taskTitle : "Hand-blown Glass Vase",
      explanation : "This is a description of the task 12."
    }},
    "task-13": { id: "task-13", content: {
      taskTitle : "Hand-carved Wooden Spoon",
      explanation : "This is a description of the task 13."
    }},
    "task-14": { id: "task-14", content: {
      taskTitle : "Antique Silver Bracelet",
      explanation : "This is a description of the task 14."
    }},
    "task-15": { id: "task-15", content: {
      taskTitle : "Hand-painted Silk Scarf",
      explanation : "This is a description of the task 15."
    }},
    "task-16": { id: "task-16", content: {
      taskTitle : "Artisan Wooden Chair",
      explanation : "This is a description of the task 16."
    }},
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Column 1",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Column 2",
      taskIds: ["task-5", "task-6", "task-7", "task-8"],
    },
    "column-3": {
      id: "column-3",
      title: "Column 3",
      taskIds: ["task-9", "task-10", "task-11", "task-12"],
    },
    "column-4": {
      id: "column-4",
      title: "Column 4",
      taskIds: ["task-13", "task-14", "task-15", "task-16"],
    },
  },
  
  // 칼럼의 재정렬을 용이하게
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
