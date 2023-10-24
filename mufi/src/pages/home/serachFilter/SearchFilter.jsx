import React from 'react'
import * as SF from "./SearchFilterStyle"

export default function SearchFilter() {
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
        btnEl.classList.add("selected");
      }else{
        if(btnEl.classList.contains("selected")){
          btnEl.classList.remove("selected");
        }
      }
    })
  }

  return (
    <SF.SearchFilter>
      <SF.BtnList className='btn-list'>
        <li>
          <SF.TextBtn className='selected' onClick={handleFilterSelection}>계정</SF.TextBtn>
        </li>
        <li>
          <SF.TextBtn onClick={handleFilterSelection}>태그</SF.TextBtn>
        </li>
        <li>
          <SF.TextBtn onClick={handleFilterSelection}>페스티벌</SF.TextBtn>
        </li>
      </SF.BtnList>
    </SF.SearchFilter>
  )
}