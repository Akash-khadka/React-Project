import { DashboardAppShell } from "../../Components/partials/Profile.Appshell"
import { Grid } from "@mantine/core"
import { Chart } from "../../Temp/Dashboard/Bar.chart"

export const DashboardHomePage=()=>{
    return<>
    <Grid>
      <Grid.Col span={8}>
        1
      </Grid.Col>
      <Grid.Col span={4}>
      <Chart/>
      </Grid.Col>
    </Grid>

    <Grid className="py-xl">
      <Grid.Col span={8}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
    </Grid>
    
    </>
}