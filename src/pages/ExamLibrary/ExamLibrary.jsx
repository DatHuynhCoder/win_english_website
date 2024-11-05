import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { IoSearch } from "react-icons/io5";

import ListExam from './ListExam'

import './ExamLibrary.scss'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

import SearchButton from './SearchButton'
import { Link } from 'react-router-dom';

const RawListExamData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  },
  {
    title: 'Seventh slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic1
  }
]

const ListExamData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  },
  {
    title: 'Seventh slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic1
  }
]

const UserProfile = {
  name: "User",
  avatar: pic1
}

function ResponsiveExample({setSearch}) {
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
              <IoSearch size={25}/>
            </Button>
          </InputGroup>

          <SearchButton/>

        </div>
        <div className='ExamLibrary-UserProfile'>
          <img src={pic1} alt="avatar" className='ExamLibrary-UserProfile-Avatar'/>
          <h5 className='ExamLibrary-UserProfile-Name'>{UserProfile.name}</h5>
          <button className='ExamLibrary-UserProfile-MyProfileBtn' style={{borderRadius: '10px'}}>
            <Link to={'/user'} className='ExamLibrary-UserProfile-MyProfileBtn-Text'>Hồ sơ của tôi</Link>
          </button>
        </div>
      </div>
    </>
  );
}

const ExamLibrary = () => {
  const [search, setSearch]  = useState('')
  return (
    <div className='ExamLibrary-container'>
      <h1 style={{textAlign: 'center'}}>Thư viện đề thi</h1>
      <ResponsiveExample search={search} setSearch={setSearch}/>
      <ListExam search={search}/>
    </div>
  )
}

export default ExamLibrary