







# TypeScript 入門攻略

[toc]

# 壹、TypeScript 安裝與環境建置

online compiler & Demo : https://www.typescriptlang.org/play



## 1-1. Node.js 

安裝路徑 :  https://nodejs.org/en/

* node -v   >> 查看 node.js 安裝版本



## 1-2. TypeScript (TSC)

* npm i -g typescript  >>  安裝 typescript
* tsc - v   >> 查看 tsc 安裝版本

![image-20210119094458547](Image/Readme/image-20210119094458547.png)



建立 hello.ts 於自定義之目錄  C:/public/mode01

```typescript
var i:number = 100;
console.log(i+100);
```

CMD 切換至 C:/public/mode01 目錄，執行以下語法

* tsc hello.ts   >> 產生hello.js

* node hello.js  >> 執行hello.js 

> 200  >> 結果 

使用 TS 編譯失敗範例

```typescript
var i:number = 100;
i="aaa";
console.log(i+100);
```

![image-20210119095534326](Image/Readme/image-20210119095534326.png)

編譯失敗也會產生 js 檔案 。



## 1-3. ts-node

學習用套件，可直接執行.ts檔。

* npm i -g ts-node 

* ts-node hello.js  >> 執行hello.js 

![image-20210119100017943](Image/Readme/image-20210119100017943.png)

於 VS Code 安裝 Code Runner 後，對 TypeScript 執行程式會直接執行 ts-node 語法動態執行程式碼。



## 1-4. VS Code

安裝路徑 : https://code.visualstudio.com/

File > Open Folder > 選擇自定義目錄 ( or 專案路徑 )

![image-20210119100459652](Image/Readme/image-20210119100459652.png)

VS Code 安裝 Extension 擴充套件 Code Runner ( 安裝後可直接對 js / ts 直接進行右鍵 )

![image-20210119100405460](Image/Readme/image-20210119100405460.png)

設定 File > Preference > Settings > Extension > Run Code Extension > Clear Previous Output

![image-20210119100852484](Image/Readme/image-20210119100852484.png)

設定 File > AutoSave (自動儲存)  **[註] 於開發Angular專案時建議不要使用此設定**

設定 File > Preference > Settings > Commonly Used Front Size 22



## ＊ 建立專案

tsc --init   >> 會產生 tsconfig.json 

於此json可以定義編譯時的設定 EX. 使用的 Javasciprt版本、編譯後的檔案輸出目錄 ... 

![image-20210119101612154](Image/Readme/image-20210119101612154.png)

outDir 取消註解 (ctrl + k + u) 改為 "outDir": "./js"

於該目錄執行 tsc 會產生專案檔

![image-20210119104604727](Image/Readme/image-20210119104604727.png)

於 View > Command Palette > Configure Default Build Task

* 模式一 、 透過 Teriminal > Run Build Task >  直接對整個目錄編譯。
* 模式二 、 即時編譯 Watch 模式，可以開兩個視窗 ( 一個 ts 一個編譯後的 js )，編譯完後 js 會自動產生變化。

![image-20210119105412113](Image/Readme/image-20210119105412113.png)

於Extension 安裝 code snippets > Clg ==> console.log



# 貳、基本型別簡介

## 2-1. var 提升 與 let 語法 (ES5 VS ES6)

範本:  03_var.js

var 有提升作用

```typescript
console.log(i);  //hoist, undefined

var i=10;

console.log(i);   //10
```

![image-20210119112217471](Image/Readme/image-20210119112217471.png)

let 沒有提升

```typescript
console.log(i);  //hoist, undefined

let i=10;

console.log(i);   //10
```

![image-20210119112127796](Image/Readme/image-20210119112127796.png)

var 可以重複宣告

![image-20210119112256359](Image/Readme/image-20210119112256359.png)

let 不可以

![image-20210119112321676](Image/Readme/image-20210119112321676.png)

結論: TypeScript 盡量使用 let 語法，避免使用 var 。



## 2-2. 指派與預設(推斷)變數型別

範本:  04_type.ts

1. 直接指定數字

```typescript
let n:number=10;
console.log(n);
```

2. 指定數字，之後指定值。

```typescript
let m:number;
m=20;
console.log(m);
```

3. 推斷資料型別，推斷後該資料型別已定型，不可再改變。

```typescript
let k=30;
// k="aaa"; ==> 若執行編譯 Type Script 不會過。
console.log(k);
```

