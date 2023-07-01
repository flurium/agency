/*

Language translation:
- uk = urkainian
- en = english

If translation is inside of interactive component
It must be separate chunk

*/

export * from "./helpers"

export const defaultLang = "uk" as const
export const languages = ["uk", "en"] as const

export type Language = (typeof languages)[number]

type Transaltion<Content> = {
  [lang in Language]: Content
}

export type NavbarTranslation = {
  switch: {
    label: string
    route: string
  }
  ourWork: string
  team: string
  contact: string
}

export const navbarTranslation: Transaltion<NavbarTranslation> = {
  uk: {
    switch: { label: "Eng", route: "/en" },
    ourWork: "Наші роботи",
    team: "Команда",
    contact: "Зв'язатися",
  },
  en: {
    switch: { label: "Укр", route: "/uk" },
    ourWork: "Our work",
    team: "Team",
    contact: "Contact",
  },
}

// Should be separated, because it's used in interactive conponent
export type ContactFormTranslation = {
  notification: {
    header: string
    client: {
      nameCantBeEmpty: string
      invalidEmail: string
      cantSendNow: string
    }
    server: {
      success: string
      invalidBody: string
      unexpectedError: string
    }
  }
  name: {
    label: string
    placeholder: string
  }
  email: {
    label: string
    placeholder: string
  }
  context: {
    label: string
    placeholder: string
  }
  submit: string
}

export type MemberType = {
  img: string
  role: string
  name: string
}

type StaticIndex = {
  meta: {
    title: string
    description: string
  }
  introduction: {
    header: string
    about: {
      benefits: string
      api: string
      fullstack: string
      static: string
      tech: string
    }
    engagingParagraph: string
    action: {
      contact: string
      or: string
      seeWork: string
    }
  }
  work: {
    header: string
    subheader: string
    projects: {
      name: string
      banner: string
      github: string
      website: string
      description: string
      images: string[]
    }[]
  }
  contact: {
    header: string
    subheader: string
    form: ContactFormTranslation
  }
  team: {
    header: string
    members: MemberType[]
  }
}

