import { useSelector } from "react-redux";

export function usePublicGists() {
  return useSelector((state) => ({
    gistsList: state.gist.response,
  }));
}

export function useLoading() {
  return useSelector((state) => ({
    loading: state.gist.loading,
  }));
}
