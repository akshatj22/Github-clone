import React from 'react';
import Search from '../Components/Search';
import SortRepos from '../Components/SortRepos';
import ProfileInfo from '../Components/ProfileInfo';
import Repos from '../Components/Repos';
import Spinner from '../Components/Spinner';

function HomePage  ()  {
	return (
		<div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<ProfileInfo />
				<Repos />
				<Spinner />
			</div>
		</div>
	);
};
export default HomePage;