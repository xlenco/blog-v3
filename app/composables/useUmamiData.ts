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
    const token = 'i6N4TNjGDDn9boVi1hCxw8Qak/zq4TZZDoVf3ctS2CnegPuguJZiVZEBTn7efQW9+MloFeUc9lhGg3ILz1jJs6dWPIsSw/y2qRz5Z+EWgJNF/V9UqRZQDXeaT3obTHoUsSrXOo7vyzi6uK5F7P2Gkyu5SVwQmZ/iAfqnbRK1LHDLAuBxPs21XBGqlr0y4acu+/UpaxcURXuOrGPkRFzTDlCfmujfVB89hJgZOuLuqzsnfrYmC3QGM/G2huYzueRZGgWbpFZd4LKV2yrsLOEDMhZap1DPYZFVbopeiD20MxN7NZOZpg7TndIIW9hx84Ia8ZybSG8zRQSvhYD/CUdrNH1UIgGEsN1+Xv408S1EXZTCEpJCXauRhPC6rGqR'
    const websiteId = '886b4abd-028c-4aee-81f3-ef26b0c68bc2'
    const apiBaseUrl = 'https://umami.xlenco.top'

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
