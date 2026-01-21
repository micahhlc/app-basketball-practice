personal note

The iOS native build is ready. Here's what was set up:
  Added npm scripts:
  - npm run ios:sync - Build web assets and sync to iOS
  - npm run ios:open - Open project in Xcode
  - npm run ios:run - Run on connected device/simulator

To install on your iPhone: 
  1. Open Xcode: 
  npm run ios:open
  2. In Xcode: 
    - Select your iPhone from the device dropdown (top toolbar)
    - Connect your iPhone via USB
    - Sign in with your Apple ID: Xcode → Settings → Accounts → Add Apple ID
    - Select target "App" → Signing & Capabilities → Team → Select your account
  3. On your iPhone: 
    - Go to Settings → General → VPN & Device Management
    - Trust your developer certificate
  4. Build and run: 
    - Press ▶️ (Play button) or Cmd+R in Xcode
  After making code changes: 
  npm run ios:sync   # Rebuilds and syncs to iOS
  Then rebuild in Xcode.                           