import axios from "axios";

const API_ENDPOINTS = {
  prime: "http://20.244.56.144/test/primes",
  fibonacci: "http://20.244.56.144/test/fibo",
  random: "http://20.244.56.144/test/random",
  even: "http://localhost:9876/numbers/e",
};

const AUTH_HEADERS = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTU0NzMzLCJpYXQiOjE3NDMxNTQ0MzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk2ZjNkNjI0LTgxMDQtNGJhMS1hODU3LTRlNTk2N2VhOWFmMyIsInN1YiI6IjIyNzYxYTEyNjBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiTGFraXJlZGR5IEJhbGlyZWRkeSBDb2xsZWdlIE9mIEVuZ2luZWVyaW5nIiwiY2xpZW50SUQiOiI5NmYzZDYyNC04MTA0LTRiYTEtYTg1Ny00ZTU5NjdlYTlhZjMiLCJjbGllbnRTZWNyZXQiOiJEZFVIS0lvY0pBRnB2Unl0Iiwib3duZXJOYW1lIjoiVGhvdGEgTGFrc2htaSBTdXNtaXRoYSIsIm93bmVyRW1haWwiOiIyMjc2MWExMjYwQGdtYWlsLmNvbSIsInJvbGxObyI6IjIyNzYxQTEyNjAifQ.hP26ZciOKA-pmZ5QCGXctqAZyCFcrK4GD3zQravWWbY"
  },
};

export const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(API_ENDPOINTS[type], {
      ...AUTH_HEADERS,
      timeout: 500,
    });
    return response.data.numbers || [];
  } catch (error) {
    console.error("Error fetching numbers:", error);
    return [];
  }
};
