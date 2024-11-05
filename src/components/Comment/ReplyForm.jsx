/**
 * @author Tan Dat
 * @documentation https://codesandbox.io/p/github/swastikpatro/nested-comments/main?file=%2Fsrc%2Fconstants.ts
 */

import React, { useState } from 'react';
import { useReplyContext } from './Comment';
import { mainUser } from './mainUser';

import { FaPaperPlane } from "react-icons/fa";

import './ReplyForm.scss'; // Import the SCSS file

const ReplyForm = ({ isAddingAndParentId, closeForm, isEditingAndData }) => {
    const [inputText, setInputText] = useState(
        isEditingAndData ? isEditingAndData.text : ''
    );
    const { addReply, editReply } = useReplyContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = inputText.trim();

        if (!trimmedInput) {
            alert('Please enter some text in input');
            return;
        }

        if (isAddingAndParentId) {
            addReply(
                {
                    id: crypto.randomUUID(),
                    userData: mainUser,
                    text: trimmedInput,
                    replies: [],
                },
                isAddingAndParentId
            );

            setInputText('');
        }

        if (isEditingAndData) {
            editReply(trimmedInput, isEditingAndData.id);
        }

        if (closeForm) {
            closeForm();
        }
    };

    return (
        <form onSubmit={handleSubmit} className='reply-form'>
            {!isEditingAndData && (
                <div className='user-image'>
                    <img
                        src={mainUser.img}
                        alt={mainUser.username}
                    />
                </div>
            )}

            <input
                className='input-comment'
                value={inputText}
                onChange={({ target: { value } }) => setInputText(value)}
                placeholder='Chia sẻ cảm nghĩ của bạn...'
                autoFocus={true}
            />

            <div className='button-container'>
                <button
                    className='reply-button'
                    type='submit'
                >
                    <FaPaperPlane color='white' style={{marginRight: '5px'}} />
                    {isEditingAndData ? 'Cập nhật' : 'Gửi'}
                </button>

                {closeForm && (
                    <button
                        className='cancel-button'
                        onClick={closeForm}
                    >
                        Bỏ qua
                    </button>
                )}
            </div>
        </form>
    );
};

export default ReplyForm;
