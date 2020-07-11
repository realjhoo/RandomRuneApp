import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  DevSettings,
} from 'react-native';
import Header from './components/Header';
import Alu from './components/Alu';
import Reading from './components/Reading';
import ShowRune from './components/ShowRune';

const Entities = require('html-entities').AllHtmlEntities;

// STRING ARRAYS ************
const prediction = [
  'Fehu: |F| (Domestic cattle, wealth) Wealth. Possessions won or earned, earned income. Luck. Abundance, financial strength in the present or near future. Hope and plenty, success and happiness. Social success.',
  'Uruz: |U| (Aurochs; European wild ox) Physical strength and speed, untamed potential. A time of great energy and health. Freedom, action, courage, strength, tenacity, understanding, wisdom. Sudden or unexpected changes (usually for the better).',
  'Thurisaz: |Unvoiced TH| (Thorn, thurses) Protection. Reactive force of destruction and defense. Instinctual will, regenerative catalyst. A tendency toward change. Catharsis, purging, cleansing fire. Male sexuality. Mjollinir.',
  'Ansuz: |Short A| (Os, i.e. Odin) A revealing message or insight, dreams, teaching. Communication. Signals, inspiration, enthusiasm, speech, true vision, power of words and naming. Blessings. Taking of advice.',
  'Raido: |R| (Wagon or chariot) A journey, both real and metaphorical. A change of place or setting. Seeing a larger perspective. The journey, the road and the vehicle.',
  'Kenaz: |K| (Torch) Vision, revelation, knowledge, creativity, inspiration, technical ability. Fire of life, transformation and regeneration. Power to create reality Passion.',
  'Gebo: |Hard G| (Gift) Giving and recieving gifts. Balance. A new or strengthened friendship. Reciprocity.',
  'Wunjo: |W or V| (Joy) Joy, comfort, pleasure. Fellowship, harmony, prosperity, spiritual reward, recognition of worth.',
  'Hagalaz: |H| (Hailstone) Transformation. Wrath of nature, destructive, uncontrolled forces, possibly the weather or in the mind. Tempering, testing, trial. Controlled crisis. Be cautious and wait for the hailstones to return to water. Sacred 9.',
  'Naudiz: |N| (Need) Delays, restriction, powerlessness. Sacred need-fire (self-reliance). Resistance leading to strength, innovation. Distress, confusion, conflict, and the power of will to overcome. Endurance, survival, determination. A time to exercise patience. Major self-initiated change. Facing your fears.',
  'Isa: |Long E| (Ice) Standstill, stasis, constraint. Slow progress. Blockage. Frozen. A time to wait. A challenge or frustration. Psychological blocks to thought or activity. This rune reinforces runes around it.',
  'Jera: |Y or soft G| (Year, good harvest.) The results of earlier efforts are realized. A time of peace and happiness, fruitful season. The promise of success earned. Cycle of life, cyclical pattern. Change in its own time.',
  'Eihwaz: |Long I| (Yew tree) Strength, reliability, dependability, trustworthiness. Enlightenment, endurance. Defense, protection. Strong and flexible. Achievable goals. An honest man who can be relied upon',
  "Perthro: |P| (Dice cup, vagina) A secret matter, a mystery, hidden things. Initiation, knowledge of one's destiny, knowledge of future matters, determining the future or your path. Luck. Feminine mysteries. Evolutionary change.",
  'Algiz: |Z| (Elk) Powerful protection, a shield. The protective urge to shelter oneself or others. Defense, warding off of evil, shield, guardian. Connection with the gods, awakening, higher life. It can be used to channel energies appropriately. Follow your instincts. Keep hold of success or maintain a position won or earned. ',
  'Sowilo: |S| (Sun) Success, goals achieved, honor. The life-force, health. A time of positive change. Victory of light over darkness. Health and success. Purifying light.',
  'Tiwaz: |T| (Tyr) Honor, justice, leadership and authority. Analysis, rationality. Knowing your own strength. Self-sacrifice. Victory and success in competition. Justice in legal matters.',
  'Berkano: |B| (Berchta, the birch-goddess) Birth, fertility, mental and physical personal growth. Liberation. Spring, renewal, new beginnings, new growth. Arousal of desire. A love affair or new birth. The prospering of an enterprise or venture. The desir.',
  'Ehwaz: |Short E| (Horse) Transportation. Any form of transportation such as a horse, car, plane, boat or other vehicle. Gradual development and steady progress are indicated. Strength, teamwork, trust, loyalty. (18th rune; sacred double 9).',
  'Mannaz: |M|  (Mankind, Mani, the moon-god) The self, the individual or the human race. Your attitude toward others and their attitudes towards you. Friends and enemies, social order. Intelligence, forethought, creativity, skill, ability. Measure your time. Time is cyclical.',
  'Laguz: |L| (Lake or leek) Water, sea, fertility, healing power. Life energy, organic growth. Imagination. Dreams, fantasies, mysteries, the unknown, the hidden, the deep, the underworld. Success in travel or acquisition, but with the possibility of loss.',
  'Ingwaz: |NG| (Ingui Frey, Lord Ing) Male fertility, gestation, internal growth. Common virtues, common sense, simple strengths, family love, caring, human warmth, the home. Rest, a time of relief, of no anxiety. A time when all loose strings are tied and you are free to move in a new direction. Trust your intuition.',
  'Dagaz: |D or voiced TH| (Day) Breakthrough, enlightenment, awakening, awareness. Clarity of daylight. A time to plan or embark. The power of change and transformation. Hope, happiness, security and certainty. Growth and release.',
  'Othala: |Long O| (Ancestral property.) Inherited property or possessions or home. What is truly important. Family prosperity. Land of birth and heritage (spiritual and physical). Increasing abundance.',
];

