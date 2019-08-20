import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, SearchGroup } from './styles';

export default function ToolsSearch() {
  return (
    <Container>
      <SearchGroup>
        <MdSearch size={25} color="#B1ADB9" />
        <input type="text" placeholder="search" />
      </SearchGroup>
      <input type="checkbox" /> search in tags only
    </Container>
  );
}
