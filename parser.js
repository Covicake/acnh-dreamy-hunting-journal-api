const fs = require('fs');

const personalities = {
  Snooty: '7460de0d-96b0-4ca7-893b-c67bf06f67c0',
  Peppy: '099fb1b6-f971-40b3-9a4b-310215be3cf2',
  Smug: '6461114e-a20d-46a6-9a66-96d0bef170ae',
  Cranky: '8cd4969c-b67d-45cd-aa98-3d0f2b5f46cc',
  Sisterly: '9d98cd20-289d-4ef3-98f0-9d046f301406',
  Lazy: 'b345280a-a403-420b-a4b1-cc0a21c5c149',
  Jock: 'b3c47660-1dc9-4667-a43d-b426f6b42dc5',
  Normal: 'cbc80ab8-3781-4bd3-b514-14938f45e75a',
};

const species = {
  Pig: '0707578a-b6b2-43fc-8bb5-50cc7a8687d4',
  Gorilla: '218eed95-f8c2-4b5b-8d1f-140d02905442',
  Dog: '22945b10-6a28-47d7-8f35-9dc138642f71',
  Lion: '3544ca44-a920-4dcf-8ed5-38b74b727ee3',
  Elephant: '447ea660-1ca7-4d61-88be-35a2fb4d79ff',
  Anteater: '4bcea5bc-bd55-4ccc-9655-f17d7a2a8e8e',
  Rabbit: '4f85b5f4-ee00-41dc-b9e4-d66af782f07f',
  Duck: '54a8cb49-4103-4855-b553-03adb1150258',
  Alligator: '571c22e6-ca71-4407-84c9-6da822334592',
  Monkey: '58ce1e0f-fa50-4137-ad79-a94354cbb6af',
  Rhino: '5a18a1a8-0b1b-4f89-a639-b79d96b9b522',
  Horse: '62d0d659-4af6-4fd3-992b-21411eb8a38a',
  Sheep: '689e2603-558c-4d17-ba3c-a78e0645965a',
  Chicken: '74acc9d4-1463-4ed9-bb46-de42aa5905a8',
  Squirrel: '768c8db1-1337-4c5c-a329-d13c252306a6',
  Hippo: '86248fd9-9cee-4c69-a13d-26a3b146d668',
  Frog: '8702c0b1-56cd-4cbd-a4a8-27c22ab33eb5',
  Ostrich: '8d2cbdf6-1aee-452a-8c63-183544994e33',
  Octopus: '9b73ac6a-a8e4-4e92-9212-99f315850413',
  Tiger: 'a495181b-7ea7-4ce2-837b-e37339c042cf',
  Penguin: 'a63ad739-0477-4521-8218-c77b7af66899',
  Deer: 'aaa67898-2b32-46bd-a00e-9ff9609b56ca',
  Bear: 'ac8c650e-97d4-49cc-909b-7f0aa95e5409',
  Kangaroo: 'b2ebfd02-f226-4de3-bfb0-7a5ca8351e53',
  Cow: 'bed230ea-bbff-4c77-b547-10a072290961',
  Cat: 'cbccef86-f06d-4e78-9290-ab7fdbbf8ac8',
  Koala: 'd1ac949d-b69f-4562-a523-60a3cbfd4d94',
  Goat: 'd210c7aa-3fb9-4536-96a7-969ef65a41c2',
  Bird: 'd4d055db-d065-48de-85b6-d862e6cdb5cf',
  Eagle: 'd6032ed0-b80f-42cc-9334-0febc0525acb',
  Cub: 'df339ae7-0694-4ee6-a97b-573b199fd5b2',
  Bull: 'e6b41de5-e8e4-4b41-a150-dc36f100cb4f',
  Mouse: 'e8393ac7-c492-44d4-8a80-229fb5bdc495',
  Hamster: 'f18da705-cf30-4929-a16b-298ef2c32e7a',
  Wolf: 'f32eae20-cc84-4a94-a1c5-2b729a8f66eb',
};

const styles = {
  Elegant: '0936252e-bf73-4387-aedb-5e0c3809e7ab',
  Simple: '14091526-ed86-491e-b735-f0a0099effec',
  Cute: '539e264f-e360-4d99-81ad-98a2fb3ca0c8',
  Gorgeous: '6333c47d-09cd-488a-9ece-43102475411c',
  Active: '71f4cd6d-003f-4c91-8d3b-8e93b7483098',
  Cool: '71f6f59a-9625-4ebd-8335-d3dab8a82564',
  Colorful: '879588e6-17b9-47f1-a6f1-7510ed24ff6e',
};

const colors = {
  Black: '16e09c44-d0ee-426b-92c7-7df68592e752',
  Colorful: '1bb4abfc-6190-4488-96f2-a18b555b97dd',
  'Light blue': '24676260-39ff-4c3b-80bb-2a9caaaa4867',
  Blue: '453470d6-5750-4821-bd1a-497685164646',
  Aqua: '7bb5e75e-e53a-4f6e-93d8-b39e9af3b7f4',
  Purple: '56314860-d7be-4751-a021-5a4b85d13b20',
  Green: '5c4446cf-d1ce-483b-a596-97a5332e984c',
  Brown: '80ff1a40-6cb0-4888-a600-94ee7ea5fe06',
  Orange: '915f180f-c8e9-4a5b-8dd8-ca09c4ab4631',
  White: '999c4d03-7f30-4674-9b72-93af3da93b09',
  Pink: 'a13da99e-cd21-483b-b683-1e98a6cc7949',
  Red: 'c3383a1d-438f-4204-b79e-7ab7c883f91c',
  Yellow: 'd9ca970b-a67b-44ff-a5db-0e8891a472c2',
  Gray: 'e058de9c-80b4-4335-958a-60ce04968570',
  Beige: 'e6733cf0-1740-43a6-a2cf-f946895f97c1',
};

const catsBuffer = fs.readFileSync('./cats.json');

const catsJson = JSON.parse(catsBuffer.toString());

const parsePossibleArray = (value, from) => {
  if (Array.isArray(value)) {
    return value.map((key) => from[key]);
  }

  return [from[value]];
};

const cats = catsJson.map((cat) => {
  return {
    ...cat,
    personality_id: personalities[cat.personality_id],
    species_id: species[cat.species_id],
    color_ids: parsePossibleArray(cat.color_ids, colors),
    style_ids: parsePossibleArray(cat.style_ids, styles),
  };
});

fs.writeFile('./parsedCats.json', JSON.stringify(cats), (err) => {
  console.log(err);
});
