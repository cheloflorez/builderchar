// utils/shareBuild.js
import LZString from 'lz-string';

/**
 * Comprime y genera una URL compartible para un build
 * @param {Object} buildData - Datos del build (nombre, clase, etc)
 * @param {Object} characterData - Datos del personaje (stats, skills, etc)
 * @returns {string} URL completa para compartir
 */
export const shareBuild = (buildData, characterData) => {
  try {
    // Crear objeto optimizado pero COMPLETO del personaje
    const shareData = {
      // Info básica del build
      name: buildData.name,
      class: buildData.class,
      character: buildData.character,
      level: characterData.level,
      
      // 🔧 DATOS COMPLETOS del personaje para evitar errores
      characterData: {
        ...characterData, // Incluir TODO del personaje original
        // Asegurar que class esté presente
        class: characterData.class || [buildData.class],
      },
      
      // Metadata
      sharedAt: new Date().toISOString(),
      version: '1.0' // Para compatibilidad futura
    };

    // Comprimir usando LZ-String (algoritmo optimizado para URLs)
    const compressed = LZString.compressToEncodedURIComponent(
      JSON.stringify(shareData)
    );

    // Generar URL compartible
    const shareUrl = `${window.location.origin}/build/shared?data=${compressed}`;
    
    console.log('✅ Build compressed:', {
      original: JSON.stringify(shareData).length,
      compressed: compressed.length,
      ratio: ((compressed.length / JSON.stringify(shareData).length) * 100).toFixed(2) + '%'
    });

    return shareUrl;
  } catch (error) {
    console.error('❌ Error generating share URL:', error);
    throw new Error('Failed to generate share link. Build might be too large.');
  }
};

/**
 * Carga un build compartido desde los parámetros de la URL
 * @returns {Object|null} Datos del build compartido o null si no existe
 */
export const loadSharedBuild = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');

    if (!data) {
      return null;
    }

    // Descomprimir los datos
    const decompressed = LZString.decompressFromEncodedURIComponent(data);
    
    if (!decompressed) {
      throw new Error('Invalid or corrupted share link');
    }

    const buildData = JSON.parse(decompressed);

    // Validación básica
    if (!buildData.name || !buildData.class || !buildData.characterData) {
      throw new Error('Incomplete build data');
    }

    console.log('✅ Shared build loaded:', buildData.name);

    return buildData;
  } catch (error) {
    console.error('❌ Error loading shared build:', error);
    return null;
  }
};

/**
 * Verifica si la URL actual contiene un build compartido
 * @returns {boolean}
 */
export const isSharedBuildUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.has('data');
};

/**
 * Copia texto al clipboard con fallback para navegadores antiguos
 * @param {string} text - Texto a copiar
 * @returns {Promise<boolean>}
 */
export const copyToClipboard = async (text) => {
  try {
    // Método moderno (preferido)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback para navegadores antiguos
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    
    return success;
  } catch (error) {
    console.error('❌ Error copying to clipboard:', error);
    return false;
  }
};

/**
 * Genera un nombre descriptivo para un build compartido
 * @param {Object} buildData
 * @returns {string}
 */
export const generateSharedBuildName = (buildData) => {
  const timestamp = new Date(buildData.sharedAt || Date.now())
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  return `${buildData.name} (Shared ${timestamp})`;
};