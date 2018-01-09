import React, {Component} from 'react';
import './App.css';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';


class App extends Component {
  state = {purchases: []};

  componentDidMount() {
    fetch('/api/purchases')
      .then(res => res.json())
      .then(purchases => this.setState({purchases}));
  }

  render() {
    debugger
    return (
      <Grid fluid>
        <Row center="xs">
          <h1>What Dise Owes Chris</h1>
        </Row>

        <Row middle="xs" center="xs" flex-grow="true">
          <h3>{formatFullPriceString(this.state.purchases)}</h3>
        </Row>

        <Row bottom="xs">
          <Col xs>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Reason</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.purchases.map(purchase => {
                    return (
                      <TableRow key={purchase.id}>
                        <TableCell>{purchase.date}</TableCell>
                        <TableCell>${purchase.amount}</TableCell>
                        <TableCell>{purchase.reason}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function formatFullPriceString(purchases) {
  let total = 0;
  purchases.forEach((purchase) => {
    total += purchase.amount;
  });
  return `Dise owes Chris $${total}`;
}

export default App;