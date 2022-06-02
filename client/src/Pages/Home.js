import SearchBar from "../components/searchbar";
import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PARK } from '../utils/queries';

const Homepage = () => {
    const { loading, data } = useQuery(QUERY_PARK);
    const profiles = data?.profiles || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ParkList
                            park={park}
                            title="Here's the national parks!" />
                    )}
                </div>
            </div>
        </main>
    );
}

export default Homepage;