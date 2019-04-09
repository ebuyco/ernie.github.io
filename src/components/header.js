
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
// import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from '../images/big-investiment.svg'
import { HeaderContainer, HeaderWrapper,
  Logo, HeaderNav } from '../styles/headerStyle'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  componentDidMount () {
    const el = document.querySelector('nav')
    this.setState({ top: el.offsetTop, height: el.offsetHeight })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate () {
    this.state.scroll > this.state.top
      ? document.body.style.paddingTop = `${ this.state.height } + px`
      : document.body.style.paddingTop = 0
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   const { location } = this.props
  //   if (location.pathname !== prevProps.location.pathname) {
  //     if (this.props.location.pathname === '/') {
  //       this.wrapper.animate([{ height: '20vh' }, { height: '70vh' }], {
  //         duration: 300,
  //         fill: 'forwards',
  //         easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  //         iterations: 1
  //       })
  //     } else {
  //       this.wrapper.animate([{ height: '70vh' }, { height: '20vh' }], {
  //         duration: 300,
  //         fill: 'forwards',
  //         easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  //         iterations: 1
  //       })
  //     }
  //   }
  // };

  render () {
    // const { data, location } = this.props
    const { data } = this.props
    return (
      // <HeaderWrapper
      //   isHome={location.pathname === '/'}
      //   ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      // >
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderNav>
            <nav
              className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}
            >
              {/* <nav> */}
              <ul>
                <li>
                  <h1 style={{ margin: 0 }}>
                    <Link
                      to="/"
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      <Logo src={logo} alt="logo" />
                    </Link>
                  </h1>

                  <div
                    style={{
                      margin: '0 auto',
                      maxWidth: 960,
                      padding: '1.45rem 1.0875rem',
                    }}
                  >

                    {/* <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.desc}</p> */}
                  </div>
                </li>
                <li>
                  <Link
                    to="/"
                    activeClassName="active"
                  >Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/facebook">FacebookPage</Link>
                </li>
              </ul>
            </nav>

          </HeaderNav>
        </HeaderContainer>
        <Img style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          marginBottom: '1.2rem',
          opacity: 0.3
        }}
        fluid={data.file.childImageSharp.fluid} />
      </HeaderWrapper>
    )
  }
}
