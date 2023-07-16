import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index.ts";
import type { userType, linkType } from '@/types/types.ts'

export const useUserStore = defineStore('user', () => {
  const isLogError = ref<boolean>(false)
  const logErrorMessages = ref<string[]>([])
  const isRegError = ref<boolean>(false)
  const regErrorMessages = ref<string[]>([])
  const users = ref<userType[]>([])

  const logUser = ref({
    email: '',
    password: '',
    reset: function (): void {
      this.email = ''
      this.password = ''
    }
  })

  const regUser = ref({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    reset: function (): void {
      this.name = ''
      this.surname = ''
      this.email = ''
      this.phone = ''
      this.password = ''
    }
  })

  const activeUser = ref<userType | null>(null)

  const linksAuth = ref<linkType[]>([
    {
      id: 1,
      name: "Поиск",
      url: "/search",
    },
    {
      id: 2,
      name: "Профиль",
      url: "/profile",
    },
    {
      id: 3,
      name: "Выйти",
      url: "/login",
      onClick: logOut
    },
  ])

  const linksNotAuth = ref<linkType[]>([
    {
      id: 1,
      name: "Вход",
      url: "/login",
    },
    {
      id: 2,
      name: "Регистрация",
      url: "/register",
    },
  ])

  function logIn(): void {
    isLogError.value = false
    logErrorMessages.value = []
    const thisUser = users.value.find(user => user.email === logUser.value.email)
    if (!thisUser) {
      isLogError.value = true
      logErrorMessages.value.push("Пользователь не найден")
    }
    else if (logUser.value.password === thisUser?.password) {
      activeUser.value = { ...thisUser }
      auth(thisUser)
    } else {
      isLogError.value = true
      logErrorMessages.value.push("Неправильный пароль")
    }
  }

  function auth(user: userType): void {
    activeUser.value = { ...user }
    logUser.value.reset()
    regUser.value.reset()
    localStorage.setItem('activeUser', JSON.stringify(activeUser.value))
    router.push("/")
  }

  function validate(): boolean {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/
    const telRegex = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/
    const emailRegex = /^[0-9a-z]+@[a-z]+\.[a-z]{2,3}$/

    if (!nameRegex.test(regUser.value.name) || !regUser.value.name) {
      regErrorMessages.value.push('Неправильное имя')
      isRegError.value = true
    }

    if (!nameRegex.test(regUser.value.surname) || !regUser.value.surname) {
      regErrorMessages.value.push('Неправильная фамилия')
      isRegError.value = true
    }

    if (!telRegex.test(regUser.value.phone) || !regUser.value.phone) {
      regErrorMessages.value.push('Неправильный номер телефона')
      isRegError.value = true
    }

    if (!emailRegex.test(regUser.value.email) || !regUser.value.email) {
      regErrorMessages.value.push('Неправильная почта')
      isRegError.value = true
    }

    if (!regUser.value.password) {
      regErrorMessages.value.push('Неправильный пароль')
      isRegError.value = true
    }

    return !isRegError.value
  }

  function register(): void {
    isRegError.value = false
    regErrorMessages.value = []
    const isValidate = validate()
    if ((!users.value.find(user => user.email === regUser.value.email)) && (!users.value.find(user => user.phone === regUser.value.phone))) {
      if (isValidate) {
        users.value.push({ ...regUser.value })
        localStorage.setItem('users', JSON.stringify(users.value))
        auth(regUser.value)
      }
    } else {
      isRegError.value = true
      regErrorMessages.value.push('Пользователь с такими данными уже зарегистрирован!')
    }
  }

  function logOut(): void {
    activeUser.value = null
    localStorage.removeItem('activeUser')
  }

  onMounted(() => {
    if (localStorage.getItem('users')) {
      users.value = JSON.parse(localStorage.getItem('users'))
    } else {
      users.value = []
    }
    if (localStorage.getItem('activeUser')) {
      activeUser.value = JSON.parse(localStorage.getItem('activeUser'))
    } else {
      activeUser.value = null
    }
  })

  return { isLogError, logErrorMessages, isRegError, regErrorMessages, logUser, regUser, activeUser, users, linksAuth, linksNotAuth, validate, logIn, register, logOut }
})
