export interface ITodo {
  id: number;
  title: string;
}

export async function fetchTodos(): Promise<ITodo[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error('todos fetching failed for ==> ', error);
    return [];
  }
}