4. 沒有宣告 let 變數，會變成 any，會和寫 javascript 一樣，型別會動態決定，雖然程式編譯不會錯，

   但會造成動態執行時可能出現無法預期的錯誤，請盡量避免使用。

```typescript
let x; //any
x=10;
x="aaa";
console.log(x);
```



## 2-3. 數字特性 (ES5 VS ES6)

範本:  05_number.ts

更改 tsconfig ES5 => ES6

ES5 => 不支援0b、0o 但會自己轉 js 數字

ES6 => 支援，所以不會轉(使用原本的數值)



## 2-4. String Template (ES5 VS ES6)

範本:  06_string.ts

ES5 不支援樣板寫法 不過TypeScript編譯會自己轉

![image-20210119114521884](Image/Readme/image-20210119114521884.png)

ES6 支援樣板語法，會保留樣板格式

![image-20210119114620126](Image/Readme/image-20210119114620126.png)



## 2-5. 陣列宣告方式

範本: 07_array.ts

陣列內的元素都要用相同的型別。

A. 一般 Array 寫法

```typescript
let seasons: string[] = ["Spring", "Summer", "Autumn", "Winter"];

console.log(seasons[0]);

seasons[0] = "春天";

console.log(seasons[0]);
```

B. 泛型寫法

```typescript
let seasons: Array<string> = ["Spring", "Summer", "Autumn", "Winter"];

console.log(seasons[0]);

seasons[0] = "春天";

console.log(seasons[0]);
```



## 2-6. Tuple 宣告方式

範本: 08_tuple.ts

* 表示可容納多個不同型別的容器資料型態
* 內容有其上限，和 Array 不同

```typescript
var coordinate: [number, number];

coordinate = [10,20];

console.log(coordinate[0],coordinate[1]);
```

以下為不同資料型態取值方式

```typescript
var data:[number,string ,Date]=[100,"aaa",new Date()];

console.log(data[0]+50, data[1].toUpperCase(), data[2].toLocaleTimeString("zh-tw"));
```



## 2-7. Enum 宣告與使用方式

範本: 09_enum.ts

宣告方式

```typescript
enum Color 
{
	red, blue, green
}

let c: Color = Color.red;
```

調整數值與顯示內容，顯示內容會透過索引值反查取得。

```typescript
enum Color {
	red = -1, blue, green
} // red = -1 , blue = 0 , green = 1 

let c: Color = Color.blue; // 0 

console.log(Color.blue);
console.log(Color[1]);
console.log(Color[c]);
```

![image-20210119131614825](Image/Readme/image-20210119131614825.png)



## 2-8.  Null / Undefined 的宣告使用

範本: 07_object.js

Undefined  --> 物件不存在  , null  --> 物件存在但沒有值。

* 不可以指派null給數值

```typescript
// let i:number=10;
// i=null;
```

* 除非使用 union type 方式指定

```typescript
let i:number|null=10; //union type
i=null;
```

* Undefined 不可以直接輸出

```typescript
// let j:number;
// console.log(j); 
```

* 除非使用 union type 方式指定

```typescript
let j:number|undefined; //union type
console.log(j);
```

[註] 變數名稱衝突 (如果不同typescript可使用namespace來預防)



## 2-9.  Any

範本: 11_any.ts

盡量避免使用因為，沒有提示，錯誤也不會編譯告知。

以下為 使用 Any 時執行錯誤狀況，編譯會通過，但產出的 js 執行階段也會出現錯誤。

![image-20210119133417403](Image/Readme/image-20210119133417403.png)



##  2-10.  Void 

範本: 12_void.ts

![image-20210119133754868](Image/Readme/image-20210119133754868.png)

指定 void 回傳值後不可以有回傳值。

如果去接值，會出現undefined。

![image-20210119133914180](Image/Readme/image-20210119133914180.png)



## 2-11. Inferance

範本: 13_Inferance.ts

* any 盡量避免使用，但會有推斷的功能。
* function的參數不可以不指定型別 ，可以使用 ES6 於參數初始化來做推斷



## 2-12.  Assertion

範本: 14_assertion.ts

* 用途為強制轉型
* 原先為 any , 使用 dot operator 會無法解析其成員與方法。
* 強制轉型後 dot operator可解析
* 使用強轉型有兩種方法 「\<number>a 」或 「a as number 」。

