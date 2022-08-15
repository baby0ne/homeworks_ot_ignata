import { ChangeEvent, useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { requestAPI } from "./requestAPI";

function Request() {
   const [response, setResponse] = useState<string>('');
   const [value, setValue] = useState<boolean>(false);

   const onClickHandler = () => {
      requestAPI.post(value)
         .then(response => {
            setResponse(JSON.stringify(response.data))
         })
         .catch(error => {
            setResponse(error.response ? error.response.data.errorText : error.message);
         })
   }

   return (
      <div>
         <input type="checkbox"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)}
            checked={value} />
         <SuperButton onClick={onClickHandler}>Send request</SuperButton>
         <p>Response: {response}</p>
      </div>
   );
}

export default Request;