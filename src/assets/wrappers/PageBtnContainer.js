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
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
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
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
  .center-pages {
    display: flex;
    gap: 1rem;
    width: 100%;    
    padding-bottom: 1rem;
  }
  .center-btn {
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0rem;    
  }
  @media (max-width: 470px) {
    .prev-btn,
    .next-btn {
      width: 80%;
      align-items: center;
      text-align: center;
    }
    .center-pages {
      gap: 0rem;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`
export default Wrapper