```typescript
let a:any = 100.345;

//let a:any="aaa";

console.log(typeof(a));  >> 會出現number 

console.log((<number>a).toFixed(2));

console.log((a as number).toFixed(2));
```

改成 let a:any="aaa"; 使用 tsc 編譯會過，但是執行階段會有錯誤。

![image-20210119135743606](Image/Readme/image-20210119135743606.png)



# 參、複雜型別簡介

## ＊ interface

interface 不是類別 , 只有 typescript 才有， javascript 沒有，

是用來限制與產生複雜的資料型別用，不會產生對應的 JS 程式碼。



## 3-1. inline Interface

範本: 01_inline.ts

* 指定物件型別，直接於行內宣告

* 單次使用沒有考慮重複使用。

  **p:{x:number, y:number}  代表參數 p 需要是一個「具有 x 和 y 兩個數值型別」的型別。 **

```typescript
function func1(p:{x:number, y:number}) {
	console.log(p.x, p.y);
}

func1({x:10,y:20})
```

ES6 寫法使用「  => 」

```typescript
let func1= (p:{x:number, y:number})=> {
	console.log(p.x, p.y);
};
```



## 3-2.  Interface

範本: 02_interface.ts

重複使用介面時，先定義再宣告使用，介面是用來限制物件資料型別用的。

以下屬於僅定義資料的 interface。

```typescript
interface MyFunc {
	x:number;
	y:number;
}
```



```typescript
function func1(p:MyFunc) {
	console.log(p.x, p.y);
}
```



```typescript
let func2=function (p:MyFunc) {
	console.log(p.x, p.y);
};
```



## 3-3.  Interface with Array

範本:  03_interface.ts

book 直接透過 inference 推斷，來做 book 型別的指定

book2 透過 inline interface 指定其型別

```typescript
let book = {title:"ts",price:200};

console.log(book.title,book.price);

// book.id=1; //error

let book2:{title:string, price:number};

book2={title:"js",price:300};

console.log(book2.title,book2.price);
```



直接定義 interface Book，並宣告 books 是用來存放 Book 的 Array，並且指派上面兩種符合規範的物件。

```typescript
interface Book {
	title:string;
	price:number;
}

let books:Book[]=[book,book2];

books.forEach(element => {
	console.log(element.title, element.price);
});
```



## 3-4. interface optional

範本: 04_optional.ts

以下使用 ? 表示 y 可有可無。

```typescript
interface MyFunc {
	x: number;
	y?: number;
}

let func3 = (p: MyFunc) => {...}
func3({ x: 10,y:100 });
func3({ x: 200 });
```

範例中，確保 p.y 不存在， 使用 === 嚴格的檢核。

```typescript
if (p.y===undefined) {
	console.log(p.x)
} else {
	console.log(p.x, p.y)
}
```

原因可參考以下資訊 

![image-20210119150315163](Image/Readme/image-20210119150315163.png)

若使用 if (p.y) 當判斷 當 p.y = 0 的時候會判讀成 false ， 與原先用意不同。



## 3-5. Function with Interface

範本: 05_function.ts

*  使用 interface 呼叫簽名 ( call Signature)
*  類似 C# Delegate 委派
*  用interface來描述函式

宣告使用方式

>interface 介面名稱
>
>{
>
>​		(方法參數) : 回傳參數
>
>} 

```typescript
interface MathFunction {
	(x:number,y:number):number;
}
```

以下使用的範例，add 和 sub 限制回傳的型別要符合 MathFuction 這個 Interface 

```typescript
let add:MathFunction=function (i,j) {
	return i+j;
};

let sub:MathFunction=(i,j)=>i-j;
console.log(add(100,200));
console.log(sub(500,300));
```



## 3-6. index

範本: 06_indexable.ts

* 索引型別，只有 Array 的索引功能。

* 資料的使用方式在於型別，以下範例如果沒有 length:number ，for 迴圈中的 length 就不能使用。因為他沒有 length 屬性。

* Array 本身就有索引屬性和Length屬性，所以可以指派給我們指定的型別。

```typescript
interface DepartmentArray {
	readonly [index: number]: string;
	length:number
}

let ar:DepartmentArray = ['IT', 'Sales', 'Accounting'];

for (let i = 0; i < ar.length; i++) {
	console.log(ar[i]);
}
```



## ＊ 物件



