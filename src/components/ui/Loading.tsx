import React from "react";
import { Shield, Binary } from "lucide-react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Terminal Window */}
        <div className="w-80 bg-black border border-green-400/20 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-green-400/10 border-b border-green-400/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-green-400">kloresec.exe</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-sm font-mono">$</span>
              <span className="text-sm font-mono animate-pulse">
                loading_security_modules...
              </span>
            </div>

            {/* Loading Animation */}
            <div className="flex items-center justify-center py-4">
              <Shield className="w-12 h-12 text-green-400 animate-pulse" />
              <Binary className="w-12 h-12 text-green-400 animate-pulse delay-100" />
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-green-400/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 animate-loading-bar"></div>
            </div>

            {/* Status Messages */}
            <div className="space-y-1">
              <p className="text-xs font-mono text-green-400/60 animate-blink">
                {">"} Initializing security protocols...
              </p>
              <p className="text-xs font-mono text-green-400/60 animate-blink delay-150">
                {">"} Scanning network...
              </p>
              <p className="text-xs font-mono text-green-400/60 animate-blink delay-300">
                {">"} Establishing secure connection...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
