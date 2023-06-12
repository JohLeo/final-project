import React from 'react';
import { Link } from 'react-router-dom';
import Button from './lib/Button';

export const Contact = () => {
  return (
    <>
      <p>I am contact page</p>
      <Link to="/">
        <Button
          type="submit"
          text="Return" />
      </Link>
    </>
  )
};