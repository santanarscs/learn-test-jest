import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { MdSearch } from 'react-icons/md';

import { getToolsRequest } from '~/store/modules/tools/actions';

import { Container, SearchGroup } from './styles';

export default function ToolsSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);
  const [term] = useDebounce(searchTerm, 500);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToolsRequest({ term, tagsOnly }));
  }, [term, tagsOnly, dispatch]);

  return (
    <Container>
      <SearchGroup>
        <MdSearch size={25} color="#B1ADB9" />
        <input
          aria-label="search-input"
          id="search-input"
          type="text"
          placeholder="search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </SearchGroup>
      <input
        type="checkbox"
        aria-label="search-checkbox"
        id="search-checkbox"
        onChange={e => setTagsOnly(e.target.checked)}
      />{' '}
      search in tags only
    </Container>
  );
}
