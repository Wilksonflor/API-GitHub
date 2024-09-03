import { useState } from "react";

import { Error } from "../componentes/Search/Error";
import { Search } from "../componentes/Search/Search";
import { userProps } from "../types/user";
import { User } from "../componentes/Search/User";

export const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState(false);

  const loaderUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);

    if (response.status === 404) {
      setError(true);
      return;
    }
    const { avatar_url, login, location, followers, following, name, bio } =
      data;

    // orientado ao tipo
    const userData: userProps = {
      name,
      avatar_url,
      login,
      location,
      followers,
      following,
      bio,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loaderUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};
