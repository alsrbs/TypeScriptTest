import { atom } from "recoil";

export interface ITodoTypes {
    id: number;
    contents: string;
    isCompleted: boolean;
  }

// TodoInput에서 입력하는 값을 atom으로 관리하는 방식
export const inputState = atom<string>({
    key: 'inputState',
    default: '',
  });
  
  // 업데이트 시킬 Todos atom 배열
  export const todosState = atom<ITodoTypes[]>({
    key: 'todos',
    
    // default에는 임의의 데이터를 넣어줍시다.
    default: [
    ],
  });