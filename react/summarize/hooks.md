# Các Hook trong React

::: info TDLR;
Trang này sẽ giúp các bạn hiểu được các Hook trong React, cách sử dụng các Hook, cách tạo ra các Hook, ...
:::

### Giới thiệu

[Hook](https://reactjs.org/docs/hooks-intro.html) là một tính năng mới được giới thiệu trong React 16.8. Hook giúp chúng
ta có thể sử dụng các tính năng của React Functional một cách linh hoạt hơn.

### Các Hook cơ bản trong React

- [useState](https://reactjs.org/docs/hooks-reference.html#usestate): Hook này dùng để quản lý trạng thái của Component.

```javascript {4}
import React, {useState} from 'react';

export const Component = () => {
    const [count, setCount] = useState(0); // [!code focus]

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
```
