import React, {useEffect, useRef, useLayoutEffect} from "react";
import { Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
import { asyncComponent } from '@jaredpalmer/after';
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

// import routes from "routes.js";

const routes = [
  {
    path: '/index',
    exact: true,
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: asyncComponent({
      loader: () => import('pages/Index.jsx'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
    layout: "/admin",
    view: true
  }, {
    path: '/alunos',
    exact: true,
    name: "Alunos",
    icon: "ni ni-tv-2 text-primary",
    component: asyncComponent({
      loader: () => import('pages/Alunos.js'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
    layout: "/admin",
    view: true
  }, {
    path: '/alunos/profile',
    exact: true,
    component: asyncComponent({
      loader: () => import('pages/Aluno/profile.jsx'),
    }),
    layout: "/admin",
    view: false
  }
]

const Admin = (props) => {
  const mainContent = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [])

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            exact={prop.exact}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    
    <>
      <Sidebar
        {...props}
        routes={routes.filter(route => route.view === true)}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
        {getRoutes(routes)}
        <Redirect from="/" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

// Admin.getInitialProps = async () => {
//   console.log('Teste');
//   return ;
// }

export default Admin;