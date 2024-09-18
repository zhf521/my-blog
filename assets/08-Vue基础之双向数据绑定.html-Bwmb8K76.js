import{_ as i,c as s,o as a,d as t}from"./app-wCDzz1PY.js";const n={},l=t(`<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><p>使用 Vue 的 <code>v-model</code> 指令，可以在表单元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;文本框：{{ data.text }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;单选框：{{ data.radio }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;复选框：{{ data.checkbox }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;记住密码：{{ data.remember }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;下拉框：{{ data.select }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 单向数据绑定：当数据发生改变时，视图会自动更新。但用户手动更改 input 的值，数据不会自动更新 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        单向数据绑定：&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 双向数据绑定：当数据发生改变时，视图会自动更新。当用户手动更改 input 的值，数据也会自动更新 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 对于 &lt;input type=&quot;text&quot;&gt;，v-model 绑定的是 input 元素的 value 属性 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        双向数据绑定：&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 对于 &lt;input type=&quot;radio&quot;&gt;，v-model 绑定的是 input 元素的选中状态 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;写作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;画画</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 对于 &lt;input type=&quot;checkbox&quot;&gt;，v-model 绑定的是 input 元素的选中状态 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;写作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;画画</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;运动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 记住密码 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.remember&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;记住密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        &lt;!-- 对于 &lt;select&gt;，v-model 绑定的是 select 元素的选中状态 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;data.select&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;请选择&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;写作&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;画画&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;运动&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ref</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">computed</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/vue@3/dist/vue.esm-browser.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">            setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;你好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//文本框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    radio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//单选框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    checkbox</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [], </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//复选框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    remember</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//单个复选框-记住密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //下拉框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                    data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h2><ul><li><code>.lazy</code>：在“change”时而非“input”时更新。即当失去焦点时，才会更新数据</li><li><code>.number</code>：自动将用户的输入值转为数值类型</li><li><code>.trim</code>：自动过滤用户输入的首尾空白字符</li></ul>`,5),h=[l];function k(e,p){return a(),s("div",null,h)}const r=i(n,[["render",k],["__file","08-Vue基础之双向数据绑定.html.vue"]]),B=JSON.parse('{"path":"/VueLearningNote/08-Vue%E5%9F%BA%E7%A1%80%E4%B9%8B%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html","title":"Vue 基础之双向数据绑定","lang":"zh-CN","frontmatter":{"title":"Vue 基础之双向数据绑定","cover":"https://t.alcy.cc/fj?t=1726639200000","order":8,"date":"2024-09-18 14:00","category":"软件开发","tag":"Vue","excerpt":false,"description":"基本用法 使用 Vue 的 v-model 指令，可以在表单元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素 修饰符 .lazy：在“change”时而非“input”时更新。即当失去焦点时，才会更新数据 .number：自动将用户的输入值转为数值类型 .trim：自动过滤用户输入的首尾空白字符","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/VueLearningNote/08-Vue%E5%9F%BA%E7%A1%80%E4%B9%8B%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html"}],["meta",{"property":"og:site_name","content":"茕茕の博客"}],["meta",{"property":"og:title","content":"Vue 基础之双向数据绑定"}],["meta",{"property":"og:description","content":"基本用法 使用 Vue 的 v-model 指令，可以在表单元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素 修饰符 .lazy：在“change”时而非“input”时更新。即当失去焦点时，才会更新数据 .number：自动将用户的输入值转为数值类型 .trim：自动过滤用户输入的首尾空白字符"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1726639200000"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-18T06:08:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1726639200000"}],["meta",{"name":"twitter:image:alt","content":"Vue 基础之双向数据绑定"}],["meta",{"property":"article:author","content":"茕茕"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2024-09-18T14:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-18T06:08:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 基础之双向数据绑定\\",\\"image\\":[\\"https://t.alcy.cc/fj?t=1726639200000\\"],\\"datePublished\\":\\"2024-09-18T14:00:00.000Z\\",\\"dateModified\\":\\"2024-09-18T06:08:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茕茕\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[]}],"git":{"createdTime":1726639710000,"updatedTime":1726639710000,"contributors":[{"name":"赵鸿飞","email":"zhaohongfei@vasoyn.com","commits":1}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"VueLearningNote/08-Vue基础之双向数据绑定.md","localizedDate":"2024年9月18日","excerpt":"","autoDesc":true}');export{r as comp,B as data};
