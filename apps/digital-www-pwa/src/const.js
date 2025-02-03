import EventIcon from '@mui/icons-material/Event';
import PaletteIcon from '@mui/icons-material/Palette';
import FestivalIcon from '@mui/icons-material/Festival';
import RadioIcon from '@mui/icons-material/Radio';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FavoriteIcon from '@mui/icons-material/Favorite';

import LocalBarIcon from '@mui/icons-material/LocalBar';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BrushIcon from '@mui/icons-material/Brush';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export const MAX_DESCRIPTION_LENGTH = 200;

export const NAVIGATION_LINKS = [
  {
    title: 'Events',
    path: '/events',
    icon: EventIcon,
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: FavoriteIcon,
  },
  {
    title: 'Art',
    path: '/art',
    icon: PaletteIcon,
  },
  {
    title: 'Camps',
    path: '/camps',
    icon: FestivalIcon,
  },
  {
    title: 'Radio SGC',
    path: '/radio',
    icon: RadioIcon,
  },
  {
    title: 'Art Cars',
    path: '/vehicles',
    icon: DriveEtaIcon,
  },
];

export const EVENT_DAYS = [
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const EVENT_TIMEZONE = 'America/Detroit';

export const TAGS = [
  {
    slug: 'alcohol',
    name: 'Alcohol',
    icon: LocalBarIcon,
  },
  {
    slug: 'crafting',
    name: 'Crafting',
    icon: BrushIcon,
  },
  {
    slug: 'fire_art',
    name: 'Fire Art',
    icon: LocalFireDepartmentIcon,
  },
  {
    slug: 'food',
    name: 'Food',
    icon: LocalDiningIcon,
  },
  {
    slug: 'red_light',
    name: 'Red Light',
    icon: LightbulbIcon,
  },
  {
    slug: 'sober',
    name: 'Sober',
    icon: NoDrinksIcon,
  },
  {
    slug: 'spectacle',
    name: 'Spectacle',
    icon: TheaterComedyIcon,
  },
];
