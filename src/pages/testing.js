import React from 'react'
import Layout from '../components/layout'

const testing = () => {
  // cmd shift $ to multi line comment
  fetch('https://server.livingdocs.io/api/v1/documents/latestPublications?limit=5', {
    headers: new Headers({
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo',

      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    })
  }).then(res => res.json().then(data => console.log(data)))
  // fetch(
  //   'https://server.livingdocs.io/api/v1/documents/4958/latestPublication',
  //   {
  //     headers: new Headers({
  //       Authorization:
  //         'Bearer ' +
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo',

  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: 'application/json',
  //     }),
  //   }
  // ).then(res => res.json().then(data => console.log(data)))
  return <Layout />
}

export default testing
