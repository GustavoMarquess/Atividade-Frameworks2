import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 320px;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s;

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.25);
    transition: all 0.15s;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
`;

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: var(--white);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  width: 70%;
  font-size: 14px;
  font-weight: 800;
  text-transform: capitalize;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CardPrice = styled.p`
  font-size: 14px;
`;

const CardDescription = styled.p`
  height: 72px;
  font-size: 12px;
  color: #481E14;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
`;

const CardButton = styled.button`
  background-color: #F2613F;
  color:#481E14;
  font-weight: 500;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 80%;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color:#F2613F;
    transition: all 0.25s;
  }
`;

const CardButtonFavorito = styled.button`
  background-color:#9B3922;
  color: #ffffff;
  font-weight: 500;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export {
  CardContainer,
  CardImage,
  CardPhoto,
  CardBody,
  CardHeader,
  CardTitle,
  CardPrice,
  CardDescription,
  CardFooter,
  CardButton,
  CardButtonFavorito,
};
