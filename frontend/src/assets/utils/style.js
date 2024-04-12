import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  padding-right: (1.5rem, 0.75rem);
  padding-left: (1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
`;

export const card = {
  borderRadius: "3px",
  backgroundColor: "white",
  color: "#fff",
  marginBottom: "10px",
  transition: "transform 300ms ease"
 };

export const img = {
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px",
  objectFit: 'cover',
  width: '100%',
  height: '130px',
};

export const imgCenter = {
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px",
  objectFit: 'cover',
  width: '100%',
  height: '200px',
};

export const imgRight = {
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px",
  objectFit: 'cover',
  width: '100px'
};

export const btn = {
  borderRadius: "6px",
  fontWeight: "bold",
  backgroundColor: "#005abb",
  boxShadow: "0 .125rem .25rem rgba(0, 0, 0, 0.075)",
  color: "white",
  borderColor: "#323762b7",
};

export const text = {
  color: "#000",
};

export const Header = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: #000;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const details = {
  marginBottom: "15px",
};

export const summarry = {
  color: "#000",
  fontSize: "15px",
};
