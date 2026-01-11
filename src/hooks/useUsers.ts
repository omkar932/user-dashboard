import { useEffect, useState } from "react";
import type { User } from "../types/user";

type Status = "idle" | "loading" | "success" | "error";

interface UsersState {
  data: User[];
  status: Status;
}

export const useUsers = (
  fetchFn: (page: number, limit: number) => Promise<User[]>,
  limit = 5
) => {
  const [state, setState] = useState<UsersState>({
    data: [],
    status: "idle",
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;

    const loadUsers = async () => {
      // async boundary → linter is satisfied
      setState((prev) => ({ ...prev, status: "loading" }));

      try {
        const data = await fetchFn(page, limit);
        if (active) setState({ data, status: "success" });
      } catch {
        if (active) setState((prev) => ({ ...prev, status: "error" }));
      }
    };

    loadUsers();

    return () => {
      active = false;
    };
  }, [page, limit, fetchFn]);

  return {
    users: state.data,
    loading: state.status === "loading",
    error: state.status === "error",
    page,
    setPage,
  };
};
