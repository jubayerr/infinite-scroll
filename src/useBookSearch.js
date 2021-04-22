import React, { useEffect, useState } from 'react';
import axios from 'axios'


const useBookSearch = (query, pageNumber) => {

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber }
        }).then(res => {
            console.log(res.data);
        })
    }, [query, pageNumber])

    return (
        <div>

        </div>
    );
};

export default useBookSearch;