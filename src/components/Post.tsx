import { Card, CardMedia, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch } from "../store/store";
import { addFavorite } from "../store/slices/postSlice";
import { TData } from "../utils/transformData";

export const Post = ({ ...props }: TData) => {
  const dispatch = useAppDispatch();
  const { id, link, likes, isFavorite } = props;

  const handleLike = (id: number) => {
    dispatch(addFavorite(id));
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "none",
        boxShadow: "none",
        gap: 2,
      }}
    >
      <CardMedia
        component="img"
        src={link}
        alt="dogs"
        sx={{
          width: "100%",
          height: "300px",
          borderRadius: "25px",
          objectFit: "cover",
        }}
      />
      <Stack
        sx={{
          padding: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>{likes}</Typography>
        {isFavorite ? (
          <FavoriteBorderIcon
            sx={{ cursor: "pointer", color: "crimson" }}
            onClick={() => handleLike(id)}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{ cursor: "pointer", color: "black" }}
            onClick={() => handleLike(id)}
          />
        )}
      </Stack>
    </Card>
  );
};
