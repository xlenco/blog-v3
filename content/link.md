<!-- 友链页面的“申请友链”要求 -->



```yaml
- name: 希乐博客 
  desc: 总有人间人间一两风，吹我十万八千梦
  link: https://blog.xlenco.top
  icon: https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=100
  feed: https://blog.xlenco.top/atom.xml
```

- 申请要求：原则上与多数独立博客的友链要求一致
  - 能够**长期更新维护**，并输出**有价值的原创内容**
  - 可以参考 [加入开往](https://www.travellings.cn/docs/join.html) 页面的规则
- 申请方式：在评论区留言或发送邮件到 :tip{text="hi@zhilu.cyou" copy}
  - 标题注明 `友链申请: 你的昵称`
  - 以 :tip[任意形式]{tip="指向信息的 URL、自然语言、编程语言"} 附上友链信息
    ```ts
    export default {
        title: '博客名称',
        desc: '博客描述',
        link: '博客地址',
        avatar: '个人头像',
    } satisfies Friend
    ```
- 信息可能会被适当修改，以保证展示效果
