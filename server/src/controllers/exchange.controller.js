const ClientError = require('../exceptions/ClientError')
const ExchangeValidator = require('../validation/exchange')
const exchangeService = require('../services/exchange.service')

const addExchange = async (req, res) => {
  try {
    ExchangeValidator.exchangeValidate(req.body)
    const { id } = req.accessToken
    const newData = {
      ...req.body,
      user_submission: id,
      status: 'pending'
    }

    const result = await exchangeService.postExchange(newData)
    res.status(201).json({
      status: 'success',
      data: result
    })
  } catch (error) {
 	  if (error instanceof ClientError) {
      console.log(error)
      const response = res.status(error.statusCode).send({
        status: 'failed',
        message: error.message
      })
      return response
    }

    const response = res.status(500).send({
      status: 'failed',
      message: error.message
    })
    console.log(error)
    return response
  }
}

const getListExchange = async (req, res) => {
  try {
    const results = await exchangeService.getListExchange()
    res.status(201).json({
      status: 'success',
      data: results
    })
  } catch (error) {
   if (error instanceof ClientError) {
      console.log(error)
      const response = res.status(error.statusCode).send({
        status: 'failed',
        message: error.message
      })
      return response
    }

    const response = res.status(500).send({
      status: 'failed',
      message: error.message
    })
    console.log(error)
    return response
  }
}

module.exports = { addExchange, getListExchange }
