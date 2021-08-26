import { useState, useContext } from 'react'
import { Header } from '../components/Header'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'

import { FormExchange } from '../components/FormExchange'


export const ExchangePokemon = () => {
	const [showModalExchange, setShowModalExchange] = useState(false)

	const handleCloseExchangeModal = () => setShowModalExchange(false)
  const handleExchangeModal = () => setShowModalExchange(true)

	return (
		<div>
			<Header />
			<Container>
				<FormExchange show={ showModalExchange } handleClose={ setShowModalExchange } />
				<h1 className="text-center">Exchange Pokemon</h1>
				<Button onClick={ handleExchangeModal }>Add Pokemon Exchange</Button>
				<Row className="my-3">
					<Col>
						<Table striped bordered hover>
						  <thead>
						    <tr>
						      <th>#</th>
						      <th>User Submission</th>
						      <th>Pokemon Name</th>
						      <th>Wanted</th>
						      <th>Status</th>
						      <th>User Exchange</th>
						      <th>Action</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>1</td>
						      <td>Aldi</td>
						      <td>Bulbasaur</td>
						      <td>Jiggly Puff</td>
						      <td>pending</td>
						      <td>-</td>
						      <td style={{ cursor: 'pointer' }}>exchange</td>
						    </tr>
						  </tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	)
}