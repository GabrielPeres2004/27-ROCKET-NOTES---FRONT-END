import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";

import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input";
import { Notes } from "../../Components/Notes";

import { FiPlus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home(){

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  
  function handleTagsSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)

    } else {
      setTagsSelected( prevState => [...prevState, tagName] ) 
    }
  }


  useEffect(() => {
    async function fetchTags() {
       const response = await api.get("/tags")
       setTags(response.data)
    }

    fetchTags()
 }, [])

 useEffect(() => {

  async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      console.log(response.data[0])
      setNotes(response.data);
  }

  fetchNotes();

}, [tagsSelected, search]);



    return(
        <Container>
  
            <Brand>
              <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>

              <li>
                <ButtonText 
                title="Todos" 
                onClick={() => handleTagsSelected('all')}
                isActive={tagsSelected.length === 0}
                />
              </li> 

              {
                tags && tags.map(tag => (
                  <li key={String(tag.id)}>
                  <ButtonText 
                  title={tag.name} 
                  onClick={() => handleTagsSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}                  
                  />
                </li>
                ))
              }
            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={FiSearch}
                onChange={(e) => setSearch(e.target.value)}
                />

            </Search>

            <Content>

              <Section title="Minhas notas">

              {
            notes.map(note => (
              <Notes
                key={String(note.id)}
                data={note}
              />
            ))
          }      

              </Section>

            </Content>


            <NewNote to="/new">
                <FiPlus/>
                Criar nota

            </NewNote>
            

        </Container>
    )
  }
