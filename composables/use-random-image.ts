export interface Image {
  id: number;
  download_url: string;
}

export const useRandomImage = async (count = 5) => {
  const page = Math.round(Math.random() * 10);
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${count}`;

  return fetch(url).then((response) =>
    response.json().then((images) => images)
  );
};
