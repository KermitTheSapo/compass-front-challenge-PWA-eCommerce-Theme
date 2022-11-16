import styled from 'styled-components'

export const ArrivalsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 34px;
`

export const ArrivalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderTitle = styled.h3`
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
  @media (min-width: 768px) {
    font-size: 2.125rem;
    color: var(--Dark);
  }
`
export const LinkParagraph = styled.a`
  text-decoration: none;
`

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--Primary);
`

export const ArrivalList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  overflow: auto;
  height: 25vh;
  gap: 25px;
  &::-webkit-scrollbar { 
  display: none;
}
@media (min-width: 768px) {
  height: 50vh;
}
`
