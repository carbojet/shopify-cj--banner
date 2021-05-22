import Axios from 'axios';
import {useAppBridge} from '@shopify/app-bridge-react';
import {getSessionToken} from '@shopify/app-bridge-utils';
export default async (req,res) => {
    const app = useAppBridge();
    const token = await getSessionToken(app);
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{
                const response = await axios({
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                  url: "/products.json",
                  method: "get",
                  baseURL:'https://4491336c79f4.ngrok.io/admin/api/2021-04/',
                }).then((response)=>{
                    console.log(response)
                }).catch((error)=>{
                    console.log(error)
                })

                res.status(200).json({success:true,products:response})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try{
                res.status(201).json({success:true,data:response})
            }catch(error){
                res.status(400).json({success:false,error:error})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}