import RecordCard, {RecordType} from "../recordCard";
import React from "react";

const Records: React.FC<{ records: RecordType[]}> = ({ records }) => (
    <>
        {records.map((rec, key) => <RecordCard key={key} record={rec}/>)}
    </>
)

export default Records;