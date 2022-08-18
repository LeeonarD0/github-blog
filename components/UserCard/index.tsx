/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";

import { Layout } from "../Layout";
import { UserCardContent, UserCardNomeContainer, UserCardContainer, UserCardInfo } from "./styles";

interface User {
    name: string,
    company: string,
    bio: string,
    followers: number,
    url: string,
    avatar: string,
    login: string
}

interface UserCardProps {
  user: User
}

export function UserCard({user}: UserCardProps) {
    console.log(user)
    return (
        <Layout>
            <UserCardContainer>
                <img src={user.avatar} alt={user.name} />

                <UserCardContent>

                    <UserCardNomeContainer>
                        <h2>{user.name}</h2>

                        <a href={user.url} color='#3294f8' target="_blank" rel="noreferrer">Github
                            <FaExternalLinkAlt size="12" color='#3294f8' />
                        </a>

                    </UserCardNomeContainer>

                    <p>{user.bio}</p>
                    <UserCardInfo>
                        <span>
                            <FaGithub size='18' color="#7B96b2" />
                            {user.login}
                        </span>

                        <span>
                            <FaBuilding size={18} color='7B96b2' />
                            {user.company}
                        </span>

                        <span>
                            <FaUserFriends size={18} color='7B96b2' />
                            {user.followers}
                        </span>



                    </UserCardInfo>
                </UserCardContent>

            </UserCardContainer>
        </Layout>
    )
}