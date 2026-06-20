<template>
  <LensLogo v-if="productId === 'lens'" :size="size" />
  <MoleculesLogo v-else-if="productId === 'molecules'" :size="size" />
  <PrismLogo v-else-if="productId === 'prism'" :size="size" />
  <IrisLogo v-else-if="productId === 'iris'" :size="size" />
  <SpectraLogo v-else-if="productId === 'spectra'" :size="size" />
  <VolumeLogo v-else-if="productId === 'volume'" :size="size" />
  <PersonaLogo v-else-if="productId === 'persona'" :size="size" />
  <INsightLogo v-else-if="productId === 'insight'" :size="size" />
  <GenericProductLogo
    v-else
    :short-name="shortName || productId"
    :family="family"
    :size="size"
  />
</template>

<script setup>
import LensLogo from './LensLogo.vue'
import MoleculesLogo from './MoleculesLogo.vue'
import PrismLogo from './PrismLogo.vue'
import IrisLogo from './IrisLogo.vue'
import SpectraLogo from './SpectraLogo.vue'
import VolumeLogo from './VolumeLogo.vue'
import PersonaLogo from './PersonaLogo.vue'
import INsightLogo from './INsightLogo.vue'
import GenericProductLogo from './GenericProductLogo.vue'

defineProps({
  productId: { type: String, required: true },
  shortName: { type: String, default: '' },
  family: { type: String, default: 'foundation' },
  label: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['icon', 'sm', 'md', 'lg'].includes(v),
  },
})
</script>
