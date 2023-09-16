import React from 'react'

type Props = {
    params: {
        searchTerm: string
    }
}

const page = ({ params: { searchTerm } }: Props) => {
    return (
        <div>page</div>
    )
}