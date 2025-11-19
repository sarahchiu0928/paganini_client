import { useState, useEffect } from "react";
import { apiBaseUrl } from '@/configs'

const [data, setData] = useState([])

  // 呼叫 API 取得資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/product`)
        const result = await response.json() 
        if (result.status === 'success') {
          setData(result.data.shop)
        }
      } catch (error) {
        console.error('無法取得資料:', error)
      }
    }
    fetchData()
  }, [])  