import styled from 'styled-components';

export const Main = styled.main`
    .first {
    background: red;
    overflow: hidden;
    
        .offset {}
        .a {
            background: #f5f1ea;
        }
        .b {
            background: #582534;
         }
        .c {
            background: #0a7397;
        }
    }
    
    .second {
        background: green;
    }
    
    .third {
        background: yellow;
    }
    
    .fourth {
        background: blue;
    }
`

export const Section = styled.main`
    position: relative;
    
`

export const Sticky = styled.main`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`
