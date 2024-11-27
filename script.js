const platform = navigator.platform;
document.getElementById('platform').textContent = platform;

function detectABI(platform) {
    const lowerPlat = platform.toLowerCase();

    // ARM Architecture
    if (lowerPlat.includes('arm') || lowerPlat.includes('aarch')) {
        // Check ARMv8 variants (64-bit)
        if (lowerPlat.includes('v8') || lowerPlat.includes('64') || lowerPlat.includes('aarch64')) {
            return 'arm64-v8a (64-bit ARM)';
        }
        // Check ARMv7 variants
        if (lowerPlat.includes('v7')) {
            return 'armeabi-v7a (32-bit ARM)';
        }
        // Check ARMv6 variants
        if (lowerPlat.includes('v6')) {
            return 'armeabi-v6 (32-bit ARM)';
        }
        // Generic ARM
        return 'armeabi (32-bit ARM)';
    }

    // x86 Architecture
    if (lowerPlat.includes('x86') || lowerPlat.includes('amd') ||
        /i[3-6]86/.test(lowerPlat)) {
        // Check 64-bit variants
        if (lowerPlat.includes('64') || lowerPlat.includes('x64')) {
            return 'x86_64 (64-bit x86)';
        }
        // 32-bit x86
        return 'x86 (32-bit x86)';
    }

    return 'Unknown ABI';
}

document.getElementById('abi').textContent = detectABI(platform);