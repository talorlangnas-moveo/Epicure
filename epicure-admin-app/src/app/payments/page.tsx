import { columns, Payment } from "../restaurants/columns"
import { DataTable } from "../../components/ui/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
    {
        id: "01JY1FXADNPS7HHC1Y6X3SPZXM",
        amount: 807,
        status: "pending",
        email: "amckinna0@cbc.ca"
      },
      {
        id: "01JY1FXADQAPPTPQBPS565XBW5",
        amount: 247,
        status: "processing",
        email: "budell1@qq.com"
      },
      {
        id: "01JY1FXADQTEJ8J8ZQWAKZRSW8",
        amount: 326,
        status: "success",
        email: "gdevinn2@hc360.com"
      },
      {
        id: "01JY1FXADRVNKXGAKH9KAVWYCA",
        amount: 559,
        status: "success",
        email: "nsouthernwood3@blogger.com"
      },
      {
        id: "01JY1FXADSYZ1MKMRC3V9RZZWN",
        amount: 836,
        status: "processing",
        email: "tsarchwell4@nationalgeographic.com"
      },
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
      {
          id: "01JY1FXADNPS7HHC1Y6X3SPZXM",
          amount: 807,
          status: "pending",
          email: "amckinna0@cbc.ca"
        },
        {
          id: "01JY1FXADQAPPTPQBPS565XBW5",
          amount: 247,
          status: "processing",
          email: "budell1@qq.com"
        },
        {
          id: "01JY1FXADQTEJ8J8ZQWAKZRSW8",
          amount: 326,
          status: "success",
          email: "gdevinn2@hc360.com"
        },
        {
          id: "01JY1FXADRVNKXGAKH9KAVWYCA",
          amount: 559,
          status: "success",
          email: "nsouthernwood3@blogger.com"
        },
        {
          id: "01JY1FXADSYZ1MKMRC3V9RZZWN",
          amount: 836,
          status: "processing",
          email: "tsarchwell4@nationalgeographic.com"
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          // ...
          {
              id: "01JY1FXADNPS7HHC1Y6X3SPZXM",
              amount: 807,
              status: "pending",
              email: "amckinna0@cbc.ca"
            },
            {
              id: "01JY1FXADQAPPTPQBPS565XBW5",
              amount: 247,
              status: "processing",
              email: "budell1@qq.com"
            },
            {
              id: "01JY1FXADQTEJ8J8ZQWAKZRSW8",
              amount: 326,
              status: "success",
              email: "gdevinn2@hc360.com"
            },
            {
              id: "01JY1FXADRVNKXGAKH9KAVWYCA",
              amount: 559,
              status: "success",
              email: "nsouthernwood3@blogger.com"
            },
            {
              id: "01JY1FXADSYZ1MKMRC3V9RZZWN",
              amount: 836,
              status: "processing",
              email: "tsarchwell4@nationalgeographic.com"
            },
            {
                id: "728ed52f",
                amount: 100,
                status: "pending",
                email: "m@example.com",
              },
              // ...
              {
                  id: "01JY1FXADNPS7HHC1Y6X3SPZXM",
                  amount: 807,
                  status: "pending",
                  email: "amckinna0@cbc.ca"
                },
                {
                  id: "01JY1FXADQAPPTPQBPS565XBW5",
                  amount: 247,
                  status: "processing",
                  email: "budell1@qq.com"
                },
                {
                  id: "01JY1FXADQTEJ8J8ZQWAKZRSW8",
                  amount: 326,
                  status: "success",
                  email: "gdevinn2@hc360.com"
                },
                {
                  id: "01JY1FXADRVNKXGAKH9KAVWYCA",
                  amount: 559,
                  status: "success",
                  email: "nsouthernwood3@blogger.com"
                },
                {
                  id: "01JY1FXADSYZ1MKMRC3V9RZZWN",
                  amount: 836,
                  status: "processing",
                  email: "tsarchwell4@nationalgeographic.com"
                },
    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}