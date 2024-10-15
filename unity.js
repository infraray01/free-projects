document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'img/unity template/1.png', title: 'FPS Framework', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/fps-framework-217379', link2: 'https://shrinkme.dev/a9yrdea' },
        { src: 'img/unity template/2.png', title: 'Easy Build System - Modular Building System', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/easy-build-system-modular-building-system-45394', link2: 'https://shrinkme.dev/17xjZxV' },
        { src: 'img/unity template/3.jpg', title: 'Modular Multiplayer FPS Engine Mirror MMFPSE', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/modular-multiplayer-fps-engine-photon-2-mmfpse-88064', link2: 'https://shrinkme.dev/RaDENDvq' },
        { src: 'img/unity template/4.png', title: 'Flight Kit: Arcade Flight Sim', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/flight-kit-arcade-flight-sim-55700', link2: 'https://shrinkme.dev/f2OuzX' },
        { src: 'img/unity template/5.jpg', title: 'Corgi Engine – 2D + 2.5D Platformer', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/corgi-engine-2d-2-5d-platformer-26617', link2: 'https://shrinkme.dev/xz74z3' },
        { src: 'img/unity template/6.png', title: 'Ultimate Selector', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/ultimate-selector-55454', link2: 'https://shrinkme.dev/pCkHxITF' },
        { src: 'img/unity template/7.jpg', title: 'Kong Hero – Platformer Complete Game Template', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/kong-hero-platformer-complete-game-template-66709', link2: 'https://shrinkme.dev/hpqAItT' },
        { src: 'img/unity template/8.jpg', title: 'RetroBlit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/retroblit-102064', link2: 'https://shrinkme.dev/YRTExmh' },
        { src: 'img/unity template/9.jpg', title: 'Puzzle Kit 3 in 1', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/puzzle-kit-3-in-1-79197', link2: 'https://shrinkme.dev/E9BSB' },
        { src: 'img/unity template/10.jpg', title: '2.5D Shmup Template', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/2-5d-shmup-template-91729', link2: 'https://shrinkme.dev/wHad0' },
        { src: 'img/unity template/11.png', title: 'Feed the Monster', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/feeding-the-monster-97892', link2: 'https://shrinke.me/FQzvE' },
        { src: 'img/unity template/12.jpg', title: 'DarkTree FPS', tags: ['templates'], link1: '', link2: 'https://shrinke.me/4N00INe' },
        { src: 'img/unity template/13.jpg', title: 'Intense TPS', tags: ['templates'], link1: '', link2: 'https://shrinke.me/jrKPgkI' },
        { src: 'img/unity template/14.png', title: 'Third Person Motion Controller', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/third-person-motion-controller-15672', link2: 'https://shrinke.me/qIctD1XD' },
        { src: 'img/unity template/15.png', title: 'Darts Starter Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/3d/props/dart-kit-18135', link2: 'https://shrinke.me/dmY9' },
        { src: 'img/unity template/16.jpg', title: 'Words Mobile Ready Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/words-mobile-ready-game-57214', link2: 'https://shrinke.me/6AeY' },
        { src: 'img/unity template/17.png', title: 'Wall Ball', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/3d/characters/zigzag-endless-runner-complete-game-template-54018', link2: 'https://shrinke.me/sucYTMET' },
        { src: 'img/unity template/18.png', title: 'Drench Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/drench-game-10156', link2: 'https://shrinke.me/pPhSpGgw' },
        { src: 'img/unity template/19.png', title: 'Equilibrium VR Winter', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/equilibrium-vr-winter-77183', link2: 'https://shrinke.me/wdgjFAod' },
        { src: 'img/unity template/20.jpg', title: 'UFE Bundle', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/ufe-1-bundle-24884', link2: 'https://shrinke.me/B0uuG4Zd' },
        { src: 'img/unity template/21.png', title: 'Clicker-Idle Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/clicker-idle-game-template-134752', link2: 'https://shrinke.me/IYduQjF8' },
        { src: 'img/unity template/22.jpg', title: 'Bighead Run Run', tags: ['templates'], link1: '', link2: 'https://shrinke.me/EZuvBc' },
        { src: 'img/unity template/23.jpg', title: 'LOCKS+ Full Pack', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/locks-full-pack-128408', link2: 'https://shrinke.me/SAZ36H' },
        { src: 'img/unity template/24.png', title: 'PRO Military Customizable FPS Character', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/pro-military-customizable-fps-character-125288', link2: 'https://shrinke.me/F7nT' },
        { src: 'img/unity template/25.png', title: 'Drawing Coloring Extra Edition', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/drawing-coloring-extra-edition-43865', link2: 'https://shrinke.me/9L010yd' },
        { src: 'img/unity template/26.png', title: 'English Tracing Book', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/english-tracing-book-75049', link2: 'https://shrinke.me/Gxqml' },
        { src: 'img/unity template/27.png', title: 'Turn Based Battle System', tags: ['templates'], link1: '', link2: 'https://shrinke.me/GxF3' },
        { src: 'img/unity template/28.jpg', title: 'Urban Traffic System', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/urban-traffic-system-89133', link2: 'https://shrinke.me/12JKcEyG' },
        { src: 'img/unity template/29.png', title: 'Dungeonizer – Easy Random Dungeon Generator', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/dungeonizer-easy-random-dungeon-generator-22162', link2: 'https://shrinke.me/u6vOvd6w' },
        { src: 'img/unity template/30.png', title: 'Jelly Cube Game Starter Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/jelly-cube-game-starter-kit-42756', link2: 'https://shrinke.me/3MSYO' },
        { src: 'img/unity template/31.png', title: 'Ultimate Match-Three', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/jellymobile-s-candy-fairy-tales-match-3-engine-206162', link2: 'https://shrinke.me/sY4h' },
        { src: 'img/unity template/32.jpg', title: 'FPS Essentials Kit', tags: ['templates'], link1: '', link2: 'https://shrinke.me/WiXgyGH' },
        { src: 'img/unity template/33.png', title: 'Custom Slots framework', tags: ['templates'], link1: 'https://www.cgioo.com/forum.php?mod=viewthread&tid=12224=', link2: 'https://shrinke.me/MPB4ueUv' },
        { src: 'img/unity template/34.jpg', title: 'plyGame v3.0.7', tags: ['templates'], link1: '', link2: 'https://shrinke.me/hXKb' },
        { src: 'img/unity template/35.png', title: 'Crazy Traffic Racing (Ready to Launch)', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/crazy-traffic-racing-ready-to-launch-119850', link2: 'https://shrinke.me/UyvENAe' },
        { src: 'img/unity template/36.png', title: 'Steam VR Playmaker', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/steam-vr-playmaker-toolkit-63425', link2: 'https://shrinke.me/hj9O' },
        { src: 'img/unity template/37.png', title: 'aa – Complete Game Template', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/aa-complete-game-template-with-1200-levels-47913', link2: 'https://shrinke.me/SKHke' },
        { src: 'img/unity template/38.png', title: 'The Division kit', tags: ['templates'], link1: 'https://gamejolt.com/games/THEDIVISIONKIT/256343', link2: 'https://shrinke.me/fn5kdV3' },
        { src: 'img/unity template/39.jpg', title: 'Keeree Car Constructor', tags: ['templates'], link1: 'https://keereedev.wordpress.com/keeree-car-constructor/', link2: 'https://shrinke.me/30HWk' },
        { src: 'img/unity template/40.jpg', title: 'Minicar Race Creator', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/minicar-race-creator-105901', link2: 'https://shrinke.me/0Q1W' },
        { src: 'img/unity template/41.jpg', title: 'Frenzy Farming time management', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/frenzy-farming-time-management-game-kit-78329', link2: 'https://shrinke.me/I3cb' },
        { src: 'img/unity template/42.jpg', title: 'Block Puzzle – Brick Classic', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/block-puzzle-brick-classic-106690', link2: 'https://shrinke.me/8K4LCtn' },
        { src: 'img/unity template/43.png', title: 'Tile Grid Level Loader', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/tile-grid-level-loader-129319', link2: 'https://shrinke.me/qljYR1' },
        { src: 'img/unity template/44.jpg', title: 'Ultimate Runner Engine', tags: ['templates'], link1: 'https://forum.unity.com/threads/ultimate-runner-engine-complete-runner-game-template-mobile-ready.445352/', link2: 'https://shrinke.me/YS11GP' },
        { src: 'img/unity template/45.jpg', title: '4Type Puzzle Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/4type-puzzlegame-19896', link2: 'https://shrinke.me/gG6H' },
        { src: 'img/unity template/46.png', title: 'Candy Match 3 Kit v1.1.1', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/candy-match-3-kit-111083', link2: 'https://shrinke.me/54hugw' },
        { src: 'img/unity template/47.png', title: 'UnitZ UNET', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/unitz-unet-33494', link2: 'https://shrinke.me/b3fyrxd3' },
        { src: 'img/unity template/48.png', title: 'Unblock puzzle with AI', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/unblock-puzzle-with-ai-solution-algorithm-21642', link2: 'https://shrinke.me/btWYpu' },
        { src: 'img/unity template/49.png', title: 'Word Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/word-game-68408', link2: 'https://shrinke.me/OuEbQBKR' },
        { src: 'img/unity template/50.png', title: 'Stop The Wheel', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/stop-the-wheel-complete-game-template-ready-for-release-59385', link2: 'https://shrinke.me/UHyKeO' },
        { src: 'img/unity template/51.png', title: 'Turn-Based ToolKit TBTK', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/turn-based-toolkit-3-tbtk-3-138465', link2: 'https://shrinke.me/71Dgnc2' },
        { src: 'img/unity template/52.jpg', title: '6 Games Match-3 Puzzle', tags: ['templates'], link1: '', link2: 'https://shrinke.me/VfgJKTq1' },
        { src: 'img/unity template/53.png', title: 'Impossible Circle – Round The Balls', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/impossible-circle-round-the-ball-60571', link2: 'https://shrinke.me/x2nQK' },
        { src: 'img/unity template/54.png', title: 'Hexa Puzzle Blocks', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/hexa-puzzle-block-85474', link2: 'https://shrinke.me/lmX0' },
        { src: 'img/unity template/55.png', title: 'MFPS 2.0: Multiplayer FPS', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/mfps-2-0-multiplayer-fps-101171', link2: 'https://shrinke.me/lin7Hzrd' },
        { src: 'img/unity template/63.png', title: 'RPG Editor: ORK Framework', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/rpg-editor-ork-framework-2-125912', link2: 'https://shrinke.me/MnXrKAtO' },
        { src: 'img/unity template/64.png', title: 'Ace Bike Stunts', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/ace-bike-stunts-88565', link2: 'https://shrinke.me/H5p1jzd2' },
        { src: 'img/unity template/65.png', title: 'Wavy Trip', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/wavy-trip-73917', link2: 'https://shrinke.me/KNJBKT' },
        { src: 'img/unity template/66.webp', title: 'Blackjack Pro!', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/blackjack-pro-playmaker-29967', link2: 'https://shrinke.me/7tikr' },
        { src: 'img/unity template/67.jpg', title: 'Car Parking', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/car-parking-3-106716', link2: 'https://shrinke.me/kCvbDNMS' },
        { src: 'img/unity template/68.jpg', title: '2D Mountain Bicycle', tags: ['templates'], link1: 'https://www.sellmyapp.com/downloads/mountain-bike-rider-unity-template/', link2: 'https://shrinke.me/AhWJ8y' },
        { src: 'img/unity template/69.webp', title: 'Ace Air Fighter', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/ace-air-fighter-56893', link2: 'https://shrinke.me/3cH8Ocl' },
        { src: 'img/unity template/70.webp', title: 'Card Game Starter Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/card-game-starter-kit-6193', link2: 'https://shrinke.me/8FAXkV' },
        { src: 'img/unity template/71.webp', title: 'Knife Up', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/knife-up-111217', link2: 'https://shrinke.me/kxiFEtE' },
        { src: 'img/unity template/72.jpg', title: 'Shooter IO with Battle Royale game mode', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/shooter-io-104584', link2: 'https://shrinke.me/wds3S' },
        //list1
        { src: 'img/unity template/73.webp', title: 'Tanks Multiplayer (MLAPI, Photon, Mirror)', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/tutorials/tanks-multiplayer-netcode-photon-69172', link2: 'https://shrinke.me/4SVn1q' },
        { src: 'img/unity template/74.webp', title: 'MFP: Multiplayer First Person', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/mfp-multiplayer-first-person-38333', link2: 'https://shrinke.me/6nl4AB' },
        { src: 'img/unity template/75.webp', title: 'Road & Traffic System', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/road-traffic-system-21626', link2: 'https://shrinke.me/MXm4' },
        { src: 'img/unity template/76.webp', title: 'J Connect Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/j-connect-kit-118731', link2: 'https://shrinke.me/AbufJ5A' },
        { src: 'img/unity template/77.webp', title: '[Hyper-Casual Game] Color Jump', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/hyper-casual-game-color-jump-127024', link2: 'https://shrinke.me/AbufJ5A' },
        { src: 'img/unity template/78.webp', title: 'Multiple Keypad System', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/multiple-keypad-system-167867', link2: 'https://shrinke.me/aAmMHnA' },
        { src: 'img/unity template/79.webp', title: 'MMORPG KIT (2D/3D/Survival)', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/mmorpg-kit-2d-3d-survival-110188', link2: 'https://shrinke.me/QNwKu' },
        { src: 'img/unity template/80.webp', title: 'Core GameKit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/core-gamekit-6640', link2: 'https://shrinke.me/sQPM' },
        { src: 'img/unity template/81.webp', title: 'RayFire for Unity', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/rayfire-for-unity-148690', link2: 'https://shrinke.me/gRXd' },
        { src: 'img/unity template/82.webp', title: 'uMMORPG Remastered', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/ummorpg-remastered-mmorpg-engine-159401', link2: 'https://shrinke.me/vbQGs67' },
        { src: 'img/unity template/83.jpg', title: 'PUN Multiplayer Add-On', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/pun-multiplayer-add-on-for-opsive-character-controllers-legacy-148555', link2: 'https://shrinke.me/vATF9' },
        { src: 'img/unity template/84.webp', title: 'Quest Machine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/quest-machine-39834', link2: 'https://shrinke.me/9fHUote' },
        { src: 'img/unity template/85.webp', title: '(STP) Survival Template PRO', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/stp-survival-template-pro-207954', link2: 'https://shrinke.me/wP897y' },
        { src: 'img/unity template/86.webp', title: 'Examine System V1', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/examine-system-v1-169389', link2: 'https://shrinke.me/bxNzH4q' },
        { src: 'img/unity template/87.jpg', title: 'Matrix Shader System', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/matrix-shader-system-179003', link2: 'https://shrinke.me/v6cFyQY' },
        { src: 'img/unity template/88.webp', title: 'Soccer Head-Ball Championship Game Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/soccer-head-ball-championship-game-kit-95077', link2: 'https://shrinke.me/gfdg' },
        { src: 'img/unity template/89.webp', title: 'Cyber Effects - RTS Pack', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/cyber-effects-rts-pack-198653', link2: 'https://shrinke.me/bRB6YD' },
        { src: 'img/unity template/90.webp', title: 'MK - Modern Suits Slot Asset', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/mk-modern-suits-slot-asset-115588', link2: 'https://shrinke.me/D2lzehq' },
        { src: 'img/unity template/91.webp', title: 'Customer Support - Make own FAQ', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/customer-support-make-own-faq-104164', link2: 'https://shrinke.me/JXrgcaHQ' },
        { src: 'img/unity template/92.webp', title: 'Highroad Engine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/highroad-engine-73798', link2: 'https://shrinke.me/2agEAAO' },
        { src: 'img/unity template/93.jpg', title: 'Car Crash Traffic Racer - 2D Car Hyper Casual Game', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/packs/car-crash-traffic-racer-2d-car-hyper-casual-game-194093', link2: 'https://shrinke.me/zQx8gzy' },
        { src: 'img/unity template/94.webp', title: 'Top Down Engine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/topdown-engine-89636', link2: 'https://shrinke.me/inrs73c' },
        { src: 'img/unity template/95.webp', title: '2D+3D Infinite Runner Engine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/2d-3d-infinite-runner-engine-51328', link2: 'https://shrinke.me/RtYoeRQE' },
        { src: 'img/unity template/96.webp', title: 'Survival Engine - Crafting, Building, Farming', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/survival-engine-crafting-building-farming-178160', link2: 'https://shrinke.me/kzka' },
        { src: 'img/unity template/97.webp', title: 'Game Creator', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/tools/game-toolkits/game-creator-89443', link2: 'https://shrinke.me/RNIs6PF0' },
        { src: 'img/unity template/98.webp', title: 'Game Kit Controller', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/game-kit-controller-shooter-melee-creator-3d-2-5d-40995', link2: 'https://shrinke.me/0vpohohO' },
        { src: 'img/unity template/99.webp', title: 'Match 3 Jelly Garden Kit', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/match-3-jelly-garden-kit-43260', link2: 'https://shrinke.me/ww9GW' },
        { src: 'img/unity template/100.jpg', title: 'uRPG - RPG Engine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/urpg-rpg-engine-95016', link2: 'https://shrinke.me/s52b' },
        { src: 'img/unity template/101.webp', title: 'Match 3 Juice Fresh Complete Project + EDITOR', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/match-3-juice-fresh-complete-project-editor-58990', link2: 'https://shrinke.me/5CNzRzNW' },
        { src: 'img/unity template/102.webp', title: 'Real Blood', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/real-blood-158913', link2: 'https://shrinke.me/SmEy0' },
        { src: 'img/unity template/103.webp', title: 'Aurora FPS Engine', tags: ['templates'], link1: 'https://assetstore.unity.com/packages/templates/systems/aurora-fps-engine-165863', link2: 'https://shrinke.me/J5gqw' },
        
        //Environments         
        { "src": "img/unity environment/1.png", "title": "Dark Cyber City", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/dark-city2-cyberpunk-pack-133817", "link2": "https://shrinke.me/vyja8T61" },
        { "src": "img/unity environment/2.jpg", "title": "Small City", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/props/exterior/small-city-3-81813", "link2": "https://shrinke.me/atqL" },
        { "src": "img/unity environment/3.jpg", "title": "FurniturePack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/furniturepack-210826", "link2": "https://shrinke.me/xL3ln" },
        { "src": "img/unity environment/4.jpg", "title": "Modern Building Pack", "tags": ["environment"], "link1": "", "link2": "https://shrinke.me/A8ax2" },
        { "src": "img/unity environment/5.jpg", "title": "Sci-Fi Heavy Station Kit base AUGMENTED", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-heavy-station-kit-base-augmented-90235", "link2": "https://shrinke.me/yxH9Nxy" },
        { "src": "img/unity environment/6.jpg", "title": "Top-Down Scifi modular Environment", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/top-down-scifi-modular-environment-100524", "link2": "https://shrinke.me/Mb58YwMv" },
        { "src": "img/unity environment/7.jpg", "title": "RockyDesert", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/landscapes/rockydesert-209196", "link2": "https://shrinke.me/JOqC" },
        { "src": "img/unity environment/8.png", "title": "Top-Down Sci-Fi", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/top-down-sci-fi-18938", "link2": "https://shrinke.me/mCMgakkD" },
        { "src": "img/unity environment/9.jpg", "title": "Stylized Sci-Fi Builder Set", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/stylized-sci-fi-builder-set-44917", "link2": "https://shrinke.me/34mOoU8" },
        { "src": "img/unity environment/10.png", "title": "Stylized Sci-Fi Tunnel", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/stylized-sci-fi-tunnel-124417", "link2": "https://shrinke.me/9xOEcznJ" },
        { "src": "img/unity environment/11.jpg", "title": "SF Corridors-Holograms", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sf-corridors-holograms-108801", "link2": "https://shrinke.me/XksP" },
        { "src": "img/unity environment/12.jpg", "title": "Sci-Fi Tunnel Pack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-tunnel-pack-196499", "link2": "https://shrinke.me/3eY8X" },
        { "src": "img/unity environment/13.jpg", "title": "SciFi Space Modular", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/scifi-space-modular-level-184567", "link2": "https://shrinke.me/nAHKu" },
        { "src": "img/unity environment/14.jpg", "title": "Sci-Fi Modular Base", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi-modular-base-186219", "link2": "https://shrinke.me/GE11e307" },
        { "src": "img/unity environment/15.jpg", "title": "Sci-Fi Laboratory Pack 2", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-laboratory-pack-2-35688", "link2": "https://shrinke.me/65a9e" },
        { "src": "img/unity environment/16.png", "title": "Sci-Fi Interior Pack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-interior-pack-68130", "link2": "https://shrinke.me/BH2V4" },
        { "src": "img/unity environment/17.png", "title": "Sci-Fi Facility Sector 43", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-facility-sector-43-175132", "link2": "https://shrinke.me/qoak" },
        { "src": "img/unity environment/18.jpg", "title": "Abandoned Psychiatric Hospital", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/urban/abandoned-psychiatric-hospital-188270", "link2": "https://shrinke.me/ARnZAG" },
        { "src": "img/unity environment/19.jpg", "title": "Sci-Fi Facility", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-facility-116916", "link2": "https://shrinke.me/Ixer0" },
        { "src": "img/unity environment/20.jpg", "title": "Medieval Furniture and Props", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/historic/medieval-furniture-and-props-24055", "link2": "https://terabox.com/s/1JTUcbfaXpVeUCrpQM6NgYQ" },   
        { "src": "img/unity environment/21.png", "title": "Fantasy Adventure Environment", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/fantasy/fantasy-adventure-environment-70354", "link2": "https://shrinke.me/lXeElZ6" },
        { "src": "img/unity environment/22.png", "title": "Winter Environment - Nature Pack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/winter-environment-nature-pack-142750", "link2": "https://shrinke.me/iIOFy" },
        { "src": "img/unity environment/23.png", "title": "Advanced Foliage Pack 2.0", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/advanced-foliage-pack-2-0-103151", "link2": "https://shrinke.me/e70ew7Y8" },
        { "src": "img/unity environment/24.png", "title": "Low Poly Military Base", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/low-poly-military-base-156845", "link2": "https://shrinke.me/Ja8a" },
        { "src": "img/unity environment/25.jpg", "title": "Toon Fantasy Nature", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/landscapes/toon-fantasy-nature-215197", "link2": "https://shrinke.me/L1Vq" },
        { "src": "img/unity environment/26.jpg", "title": "Ancient Empire - Synty POLYGON - Stylized low poly art assets", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/historic/ancient-empire-synty-polygon-stylized-low-poly-art-assets-224020", "link2": "https://shrinke.me/fzpvsPSD" },
        { "src": "img/unity environment/27.jpg", "title": "FurniturePack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/furniturepack-210826", "link2": "https://shrinke.me/iKCcSK" },
        { "src": "img/unity environment/28.jpg", "title": "SurrounDead - Encampment", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/surroundead-encampment-177573", "link2": "https://shrinke.me/VjI8S" },
        { "src": "img/unity environment/29.jpg", "title": "Medieval Village Environment", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/fantasy/medieval-village-environment-121867", "link2": "https://shrinke.me/pfFJMgdr" },
        { "src": "img/unity environment/30.jpg", "title": "Modern Building Pack2", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/urban/modern-building-pack2-212980", "link2": "https://shrinke.me/MP35U" },
        { "src": "img/unity environment/31.png", "title": "Sci-Fi Heavy Station Kit base AUGMENTED", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-heavy-station-kit-base-augmented-90235", "link2": "https://shrinke.me/LlvQwm" },
        { "src": "img/unity environment/32.jpg", "title": "RockyDesert", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/landscapes/rockydesert-209196", "link2": "https://shrinke.me/0TDbgkX9" },
        { "src": "img/unity environment/33.jpg", "title": "Abandoned Psychiatric Hospital", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/urban/abandoned-psychiatric-hospital-188270", "link2": "https://shrinke.me/XhnSrHP" },
        { "src": "img/unity environment/34.jpg", "title": "Medieval Furniture and Props", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/historic/medieval-furniture-and-props-24055", "link2": "https://shrinke.me/mbjmZsdY" },
        { "src": "img/unity environment/35.jpg", "title": "Sci-Fi Facility", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-facility-116916", "link2": "https://shrinke.me/yD9uQeY" },
        { "src": "img/unity environment/36.jpg", "title": "Sci-Fi Apartment", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-apartment-85211", "link2": "https://shrinke.me/E6Ho" },
        { "src": "img/unity environment/37.png", "title": "Sci Fi Level Construction Pack 1", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-level-construction-pack-1-12365", "link2": "https://shrinke.me/xh05fHa" },
        { "src": "img/unity environment/38.png", "title": "Lowpoly Style Ultra Pack", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/landscapes/lowpoly-style-ultra-pack-108275", "link2": "https://shrinke.me/V3LrUHa" },
        { "src": "img/unity environment/39.png", "title": "POLYGON Western - Low Poly 3D Art by Synty", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/historic/polygon-western-low-poly-3d-art-by-synty-112212", "link2": "https://shrinke.me/MLqXVUaZ" },
        { "src": "img/unity environment/40.jpg", "title": "Sci Fi level", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-level-77242", "link2": "https://shrinke.me/gx3UfZc" },
        { "src": "img/unity environment/41.jpg", "title": "Retro American Garage", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/retro-american-garage-187647", "link2": "https://shrinke.me/ZcMrj" },
        { "src": "img/unity environment/42.png", "title": "Lowpoly Pack: Modular Sci-Fi Station", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/lowpoly-pack-modular-sci-fi-station-165353", "link2": "https://shrinke.me/1YRtwc" },
        { "src": "img/unity environment/43.jpg", "title": "Modular Sci-Fi Residential Sector B", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/sci-fi/modular-sci-fi-residential-sector-b-110071", "link2": "https://shrinke.me/8delrw" },
        { "src": "img/unity environment/44.png", "title": "POLYGON Samurai - Low Poly 3D Art by Synty", "tags": ["environment"], "link1": "https://assetstore.unity.com/packages/3d/environments/polygon-samurai-low-poly-3d-art-by-synty-89551", "link2": "https://shrinke.me/yR2C5Z02" },
        {"src":"img/unity environment/45.png","title":"Lowpoly Pack : Modular Sci-Fi Station","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/sci-fi/lowpoly-pack-modular-sci-fi-station-165353","link2":"https://shrinke.me/1YRtwc"},
        {"src":"img/unity environment/46.png","title":"Village Interiors Kit","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/fantasy/village-interiors-kit-17033","link2":"https://shrinke.me/9W4a"},
        {"src":"img/unity environment/47.png","title":"Fighting Game Level - Training Stage","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/fighting-game-level-training-stage-159608","link2":"https://shrinke.me/asFSrRd"},
        {"src":"img/unity environment/48.png","title":"Cyber Punk VHS neon factory kitbash","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/sci-fi/cyber-punk-vhs-neon-factory-kitbash-139450","link2":"https://shrinke.me/iWRQ"},
        {"src":"img/unity environment/49.png","title":"cyberpunk - Cyber Room (HDRP + BIP)","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/sci-fi/cyberpunk-cyber-room-hdrp-bip-169139","link2":"https://shrinke.me/SDeSDfV"},
        {"src":"img/unity environment/50.png","title":"Medieval World Creation Kit","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/fantasy/medieval-world-creation-kit-36555","link2":"https://shrinke.me/o1IDF28"},
        {"src":"img/unity environment/51.png","title":"Medieval Mega Pack Volume 2","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/fantasy/medieval-mega-pack-volume-2-208408","link2":"https://shrinkme.ink/4AK3liRo"},
        {"src":"img/unity environment/52.png","title":"Arcade Room Interior","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/arcade-room-interior-165950","link2":"https://shrinke.me/7Vl7d"},
        {"src":"img/unity environment/53.png","title":"Simple Town - Cartoon Assets","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/urban/simple-town-cartoon-assets-43500","link2":"https://shrinke.me/ksom2g"},
        {"src":"img/unity environment/54.png","title":"Urban Decal+ Pack","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/urban/urban-decal-pack-18001","link2":"https://shrinke.me/U4mlWMCx"},
        {"src":"img/unity environment/55.png","title":"3D Scifi Kit Vol 2","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/sci-fi/3d-scifi-kit-vol-2-56794","link2":"https://shrinke.me/ENwBzL"},
        {"src":"img/unity environment/56.png","title":"Street Decals Vol. 1","tags":["environment"],"link1":"https://assetstore.unity.com/packages/3d/environments/roadways/street-decals-vol-1-203305","link2":"https://shrinke.me/8bDQws6h"}
        
        
    ];


    const imagesContainer = document.getElementById('images-container');
    const loadMoreButton = document.getElementById('load-more');
    const searchInput = document.getElementById('searchInput');
    const totalResults = document.getElementById('total-results'); // New line

    let currentImageIndex = 0;
    let currentFilterTag = 'all';

    function loadImages(count, filterTag, searchQuery = '') {
        let filteredImages = images;

        if (filterTag !== 'all') {
            filteredImages = filteredImages.filter(img => img.tags.includes(filterTag));
        }

        if (searchQuery) {
            filteredImages = filteredImages.filter(img => img.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        totalResults.textContent = `Total search found: ${filteredImages.length}`; // New line

        if (currentImageIndex === 0) {
            loadMoreButton.style.display = 'block';
        }

        if (currentImageIndex >= filteredImages.length) {
            loadMoreButton.style.display = 'none';
            return;
        }

        for (let i = 0; i < count; i++) {
            if (currentImageIndex >= filteredImages.length) {
                loadMoreButton.style.display = 'none';
                break;
            }

            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const { src, title, link1, link2, tags } = filteredImages[currentImageIndex];

            imageItem.innerHTML = `
                <img src="${src}" alt="${title}">
                <p><a href="${link1}" target="_blank">${title}</a></p>
                <p class="tags">Tags: ${tags.join(', ')}</p>
                <a href="${link1}" class="custom-link-button" target="_blank">Official Link</a>
                <a href="${link2}" class="custom-link-button" target="_blank">Download Link</a>
            `;

            imagesContainer.appendChild(imageItem);
            currentImageIndex++;

            setTimeout(() => {
                imageItem.classList.add('visible');
            }, 100);
        }

        if (currentImageIndex >= filteredImages.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    function handleFilterClick(event) {
        const filterTag = event.target.getAttribute('data-tag');
        document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        currentFilterTag = filterTag;
        currentImageIndex = 0;
        imagesContainer.innerHTML = '';

        loadImages(6, currentFilterTag);
    }

    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    loadMoreButton.addEventListener('click', () => {
        loadImages(6, currentFilterTag, searchInput.value);
    });

    searchInput.addEventListener('input', () => {
        currentImageIndex = 0;
        imagesContainer.innerHTML = '';
        loadImages(6, currentFilterTag, searchInput.value);
    });

    loadImages(6, currentFilterTag);

    const menuToggle = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});
