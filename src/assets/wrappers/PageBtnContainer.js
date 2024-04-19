import styled from 'styled-components'

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .pageBtn:hover {
    background: var(--primary-100);
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 45px;
    height: 40px;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .next-btn {
    margin-left: 0.5rem;
  }
  .prev-btn {
    margin-right: 0.5rem;
  } 
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
  .center-pages {
    display: flex;    
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .center-btn {
    gap: 0rem;
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0rem;    
  }
  @media (max-width: 300px) {  
    .pageBtn {
      width: 33px;
      font-size: 0.75rem;
    }
  }
`
export default Wrapper
