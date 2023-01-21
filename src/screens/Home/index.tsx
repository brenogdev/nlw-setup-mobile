import { View, Text, ScrollView } from "react-native";
import { HabitDay } from "../../components/HabitDay";
import { Header } from "../../components/Header";
import { daySize } from "../../utils/size";
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const daysYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5; //18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - daysYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-black px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: daySize }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {daysYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 rounded-lg m-1 opacity-40"
                style={{ width: daySize, height: daySize }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
