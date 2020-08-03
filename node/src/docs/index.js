exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Telecurso covid',
        description: 'Api utilizada no treinamento',
        termsOfService: '',
        contact: {
            name: 'Farlley',
            email: 'farlleylive.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: "http://localhost:3001",
            description: "dsv"
        },
        {
            url: "http://localhost:3002",
            description: "hml"
        },
        {
            url: "http://localhost:3003",
            description: "prd"
        },
    ],
    paths: {
        "/ping": {
            get: {
                summary: "Retorna Ping",
                description: "Metodo de Ping",
                responses: {
                    200: {
                        description: "teste",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        },
        "/MaxProductValue": {
            get: {
                summary: "Retorna Produto",
                description: "Retorna Produto com maior valor finaceiro",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        },
        "/MaxProductAmountStatePurchase": {
            get: {
                summary: "Retorna Produto",
                description: "Retorna Produto mais vendido por estado",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        },
        "/MaxProductAmountStateCustomer": {
            get: {
                summary: "Retorna Clientes",
                description: "Retorna clientes que mais compraram por estado ",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        },
        "/MaxProductAmountMoneyStatePurchase": {
            get: {
                summary: "Retorna Estado",
                description: "Retorna estado que mais vende em valor finaceiro",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        },
        "/AverageProductAmountState": {
            get: {
                summary: "Retorna Média",
                description: "Retorna média de compra por estado",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
