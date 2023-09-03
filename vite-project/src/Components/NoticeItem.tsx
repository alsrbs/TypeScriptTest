import React, { useCallback, useState } from 'react';
import { ITodoTypes } from '../recoil/todo';
import { FaPen } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { SetterOrUpdater } from 'recoil';

import style from './NoticeItem.module.css'
import TodoModal from './TodoModal';

interface PropTypes {
    id: number;
    title:string;
    contents: string;
    isCompleted: boolean;
    
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    
    todos: ITodoTypes[];
    setTodos: SetterOrUpdater<ITodoTypes[]>;
  }

const NoticeItem = ({
    id,
    contents,
    isCompleted,
    onComplete,
    onDelete,
    todos,
    setTodos,
    }: PropTypes): JSX.Element => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [modifyContents, setModifyContents] = useState<string>('');

    const onModify = useCallback((): void => {
        setIsModal(true);
        setModifyContents(contents);
        // 선택한 Todo의 내용을 default value로 지정하는 작업
    }, [contents]);

    const onModifyTodo = useCallback((): void => {
        if (!modifyContents.trim()) {
        return;
        }

        // Todo 업데이트 확인을 눌렀을때 객체 업데이트
        setTodos(todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
        }));

        setIsModal(false);
    }, [id, modifyContents, setTodos, todos]);

    return (
        <>
            <div className={style.NoticeItem}>
                <div
                    title={contents}
                    className={isCompleted ? style.TodoItemCompleted : ''}
                    onClick={() => onComplete(id)}
                >
                {contents}
                </div>

                <div className={style.TodoItemIcons}>
                    <FaPen className={style.TodoItemIconsPen} onClick={onModify} />
                    <MdClose className={style.TodoItemIconsClose} onClick={() => onDelete(id)} />
                </div>
            </div>
            <hr className={style.NoticeItemHr}/>
            {
                isModal &&
                <TodoModal
                    setIsModal={setIsModal}
                    modifyContents={modifyContents}
                    setModifyContents={setModifyContents}
                    onModifyTodo={onModifyTodo}
                />
                }
        </>
    );
};

export default NoticeItem