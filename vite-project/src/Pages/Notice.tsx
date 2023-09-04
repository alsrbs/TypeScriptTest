import React, { useCallback, useState  } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, ITodoTypes } from '../recoil/todo';

import style from './Notice.module.css'
import NoticeTitle from '../Components/NoticeTitle';
import NoticeItem from '../Components/NoticeItem';
import TodoInput from '../Components/TodoInput';

const Notice = (): JSX.Element => {

    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const onComplete = useCallback((id: number): void => {
        setTodos(todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
        }));
    }, [setTodos, todos]);

    const onDelete = useCallback((id: number) => {
        setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
    }, [setTodos, todos]);

    // 검색 기능을 위한 필터링 함수
    const filteredTodos = todos.filter((todo: ITodoTypes) =>
        todo.contents.toLowerCase().includes(searchKeyword.toLowerCase())
    );


    return (
        <div className={style.Notice}>
            <div className={style.title}>
            <NoticeTitle/>
            </div>
            <div>
                <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className={style.SearchBar}
                />
            </div>
            <div className={`${style.NoticeBox} ${style.scrollableContainer}`}>
                {filteredTodos.length > 0 ? (
                filteredTodos.map((todo: ITodoTypes) => (
                    <NoticeItem
                    key={todo.id}
                    id={todo.id}
                    contents={todo.contents}
                    isCompleted={todo.isCompleted}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    todos={todos}
                    setTodos={setTodos}
                    />
                ))
                ) : todos.length > 0 ? (
                    <div className={style.TodoListNoList}>검색 결과가 없습니다.</div>
                  ) : (
                    <div className={style.TodoListNoList}>작성글이 없습니다. 새로운 항목을 추가해주세요.</div>
                  )}
            </div>
            <TodoInput/>
        </div>
    );
}

export default Notice;
