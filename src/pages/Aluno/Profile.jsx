import React, { useState } from 'react';
import classnames from "classnames";

// import Tabs, { TabPane } from 'rc-tabs';
// import TabContent from 'rc-tabs/lib/TabContent';
// import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from 'reactstrap';

import FormEndereco from 'components/Aluno/Forms/FormEndereco';
import FormProfile from 'components/Aluno/Forms/FormProfile';
import Header from "components/Headers/NoHeader.jsx";
import FormEmail from 'components/Aluno/Forms/FormEmail';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class Profile extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;

    return (
        <>
            <Header />
            <div className="classes.root">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Dados" />
                        <Tab label="Endereço" />
                        <Tab label="Telefones" />
                        <Tab label="Email" />
                    </Tabs>
                </AppBar>
            </div>
            {/* <Container className="mt--7" fluid> */}
            <Row>
                <div className="col">
                    {/* <Card className="shadow" >
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Perfil</h3>
                        </CardHeader>
                        <FormProfile props={props} />
                    </Card> */}

                    <Card className="shadow">
                        <CardBody>
                            {value === 0 && <TabContainer><FormProfile props={this.props} /></TabContainer>}
                            {value === 1 && <TabContainer><FormEndereco props={this.props}/></TabContainer>}
                            {value === 2 && <TabContainer>Item Three</TabContainer>}
                            {value === 3 && <TabContainer>Item Four</TabContainer>}
                        </CardBody>
                    </Card>


                </div>
            </Row>
            {/* </Container> */}
        </>
    );
}
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Profile);