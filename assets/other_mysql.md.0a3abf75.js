import{_ as s,o as a,c as n,V as l}from"./chunks/framework.3745025a.js";const d=JSON.parse('{"title":"Mysql基础","description":"","frontmatter":{},"headers":[],"relativePath":"other/mysql.md","filePath":"other/mysql.md"}'),e={name:"other/mysql.md"},p=l(`<h1 id="mysql基础" tabindex="-1">Mysql基础 <a class="header-anchor" href="#mysql基础" aria-label="Permalink to &quot;Mysql基础&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>1.官网安装mysql server服务端<br><code>Downloads</code>=&gt; <code>MySQL Community (GPL) Downloads</code> =&gt; <code>MySQL Installer for Windows</code>。</li></ul><blockquote><p>安装选项内勾选时，只勾选mysql server。<br> 安装时记住设置的用户名和密码。</p></blockquote><ul><li>2.安装mysql第三方客户端（SQLyog）</li></ul><blockquote><p>打开客户端即可使用。</p></blockquote><h2 id="增删改查语句" tabindex="-1">增删改查语句 <a class="header-anchor" href="#增删改查语句" aria-label="Permalink to &quot;增删改查语句&quot;">​</a></h2><h3 id="增insert" tabindex="-1">增Insert <a class="header-anchor" href="#增insert" aria-label="Permalink to &quot;增Insert&quot;">​</a></h3><p>(特殊的如果id自动递增的话，就不需要插入id)</p><ul><li>基本语法:<br><code>insert into 表名(列1，列2，列3，列4，...) values(值，值，值)</code><br> 例子：</li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> student(</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,sex,age) </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">，</span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">，</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>插入的另外一种形式：<br><code>insert into 表名 set 列=值，列=值，列=值，....</code><br> 例子:</li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">insert into</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">Set</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,age</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">18</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删delete" tabindex="-1">删delete <a class="header-anchor" href="#删delete" aria-label="Permalink to &quot;删delete&quot;">​</a></h3><ul><li>基本语法:<br><code>delete from 表名 where 列=值</code><br> 例子：</li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> 表名 一行行删除整张表</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">TRUNCATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> 表名 就是清空表</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="改update" tabindex="-1">改update <a class="header-anchor" href="#改update" aria-label="Permalink to &quot;改update&quot;">​</a></h3><ul><li>基本语法:<br><code>update 表名 set 列=值，列=值，.... where...</code><br> 例子：</li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">update</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查select" tabindex="-1">查select <a class="header-anchor" href="#查select" aria-label="Permalink to &quot;查select&quot;">​</a></h3><ol><li>基本查询语句:</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student(查询student表中所有列)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>代表代表所有列，要查询哪一列就把</em>改成哪一列。<br> 可以查询一列，也可以查询多列，多列用逗号隔开，<br> from后面跟的是表名。查询的结果包含列名和每一列的数据</p><ol start="2"><li>条件查询where</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">(表示查询student表中id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1的学生的所有列)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>where后跟查询条件,查询的如果是字符串，要带引号。<br> 多条件查询如果是并且条件，用and 或者用or。<br> 例子：</p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查询出班级号为20201001班的学生并且要求是男生,年龄大于20</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> class_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">20201001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查询出班级号为20201001班的学生或者性别为女的学生</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> class_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">20201001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">女</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>去重查询 DISTINCT<br> 例子：</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">查询出表当中有哪些性别   </span></span>
<span class="line"><span style="color:#F78C6C;">SELECT DISTINCT</span><span style="color:#A6ACCD;"> sex </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>模糊查询(重点)<br> 模糊查询可以实现搜索功能,<br> 基本语法: like 通配符 例子：</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%王</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 表示模糊查询name以王结束的</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">王%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 表示模糊查询name以王开头的</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%王%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 表示模糊查询name中包含王字的</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>排序查询 ORDER BY 倒序关键字DESC<br> 默认排序规则是根据id进行排序，并且是id从小到大。<br> 例子：</li></ol><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 按照年龄从低到高进行排序</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 按照年龄从高到低进行排序</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> age </span><span style="color:#F78C6C;">DESC</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="6"><li>分页查询 limit关键字：限定查询多少条数据。<br> OFFSET关键字：从第几条数据开始查询 默认第一条数据是0</li></ol><p>例子：</p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查询出第二页的数据，这一页有3条数据</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> OFFSET </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 知道页数和每页查询的数据（固定）</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> 数据量 OFFSET 数据量 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> （页数</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> limit后一个数据表示从第几条数据查起，后面数据是查询的条数</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="7"><li>聚合查询 count() :记录查询列有多少行<br> SUM() :求数值序列的和<br> AVG() :求平均数<br> MAX() :求最大值<br> MIN() :求最小值</li></ol>`,37),o=[p];function r(t,c,C,i,y,A){return a(),n("div",null,o)}const F=s(e,[["render",r]]);export{d as __pageData,F as default};
