import  {useState} from 'react';
import { Form } from './components/form/Form';
import { List } from './components/list/List';

export function Main() {
    const [urlList, setUrlList] = useState([]);

    return (
        <div className="container">
        <Form setUrlList = {setUrlList}/>
        <List urlList = {urlList}/>
      </div>      
    )

}