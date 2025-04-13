import React, {useState} from "react";
import { getUrl } from "../../utils/envList";
import { EnvTypeForm } from "../envTypeForm/EnvTypeForm";

type Props = {
    setUrlList: any;
}

export function Form(props: Props) {
    // 環境のパラメータ
    const [selectedEnvType, setSelectedEnvType] = useState("dev");
    const changeEnvType = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedEnvType(event.target.value);
 
  
    const handleSubmit = (event: any) =>  {
      event.preventDefault();
      const urlList = getUrl(selectedEnvType);
      props.setUrlList(urlList);
    }
    
    return (
        <section>
          <h2>選択</h2>
          <form onSubmit={handleSubmit}>
            <EnvTypeForm
              selectedEnvType = {selectedEnvType}
              onChange={changeEnvType}
            />
            <div className="submit">
              <input type="submit" value="Create" />
            </div>
          </form>
        </section> 
    )
  }
    