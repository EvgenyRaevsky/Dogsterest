export type TServerData = {
  id: number;
  url: string;
};

export type TData = {
  id: number;
  link: string;
  likes: number;
  isFavorite: boolean;
};

export const transformData = (data: TServerData[]): TData[] => {
  const newData: TData[] = [];
  data.map((post) => {
    newData.push({
      id: post.id,
      link: post.url,
      likes: Math.floor(Math.random() * 10),
      isFavorite: false,
    });
  });
  return newData;
};
