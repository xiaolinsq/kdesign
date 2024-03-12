---
title: 撤销、恢复和清除
order: 1
---

撤销、恢复和清除工具可根据需要进行配置。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Signature } from '@kdcloudjs/kdesign'

const Demo = () => {
  const getSignatureData = (dataUrl) => {
    console.log('dataUrl===>', dataUrl)
  }
  const handleClear = () => {
    console.log('clear了吗')
  }
  const undo = () => {
    console.log('undo')
  }
  const redo = () => {
    console.log('redo')
  }
  return (
    <div style={{ width: '230px', height: '72px' }}>
      <Signature getSignatureData={getSignatureData} redo={redo} undo={undo} onClear={handleClear}></Signature>
    </div>
  )
}

ReactDOM.render(<Demo />, mountNode)
```