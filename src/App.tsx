import React, {ChangeEvent, useRef, useState} from "react";
import Input from "./components/input";
import Text from "./components/text";
import TextType from "./components/text/types";
import useRecordSearch from "./hooks/useRecordSearch";
import {AppContainer, ScrollToTop} from "./styled";
import Records from "./components/records";
import Spinner from "./components/spinner";

const App = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState<string>('');
    const [showScrollUp, setShowScrollUp] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)

    const {records, isLoading, nextPage, reset} = useRecordSearch(query)

    const handleReset = () => {
        reset()
        setQuery('')
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        setPage(1)
    }

    const handleScroll = (e: React.UIEvent ) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target as HTMLDivElement
        const bottom = Math.floor(scrollHeight - scrollTop) === Math.floor(clientHeight);

        if (showScrollUp !== (scrollTop > 300)){
            setShowScrollUp(scrollTop > 300)
        }

        if (bottom && !isLoading) {
            nextPage(page)
            setPage(prev => prev + 1)
        }
    }

    const scrollToTop = () =>{
        if (containerRef.current) containerRef.current.scroll(0, 0)
    };

    return (
        <AppContainer ref={containerRef} onScroll={handleScroll}>
            <Text type={TextType.L}>Search music</Text>
            <Input value={query} onChange={handleInput} />
            <button onClick={handleReset}>Clear</button>
            <Records records={records} />
            <>
                {query.length > 2 && !isLoading && !records.length && <Text type={TextType.XL}>There are no results</Text>}
                {isLoading &&  <Spinner/>}
            </>
            {showScrollUp && <ScrollToTop onClick={scrollToTop}>
                <Text type={TextType.S}>Top</Text>
            </ScrollToTop>}
        </AppContainer>
    )
}

export default App;
