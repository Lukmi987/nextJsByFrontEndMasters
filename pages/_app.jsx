
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from './src/components/nav';


// Any global css must be in this file
// People are making libreries with global css exports do not do that |!!!!

// but we can use css modules, just name it styles.modeles.css


//App is the root it takes every single page(Component) and returns with props

const App = ({Component, pageProps }) => {
 return (
   <ThemeProvider theme={theme}>
    <div>
     <Nav />
     <Component {...pageProps} />
    </div>
   </ThemeProvider>
)
}
export default App