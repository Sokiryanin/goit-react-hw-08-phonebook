import { DeleteButton, List } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
