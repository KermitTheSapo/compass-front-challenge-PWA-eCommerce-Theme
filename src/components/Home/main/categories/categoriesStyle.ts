import styled from 'styled-components'

export const CategoriesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 18px;

  @media (min-width: 769px) {
    display: none;
  }
`

export const CategoriesTitle = styled.h3`
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
  margin-bottom: 8px;
`
export const CategoriesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
