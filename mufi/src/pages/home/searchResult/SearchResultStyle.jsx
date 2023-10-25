import styled from "styled-components";

export const SRContainer = styled.ul`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
    padding: 0 16px 0 16px;
`

// li 안에
export const SRItem = styled.li`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #EFEFEF;
`
export const ResultProfile = styled.div`
    width: 39px;
    height: 39px;
    border-radius: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ResultText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const ResultTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    strong { //검색어
        color: #2033E7;
        
    }
`
export const ResultContent = styled.p`
    font-size: 12px;
    color: #767676;
`