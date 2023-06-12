import React from 'react';
import { Link } from 'react-router-dom';
import Button from './lib/Button';

export const PrivacyPolicy = () => {
  return (
    <>
      <p>I am privacy policy component</p>
      <Link to="/">
        <Button
          type="submit"
          text="Return" />
      </Link>
    </>
  )
}