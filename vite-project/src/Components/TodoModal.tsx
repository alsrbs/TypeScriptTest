import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { FaPen } from 'react-icons/fa';
import style from './TodoModal.module.css'

interface PropTypes {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    modifyContents: string;
    setModifyContents: Dispatch<SetStateAction<string>>;
    onModifyTodo: () => void;
  }
  
  const TodoModal = ({
    setIsModal,
    modifyContents,
    setModifyContents,
    onModifyTodo,
  }: PropTypes): JSX.Element => {
    const onCloseModal = useCallback((): void => {
      setIsModal(false);
    }, [setIsModal]);
  
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyContents(value);
    }, [setModifyContents]);
    
    return (
      <>
        <div className={style.TodoModalOverlay} onClick={onCloseModal}></div>
        <div className={style.TodoModal}>
          <div className={style.TodoModalTitle}>
            <div>Todo 수정하기</div>
            <FaPen />
          </div>
  
          <div className={style.TodoModalContents}>
            <input
              type='text'
              className={style.TodoModalContentsInput}
              value={modifyContents}
              onChange={onChange}
              placeholder='Todo 입력'
            />
  
            <button
              className={style.TodoModalContentsButton}
              onClick={onModifyTodo}
            >
              수정하기
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default TodoModal;