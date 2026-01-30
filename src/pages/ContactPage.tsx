import {Send} from 'lucide-react';

const ContactPage = () => (
  <div
    className="w-full h-full flex flex-col items-center justify-center min-h-[50vh] border-4 border-[#372661] rounded-xl bg-[#1c1233]/50 p-4 md:p-8">
    <div className="text-4xl mb-4 animate-pulse">📡</div>
    <h2 className="text-xl md:text-2xl text-purple-400 mb-2 tracking-widest uppercase text-center">
      Comms Link
    </h2>
    <p className="text-[10px] md:text-xs text-purple-300/70 font-mono text-center mb-8">
      // ENCRYPTED CHANNEL OPEN<br/>
      // WAITING FOR INPUT...
    </p>

    <form
      action="mailto:alamarquez90@gmail.com"
      method="post"
      encType="text/plain"
      className="w-full max-w-md flex flex-col gap-4"
    >
      <div className="group">
        <label className="block text-[10px] text-cyan-400 mb-1 tracking-wider uppercase font-bold">
          {`> Identity`}
        </label>
        <input
          type="text"
          name="name"
          placeholder="ENTER_NAME"
          className="w-full bg-[#110a1f] border-2 border-[#372661] text-green-400 p-3 rounded-md focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] font-mono text-sm placeholder-purple-900/50 transition-all"
        />
      </div>

      <div className="group">
        <label className="block text-[10px] text-cyan-400 mb-1 tracking-wider uppercase font-bold">
          {`> Return Frequency (Email)`}
        </label>
        <input
          type="email"
          name="email"
          placeholder="ENTER_EMAIL"
          className="w-full bg-[#110a1f] border-2 border-[#372661] text-green-400 p-3 rounded-md focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] font-mono text-sm placeholder-purple-900/50 transition-all"
        />
      </div>

      <div className="group">
        <label className="block text-[10px] text-cyan-400 mb-1 tracking-wider uppercase font-bold">
          {`> Transmission Data`}
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="TYPE_MESSAGE..."
          className="w-full bg-[#110a1f] border-2 border-[#372661] text-green-400 p-3 rounded-md focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] font-mono text-sm placeholder-purple-900/50 transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 group relative overflow-hidden bg-[#2d1b4e] hover:bg-[#4c3b73] text-cyan-300 font-bold py-3 px-6 rounded border-2 border-cyan-500/50 hover:border-cyan-400 transition-all uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
      >
        <span>Initialize Upload</span>
        <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
      </button>
    </form>
  </div>
);

export default ContactPage;