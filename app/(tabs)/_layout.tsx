"use client"

import { useState } from "react"
import { View, SafeAreaView } from "react-native"
import ZaloBottomNav from "@/components/ZaloBottomNav"
import { MessagesScreen } from "@/screens/MessagesScreen"
import { ContactsScreen } from "@/screens/ContactsScreen"
import { DiscoverScreen } from "@/screens/DiscoverScreen"
import { TimelineScreen } from "@/screens/TimelineScreen"
import { ProfileScreen } from "@/screens/ProfileScreen"

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState<string>("messages")

  const renderContent = () => {
    switch (activeTab) {
      case "messages":
        return <MessagesScreen />
      case "contacts":
        return <ContactsScreen />
      case "discover":
        return <DiscoverScreen />
      case "feed":
        return <TimelineScreen />
      case "profile":
        return <ProfileScreen />
      default:
        return <MessagesScreen />
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>{renderContent()}</View>
      <ZaloBottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  )
}
