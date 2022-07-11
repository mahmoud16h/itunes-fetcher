import RecordCard, {RecordType} from "../recordCard";
import React from "react";

const Records: React.FC<{ records: RecordType[]}> = ({ records }) => (
    <>
        {records.map((rec) => <RecordCard record={rec}/>)}
    </>
)

export default Records;