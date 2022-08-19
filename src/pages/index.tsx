import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import debounce from 'lodash.debounce'
import { useState } from 'react';
import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout';
import PostList from '../../components/PostList';
import { UserCard } from '../../components/UserCard'
import useDebounce from '../../hooks/useDebounce';
import { InputContainer } from '../styles/pages/home.styles';

const GITHUB_USERNAME = 'LeeonarD0';
const GITHUB_REPOSITORY = 'LeeonarD0/github-blog'

interface User {
  name: string,
  company: string,
  bio: string,
  followers: number,
  url: string,
  avatar: string,
  login: string
}

interface HomeProps {
  user: User
}

export default function Home({ user }: HomeProps) {
 const [search, setSearch] = useState('');
 const debouncedSearch = useDebounce(search)
 async function fetchPosts(q: string) {
  const { data } = await axios.get(`https://api.github.com/search/issues`, {
    params: { q: `repo:${GITHUB_REPOSITORY} ${q}`}
  })
  return data
 }

 const { data } = useQuery(['post', debouncedSearch], () => fetchPosts(search))


  return (
    <>
      <Header />
      <Layout>
        <UserCard user={user} />
          <InputContainer>
        <div>
          <h3>Publicacoes</h3>

          <span>6 Publicacoes</span>
        </div>

        <input 
          type="text" 
          placeholder='Buscar' 
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        </InputContainer>

       <PostList/>
      </Layout>
    </>

  )
}





export async function getStaticProps() { // CONEXAO COM API USANDO FUNCAO DO NEXTJS
  const { data } = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`)

  const user = {
    name: data.name,
    company: data.company,
    bio: data.bio,
    followers: data.followers,
    url: data.html_url,
    avatar: data.avatar_url,
    login: data.login
  }

  return {
    props: {
      user
    },
    revalidate: 10800 // 3 hours in seconds;
  }
}


