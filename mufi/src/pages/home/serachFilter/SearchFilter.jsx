import React, { useState } from 'react'
import * as SF from "./SearchFilterStyle"

export default function SearchFilter({setIsAccount, setIsTag, setIsFestival}) {

  const handleFilterSelection = (e) => {
    const filterName = e.target.textContent;
    const btnList = document.querySelector(".btn-list");
    const btnListItems = [...btnList.querySelectorAll("li")];

    // 계정 외의 버튼 클래스 selected로 바꾸기
    // li 안의 button 태그의 클래스 바꿔주기 
    btnListItems.forEach(v=>{
      let btnEl = v.querySelector('button');
      // 클릭된 버튼 클래스를 selected로.....
      if(btnEl.textContent === filterName){
        btnEl.classList.toggle("selected");
      }else{
        if(btnEl.classList.contains("selected")){
          btnEl.classList.remove("selected");
        }
      }
    })

    // 필터 이름과 같은 결과 아이템만 보이게 하는 상태
    btnListItems.forEach(v=>{
      let btnEl = v.querySelector('button');
      if(btnEl.classList.contains("selected")){
        switch (true) {
          case btnEl.classList.contains("account"):
            setIsAccount(true);
            break;
          case btnEl.classList.contains("tag"):
            setIsTag(true);
            break;
          case btnEl.classList.contains("festival"):
            setIsFestival(true);
              break;
          default:
            break;
        }
      }else if(!btnEl.classList.contains("selected")){
        switch (true) {
          case btnEl.classList.contains("account"):
            setIsAccount(false)
            break;
          case btnEl.classList.contains("tag"):
            setIsTag(false)
            break;
          case btnEl.classList.contains("festival"):
            setIsFestival(false)
              break;
          default:
            break;
        }
      }
    })
  }

  return (
    <SF.SearchFilter>
      <SF.BtnList className='btn-list'>
        <li>
          <SF.TextBtn className='account selected' onClick={handleFilterSelection}>계정</SF.TextBtn>
        </li>
        <li>
          <SF.TextBtn className='tag' onClick={handleFilterSelection}>태그</SF.TextBtn>
        </li>
        <li>
          <SF.TextBtn className='festival' onClick={handleFilterSelection}>페스티벌</SF.TextBtn>
        </li>
      </SF.BtnList>
    </SF.SearchFilter>
  )
}