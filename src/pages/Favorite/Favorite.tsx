import { Container, Typography } from "@mui/material";
import { useAppSelector } from "../../store/store";
import { selectPosts } from "../../store/selectors/dogsSelector";
import { Post } from "../../components/Post";

export const Favorite = () => {
  const posts = useAppSelector(selectPosts);
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
        The feed of your favorite publications
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
        {posts.length > 0 ? (
          posts.filter((post) => post.isFavorite).length > 0 ? (
            posts.map((post, i) => {
              if (post.isFavorite) {
                return <Post key={i} {...post} />;
              }
            })
          ) : (
            <Typography
              sx={{
                gridColumn: "1 / 5",
                textAlign: "center",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              There are no liked publications
            </Typography>
          )
        ) : (
          <Typography
            sx={{
              gridColumn: "1/5",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            No data available
          </Typography>
        )}
      </Container>
    </>
  );
};
