import React, { useMemo } from 'react';
import { Select } from '@/components/select';
import './style.css';

interface PaginationProp {
    type?: string;
    total: number;
    pageSize: number;
    setPageSize: any;
    selectedPage: number;
    setSelectedPage?: any;
}

const paginationLimit = 7;
const pageOptions = [
    { label: '5 / page', value: 5 },
    { label: '10 / page', value: 10 },
    { label: '20 / page', value: 20 },
    { label: '50 / page', value: 50 },
]

export const Pagination = ({
    type,
    total,
    pageSize,
    setPageSize,
    selectedPage,
    setSelectedPage,
}: PaginationProp) => {

    const SubPagination = useMemo(() => {
        const items = [];
        const availableIndex = Math.ceil(total / pageSize);
        let startIndex = selectedPage - 3 > 0 ? selectedPage - 3 : 0;
        let endIndex;
        if (startIndex + paginationLimit > availableIndex) {
            endIndex = availableIndex;
            startIndex = endIndex - paginationLimit > 0 ? endIndex - paginationLimit : 0;
        } else {
            endIndex = startIndex + paginationLimit;
        }

        for (let i = startIndex; i < endIndex; i++) {
            items.push(
                <li className={i === selectedPage ? 'omni-selected-item' : ''} key={i} onClick={() => setSelectedPage(i)}>
                    <span>{i + 1}</span>
                </li>
            );
        }
        return <>{items}</>;
    }, [selectedPage, total, pageSize]);

    return (
        <div className='pagination flex justify-between'>
            <Select options={pageOptions} defaultOption={pageSize} onChange={setPageSize} />

            <ul>
                <li onClick={() => setSelectedPage(0)}>
                    <span>First</span>
                </li>
                {SubPagination}
                <li onClick={() => setSelectedPage(Math.ceil(total / pageSize) - 1)}>
                    <span>Last</span>
                </li>
            </ul>
        </div>
    );
};