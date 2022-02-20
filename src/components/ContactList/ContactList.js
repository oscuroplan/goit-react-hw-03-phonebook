import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
