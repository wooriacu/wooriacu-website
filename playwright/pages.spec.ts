import { test, expect } from "@playwright/test"

const pages = [
  { path: "/", h1: "Woori Acupuncture" },
  { path: "/es/", h1: "Woori Acupuntura" },
  { path: "/acne-treatment/", h1: "Acne Treatment" },
  {
    path: "/menstrual-cramps-and-irregularities/",
    h1: "Menstrual Cramps and Irregularities",
  },
  { path: "/womans-menopause/", h1: "Women's Menopause" },
  { path: "/es/acne-treatment/", h1: "Tratamiento del Acné" },
  {
    path: "/es/menstrual-cramps-and-irregularities/",
    h1: "Cólicos Menstruales e Irregularidades",
  },
  { path: "/es/womans-menopause/", h1: "Menopausia Femenina" },
  {
    path: "/workers-compensation/",
    h1: "Workers' Compensation Acupuncture Care",
  },
  {
    path: "/es/workers-compensation/",
    h1: "Atención de Acupuntura para Compensación Laboral",
  },
]

for (const { path, h1 } of pages) {
  test(`${path} has h1 "${h1}"`, async ({ page }) => {
    await page.goto(path)
    await expect(
      page.getByRole("heading", { name: h1, exact: true, level: 1 })
    ).toBeVisible()
  })
}

test.describe("navigation buttons", () => {
  const navItems = [
    { label: "Home", hash: "#home" },
    { label: "Services", hash: "#services" },
    { label: "About", hash: "#about" },
    { label: "Contact", hash: "#contact" },
  ]

  for (const { label, hash } of navItems) {
    test(`clicking "${label}" navigates to ${hash}`, async ({ page }) => {
      await page.goto("/")
      await page.getByRole("link", { name: label }).click()
      await expect(page).toHaveURL(new RegExp(`/${hash}$`))
    })
  }

  test('clicking "Workers\' Comp" navigates to workers-compensation', async ({
    page,
  }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Workers' Comp" }).click()
    await expect(page).toHaveURL(/\/workers-compensation\//)
  })

  test("clicking logo navigates to homepage", async ({ page }) => {
    await page.goto("/acne-treatment/")
    await page.locator("a.logo").click()
    await expect(page).toHaveURL("/")
  })

  test('clicking "Español" switches to Spanish', async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Español" }).click()
    await expect(page).toHaveURL(/\/es\//)
    await expect(page).toHaveTitle(/Woori Acupuntura/)
  })

  test('clicking "English" switches to English', async ({ page }) => {
    await page.goto("/es/")
    await page.getByRole("link", { name: "English" }).click()
    await expect(page).toHaveURL("/")
    await expect(page).toHaveTitle(/Woori Acupuncture/)
  })
})
