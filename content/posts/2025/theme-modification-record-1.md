---
title: 主题魔改记录|壹
description: 
date: 2025-05-02 15:57:22
updated:  2025-05-02 15:57:22
# image: 
categories: [分类]
tags: [标签1, 标签2]

draft: true # 文章完成后，请删除此行
---

在此记录一下我对博客主题的魔改过程。

## 添加Umami统计并在博客内显示

 安装 axios
```
pnpm install axios
```

在app/components/widget/BlogStats.vue文件中添加以下代码
```
const { stats: umamiStats, isLoading: umamiLoading } = useUmamiData()

const blogStats = computed(() => [
    {
        label: '运营时长',
        content: timeElapse(appConfig.timeEstablished),
        tip: `博客于${appConfig.timeEstablished}上线`,
    },
    {
        label: '上次更新',
        content: timeElapse(buildTime),
        tip: `构建于${getLocaleDatetime(buildTime)}`,
    },
    {
        label: '总字数',
        content: totalWords,
        tip: yearlyTip.value,
    },
    {
        label: '访问量',
        content: umamiLoading.value ? '加载中...' : formatNumber(umamiStats.value.pageviews.value),
        tip: '最近30天访问量',
    },
    {
        label: '访客数',
        content: umamiLoading.value ? '加载中...' : formatNumber(umamiStats.value.visitors.value),
        tip: '最近30天独立访客',
    },
])
```

添加app/composables/useUmamiData.ts文件
```
// app/composables/useUmamiData.ts
import axios from 'axios'
import { ref, onMounted } from 'vue'

interface UmamiStats {
    pageviews: { value: number }
    visitors: { value: number }
    avgTime: { value: number }
    totalWords?: { value: number } // 根据实际API调整
}

export function useUmamiData() {
    const token = 'YOUR_UMAMI_API_TOKEN'
    const websiteId = 'YOUR_UMAMI_WEBSITE_ID'
    const apiBaseUrl = 'https://umami.yourdomain.com'

    // 核心统计数据
    const stats = ref<UmamiStats>({
        pageviews: { value: 0 },
        visitors: { value: 0 },
        avgTime: { value: 0 },
        totalWords: { value: 0 }
    })

    // 辅助状态
    const isLoading = ref(true)
    const error = ref<Error | null>(null)

    // 时间范围配置
    const getTimeRange = () => ({
        startAt: new Date(new Date().setDate(new Date().getDate() - 30)).getTime(), // 最近30天
        endAt: new Date().getTime()
    })

    // 主数据获取方法
    const fetchStats = async () => {
        try {
            const { startAt, endAt } = getTimeRange()

            const baseRes = await axios.get(`${apiBaseUrl}/api/websites/${websiteId}/stats`, {
                params: { startAt, endAt },
                headers: { Authorization: `Bearer ${token}` }
            })

            // 更新核心统计数据
            stats.value = {
                pageviews: baseRes.data.pageviews || { value: 0 },
                visitors: baseRes.data.visitors || { value: 0 },
                avgTime: baseRes.data.avg_time || { value: 0 },
                totalWords: { value: 0 } // 保留字段但设为0
            }

        } catch (err) {
            const errorMsg = err?.response?.status === 404
                ? 'Umami API端点未找到，请检查配置'
                : '数据获取失败，请检查网络连接和认证信息'

            error.value = new Error(errorMsg)
            console.error('[Umami] 数据获取异常:', err)

            // 设置默认值避免UI显示异常
            stats.value = {
                pageviews: { value: 0 },
                visitors: { value: 0 },
                avgTime: { value: 0 },
                totalWords: { value: 0 }
            }
        } finally {
            isLoading.value = false
        }
    }

    // 自动刷新机制（每小时刷新）
    let refreshTimer: NodeJS.Timeout
    onMounted(() => {
        fetchStats()
        refreshTimer = setInterval(fetchStats, 3600 * 1000) // 每小时刷新
    })

    return {
        stats,
        isLoading,
        error,

        // 计算属性形式暴露（可选）
        pageviews: computed(() => stats.value.pageviews.value),
        visitors: computed(() => stats.value.visitors.value),
        avgTime: computed(() => stats.value.avgTime.value),
        totalWords: computed(() => stats.value.totalWords?.value || 0)
    }
}
```