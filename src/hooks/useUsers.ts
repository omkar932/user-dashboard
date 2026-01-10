import { useEffect, useState } from "react";
import type { User } from "../types/user";

export const useUsers = (fetchFn: () => Promise<User[]>) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchFn().then(setUsers);
  }, [fetchFn]);

  return { users };
};