## 3-7. Javacript 物件使用方式

範本: 07_object.js

* Javacript 物件宣告

* 在寫 function 時若使用this，請不要使用 => ES6 寫法

```typescript
employee.showInfo=function () {
	return this.empName+", "+this.age;
};
```



## 3-8. Type Template

範本: 08_type_template.ts

因為初始化了 employee ，已經指定他的型別只能接收兩個參數。

所以就不能加方法，如果要新增方法或屬性，一開始就要定義。

![image-20210119154211443](Image/Readme/image-20210119154211443.png)



## ＊ 類別

ES6 才有的功能



## 3-9. Class

範本: 09_class.ts

* type 描述 ( 編譯過不會產生 )

* 建構子
* 方法

產出的 ES 5  == >ES5 會需要使用 function 和 prototype 組成。

![image-20210119160744503](Image/Readme/image-20210119160744503.png)

產出的 ES 6 只有建構子跟方法。

![image-20210119160958969](Image/Readme/image-20210119160958969.png)

若只有屬性設定，會自己產生預設建構子。

![image-20210119161538668](Image/Readme/image-20210119161538668.png)



## 3-10. CLASS 存取詞 public / private

範本: 10_public.ts

* private 限制存取範圍，只有class內的方法可以使用。
* 預設都是public 

![image-20210119162044176](Image/Readme/image-20210119162044176.png)



## 3-11. Ctor ( Constructor ) 簡便寫法

範本: 11_ctor.ts

* 於 Constructor 初始化時寫了存取方式後，產生的語法會自行將成員指定。
* 如果沒有宣告存取原則，嘖嘖不會自動建立，需要指定

![image-20210119162637189](Image/Readme/image-20210119162637189.png)



## 3-12. Accessor

範本: 12_accessor.ts

使用一般寫法，並撰寫 Accesor 

```typescript
class Employee {
	private name!:string;
	constructor(private id: number, name: string) {
		this.Name=name;
	}
	public set Name(v:string){
		this.name=v.toUpperCase();
	}
	public get Name(){
		return this.name+"...";
	}
}

let emp: Employee = new Employee(1, "aaa");
// emp.Name="bbb"
console.log(emp.Name);
```

不適合用簡便寫法，因為會產生不必要的程式碼 this.name = name。

![image-20210119164355339](Image/Readme/image-20210119164355339.png)

這樣寫，編譯出的就不會有多餘程式碼。

![image-20210119164815184](Image/Readme/image-20210119164815184.png)

但是因為 name 沒有初始值編譯器會出錯，所有要在 name指定屬性時使用 驚嘆號 來略過編譯器檢查。

![image-20210119164519698](Image/Readme/image-20210119164519698.png)

**快速實做 Accessor方法 ** > 

方法一、 對參數右鍵 Refactor 選 generate getter setter 即可。

![image-20210119165002144](Image/Readme/image-20210119165002144.png)

![image-20210119165138801](Image/Readme/image-20210119165138801.png)

方法二、 prop 關鍵字跳出後用 tab

![image-20210119165518004](Image/Readme/image-20210119165518004.png)

會自動產生以下 Accessor 範本 。

![image-20210119165535044](Image/Readme/image-20210119165535044.png)



## 3-13. Static

範本: 13_static.ts

* 共用成員物件

* ES6 沒有 static 資料成員

![image-20210120092749148](Image/Readme/image-20210120092749148.png)



## 3-14. Extend (Inheritance)

範本: 14_extends.ts

ES6 本身就有的語法，typescript只是多了修飾詞的功能。

```typescript
class Employee {
    constructor(private id: number, private name: string) {
    }
    getInfo() {
    	return `${this.id}: ${this.name}`;
    }
}

class Sale extends Employee {
    constructor(id:number,name:string,public bonus:number) {
    	super(id,name);
    }
}
```



## 3-15. InstanceOf ( Inheritance )

範本: 14_extends.ts

* 判斷物件的資料型別，基本資料型別不適用

![image-20210120093724098](Image/Readme/image-20210120093724098.png)



## 3-16. Override 使用方式

範本: 16_overrides.ts

* 父類別成員 private子類別無法存取。
* 使用 protected，允許繼承成員使用父類別變數 (外部無法存取)。
* 複寫時若要存取父類別方法，則使用

![image-20210120094438554](Image/Readme/image-20210120094438554.png)'



