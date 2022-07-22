import React from 'react'
import { Header, Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Income = () => {
    const { currentColor } = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Manager" title="Income" />
            <div className="text-center h-full">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No Income Source(s)</h3>
                <p className="mt-1 text-sm text-gray-500">
                    Get started by creating a new Income Source.
                </p>
                <div className="mt-6">
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="New Income Source"
                        borderRadius="10px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Income