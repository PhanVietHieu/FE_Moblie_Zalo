import { View, Text, FlatList, TouchableOpacity } from "react-native"

interface Message {
    id: string
    name: string
    lastMessage: string
    avatar: string
    unread: boolean
}

export function MessagesScreen() {
    const messages: Message[] = [
        { id: "1", name: "Ngân Ngô", lastMessage: "Ok được!", avatar: "👩", unread: true },
        { id: "2", name: "Minh Anh", lastMessage: "Có khỏe không?", avatar: "👨", unread: false },
        { id: "3", name: "Nhóm Dự Án", lastMessage: "Cập nhật: Task hoàn thành", avatar: "👥", unread: true },
        { id: "4", name: "Bố Mẹ", lastMessage: "Tối ăn cơm chưa?", avatar: "👴", unread: false },
    ]

    const renderMessage = ({ item }: { item: Message }) => (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#e8f0fe",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                }}
            >
                <Text style={{ fontSize: 24 }}>{item.avatar}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: "600", color: "#000" }}>{item.name}</Text>
                <Text style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{item.lastMessage}</Text>
            </View>
            {item.unread && (
                <View
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#0084FF",
                    }}
                />
            )}
        </TouchableOpacity>
    )

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View
                style={{
                    paddingTop: 16,
                    paddingHorizontal: 16,
                    paddingBottom: 12,
                    backgroundColor: "#fff",
                    borderBottomWidth: 1,
                    borderBottomColor: "#f0f0f0",
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "700", color: "#000" }}>Tin nhắn</Text>
            </View>
            <FlatList data={messages} renderItem={renderMessage} keyExtractor={(item) => item.id} />
        </View>
    )
}
