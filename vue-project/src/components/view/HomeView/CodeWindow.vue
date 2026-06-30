<script setup>
const LINE = "text-[#a9b1d6]"
const KW = "text-[#bb9af7]"
const TAG = "text-[#f7768e]"
const ATTR = "text-[#e0af68]"
const STR = "text-[#9ece6a]"
const FN = "text-[#7aa2f7]"
const CMT = "text-[#565f89]"
const PUNC = "text-[#89ddff]"
</script>

<template>

    <pre class="overflow-x-auto px-4 py-4">
<code :class="LINE"> <span :class="PUNC">&lt;</span><span :class="TAG">script</span> <span :class="ATTR">setup</span> <span :class="ATTR">lang</span><span :class="PUNC">=</span><span :class="STR">"ts"</span><span :class="PUNC">&gt;</span>
<span :class="KW">import</span> { <span :class="FN">ref</span>, <span :class="FN">computed</span> } <span :class="KW">from</span> <span :class="STR">"vue"</span>

<span :class="CMT">// reactive state</span>
<span :class="KW">const</span> visitors <span :class="PUNC">=</span> <span :class="FN">ref</span>(<span class="text-[#ff9e64]">0</span>)
<span :class="KW">const</span> isLive <span :class="PUNC">=</span> <span :class="FN">ref</span>(<span :class="KW">true</span>)

<span :class="KW">const</span> status <span :class="PUNC">=</span> <span :class="FN">computed</span>(() <span :class="PUNC">=&gt;</span> {
  <span :class="KW">return</span> isLive.value
    <span :class="PUNC">?</span> <span :class="STR">`${visitors.value} online`</span>
    <span :class="PUNC">:</span> <span :class="STR">"offline"</span>
})

<span :class="FN">setInterval</span>(() <span :class="PUNC">=&gt;</span> visitors.value<span :class="PUNC">++</span>, <span class="text-[#ff9e64]">1000</span>)
<span :class="PUNC">&lt;/</span><span :class="TAG">script</span><span :class="PUNC">&gt;</span>

<span :class="PUNC">&lt;</span><span :class="TAG">template</span><span :class="PUNC">&gt;</span>
  <span :class="PUNC">&lt;</span><span :class="TAG">div</span> <span :class="ATTR">class</span><span :class="PUNC">=</span><span :class="STR">"app"</span><span :class="PUNC">&gt;</span><span v-pre>{{ status }}</span><span :class="PUNC">&lt;/</span><span :class="TAG">div</span><span :class="PUNC">&gt;</span>
<span :class="PUNC">&lt;/</span><span :class="TAG">template</span><span :class="PUNC">&gt;</span>

</code>
        </pre>
</template>