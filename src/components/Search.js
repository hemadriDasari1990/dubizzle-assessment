import React, { useEffect, useState } from "react";
import { getPublicGists, getPublicGistsByName } from "../redux/actions/gist";

import Octicon from "react-octicon";
import styled from "styled-components";
import useDebounce from "./common/search";
import { useDispatch } from "react-redux";

const Search = () => {
  /* React Local States */
  const [queryString, setQueryString] = useState("");

  /* Custom hooks */
  const debouncedValue = useDebounce(queryString, 500);

  /* Redux hooks */
  const dispatch = useDispatch();

  /* React hooks */
  useEffect(() => {
    if (debouncedValue) {
      loadPublicGists(debouncedValue);
    } else {
      dispatch(getPublicGists());
    }
  }, [debouncedValue]);

  /* Event Handler Functions */
  const handleInput = (event) => {
    event.preventDefault();
    setQueryString(event.target.value);
  };

  const loadPublicGists = (searchValue) => {
    dispatch(getPublicGistsByName(searchValue));
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onChange={(e) => handleInput(e)}
          value={queryString}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
