data.push({
  title: 'アイドル衣装：ソーダスプラッシュ',
  model: 'ChatGPT',
  cat: 'キャラクター',
  tags: ['アイドル衣装', '夏', 'ソーダ', 'ライブ'],
  klass: 'sky',
  image: 'assets/idol-soda-splash.png',
  desc: 'ラムネソーダのきらめきと透明感をまとった、夏のプレミアムアイドル衣装用プロンプト。',
  prompt: String.raw`Use the attached character illustration as the highest-priority character identity reference.

Preserve the character's recognizable identity, facial features, face shape, hairstyle, hair color, eye color, body proportions, age impression, and distinctive character traits. Do not redesign or replace the character. The attached character determines WHO is performing; the costume design below determines WHAT the character is wearing.

Transform the character into a dazzling summer idol performing live on a spectacular concert stage.

━━━━━━━━━━━━━━━━━━━━
[COSTUME DESIGN — SODA SPLASH]
━━━━━━━━━━━━━━━━━━━━

Dress the character in an elaborate premium summer idol stage costume inspired by sparkling blue ramune soda, fizzy carbonation, chilled glass, transparent bubbles, sparkling ice, and refreshing summer sunlight.

The costume is predominantly aqua blue, icy cyan, translucent white, and soft lavender, with subtle hints of fresh lime green.

A cute fitted aqua-blue bustier-style idol top with an elegant off-shoulder design, beautifully exposing the shoulders and collarbones while remaining refined and stage-appropriate.

Delicate translucent organza ruffles frame the neckline and shoulders. Large layered frills extend from the upper arms, creating a dramatic silhouette that moves beautifully during dancing.

A small sparkling bow decorates the center of the bust, containing a luminous round blue crystal resembling a ramune marble.

The top features subtle elegant cutout details around the waist, revealing a tasteful amount of midriff and emphasizing the summer aesthetic.

The costume has intricate pearl chains, tiny crystal droplets, transparent beads, delicate lace, and sparkling gemstone decorations.

A dramatic oversized translucent aqua-blue bow is attached at the waist, centered around a large spherical crystal resembling a sparkling soda bubble or ramune marble.

The skirt is a short, energetic idol mini-skirt composed of many overlapping layers of translucent white, aqua-blue, and pale lavender tulle, chiffon, and organza.

The skirt has abundant fluffy ruffles and asymmetric translucent layers that flare dramatically outward with movement.

The layered skirt should visually resemble sparkling soda foam and bubbles bursting upward from a glass.

Fine pearl chains and tiny crystal droplets hang between the skirt layers and catch the stage lights.

Add subtle bubble-shaped crystal ornaments throughout the costume.

The costume should feel luxurious and highly designed rather than looking like casual clothing or swimwear.

Matching cute idol accessories include translucent aqua ribbons, pearl bracelets, crystal ornaments, delicate garters, and elegant aqua-and-white idol shoes with large translucent bows and sparkling gemstone centers.

Every part of the costume should have a polished premium anime-idol fashion appearance.

The materials should include glossy satin, translucent organza, sheer chiffon, sparkling tulle, delicate lace, polished crystals, transparent glass-like ornaments, and luminous pearls.

The costume must strongly communicate:
sparkling ramune soda,
fizzy carbonation,
cool summer air,
transparent glass,
ice-cold freshness,
floating bubbles,
sunlight reflecting through blue liquid,
and magical summer idol energy.

Avoid literal soda bottles, logos, product branding, or printed soda graphics. Express the soda concept entirely through color, transparency, bubbles, crystals, ribbons, frills, and material design.
━━━━━━━━━━━━━━━━━━━━
[LIVE PERFORMANCE]
━━━━━━━━━━━━━━━━━━━━

The character is actively performing on a huge spectacular idol concert stage.

Create an extremely dynamic singing-and-dancing pose with strong body movement and energetic choreography.

The character is caught in the middle of an exciting performance, with one arm extended dramatically toward the audience while the other hand holds a sparkling microphone.

The torso, hips, arms, and legs form a beautiful dynamic diagonal composition.

The oversized waist ribbon, translucent skirt layers, frills, hair ribbons, and loose hair strands are dramatically flowing through the air as if captured during a powerful dance movement.

The costume must clearly show motion and should never appear stiff or mannequin-like.

Use a dynamic low-angle three-quarter camera perspective that makes the idol feel larger-than-life and emphasizes the flowing costume.

Strong foreshortening, dramatic perspective, energetic composition, expressive movement, natural anatomy, elegant gesture, and cinematic framing.

The character should appear to be singing passionately toward the audience with a bright, joyful, charismatic idol expression.

━━━━━━━━━━━━━━━━━━━━
[CONCERT STAGE]
━━━━━━━━━━━━━━━━━━━━

A spectacular summer-themed idol concert stage filled with thousands of glowing audience light sticks.

A massive luminous stage surrounds the character with sparkling aqua-blue and white lighting.

Use intense cinematic spotlights, volumetric beams, rim lighting, glowing stage lights, lens sparkle, subtle bloom, and dramatic backlighting.

Hundreds of translucent soap-like bubbles and sparkling particles float through the air around the idol.

Some bubbles catch the stage lights and create tiny rainbow-like optical reflections.

Large LED screens in the background display abstract aqua-blue waves, sparkling liquid, bubbles, and luminous summer patterns.

Do not let the background overpower the character.

The character and costume must remain the clear visual focal point.

━━━━━━━━━━━━━━━━━━━━
[VISUAL EFFECTS]
━━━━━━━━━━━━━━━━━━━━

Add dynamic sparkling particles, floating bubbles, tiny droplets of light, translucent fragments, glittering reflections, and subtle light trails following the character's movement.

Create a sense of fizzy carbonation exploding around the performer without obscuring the character.

Use bright aqua-blue rim lighting around the silhouette.

Allow the translucent costume materials to catch and transmit the stage lights beautifully.

Make the crystals, pearls, bubbles, and satin surfaces produce sharp, beautiful highlights.

The overall atmosphere should feel like an unforgettable summer idol live performance at the peak moment of the song.

━━━━━━━━━━━━━━━━━━━━
[IMAGE QUALITY]
━━━━━━━━━━━━━━━━━━━━

masterpiece, best quality, ultra-detailed, premium anime illustration, high-end Japanese idol artwork, polished 2.5D anime style, crystal-clear rendering, extremely detailed costume, intricate fabric construction, beautiful translucent materials, detailed frills, realistic fabric folds, sparkling crystals, cinematic lighting, dramatic stage lighting, volumetric lighting, beautiful rim light, dynamic composition, strong sense of motion, expressive pose, elegant anatomy, sharp focus on character, clean rendering, vibrant summer colors, sophisticated color grading, luminous atmosphere, spectacular concert photography aesthetic, official anime key visual quality`
});

cats = ['すべて', ...new Set(data.map(item => item.cat))];
renderFilters();
render();
