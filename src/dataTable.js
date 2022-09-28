const transactions = [
  {
    id: '19fec058-f606-4960-92bd-a5eb8a20f09b',
    order: 676,
    payment: {
      amount: 95631.88,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-10-14',
    },
    status: [
      {
        code: 'CRO',
        date: '2018-06-05',
        description: 'Create a order',
      },
    ],
    terms: 0,
  },
  {
    id: '4a69da3d-d8e6-461b-b73a-d1445ebed1de',
    order: 722,
    payment: {
      amount: 92492.92,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-07-01',
    },
    status: [
      {
        code: 'CRO',
        date: '2018-06-05',
        description: 'Create a order',
      },
    ],
    terms: 95,
  },
  {
    id: 'cc3894bf-97c0-43ce-a9b9-e52bf8dbc7f6',
    order: 1500,
    payment: {
      amount: 91140.34,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-10-26',
    },
    status: [
      {
        code: 'PYR',
        date: '2018-06-07',
        description: 'Payment Request',
      },
      {
        code: 'WRA',
        date: '2018-06-09',
        description: 'Wrong Amount',
      },
    ],
    terms: 0,
  },
  {
    id: '399acfda-d528-4e78-a9de-72bc0066e78b',
    order: 1589,
    payment: {
      amount: 72144.74,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-10-17',
    },
    status: [
      {
        code: 'WRA',
        date: '2018-06-09',
        description: 'Wrong Amount',
      },
    ],
    terms: 0,
  },
  {
    id: 'a52e89e8-6ba5-4b32-870d-c8b033beabf2',
    order: 1330,
    payment: {
      amount: 70267.64,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-09-01',
    },
    status: [
      {
        code: 'PYA',
        date: '2018-06-23',
        description: 'Payment Approved',
      },
    ],
    terms: 34,
  },
  {
    id: '17f1bb7a-f2a0-4425-aeb9-fa0fe801c31a',
    order: 1494,
    payment: {
      amount: 55859.8,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-07-24',
    },
    status: [
      {
        code: 'NFE',
        date: '2018-06-24',
        description: 'Electronic Invoice Sent',
      },
    ],
    terms: 73,
  },
  {
    id: '46efbbe5-a90a-4e52-8a83-aaa4bf7c6cea',
    order: 2935,
    payment: {
      amount: 65539.36,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-10-07',
    },
    status: [
      {
        code: 'PYR',
        date: '2018-06-07',
        description: 'Payment Request',
      },
      {
        code: 'PYD',
        date: '2018-06-07',
        description: 'Payment Denied',
      },
    ],
    terms: 1,
  },
  {
    id: '4e4488ba-f843-421f-a8c2-f61a13733065',
    order: 2015,
    payment: {
      amount: 58770.18,
      currency: 'USD',
      'currency-sign': '$',
      'due-date': '2018-10-25',
    },
    status: [
      {
        code: 'NFE',
        date: '2018-06-24',
        description: 'Electronic Invoice Sent',
      },
      {
        code: 'DYA',
        date: '2018-07-02',
        description: 'Delivery Attempt',
      },
      {
        code: 'ANF',
        date: '2018-07-02',
        description: 'Address Not Found',
      },
    ],
    terms: 13,
  },
]

export default transactions
