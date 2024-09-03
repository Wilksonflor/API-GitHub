import { userProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "./User.module.css";
export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  repos,
}: userProps) => {
  return (
    <div className={styled.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styled.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={styled.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styled.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styled.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver os melhores projetos</Link>
    </div>
  );
};
