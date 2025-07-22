import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

function Header () {
  const navigate = useNavigate();
  
  // const 변수이름 = useQuery(['쿼리이름'], ()=>{
  //   // axios로 요청
  //   // 쿼리에 저장할 데이터를 return
  // }) 옛날 문법

  // const 변수이름 = useQuery({
  //   queryKey: ['쿼리이름'],
  //   queryFn: () => {
  //     // axios로 요청
  //     // 쿼리에 저장할 데이터를 return
  //   }
  // })

  const userInfoQuery = useQuery({
    queryKey: ['userInfo'],
    queryFn: async() => {
      const response = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')
      // console.log(response);

      return response.data;
    }, 
    staleTime : 5000,
    // 새로고침할 때마다 정해진 시간만큼 재갱신하지 않는 것
    retry: 10
  })


  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=> navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate(-1)}>Back</Nav.Link>
            <Nav.Link onClick={()=> navigate('/cart')}>Cart</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Link to="/test">테스트2</Link>
          </Nav>

          <Nav>
            { userInfoQuery.isLoading && '회원정보 불러오는 중...' }
            { userInfoQuery.error && '회원정보 불러오기 실패' }
            { userInfoQuery.data && userInfoQuery.data[0].name }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header