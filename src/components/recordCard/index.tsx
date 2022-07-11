import React from "react";
import Text from "../text";
import TextType from "../text/types";
import {Container} from "./styled";

export type RecordType = {
    trackName: string;
    artworkUrl100: string;
    kind: string;
}

const RecordCard: React.FC<{ record: RecordType }> = ({ record }) => (
    <Container>
        <Text type={TextType.L}>Track Name: {record.trackName}</Text>
        <img src={record.artworkUrl100} alt="record artwork"/>
        <Text type={TextType.L}>Type: {record.kind}</Text>
    </Container>
)


export default RecordCard;
