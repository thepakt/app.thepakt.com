import { createServerFn } from "@tanstack/start"
import { create, get } from "ronin"

export const createUser = createServerFn(
  "POST",
  async (data: { walletAddress: string }) => {
    const userExists = await get.user.with({
      walletAddress: data.walletAddress,
    })
    if (userExists) return userExists
    const newUser = await create.user.with({
      walletAddress: data.walletAddress,
    })
    return newUser
  },
)

export const createTask = createServerFn(
  "POST",
  async (data: {
    task: {
      title: string
      notes: string
      public: boolean
      bountyEstimatedTimeInHours: number
      bountyPriceInUsdt: number
      // subtasks: { title: string; completed: boolean }[]
    }
    userWalletAddress: string
  }) => {
    const user = await get.user.with({
      walletAddress: data.userWalletAddress,
    })
    if (!user) throw new Error("User not found")
    const task = await create.task.with({
      ...data.task,
      public: true,
      creator: user.id,
    })
    return task
  },
)

export const getActiveTasks = createServerFn(
  "POST",
  async (data: { walletAddress: string }) => {
    const user = await get.user.with({
      walletAddress: data.walletAddress,
    })
    if (!user) throw new Error("User not found")
    const tasks = await get.tasks.with({
      creator: user,
    })
    return tasks
  },
)
