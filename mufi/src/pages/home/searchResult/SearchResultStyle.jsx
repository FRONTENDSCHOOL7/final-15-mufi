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
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    min-height: 56px;
    border-bottom: 1px solid #EFEFEF;
    cursor: pointer;
`
export const ResultProfile = styled.img`
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 100%;
    background-color: #767676;
    border: 0.5px solid #efefef;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: cover;
`
export const ResultText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    strong { //검색어
        white-space: pre-wrap;
        color: #2033E7;
    }
    span {
        white-space: pre-wrap;
    }
`
export const ResultTitle = styled.h3`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
`
export const ResultContent = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`