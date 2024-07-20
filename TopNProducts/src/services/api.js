
import axios from 'axios';

const API_URL = 'http://20.244.56.144/test';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxNDUxODkwLCJpYXQiOjE3MjE0NTE1OTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE2ZjJkYmRiLTkwZjUtNDlhNS05OTgwLWI1NzQzNmY1MTQ3NyIsInN1YiI6Inlhc2h1dGl3YXJpMjJAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiaG9yaXpvbiIsImNsaWVudElEIjoiMTZmMmRiZGItOTBmNS00OWE1LTk5ODAtYjU3NDM2ZjUxNDc3IiwiY2xpZW50U2VjcmV0IjoiemprbHFTSWlzdnNUaGpiTCIsIm93bmVyTmFtZSI6Illhc2ggVGl3YXJpIiwib3duZXJFbWFpbCI6Inlhc2h1dGl3YXJpMjJAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwMDkxMDEzMDEyNiJ9.NaMlPmTatYdq5oY-dI2_WLMoqNexaiCTNp70PnEEQ0w';


export const getProducts = ({ company, category, top, minPrice, maxPrice }) => {
  return axios.get(`${API_URL}/companies/${company}/categories/${category}/products`, {
    params: {
      top,
      minPrice,
      maxPrice
    },
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });
};

export default getProducts;
