import { PaymentMethodCard } from "./showcase/payment-method-card"
import { TeamMembersCard } from "./showcase/team-members-card"
import { NotificationsCard } from "./showcase/notifications-card"

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      <PaymentMethodCard />
      <TeamMembersCard />
      <NotificationsCard />
    </div>
  )
}
