
import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { IoSearch } from "react-icons/io5";

import ListExam from './ListExam'

import './ExamLibrary.scss'

import SearchButton from './SearchButton'
import { Link } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { ContextStore } from '../../context/Context';
import axios from 'axios';

import DefaultAvatar from '../../assets/galaxy_slayer_Zed.jpg'

function ResponsiveExample({ setSearch, user }) {
  return (
    <>
      <div className='ExamLibrary-head'>
        <div className='ExamLibrary-SearchingBar'>
          <InputGroup className="mb-3 searching-bar">
            <Form.Control
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <IoSearch size={25} />
            </Button>
          </InputGroup>

          <SearchButton />

        </div>
        <div className="ExamLibrary-UserProfile">
          {user.length > 0 ? (
            <>
              <img src={user[0].useravatarurl || DefaultAvatar} alt="avatar" className="ExamLibrary-UserProfile-Avatar" />
              <h5 className="ExamLibrary-UserProfile-Name">{user[0].username || "Unknown User"}</h5>
              <button className='ExamLibrary-UserProfile-MyProfileBtn' style={{ borderRadius: '10px' }}>
                <Link to={'/user'} className='ExamLibrary-UserProfile-MyProfileBtn-Text'>Hồ sơ của tôi</Link>
              </button>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>

      </div>
    </>
  );
}

const ExamLibrary = () => {
  const { accessToken, setAccessToken, userid, setUserid } = useContext(ContextStore);
  const [search, setSearch] = useState('');
  //get user data
  const [user, setUser] = useState([]);


  //use axios to request get-user-by-id
  useEffect(() => {
    if (accessToken && userid) {
      const getUserById = async () => {
        try {
          const response = await axios.get('http://localhost:8081/get-user-by-id', {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: { userid }
          });
          console.log("API Response:", response.data);
          if (response.data && response.data.length > 0) {
            setUser(response.data);
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.response || error.message);
        }
      };
      getUserById();
    } else {
      console.warn("Missing accessToken or userid");
    }
  }, [accessToken, userid]);


  return (
    <div className='ExamLibrary-container'>
      <h1 style={{ textAlign: 'center' }}>Thư viện đề thi</h1>
      <ResponsiveExample search={search} setSearch={setSearch} user={user} />
      <ListExam search={search} />
    </div>
  )
}

export default ExamLibrary