## 3-17.  Override use HTML inspect Object Contents

範本: 17_overrides.html

先將 範例 16 新增 console.log

``` typescript
let emp = new Sales(1, "aaa", 3000);
console.log( emp )
```

將範例 16 的 ts 編譯產生 javascript.

建立範本檔案: 17_overrides.html

[註] ! + tab  => 產生 html 基本文件

產生完再將script引入

![image-20210120100650455](Image/Readme/image-20210120100650455.png)

於 Extension 擴充功能安裝 live server，並對撰寫好的 html 文檔右鍵可找到執行 live server。

以下為執行結果，可以看到 物件的 proto 鏈中有 Sales 的 getInfo 和  Employee 的 getInfo。

![image-20210120102809092](Image/Readme/image-20210120102809092.png)



## 3-17.  interface Implement

範本: 18_interface.ts

* 將介面 ( interface ) 定義的方法具體化實現 ， 使用 implements 關鍵字實作。
* 要求要有 interface 定義的成員。

```typescript
interface Shape {
    width: number;
    height: number;
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(public id:number,public width:number, public height:number) {  
    }
    getArea(): number {
        return this.width*this.height;
    }
}

let s:Rectangle=new Rectangle(1,10,20);
console.log(s.id, s.getArea());
let ss:Shape = new Rectangle(1,10,20);
//console.log(ss.id, ss.getArea()); //會產生錯誤，因為ss被只有Shape介面的屬性，沒有 id 可以使用
```



# 肆、Function



## 4-1. function 宣告

範本: 01_function.ts

* 指定 變數 只能是 function ， 於變數後指定 Function 關鍵字。
* 範本如下有兩種寫法 ES5 和 ES6 

```typescript
let sayHi:Function=function () {
    console.log("Hi");
};
sayHi();

let add:Function=(i:number,j:number)=>i+j;
console.log(add(20,10));
```



## 4-2.  Function type 

範本: 02_type.ts

 ### Function type inference

使用推測方式指定， (參數) => 回傳值 ，先前範例定義 Function 是使用 (參數):回傳值 的方式，

但因為是定義變數為 Function，避免衝突所以使用 => 來取代 :

![image-20210120105123260](Image/Readme/image-20210120105123260.png)



### Function type Define

事先 add 為 Function 其參數與回傳值型別都事先定義。

```typescript
let add:(i:number,j:number)=>number;
add=(x,y)=>x+y;
console.log(add(20,10));
```



## 4-3.  與 inteface 差異

範本: 03_function.ts

* interface 的使用是當很多 Function 需要用到共同的型別限制時，會先定義。

![image-20210120110444737](Image/Readme/image-20210120110444737.png)

與 3-1 不同處是

宣告func1為函式，接收物件 {x:number, y:number} 

```typescript
function func1(p:{x:number, y:number}) {
	console.log(p.x, p.y);
}
```

宣告 add為變數，指定型別為 function

let add:(i:number,j:number)=>number;



## 4-4. Optional Operator

範本: 04_optional.ts

使用問號關鍵字，可讓 Function 定義其參數為可有可無，惟程式內要自行確保undefined的處理。

```typescript
    function add(i:number, j?:number):number {
        if (j===undefined) {
            return i;
        } else {
            return i+j;
        }
       
    }
    console.log(add(100,50));
    console.log(add(100));
```



## 4-5. Default

範本: 05_default.ts

直接給參數預設值，為 ES6 寫法

```typescript
function add(i:number, j=0):number {
	return i+j;       
}
```



## 4-6. Rest Parameter

範本: 06_rest.ts

使用 ... 代表剩餘

```typescript
function sum(...numbers:number[]) {
    let result=0;
    numbers.forEach(i=>result+=i);
    return result;
}
```

如果要讓剩餘參數接收不同型態的資料可使用 union type 的方式，

不過若要處理內容資料就要透過 type gaurd 檢查內容物。

範本: 06_rest_2.ts

```typescript
function test(...params:(number|string)[]) {
    let result=0;
    console.log(params);
    return result;
}
```

[註] typeof 只會檢查基礎資料型他， typescript編譯會告訴我們 always false

![image-20210120113751997](Image/Readme/image-20210120113751997.png)



## 4-7.  overloading

範本: 07_overloading.ts

因為 程式語言的特性，會有覆蓋，所以只好維持一個函示，但使用簽名(ㄒㄩㄞˉ)

