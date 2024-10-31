import React, { useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { IoSearch } from "react-icons/io5";

import './ExamLibrary.scss'

const data = [{
  "id": 1,
  "first_name": "Larissa",
  "last_name": "Rupprecht",
  "email": "lrupprecht0@dailymotion.com",
  "phone": "2498380214"
}, {
  "id": 2,
  "first_name": "Marget",
  "last_name": "Lindeman",
  "email": "mlindeman1@canalblog.com",
  "phone": "5088987325"
}, {
  "id": 3,
  "first_name": "Lisa",
  "last_name": "Scholer",
  "email": "lscholer2@paginegialle.it",
  "phone": "1105637431"
}, {
  "id": 4,
  "first_name": "Chevalier",
  "last_name": "Satford",
  "email": "csatford3@printfriendly.com",
  "phone": "8768108056"
}, {
  "id": 5,
  "first_name": "Effie",
  "last_name": "Covotti",
  "email": "ecovotti4@51.la",
  "phone": "9408877961"
}, {
  "id": 6,
  "first_name": "Atlante",
  "last_name": "Heinsius",
  "email": "aheinsius5@altervista.org",
  "phone": "7032145037"
}, {
  "id": 7,
  "first_name": "Dorolice",
  "last_name": "Broker",
  "email": "dbroker6@businesswire.com",
  "phone": "3538676811"
}, {
  "id": 8,
  "first_name": "Althea",
  "last_name": "Stonehouse",
  "email": "astonehouse7@businessinsider.com",
  "phone": "4123681302"
}, {
  "id": 9,
  "first_name": "Foss",
  "last_name": "Maren",
  "email": "fmaren8@sciencedirect.com",
  "phone": "3868381168"
}, {
  "id": 10,
  "first_name": "Durant",
  "last_name": "Bampforth",
  "email": "dbampforth9@etsy.com",
  "phone": "4606236323"
}, {
  "id": 11,
  "first_name": "Idalina",
  "last_name": "Canedo",
  "email": "icanedoa@4shared.com",
  "phone": "1331296799"
}, {
  "id": 12,
  "first_name": "Rockwell",
  "last_name": "Spirritt",
  "email": "rspirrittb@elegantthemes.com",
  "phone": "4066431166"
}, {
  "id": 13,
  "first_name": "Lena",
  "last_name": "Hundley",
  "email": "lhundleyc@yahoo.co.jp",
  "phone": "4172681921"
}, {
  "id": 14,
  "first_name": "Bertina",
  "last_name": "Brettell",
  "email": "bbrettelld@cbsnews.com",
  "phone": "6782780727"
}, {
  "id": 15,
  "first_name": "Fanya",
  "last_name": "Donlon",
  "email": "fdonlone@bloomberg.com",
  "phone": "2528401575"
}, {
  "id": 16,
  "first_name": "Eran",
  "last_name": "Cruickshank",
  "email": "ecruickshankf@google.com",
  "phone": "2256401931"
}, {
  "id": 17,
  "first_name": "Rudie",
  "last_name": "McQuorkel",
  "email": "rmcquorkelg@g.co",
  "phone": "8892537761"
}, {
  "id": 18,
  "first_name": "Danice",
  "last_name": "MacGilrewy",
  "email": "dmacgilrewyh@army.mil",
  "phone": "2145742338"
}, {
  "id": 19,
  "first_name": "Chrissy",
  "last_name": "Rosiello",
  "email": "crosielloi@reddit.com",
  "phone": "7047332252"
}, {
  "id": 20,
  "first_name": "Fancy",
  "last_name": "Morad",
  "email": "fmoradj@istockphoto.com",
  "phone": "7368226521"
}, {
  "id": 21,
  "first_name": "Thaddus",
  "last_name": "Gasquoine",
  "email": "tgasquoinek@ucoz.ru",
  "phone": "8956456856"
}, {
  "id": 22,
  "first_name": "Juli",
  "last_name": "Beebee",
  "email": "jbeebeel@time.com",
  "phone": "5077411042"
}, {
  "id": 23,
  "first_name": "Malissia",
  "last_name": "Hurtado",
  "email": "mhurtadom@w3.org",
  "phone": "3106691611"
}, {
  "id": 24,
  "first_name": "Eleonore",
  "last_name": "Neesam",
  "email": "eneesamn@sina.com.cn",
  "phone": "3443326932"
}, {
  "id": 25,
  "first_name": "Ansel",
  "last_name": "Antoniewski",
  "email": "aantoniewskio@army.mil",
  "phone": "9096627927"
}, {
  "id": 26,
  "first_name": "Augusta",
  "last_name": "Allcott",
  "email": "aallcottp@jiathis.com",
  "phone": "5577492389"
}, {
  "id": 27,
  "first_name": "Brennan",
  "last_name": "Brockie",
  "email": "bbrockieq@rakuten.co.jp",
  "phone": "3193560480"
}, {
  "id": 28,
  "first_name": "Vincent",
  "last_name": "Gofforth",
  "email": "vgofforthr@themeforest.net",
  "phone": "1812609744"
}, {
  "id": 29,
  "first_name": "Conroy",
  "last_name": "Kleinzweig",
  "email": "ckleinzweigs@tmall.com",
  "phone": "4091107188"
}, {
  "id": 30,
  "first_name": "Aluino",
  "last_name": "McCully",
  "email": "amccullyt@omniture.com",
  "phone": "3957569904"
}]

function ResponsiveExample() {
  const [search, setSearch]  = useState('')
  return (
    <>
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

      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>first-name</th>
            <th>last-name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((item) => {
              return search.toLowerCase() === '' 
                      ? 
                        item 
                      : 
                        (item.first_name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                          ||
                          item.last_name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                          ||
                          item.email
                          .toLowerCase()
                          .includes(search.toLowerCase())
                          ||
                          item.phone
                          .toLowerCase()
                          .includes(search.toLowerCase())
                        )
                          
            }).map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
}

const ExamLibrary = () => {
  return (
    <div className='ExamLibrary-container'>
      <h1 style={{textAlign: 'center'}}>Thư viện đề thi</h1>
      <div className='table-container'></div>
      <ResponsiveExample/>
    </div>
  )
}

export default ExamLibrary