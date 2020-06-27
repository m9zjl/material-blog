import request from '@/utils/request'

export function getArticle(id) {
  return request({
    url: `/detail/${id}`,
    method: 'get',
  })
  // return {
  //   "article": {
  //     "id": 34,
  //     "date": 1591444035000,
  //     "labelId": 7,
  //     "title": "快速排序与最小K个元素选择",
  //     "content": "# 引言\n选择最小K个元素是《剑指offer》中的一道题目，要求找出一个数组中前K个小的元素，题目详情[参见leetcode](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)。这道题目，很容易想到的办法有：\n1. 排序\n2. 大顶堆\n\n利用选择排序的时间复杂度为O(nlgn)，利用大顶堆的时间复杂度为O(nlgk)，我原本认为大顶堆的方法已经足够好了，直到我看到了期望时间复杂度为O(n)的方法。没错，这种期望时间复杂度为O(n)的方法，还是和快排有关。\n# 快速排序\n先来回顾一下快速排序，直接放代码吧\n```Java\npublic void quickSort(int[] nums, int p, int r) {\n\tif (p < r) {\n\t\tint q = partition(nums, p, r);\n\t\tquickSort(nums, p, q-1);\n\t\tquickSort(nums, q+1, r);\n\t}\n}\n```\n其中最为关键的方法莫过于`partition`了，它的实现如下：\n```Java\npublic void partition(int[] nums, int p, int r) {\n\tint pivot = nums[r];\n\tint i = p - 1;\n\tfor (int j = p; j < r; j++) {\n\t\tif (nums[j] < pivot) {\n\t\t\ti = i + 1;\n\t\t\tswap(nums[i], nums[j]);\n\t\t}\n\t}\n\tswap(num[i+1], nums[r]);\n}\n```\n上述`partition`方法来自《算法导论》第七章，关于pivot和i的初始值，这里说明一下：`partition`会将数组arr分为三个部分，小于等于pivot值部分、大于pivot值部分，未排序部分。三者的范围是p～i，i+1～j-1,j～r-1\n![快排](https://img.aagu.ltd/quickSort.jpg)\n\n快排最坏时间复杂度为O(n^2^)，原因在于当待排序数组基本有序的情况下，partition方法的极端情况是划分的两个分组长度分别为nums的长度和0。通过随机化的方法可以减小这种情况出现的概率。\n# 快排的随机化版本\n通过随机选择一个元素作为基准而非固定选择最右元素降低出现极端情况的概率。需要的代码改动非常小\n```Java\npublic void randomizedPartition(int[] nums, int p, int r) {\n\tint i = random(p. r) //生成一个p到r间的随机数\n\tswap(nums[i], nums[r]);\n\tint pivot = nums[r];\n\ti = p - 1;\n\tfor (int j = p; j < r; j++) {\n\t\tif (nums[j] < pivot) {\n\t\t\ti = i + 1;\n\t\t\tswap(nums[i], nums[j]);\n\t\t}\n\t}\n\tswap(num[i+1], nums[r]);\n}\n```\n# 期望为线性时间的选择算法\n> 本节摘录自《算法导论》第九章第二节\n\n这里介绍一种解决选择问题的分治算法——`randomizedSelect`，它以快排为模型，不同之处在于快排需要递归处理划分的两边，而`randomizedSelect`只处理一边。\n```Java\npublic int randomizedSelect(int[] nums, int p, int r, int k) {\n\tif (p >= r) return;\n\tint pos = randomizedPartition(nums, p, r);\n\tint num = pos - p + 1; //本身也是有序的\n\tif (num < k) {\n\t\treturn randomizedSelect(nums, p + 1, r, num - k);\n\t}  else if (num > k) {\n\t\treturn randomizedSelect(nums, p, pos - 1, k);\n\t}\n\treturn;\n}\n```\n`randomizedSelect`算法平均时间复杂度为O(n)，最坏情况下运行时间为O(n^2^)，即使是找最小元素也是如此。",
  //     "author": null,
  //     "status": "published",
  //     "url": null
  //   }, "label": {"id": 7, "parentId": 2, "name": "算法"}, "prev": 33, "next": 35
  // };
}

export function getArticleList(query) {
  return request({
    url: '/admin/article/list',
    method: 'get',
    params: query
  })
}

export function getArticleDetail(id) {
  return request({
    url: '/admin/article/detail',
    method: 'get',
    params: {id: id}
  })
}

export function updateArticle(data) {
  return request({
    url: '/admin/article/update',
    method: 'post',
    data
  })
}

export function createArticle(data) {
  return request({
    url: '/admin/article/create',
    method: 'post',
    data
  })
}

export function publishArticle(id) {
  return request({
    url: `/admin/article/${id}`,
    method: 'put'
  })
}

export function deleteArticle(id) {
  return request({
    url: `/admin/article/${id}`,
    method: 'delete'
  })
}