函數的 overloading 

```typescript
function add(x: number, y: number): number; //定義add可接收的參數與接收後應該回傳的參數
function add(x: string, y: string): string; //定義add可接收的參數與接收後應該回傳的參數
function add(x: any, y: any): any {
	return x + y;
}

console.log(add(100,50));
console.log(add("aaa","bbb"));
```

範本: 07_overloading_2.ts

當遇到多型的案例參數可有可無時，需要新增其對應的 overloading ( EX. 單一參數的宣告 )

```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: string): string

function add(x: any, y?: any): any { // 使用Optional時，要新增一個 add(x: string): string 的宣告
    if (typeof y==="number") {
        return x + y; 
    }
    if (typeof y==="string") {
    	return (<string>x).toUpperCase() +", "+y.toUpperCase();
    }
    if (y===undefined) {
        return (x as string).toUpperCase();
    }
}

console.log(add(100,50));
console.log(add("aaa","bbb"));
console.log(add("xxx"));
```



# 伍、 NameSpace



## 5-1.  使用 TSconfig 設定編譯

範本:  01_demo.ts、02_demo2.ts

建立新的專案路徑

tsc --init 建立 config

新增 01_demo.ts

```typescript
let i=10;
```

新增 02_demo.ts

```typescript
console.log(i);
```

於 tsconfig 調整

 //"module": "commonjs", 

 "outFile": "./demo.js", 

會產出以下結果，合併。

![image-20210120132013879](Image/Readme/image-20210120132013879.png)



## 5-2.  Namespace 編譯與概念

範本: 03_namespace.ts

* IIFE ( Immediately Invoked Function Expression ) 結構
* 沒有 Export namespace外無法使用Employee。
* namespace等於全域變數

![image-20210120132331651](Image/Readme/image-20210120132331651.png)

* Export的使用，讓外部可使用

![image-20210120132819601](Image/Readme/image-20210120132819601.png)



## 5-3. 合併編譯

範本: 03_namespace.ts、04_var.ts、05_client.ts

### 編譯器指定特定檔案編譯

使用以下語法對命令列編譯，會產生client.js，不會透過 tsconfig 設定會用到 es5 語法。

> tsc -outfile client.js 05_client.ts

以下為指定 es6 來編譯

> tsc --target es6 -outfile client.js 05_client.ts

以命令方式編譯，引用命名空間所在檔案方式，需要加入以下 reference 特殊語法，因為他需要知道要編一那些。

/// <reference path="03_namespace.ts" />
/// <reference path="04_var.ts" />

```typescript
/// <reference path="03_namespace.ts" />
/// <reference path="04_var.ts" />
let emp=new HR.Employee(1,"aaa");
console.log(emp.getInfo());

import MyEmployee=HR.Employee;
let emp2=new MyEmployee(2,"bbb");
console.log(emp2.getInfo());

console.log(HR.projectName);
```

### TSConfig outFile 編譯方式

不用加 reference，本身就會將所有檔案彙整至同一檔案。



## 5-4. 使用模組載入

範本: 06_export.ts 、 07_import.ts

* 使用模組載入器 ， TSconfig檔案預設會使用 Node.js 的 CommonJS 模組載入器來載入。

於 06_export 先匯出檔案

```typescript
export let projectName = "HR Management";
export class Employee {
    constructor(public empId: number, public empName: string) {
    }
    getInfo() {
        return ` ${this.empId} , ${this.empName} `;
    }
}

```

於 07_import.ts  再匯入檔案

````typescript
import { Employee,projectName } from "./06_export";
````

Node.js 的 CommonJS 模組載入器來載入，產生如下右側語法。

![image-20210120140338266](Image/Readme/image-20210120140338266.png)

可成功執行如下。

![image-20210120140713650](Image/Readme/image-20210120140713650.png)

另外還有兩種做法

其一透過設定式別名方式 as MyEmployee

```typescript
import { Employee as MyEmployee } from "./06_export";
let emp=new MyEmployee(1,"aaa");
console.log(emp.getInfo());
```

其二透過引用全部設定識別名稱方式

```typescript
import * as Demo from "./06_export";
console.log(Demo.projectName);
let emp=new Demo.Employee(1,"aaa");
console.log(emp.getInfo());
```

以下需要用default匯出，一個檔案只能有一個default。

