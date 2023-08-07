# Typescript

- Type 'string' is not assignable to type 'number'. -> Kiểu 'string' không được gán cho kiểu là 'number'
- Property 'split' does not exist on type 'number'. -> Thuộc tính 'split' không tồn tại trên type 'number'
- {} -> Là 1 Type đặc biệt trong Typescript, có thể dùng cho tất cả ngoại trừ null và undefined
- Union type -> Hoặc type này hoặc type kia
- Intersection type -> và type này và type nọ
- optional -> school?: number

# React

- Routes: /, /home, /about
- Components: Button, Popup/Modal, Dropdown, Label, Input,...
- Elements: button, h1, input
- Component phải bắt đầu bằng chữ in hoa: Button, Avatar, Dropdown, UserProfile, AccountSettingsPage
- Render trong React thông qua từ khóa `return`:
- Nếu chỉ là 1 element thì có thể viết trên 1 dòng
- Body code(trước từ khóa return) thì có thể viết Javascript bình thường
- Render conditionally

```js
{
  loading === "fetching" ? (
    <div>Loading</div>
  ) : loading === "successfull" ? (
    <div>Sucessfull</div>
  ) : loading === "error" ? (
    <div>Error</div>
  ) : (
    <></>
  );
}
```

```js
{
  loading === "fetching" && <div>Loading</div>;
}
{
  loading === "successfull" && <div>successfull</div>;
}
{
  loading === "error" && <div>Error</div>;
}
```

- conditional && results
- Nếu giá trị là 1 trong nhiều thì có thể sử dụng Union Type để được gợi ý khi gõ cũng như rõ ràng cho code
- React.ReactNode -> dùng để khai báo Type cho các JSX Element
- Render mảng thì key là bắt buộc cho các phần tử con trực tiếp và key không được trùng nhau

```js
{
  numbers &&
    numbers.length > 0 &&
    numbers.map((value, index) => {
      return <div key={index}>{value}</div>;
    });
}
```

- JIT Mode trong Tailwind -> w-[130px]
- Nếu props có giá trị là `true` thì có thể viết rút gọn như sau

```js
<Button
  isLoading
</Button>
```

- Nếu thuộc tính(property, attributes) là 1 từ thì viết thường -> disabled
- Nếu 1 từ trở lên thì dùng camelCase -> className, viewBox, stroke-line-cap -> strokeLineCap
- Props children là 1 props đặc biệt ở trong React, children là những thứ nằm giữa >children< component hoặc element
- props: JSX.IntrinsicElements["svg"] -> trả ra những props thuộc về element svg
- onEvent -> onClick, onChange, onKeydown, onMousemove
- 2 trường hợp sử dụng event callback

```js
  onClick={() => {
    console.log("Danger clicked1");
    console.log("Danger clicked2");
  }}
  onClick={handleClick}
  onClick={() => handleDangerClick(100)}

```

- unnecessary re-renders
- Re-renders
- State

## useState

- const [value, setValue] = useState(true);
- const [isRendering, setIsRendering] = useState(true);
-

# NextJS 13

- Mặc định là Server Components cho nên console.log sẽ in ra ở môi trường server(terminal)
