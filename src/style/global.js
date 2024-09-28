import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;


::-webkit-scrollbar {
  width: 8px;  

}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.ORANGE}; 
  border-radius: 10px;
  transition: filter 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  filter: brightness(0.9);
  
  cursor: pointer;
}

}

  body, input, button, textarea{
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
  

  button, a {
    transition: filter 0.2s;
    cursor: pointer;

  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }



`