```typescript
import  Employee,{projectName} from "./06_export";
let emp=new Employee(1,"aaa");
console.log(emp.getInfo());
console.log(projectName);
```



## 5-5. Module特性

範本 : 08_script.html , 09_module.html

### Script 屬性 Type 不是 Module

沒有加模組，Script會按照順序執行，標籤還沒變物件，所以 document.querySelector("h1").textContent="Hello"; 會產生錯誤。

```html
<script>
    let i=10;
    console.log(1);
</script>
<script>
    // let i=20;
    console.log(i);
    console.log(2);
</script>
<script>
	document.querySelector("h1").textContent="Hello";
</script>
<h1>Demo</h1>
<script>
	console.log(3);
</script>
```

其變數是全域

![image-20210120142412625](Image/Readme/image-20210120142412625.png)

### Script 屬性 Type 是 Module

有加模組關鍵字的 script 會於dom載入完成最後才執行。

```html
<script type="module">
	let i=10;
	console.log(1);
</script>
<script type="module">
	let i=20;
	console.log(i);
	console.log(2);
</script>
<script type="module">
	document.querySelector("h1").textContent="Hello";
</script>
<h1>Demo</h1>
<script >
	console.log(3);
</script>
```

且其變數是共用

![image-20210120142449520](Image/Readme/image-20210120142449520.png)



## 5-6. 網頁載入

範本: 10_import.html

瀏覽器 模組載入器支援 es2015

先調整 tsconfig 的 "module": "commonjs" 為 "es2015"，

更改完後記得編譯 



## 5-7. 宣告檔案

範本: 11_declare.ts

目的 : 引入傳統 JS 模組 ，讓typescript編譯器能使用，但不會產生實際的 js 檔案。

原本編譯器看不懂跳出提示

![image-20210120150152325](Image/Readme/image-20210120150152325.png)

執行註解語法，產生宣告檔案，產生後提示消失了。

![image-20210120150258559](Image/Readme/image-20210120150258559.png)

記得產出後，會產生都是 any，建議調整成適當的型態。

![image-20210120150346670](Image/Readme/image-20210120150346670.png) 

調整後如下

![image-20210120150750500](Image/Readme/image-20210120150750500.png)

### 網頁引用

編譯完成後產出 js 檔案 

範本: 12_client.html

網頁依序載入

```html
<script src="sayHi.js"></script>
<script src="js/11_declare.js"></script>
```

### 引入 JQuery 套件

沒有時

![image-20210120151606390](Image/Readme/image-20210120151606390.png)

短網址: http://aka.ms/types

取得 jquery 定義檔案

![image-20210120151712468](Image/Readme/image-20210120151712468.png)

安裝完後，就可以找到 jquery 套件

![image-20210120151825930](Image/Readme/image-20210120151825930.png)

接著只要將 13_jquery 編譯完依序引入程式碼。

```html
<h1 id="result">Demo</h1>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="js/13_jquery.js"></script>
```

就會產生以下結果

![image-20210120152043476](Image/Readme/image-20210120152043476.png)

取代成功。



# 陸 、進階主題



## 6-1. 交集

01_intersection.ts

用 & 符號進行交集

 ```typescript
interface IEmployee {
    id: number;
    name: string;
}
interface ISales {
    bonus: number;
}
type Sales = IEmployee & ISales;

let s: Sales = {
    id: 1,
    name: 'mary',
    bonus: 1000
};
 ```

若要交集同一宣告名稱，型別需要一樣，否則會跳出提示。

![image-20210120153230649](Image/Readme/image-20210120153230649.png)

提示如下: 

![image-20210120153204708](Image/Readme/image-20210120153204708.png)



## 6-2. 聯集

 範本: 02_union.ts

用 | 表示聯集

判斷式會影響物件的型態。

![image-20210120153601439](Image/Readme/image-20210120153601439.png)

if 判斷後 typeof c === string 的 c 變成了字串。

![image-20210120153705742](Image/Readme/image-20210120153705742.png)

if 判斷後 typeof c !== string 的 c 變成了另一個聯集物件。

![image-20210120153751429](Image/Readme/image-20210120153751429.png)



## 6-3. 存取聯合型別成員

範本: 03_union.ts

只能使用其共同的方法，以下範立getAnimal後只能使用共同擁有的walk方法。

