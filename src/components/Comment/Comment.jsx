/**
 * @author Tan Dat
 * @documentation https://codesandbox.io/p/github/swastikpatro/nested-comments/main?file=%2Fsrc%2Fconstants.ts
 */
import ReplyForm from './ReplyForm';
import ReplyCard from './ReplyCard';

import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import {
    addNode,
    deleteNode,
    editNode,
    addCommentsInLocalStorage,
    getCommentsFromLocalStorage,
} from './utils';

import ZedImg from "../../assets/galaxy_slayer_Zed.jpg"
import ChuatebongtoiAvt from "../../assets/chuatebongtoi_avatar.png"
import QaAvt from "../../assets/QA_avt.png" 

import './Comment.scss'

const ReplyContext = createContext(null);

export const useReplyContext = () => useContext(ReplyContext);

const Comment = () => {
    const replies = {
        id: 'root',
        replies: [
            {
                id: 'comment1',
                isDeleted: false,
                text: 'Chủ nhật thằng nào không làm xong deadline tự động chặt cu',
                userData: {
                    id: 'a',
                    username: 'Anh Đạt gia trưởng',
                    img: ZedImg,
                },
                replies: [
                    {
                        id: 'reply1',
                        isDeleted: false,
                        text: 'Có áp dụng với nhóm trưởng ko anh Đạt',
                        userData: {
                            id: 'b',
                            username: 'Chuatebongtoi',
                            img: ChuatebongtoiAvt,
                        },
                        replies: [
                            {
                                id: 'reply2',
                                isDeleted: false,
                                text: 'Tất nhiên là ko r',
                                userData: {
                                    id: 'a',
                                    username: 'Anh Đạt gia trưởng',
                                    img: ZedImg,
                                },
                                replies: [
                                    {
                                        id: 'reply1000',
                                        isDeleted: false,
                                        text: 'Dạ anh',
                                        userData: {
                                            id: 'b',
                                            username: 'Chuatebongtoi',
                                            img: ChuatebongtoiAvt,
                                        },
                                        replies: [
                                            {
                                                id: 'reply1002',
                                                isDeleted: false,
                                                text: 'Oke e',
                                                userData: {
                                                    id: 'a',
                                                    username: 'Anh Đạt gia trưởng',
                                                    img: ZedImg,
                                                },
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'reply1001',
                        isDeleted: false,
                        text: 'Dạ anh em đã hiểu',
                        userData: {
                            id: 'f',
                            username: 'Question and Answer',
                            img: QaAvt,
                        },
                        replies: [],
                    },
                ],
            },
        ],
    };

    const [allComments, setAllComments] = useState(
        getCommentsFromLocalStorage() ?? replies
    );
    const [activeEditReplyId, setActiveEditReplyId] = useState('');

    const cancelActiveEditReplyId = () => setActiveEditReplyId('');

    const updateActiveEditReplyId = (replyId) => setActiveEditReplyId(replyId);

    const addReply = (replyDataToAdd, parentId) => {
        const allCommentsClone = structuredClone(allComments);

        addNode(allCommentsClone, replyDataToAdd, parentId);
        setAllComments(allCommentsClone);
        addCommentsInLocalStorage(allCommentsClone);
    };

    const editReply = (edittedText, replyIdForEdit) => {
        const allCommentsClone = structuredClone(allComments);

        editNode(allCommentsClone, edittedText, replyIdForEdit);

        setAllComments(allCommentsClone);
        cancelActiveEditReplyId();
        addCommentsInLocalStorage(allCommentsClone);
    };

    const deleteReply = (replyId) => {
        const allCommentsClone = structuredClone(allComments);

        deleteNode(allCommentsClone, replyId);
        setAllComments(allCommentsClone);
        addCommentsInLocalStorage(allCommentsClone);
    };

    return (
        <div className="comment-container">
            <div className="comment-title">Bình luận</div>
            <ReplyContext.Provider
                value={{
                    allComments,
                    addReply,
                    editReply,
                    deleteReply,
                    cancelActiveEditReplyId,
                    activeEditReplyId,
                    updateActiveEditReplyId,
                }}
            >
                <ReplyForm
                    isEditingAndData={null}
                    isAddingAndParentId={allComments.id}
                    closeForm={null}
                />

                <div className='main-comment'>
                    {allComments.replies.map((reply) => (
                        <ReplyCard replyData={reply} key={reply.id} />
                    ))}
                </div>
            </ReplyContext.Provider>
        </div>
    )
}

export default Comment;