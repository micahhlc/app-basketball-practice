import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', {
  state: () => ({
    currentSession: null,
    sessions: [],
  }),

  getters: {
    hasActiveSession: (state) => state.currentSession !== null,
    totalSessions: (state) => state.sessions.length,
  },

  actions: {
    // Load data from localStorage
    loadFromLocalStorage() {
      const storedSession = localStorage.getItem('currentSession');
      const storedSessions = localStorage.getItem('sessions');

      if (storedSession) {
        this.currentSession = JSON.parse(storedSession);
      }
      if (storedSessions) {
        const parsed = JSON.parse(storedSessions);
        // Handle legacy object format: convert to array
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          this.sessions = Object.values(parsed);
        } else {
          this.sessions = parsed || [];
        }
      }
    },

    // Save current session to state and localStorage
    saveCurrentSession(session) {
      this.currentSession = session;
      localStorage.setItem('currentSession', JSON.stringify(session));
    },

    // Clear current session
    clearCurrentSession() {
      this.currentSession = null;
      localStorage.removeItem('currentSession');
    },

    // Add a completed session to history
    addSession(session) {
      this.sessions.push(session);
      localStorage.setItem('sessions', JSON.stringify(this.sessions));
    },

    // Update sessions array (for bulk operations)
    updateSessions(sessions) {
      this.sessions = sessions;
      localStorage.setItem('sessions', JSON.stringify(this.sessions));
    },
  },
});
