import axios from "axios";
import type { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (
  page: number,
  limit: number
): Promise<User[]> => {
  const res = await axios.get<User[]>(API_URL, {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  return res.data;
};