const runeStave = [
  '&#x16A0;', // fehu
  '&#x16A2;', // uruz
  '&#x16A6;', // thurisaz
  '&#x16A8;', // ansuz
  '&#x16B1;', // raido
  '&#x16B2;', // kenaz
  '&#x16B7;', // gebo
  '&#x16B9;', // wunjo
  '&#x16BA;', // hagalaz
  '&#x16BE;', // naudiz
  '&#x16C1;', // isa
  '&#x16C3;', // jera
  '&#x16C7;', // eihwaz
  '&#x16C8;', // perthro
  '&#x16C9;', // algiz
  '&#x16CB;', // sowilo
  '&#x16CF;', // tiwaz
  '&#x16D2;', // berkano
  '&#x16D6;', // ewaz
  '&#x16D7;', // mannz
  '&#x16DA;', // laguz
  '&#x16DD;', // ingwaz
  '&#x16DE;', // dagaz
  '&#x16DF;', // othala
];

const dots = [
  '&#x16EB;', // dot
  '&#x16EC;', // double dot
];

const App = () => {
  const entities = new Entities();

  // ========================================================
  const randomNumber = () => {
    // generate a random number between 0 and 23
    let max = 23;
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
  };

  // ======================================================
  // Set values for output
  let thisRune = randomNumber();
  let rune = entities.decode(runeStave[thisRune]);
  let output = `${rune} - ${prediction[thisRune]} [Value: ${thisRune + 1}]`;

  // ========================================================
  const handlePress = () => {
    // this doesnt work on real phone. Replace with state.
    DevSettings.reload();
  };

  return (
    <View style={styles.container}>
      <Header appTitle="Random Rune" />
      <Alu />
      <ShowRune name={entities.decode(runeStave[thisRune])} />
      <Reading reading={output} />
      <TouchableOpacity>
        <Button
          color="#fff"
          title="Press Here When Ready"
          onPress={handlePress}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200325',
    color: '#fff',
  },
});

export default App;
