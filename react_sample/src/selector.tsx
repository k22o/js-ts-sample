import React, {useState} from "react";
import './selector.css'
import { getUrl } from "./url-create/envList";

export function Top()  {
  const [urlList, setUrlList] = useState([]);

  return (
    <div className="container">
      <Form setUrlList = {setUrlList}/>
      <List urlList = {urlList}/>
  </div>    
  )
}

function List(props: any) {
  const urlList = props.urlList;
  const listElement = []
  for (const [index, url] of urlList.entries()) {
    listElement.push(<li key={index}>{url}</li>)
  }
  return (
      <div className="disp">
        <h2>一覧</h2>
        <ul> { listElement } </ul>
      </div>  
    );
}

function Form(props: any) {
  // 環境のパラメータ
  const [selectedEnvType, setSelectedEnvType] = useState("dev");

  const handleSubmit = (event: any) =>  {
    event.preventDefault();
    const urlList = getUrl(selectedEnvType);
    props.setUrlList(urlList);
  }
  
  return (
      <div className="selector">
        <h2>選択</h2>
        <form onSubmit={handleSubmit}>
          <EnvTypeForm 
            selectedEnvType = {selectedEnvType}
            setSelectedEnvType = {setSelectedEnvType}
          />
          <div className="selector__submit">
            <input type="submit" value="Create" />
          </div>
        </form>
      </div> 
  )
}


function EnvTypeForm(props: any) {
  const changeEnvType = (event: React.ChangeEvent<HTMLInputElement>) => props.setSelectedEnvType(event.target.value);

  const envTypes: EnvValue[] = [
    {label: "dev", value: "dev環境"},
    {label: "prod", value: "prod環境"}
  ]

  return (
    <section className="envType">
      <h3>環境</h3>
      <div className="envType__inputWrapper">
        {envTypes.map((envType, index) => {
            return (
              

              <label key={index}>
                <input type="radio" name="envType" value={envType.label} 
                  checked={envType.label === props.selectedEnvType} onChange={changeEnvType}/>
                <span> {envType.value} </span>
              </label>
            )
        })}
      </div>
    </section>
  )

}


interface EnvValue {
  label: string
  value: string
}
