'use client'

import { User } from 'lucide-react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts'

const numberOfUsersData = [
    {
        month: "Jan",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Feb",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Mar",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Apr",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "May",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Jun",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Jul",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Aug",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Sep",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Oct",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Nov",
        users: Math.floor(Math.random() * 100)
    },
    {
        month: "Dec",
        users: Math.floor(Math.random() * 100)
    }
]

export const LineGraph = () => {
    return (
        <div className='bg-white/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-5 text-black'>
            <section className='flex justify-between gap-2 text-black pb-2'>
                <p>Users Data</p>
                <User className='h-4 w-4' />
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <LineChart data={numberOfUsersData} margin={{ top: 0, left: -15, right: 0, bottom: 0}}>

                <Line type='monotone' dataKey="users" stroke='#000' width={20} strokeWidth={2}/>

                <XAxis 
                    dataKey={"month"}
                    tickLine={false}
                    axisLine={true}
                    stroke='#000'
                    fontSize={13}
                    padding={{ left: 0, right: 0}}
                />
                <YAxis 
                    dataKey={"users"}
                    tickLine={false}
                    axisLine={true}
                    stroke='#000'
                    fontSize={13}
                    padding={{ top: 0, bottom: 0}}
                />
                <CartesianGrid strokeDasharray="2 2" className='opacity-50'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}