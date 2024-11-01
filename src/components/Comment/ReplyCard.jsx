/**
 * @author Tan Dat
 * @documentation https://codesandbox.io/p/github/swastikpatro/nested-comments/main?file=%2Fsrc%2Fconstants.ts
 */

import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaEdit, FaTrash } from 'react-icons/fa';
import ReplyForm from './ReplyForm';
import { useReplyContext } from './Comment';
import { mainUser } from './mainUser';

import './ReplyCard.scss'

const ReplyCard = ({ replyData }) => {
    const {
        activeEditReplyId,
        updateActiveEditReplyId,
        deleteReply,
        cancelActiveEditReplyId,
    } = useReplyContext();

    const {
        id,
        replies,
        userData: { img, username, id: userId },
        text,
        isDeleted,
    } = replyData;

    const isReplyCurrentlyEditing = activeEditReplyId === id;

    const [isRepliesVisible, setIsRepliesVisible] = useState(true);

    const [isReplying, setIsReplying] = useState(false);

    const toggleIsReplying = () => {
        if (!isReplying && !!activeEditReplyId) {
            cancelActiveEditReplyId();
        }
        setIsReplying(!isReplying);
    };

    return (
        <article className="reply-card">
            <header className="reply-header">
                <div className="reply-avatar">
                    <img src={img} alt={username} className="avatar-image" />
                </div>

                {isDeleted ? (
                    <span className="deleted-reply-text">
                        Phản hồi bị xóa bởi {username}
                    </span>
                ) : (
                    <h2 className="username">{username}</h2>
                )}
            </header>

            <div className="reply-content">
                <main className={isReplyCurrentlyEditing ? 'editing-padding' : 'default-padding'}>
                    {isReplyCurrentlyEditing ? (
                        <ReplyForm
                            isEditingAndData={replyData}
                            isAddingAndParentId={null}
                            closeForm={cancelActiveEditReplyId}
                        />
                    ) : (
                        <>
                            {!isDeleted && <p className="reply-text">{text}</p>}

                            <div className="reply-actions">
                                {replies.length > 0 && (
                                    <button
                                        className="toggle-replies-btn"
                                        onClick={() => setIsRepliesVisible(!isRepliesVisible)}
                                    >
                                        <span className="caret-icon">
                                            {isRepliesVisible ? <FaCaretDown /> : <FaCaretUp />}
                                        </span>
                                        {replies.length} phản hồi
                                    </button>
                                )}

                                <button onClick={toggleIsReplying} className="reply-btn">
                                    Phản hồi
                                </button>

                                {userId === mainUser.id && !isDeleted && (
                                    <>
                                        <button onClick={() => updateActiveEditReplyId(id)} className="edit-btn">
                                            <FaEdit />
                                        </button>

                                        <button onClick={() => deleteReply(id)} className="delete-btn">
                                            <FaTrash />
                                        </button>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </main>

                {isRepliesVisible && (
                    <div className="replies-list">
                        {replies.map((reply) => (
                            <ReplyCard replyData={reply} key={reply.id} />
                        ))}
                    </div>
                )}

                {isReplying && (
                    <div className="reply-form-container">
                        <ReplyForm
                            isEditingAndData={null}
                            isAddingAndParentId={id}
                            closeForm={toggleIsReplying}
                        />
                    </div>
                )}
            </div>
        </article>

    );
};

export default ReplyCard;
