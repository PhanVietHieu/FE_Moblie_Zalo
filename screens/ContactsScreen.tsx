import { View, Text, FlatList, TouchableOpacity } from "react-native"

interface Contact {
    id: string
    name: string
    phone: string
    avatar: string
}

export function ContactsScreen() {
    const contacts: Contact[] = [
        { id: "1", name: "Đỗ Minh Tuấn", phone: "0987654321", avatar: "👨‍💼" },
        { id: "2", name: "Hoàng Linh", phone: "0912345678", avatar: "👩‍💼" },
        { id: "3", name: "Phạm Quốc Huy", phone: "0901234567", avatar: "👨" },
        { id: "4", name: "Trần Thúy Vy", phone: "0923456789", avatar: "👩" },
        { id: "5", name: "Lê Thanh Tùng", phone: "0934567890", avatar: "👨‍🎓" },
    ]

    const renderContact = ({ item }: { item: Contact }) => (
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
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: "#e8f0fe",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                }}
            >
                <Text style={{ fontSize: 20 }}>{item.avatar}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: "600", color: "#000" }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{item.phone}</Text>
            </View>
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
                <Text style={{ fontSize: 20, fontWeight: "700", color: "#000" }}>Danh bạ</Text>
            </View>
            <FlatList data={contacts} renderItem={renderContact} keyExtractor={(item) => item.id} />
        </View>
    )
}
