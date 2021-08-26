import { useState, useContext, useEffect } from 'react'
import { Header } from '../components/Header'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'

import { FormExchange } from '../components/FormExchange'

import { setHeader } from '../helper/SetDefaultHeader'
import { API } from '../url'


export const ExchangePokemon = () => {
	const [exchangeList, setExchangeList] = useState([])
	const [showModalExchange, setShowModalExchange] = useState(false)

	const handleCloseExchangeModal = () => setShowModalExchange(false)
  const handleExchangeModal = () => setShowModalExchange(true)

  useEffect(() => {
  	getExchangeList()
  }, [])

  const getExchangeList = async () => {
    try {
    	const metadata = {
        method: 'GET',
        headers: setHeader({
          'Content-Type': 'application/json'
        })
      }
      const result = await (await fetch(`${API}/exchanges`, metadata)).json()

      setExchangeList(result.data)
    } catch (error) {
      console.log(error)
    }
  }

	return (
		<div>
			<Header />
			<Container>
				<FormExchange show={ showModalExchange } getExchangeList={ getExchangeList } handleClose={ setShowModalExchange } />
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
						  	{
						  		exchangeList?.map((exchange) => (
						  			<tr>
								      <td>1</td>
								      <td>{ exchange.user_owner.firstname }</td>
								      <td>{ exchange.pokemon.name }</td>
								      <td>{ exchange.wanted }</td>
								      <td>{ exchange.status }</td>
								      <td>-</td>
								      <td style={{ cursor: 'pointer' }}>exchange</td>
								    </tr>
						  		))
						  	}
						  </tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	)
}