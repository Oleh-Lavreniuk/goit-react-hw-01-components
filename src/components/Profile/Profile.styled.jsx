import styled from '@emotion/styled';

export const ProfileTag = styled.div`
  width: 300px;
  margin: 0 auto 40px auto;
  font-size: 16px;
  line-height: 1.13;
  letter-spacing: 0.2em;
  cursor: pointer;
  box-shadow: 8px 4px 4px rgb(106, 165, 82);
  border-radius: 5px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(228, 233, 240);
  border-radius: 5px 5px 0 0;
  padding: 20px;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(142, 119, 153);
`;

export const Stats = styled.ul`
  display: flex;
  font-weight: 600;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    display: flex;
    font-weight: 400;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    background-color: #f7f7f7;
    border: 1px solid rgba(228, 233, 240);
  }

  & > li:first-child {
    border-radius: 0 0 0 5px;
  }
  & > li:last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: rgb(142, 119, 153);
`;

export const Quantity = styled.span`
  color: black;
  font-weight: 700;
  margin-top: 5px;
`;