```typescript
interface Cat {
    
	walk(): void;
}
interface Person {
    walk(): void;
    work(): void;
}

let c: Cat = {
    walk() {
        console.log("Cat is walking");
    }
};

let p: Person = {
    walk() {
    	console.log("Person is walking");
    }, 
    work() {
    	console.log("Person is working")
    }
};

function getAnimal(a: any): Cat | Person {
	return a;
}

let a1 = getAnimal(c);
let a2 = getAnimal(p);
a1.walk();
//a1.work(); => Error
a2.walk();
//a2.work(); => Error
```



## 6-4. Type Assertion

範本: 04_assertion.ts

若要讓範例 6-3 的物件使用 work 方法，使用 Type Assertion

```typescript
a1.walk();
if ((<Person>a1).work!==undefined) {
	(<Person>a1).work();
} // 因為a1實際是cat，不具備work方法，所以不會執行 if 內的程式
a2.walk();
if ((<Person>a2).work!==undefined) {
	(<Person>a2).work();
}
```



## 6-5. Type Gaurd

範本: 05_type_guard.ts

* 透過 Type Gaurd 語法 isPerson(o: Cat | Person): o is Person，經過檢查後即可直接使用 a1.work();
* 特性是 可以將 union Type 轉回 特定 Type

```typescript
function isPerson(o: Cat | Person): o is Person {
	return (<Person>o).work !== undefined;
}
if (isPerson(a1)) {
	a1.work();
}
a2.walk();
if (isPerson(a2)) {
	a2.work();
}
```



## 6-6. Generic Function

範本: 06_function.ts

printData\<T>(p: T) 其中 T 即為泛型的定義

```typescript
function printData<T>(p: T): void {
	console.log(p)
} 
printData<number>(100);
printData<string>("aaa");
```



## 6-7. Generic Interface

範本:  07_interface.ts

用 Type Argument 限制型別。

```typescript
interface printDataFn<T> {
	(p: T): void;
}
let f1:printDataFn<number>=i=>console.log(i+100);
f1(50);

let f2:printDataFn<string>=s=>console.log(s.toUpperCase());
f2("aaa");
```

如果要對犯行做限制，可以透過 extends 來做限制。

![image-20210120162259448](Image/Readme/image-20210120162259448.png)



## 6-8. Generic Class

範本:  08_class.ts

宣告 generic Class若不想初始化時，有兩種做法

1. "strictPropertyInitialization": true 設定為 false，這樣在初始化時就不會檢查，不過這是全域設定，影響較大不建議使用。
2. 使用 驚嘆號 這樣可以略過初始化的檢查。

```typescript
class GenericClass<T> {
	add!: (x: T, y: T) => T;
}
```

使用方式如下:

```typescript
let c=new GenericClass<string>();
c.add=(i,j)=>i.toUpperCase()+j.toUpperCase();//於此時才去定義方法，如果不加編譯器也可以通過，但執行階段要自行負責後果。
console.log(c.add("aaa","bbb"));

let c2=new GenericClass<number>();
c2.add=(i,j)=>i+j;
console.log(c2.add(50,100));
```



## 6-9. 叫用遠端程式

範本:  09_fetch.ts、10_fetch.html

安裝 promise套件

> npm init -y
>
> npm i --save isomorphic-fetch es6-promise

```typescript
import "isomorphic-fetch"; // node-js環境所以需要載入。
namespace mod06{
    function callAPI() {
        fetch("https://www.google.com.tw") // 需要絕對路徑
            .then(response=>response.text())
            .then(result=>console.log(result));
    }
    callAPI();
    console.log(1);
}
```

用瀏覽器模式就不需要 import "isomorphic-fetch"

![image-20210120165612791](Image/Readme/image-20210120165612791.png)



## 6-10. 使用 Async

範本:  11_async.ts、12_async.html

編譯器 target 要選 es2017，否則出現以下錯誤。 ( "target": "es2017" )

![image-20210120165820839](Image/Readme/image-20210120165820839.png)

```typescript
callAPI();
console.log(1);
//因為是非同步，所以會先出現 1 再出現 aaaa... 
```

編譯後執行網頁，可看到結果。

![image-20210120165953710](Image/Readme/image-20210120165953710.png)

使用以下網頁查詢 fetch可發現 IE 11不支援

https://caniuse.com/

![image-20210120170439007](Image/Readme/image-20210120170439007.png)