import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <div>{isLoading && 'Request in progress...'}</div>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
}
