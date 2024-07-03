import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useGetPostsQuery } from "../../store/dogAPI";
import { TData } from "../../utils/transformData";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addData } from "../../store/slices/postSlice";
import { selectPosts } from "../../store/selectors/postSelector";
import { Post } from "../../components/Post";

export const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const { data = [], isLoading, isError } = useGetPostsQuery();

  useEffect(() => {
    if (data.length > 0 && posts.length === 0) {
      dispatch(addData(data));
    }
  }, [data, posts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "600",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Image and video feed
      </Typography>
      <Container
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          marginTop: 2,
          gap: 2,
        }}
      >
        {posts.map((post: TData, i) => (
          <Post key={i} {...post} />
        ))}
      </Container>
    </>
  );
};
