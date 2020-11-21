// 型定義ファイルは自分で実装できる
// 利点　import export を書かなくてもよい

type Todo = {
    text: string,
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;