export const staticIndex: Transaltion<StaticIndex> = {
  uk: {
    meta: {
      title: "Flurium - агентство веб-розробки",
      description:
        "Агентство Flurium зі створення швидкого та масштабованого API за допомогою нових технологій. Оскільки бізнес має розвиватися – бізнес має бути онлайн.",
    },
    introduction: {
      header: "Бізнес має розвиватися – бізнес має бути онлайн",
      about: {
        benefits:
          "Маючи веб-сайт, ви отримуєте більше клієнтів, успішно конкуруєте з опонентами та автоматизуєте нудні завдання. Flurium спеціалізується на",
        api: "pозробці API платформ",
        fullstack: "повноцінних динамічних веб-сайтів",
        static: "веб-сайтів на основі контенту",
        tech: "Ми використовуємо передові технології, щоб забезпечити високу продуктивність.",
      },
      engagingParagraph:
        "Співпрацюйте з нами, щоб розкрити потенціал сучасних веб-рішень для вашого цифрового бачення.",
      action: {
        contact: "Зв'язатися",
        or: "або",
        seeWork: "переглянути наші роботи",
      },
    },
    work: {
      header: "Наші роботи",
      subheader: "Наше портфоліо є чітким доказом наших навичок і досвіду веб-розробки.",
      projects: [
        {
          name: "BidMe",
          banner: "/projects/bidme/banner.png",
          github: "https://github.com/flurium/bidme",
          website: "https://bidme.onrender.com",
          description: `
            BidMe – це аукціонна платформа, де клієнти можуть шукати,
            залишайте коментарі, додавайте в кошик або вибране та розміщуйте ставки на лоти. Продавці можуть
            перелічіть їхні предмети, використовуючи розширену форму. Панель адміністратора керує користувачами, продавцями,
            категорії лотів, що забезпечує безпечний і ефективний аукціон.
          `,
          images: [],
        },
        {
          name: "Thing",
          banner: "/projects/thing/banner.png",
          github: "https://github.com/flurium/thing",
          website: "https://thing-wtcg.onrender.com",
          description: `
            Thing — це централізована платформа, яка спрощує онлайн-продажі. Клієнти
            без особливих зусиль переглядайте продукти, додавайте їх у кошик або вибране та залишайте коментарі.
            Продавці з легкістю демонструють товари, а панель адміністратора забезпечує безпеку
            керування заборонами, категоріями та обов’язковими полями. Річ робить продажі легкими для всіх.
          `,
          images: [],
        },
      ],
    },
    contact: {
      header: "Зв'язатися",
      subheader:
        "Давайте поговоримо про цілі вашого проекту та про те, як ми можемо допомогти.",
      form: {
        notification: {
          header: "Сповіщення, натисніть, щоб закрити",
          client: {
            nameCantBeEmpty:
              "Ваше ім'я не може бути пустим. Будь ласка, вкажіть своє ім'я, щоб ми знали, як до вас звертатися.",
            invalidEmail:
              "Надану вами адресу електронної пошти введено неправильно, перевірте її.",
            cantSendNow:
              "Вибачте. Зараз ми не можемо надіслати вашу контактну інформацію. Спробуйте пізніше або надішліть нам лист.",
          },
          server: {
            success: "",
            invalidBody: "",
            unexpectedError: "",
          },
        },
        name: {
          label: "Ваше ім'я",
          placeholder: "ім'я",
        },
        email: {
          label: "Ваша електронна адреса",
          placeholder: "my@email.com",
        },
        context: {
          label: "Додаткова інформація, яку ви вважаєте корисною...",
          placeholder: "Ваша ситуація, потрібні послуги, інші способи спілкування...",
        },
        submit: "Відправити контакти",
      },
    },
    team: {
      header: "Команда",
      members: [
        {
          img: "/members/roman.png",
          role: "Засновник & керівник команди",
          name: "Кощей Роман",
        },
        {
          img: "/members/vitalii.png",
          role: "Основний full stack розробник",
          name: "Литвиненко Віталій",
        },
        {
          img: "/members/mariia.png",
          role: "Full stack розробник",
          name: "Щербак Марія",
        },
        {
          img: "/members/dmytro.png",
          role: "Кодер",
          name: "Флюд Дмитро",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Flurium - web development agency",
      description:
        "Flurium agency for building fast and scalable API with new technologies. Because business must grow - business must be online.",
    },
    introduction: {
      header: "Business must grow - business must be online",
      about: {
        benefits:
          "When you have website you will get more customers, successfully compete with opponents and automate so boring tasks. Flurium specializes in ",
        api: "API platform development",
        fullstack: "full-stack dynamic websites",
        static: "static content-based web sites",
        tech: "We leverage cutting-edge technologies to deliver high-performance experiences.",
      },
      engagingParagraph:
        "Partner with us to unlock the potential of modern web solutions for your digital vision.",
      action: {
        contact: "Get in touch",
        or: "or",
        seeWork: "see our work",
      },
    },
    work: {
      header: "Our work",
      subheader:
        "Our portfolio provides clear evidence of our skills and experience in web development.",
      projects: [
        {
          name: "BidMe",
          banner: "/projects/bidme/banner.png",
          github: "https://github.com/flurium/bidme",
          website: "https://bidme.onrender.com",
          description: `
            BidMe is an auction platform where customers can search,
            comment, add to cart or favorites, and place bids on lots. Sellers can
            list their items using a rich form. Admin panel manages users, sellers,
            lot categories, ensuring a secure and efficient auction experience.
          `,
          images: [],
        },
        {
          name: "Thing",
          banner: "/projects/thing/banner.png",
          github: "https://github.com/flurium/thing",
          website: "https://thing-wtcg.onrender.com",
          description: `
            Thing is a centralized platform that simplifies online selling. Customers 
            effortlessly browse products, add to cart or favorites, and leave comments. 
            Sellers showcase products with ease, while the admin panel ensures safety by 
            managing bans, categories, and required fields. Thing makes selling effortless for all.
          `,
          images: [""],
        },
      ],
    },
    contact: {
      header: "Get in touch",
      subheader: "Let's have a chat about your project goals and how we might help.",
      form: {
        notification: {
          header: "Notification, click to close",
          client: {
            nameCantBeEmpty:
              "Name can't be empty. Please provide your name, so we know how to call you.",
            invalidEmail:
              "The email that you provided wasn't typed correctly, please check it.",
            cantSendNow:
              "Sorry. We can't send your contact information right now. Please try later or send email to us.",
          },
          server: {
            success:
              "Your contact information is sent successfully. We will contact you as soon as possible.",
            invalidBody: "Request input doesn't match required schema.",
            unexpectedError:
              "Sending service can't be used right now. Please try later or email us.",
          },
        },
        name: {
          label: "Your name",
          placeholder: "name",
        },
        email: {
          label: "Your email",
          placeholder: "my@email.com",
        },
        context: {
          label: "Additional information you think is helpful...",
          placeholder: "Context and your case, other ways to communicate...",
        },
        submit: "Send message",
      },
    },
    team: {
      header: "Team",
      members: [
        {
          img: "/members/roman.png",
          role: "Founder & Team Lead",
          name: "Roman Koshchei",
        },
        {
          img: "/members/vitalii.png",
          role: "Core full stack developer",
          name: "Vitalii Lytvynenko",
        },
        {
          img: "/members/mariia.png",
          role: "Full stack developer",
          name: "Mariia Shcherbak",
        },
        {
          img: "/members/dmytro.png",
          role: "Coder",
          name: "Dmytro Fliud",
        },
      ],
    },
  },
}
