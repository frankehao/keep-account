import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

function NoMatch() {
  return <div>页面不存在，你丫输错地址了吧！</div>
}

function Statistics() {
  return (
    <Wrapper>
      <Main>
        <h2>统计页面</h2>
      </Main>
      <Nav />
    </Wrapper>
  )
}

function Tags() {
  return (
    <Wrapper>
      <Main>
        <h2>标签页面</h2>
      </Main>
      <Nav />
    </Wrapper>
  )
}

function Money() {
  return (
    <Wrapper>
      <Main>
        <h2>记账页面</h2>
      </Main>
      <Nav />
    </Wrapper>
  )
}

export default App
