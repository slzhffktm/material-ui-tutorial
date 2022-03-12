import React, {useEffect, useState} from 'react'
import {Box, Container, Grid, Paper} from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from 'react-masonry-css';

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {notes.map(note => (
          <Box>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Box>
        ))}
      </Masonry>
      
    </Container>
  )
}
