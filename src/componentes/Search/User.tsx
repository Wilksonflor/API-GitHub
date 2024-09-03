import { userProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { FaGithub, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "./User.module.css";
export const User = ({
  name,
  login,
  avatar_url,
  followers,
  following,
  location,
  repos_url,
}: userProps) => {
  return (
    <div className={styled.user}>
      <img src={avatar_url} alt={login} />
      <div className={styled.userName}>
        <FaGithub />
        <h2>{login}</h2>
      </div>
      <h3>
        <FaUser />
        {name}
      </h3>

      {location && (
        <p className={styled.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={styled.stats}>
        <div>
          <p>Seguidores</p>
          <p className={styled.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p className={styled.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver os melhores projetos</Link>
    </div>
  );
};
