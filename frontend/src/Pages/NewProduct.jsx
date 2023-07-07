import { BsCloudUpload } from "react-icons/bs"
import { ImagetoBase64 } from "../util/imagetoBase64"
import { useState } from "react"
import { addProducts } from "../Services/product.API.js"
import { toast } from 'react-hot-toast'

const NewProduct = () => {
  //grab the data
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })
  //handleChange
  const handleChange = (e) => {
    const { name, value } = e.target

    setData((values) => {
      return {
        ...values,
        [name]: value
      }
    })
  }
  //upload imagetoBase64
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((values) => {
      return {
        ...values,
        image: data
      }
    })
  }
  //data submit
  const submitHandle =  (e) => {
    e.preventDefault()
    console.log(data)

    const { name, image, category, price, description} = data

    if (name && image && category && price && description) {
     
       addProducts(data)

      // console.log(fetchRes)
      // toast(fetchRes.message)

      // setData(() => {
      //   return {
      //     name: "",
      //     category: "",
      //     image: "",
      //     price: "",
      //     description: ""
      //   }
      // })
    }
    else {
      toast("Enter required Fields")
    }
  }
  return (
    <div>
      <form method="post" className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white' onSubmit={submitHandle}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleChange} value={data.name} />

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleChange} value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"programming"}>Programming</option>
          <option value={"science"}>Science</option>
          <option value={"nobal"}>Nobal</option>
          <option value={"law"}>Law</option>
          <option value={"motitional"}>Motivational</option>
          <option value={"account"}>Accounting</option>
          <option value={"business"}>Business</option>
          <option value={"helth"}>Helth</option>
          <option value={"networking"}>Networking</option>
          <option value={"communication"}>Communication</option>
        </select>

        <label htmlFor='image'>Image
          <div className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" /> : <span className='text-5xl'><BsCloudUpload /></span>
            }

            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
          </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleChange} value={data.price} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleChange}></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>

    </div>
  )
}

export default NewProduct
