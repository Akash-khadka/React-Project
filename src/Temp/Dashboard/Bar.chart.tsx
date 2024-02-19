import { BarChart } from "@mantine/charts"
import { data } from "../data"

export const Chart=()=>{
    return <>
    <div className="font-bold px-sm">Statistics Last 6 months</div>
        <BarChart className="py-xl"
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'orange.6' },
        { name: 'Laptops', color: 'gray.6' },
        // { name: 'Tablets', color: 'teal.6' },
      ]}
      tickLine="y"
    />
    </>
}