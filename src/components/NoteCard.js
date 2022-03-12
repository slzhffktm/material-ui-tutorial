import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Avatar, CardContent, IconButton, Typography} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import { blue, green, pink, yellow } from '@mui/material/colors';

export default function NoteCard({note, handleDelete}) {
  const styles = {
    avatar: {
      backgroundColor: () => {
        if (note.category == 'work') {
          return yellow[700]
        }
        if (note.category == 'money') {
          return green[500]
        }
        if (note.category == 'todos') {
          return pink[500]
        }
        return blue[500]
      }
    }
  }

  return (
    <div>
      <Card 
        elevation={1}
      >
        <CardHeader
          avatar={
            <Avatar sx={styles.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined/>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
