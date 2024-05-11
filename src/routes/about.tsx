import { AppLayout } from "@/shared/layout/ui/components/appLayout"

export const About = () => {
  return (
    <AppLayout>
      <div className="text-left">
      <h2>О проекте</h2>
      <br />
      Doors of doorin проект-презентация работы магических артефактов средиземья, использующий современные технологии
      <br />
      <br />
      <br />
      <h3>Технологии</h3>
      <br />
      <li>Vite</li>
      <li>React</li>
      <li>Tailwind</li>
      <li>Shadcn UI</li>
      <li>Hooks</li>
      <li>React Router</li>
      <li>TypeScript</li>
      <li>Jest</li>
      </div>
    </AppLayout>
  )
}