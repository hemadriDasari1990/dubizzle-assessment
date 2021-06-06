import React, { Suspense, useEffect, useState } from "react";
import { useLoading, usePublicGists } from "../redux/state/gist";

import Loader from "./common/loader";
import { getPublicGists } from "../redux/actions/gist";
import { useDispatch } from "react-redux";

const GistsList = React.lazy(() => import("./GistList"));

const Gist = (props) => {
  const {} = props;

  /* Redux hooks */
  const dispatch = useDispatch();

  /* Redux states */
  const { gistsList } = usePublicGists();
  const { loading } = useLoading();

  /* React local states */
  const [gists, setGists] = useState(gistsList || []);

  /* React hooks */

  // Fetch public gists after first render
  useEffect(() => {
    dispatch(getPublicGists());
  }, []);

  /* Listen to gist data from redux store and set in local state */
  useEffect(() => {
    if (Array.isArray(gistsList)) {
      setGists(gistsList);
    }
  }, [gistsList]);

  return (
    <Suspense fallback={<div></div>}>
      <div data-testid="loader">
        <Loader enable={loading} />
      </div>
      <GistsList gistsList={gists} />
    </Suspense>
  );
};

export default Gist;
