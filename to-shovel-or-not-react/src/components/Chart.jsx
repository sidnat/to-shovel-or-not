import React from "react";
import { AreaChart, Area, YAxis, ResponsiveContainer, Legend } from 'recharts';

export default function Chart(props) {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={data}           
          margin={{
            right: 20,
            left: -20,
            bottom: 0,
          }}>
          <Legend verticalAlign="top" height={32} align={"right"} iconType={"circle"}/>
          <YAxis />
          <Area name="Snow Accum mm" type="monotone" dataKey="snow_accum_cm" stackId="1" stroke="#FFFFFF" fill="#FFFFFF" />
          <Area name="Rain mm" type="monotone" dataKey="rain_mm" stackId="1" stroke="#075985" fill="#075985" />
        </AreaChart>
      </ResponsiveContainer>
  )
}