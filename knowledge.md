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
- Khi sử dụng setState mà cần phụ thuộc vào giá trị mới nhất của state trước đó thì truyền vào callback như sau
- setActive(prev => !prev)
- Để giải quyết những đoạn code sử dụng useState nhiều lần như trong bài tập ToggleV2 thì có thể dùng custom hook
-

### Tab Advanced

- Tạo 1 component Tab và có những props sau
- props `children`: Dùng để chứa tab content, nội dung của từng tab tương ứng
- props `items`: Là 1 mảng chứa các tab item, các tab chúng ta sẽ nhấn vào ví dụ ["Label", "Label1", "Label2"], dùng phương thức `map` cho props `items` để hiển thị danh sách các tab ra ngoài giao diện
- Khi chúng ta dùng map cho props `items` thì `tab`(từng phần tử trong mảng) chúng ta sẽ không biết được nó sẽ có gì ? Có thể là 1 object, có thể là number cũng có thể là chuỗi
- props `renderItems(value: tab)` là 1 function có đầu vào là phần tử của items tức là `tab` ở trên, nó sẽ trả ra type là React.ReactNode
- Generic sẽ giúp chúng ta giải quyết vấn đề trên
- Generic Type trong Typescript giúp giải quyết những type mà chúng ta không biết nó sẽ như thế nào?

# NextJS 13

- Mặc định là Server Components cho nên console.log sẽ in ra ở môi trường server(terminal)
