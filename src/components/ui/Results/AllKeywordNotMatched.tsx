import React, { useEffect, useState } from 'react';

import { useHawksearch } from 'components/StoreProvider';
import { useTranslation } from 'react-i18next';

function AllKeywordNotMatched() {
	const {
		store: { pendingSearch, searchResults },
	} = useHawksearch();
	const [message, setMessage] = useState('');

	const { t, i18n } = useTranslation();
	useEffect(() => {
		if (searchResults && !searchResults.QueryUsedAllKeywords) {
			setMessage('Sorry, no items contained all of the words in your query. These results below contain some of the words.');
		} 
	}, [searchResults]); 


	if (!pendingSearch.Keyword) {
		// no selections, so render nothing
		return null;
	}

	if (searchResults && searchResults.QueryUsedAllKeywords) {
		return null;
	}

	return (
		<div className="hawk-result-rail__keyword-not-match">
			<h6 >{pendingSearch.Keyword ? message : '' }</h6>
		</div>
	);
}

export default AllKeywordNotMatched;
